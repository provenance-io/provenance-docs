import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Example: Raising Capital

A blockchain-native fund is one in which the issuance of fund interests, including capital commitments, 
contributions, distributions, and any future transfer of those interests, are recorded on a blockchain. 
The record of the fund interest on the blockchain is designed to be a legally enforceable contract.

A cap table managed on-chain provides a real time record of ownership and eliminates the need for reconciliation. 
Additionally, blockchain allows for certainty of assets on both sides of a trade (e.g. digital fund interest in a seller account, 
tokenized deposits in a buyer account) and a protocol that matches that trade, facilitates value transfer, 
and creates an immutable record of the transaction.

In this example, we'll show how a capital raise process for a private fund can be performed on Provenance through smart 
contract administration. The fund raise process is administered primarily by a "Capital Raise" smart contract, which
is instantiated and configured for this particular fund. Each fund on Provenance Blockchain has their own individual copy
of the raise contract specific to its own unique processes. Subscriptions to the fund by investors are also governed by 
smart contract, with a personalized "Subscription" smart contract instantiated for each investor.


![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-roles.png)

Throughout this example, the "GP" (General Partner) refers to the fund issuer or fund manager, while "LP" (Limited
Partner) represents the multiple individuals or entities subscribing (committing capital) to the fund. At the end of the 
process, the cap table for the fund will be established as an Investment [Marker](/docs/pb/modules/marker-module)
with the token representing shares in the fund.

## Fund Onboarding

### GP Configures Raise Contract

Each fund's capital raise process is governed by a unique instance of the Provenance Blockchain [**Capital Raise smart contract**](https://github.com/FigureTechnologies/marketpalace-raise-contract).
The smart contract executable is loaded onto the blockchain through a [governance proposal](/docs/pb/ecosystem/governance), which requires a vote from
the delegator community. Once the vote is passed, the contract's [WASM](/docs/pb/modules/provwasm-smart-contracts) binary is stored on the blockchain. Each time a fund
wishes to use the contract for a capital raise, a new instance of the smart contract is instantiated by the GP with a
configuration specific for the fund.

The Raise smart contract is used to manage investments in a fundraising campaign. It takes into account investor 
eligibility criteria and target raise amount, and is administered by a specific address. The contract creates two 
digital assets on the Provenance Blockchain: commitment coin and investment coin. Commitment coin represents a capital 
obligation from a subscription, while investment coin represents the final state of investment in the fund.
The contract is designed to handle fundraising campaigns where capital commitment and investment are 
decoupled, and can track the entire lifecycle of an asset.


![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-instantiate.png)

**Example Contract Configuration:**

| Parameter | Value | Description |
| ---- | ---- | ---- |
| **acceptable_accreditations** | funds506c.passport.pb | Indicates LP required accreditations (506c qualified investor) |
| **subscription_code_id** | [12](https://explorer.provenance.io/code/12) | Indicates which smart contract to use for LP subscriptions |
| **capital_denom** | [cfigureomni](https://explorer.provenance.io/asset/cfigureomni) (USD cents) | Indicates which settlement token will be accepted as capital by the GP |
| **capital_per_share** | 1,000 | Indicates price per share of fund in capital_denom currency (USD $10) |

<br/>

<Tabs>
  <TabItem value="2" label="Contract Details">

- Capital Raise smart contract [source code](https://github.com/FigureTechnologies/marketpalace-raise-contract)
- Capital Raise smart contract [governance proposal](https://explorer.provenance.io/proposal/41)
- Capital Raise smart contract [wasm code](https://explorer.provenance.io/code/22)
----
  </TabItem>
<TabItem value="3" label="Example Transactions">

- Example [contract instantiation tx](https://explorer.provenance.io/tx/8C3253C39A3A952486AF35A7C5263838A074C2A07102BDFE2D1BDE2AE2E819A1/5877851)
- Example [instantiated contract](https://explorer.provenance.io/contract/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p) with configuration (see History tab)
- Example [commitment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.commitment)
- Example [investment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment)
----
</TabItem>

</Tabs>




## Subscriptions 

### LP Proposes Subscription


The subscription smart contract is used in the process of investing in a fund. 
It manages the investor's interaction with the raise and holds the commitment coin issued by the associated raise 
contract. The subscription contract also verifies the investor's eligibility to participate in the raise and acts as 
a smart wallet, facilitating the exchange of various types of coins (commitment, investment, and payment). 
The contract also tracks and manages redemptions and distributions that may occur over the course of the investment.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-propose.png)



<Tabs>
  <TabItem value="2" label="Contract Details">

- Raise contract [propose subscription](https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L94) entry point
- Raise contract [instantiate subscription contract](https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/subscribe.rs#L36)
- Subscription smart contract [source code](https://github.com/FigureTechnologies/marketpalace-subscription-contract)
- Subscription smart contract [governance proposal](https://explorer.provenance.io/proposal/42)
- Subscription smart contract [wasm code](https://explorer.provenance.io/code/23)
----
  </TabItem>
<TabItem value="3" label="Example Transactions">

 - Example [Subscription Contract instantiated](https://explorer.provenance.io/contract/pb1fsr88cf0edxjfejhhhz90uqp7634ydvggea0n9thz74mcxn2mrxqahnuys) for investor
----
</TabItem>
</Tabs>


### GP Accepts Subscription 

The issuer of the raise has the ability to accept proposed subscriptions through the raise contract. When a subscription is 
accepted, commitment coin is minted and transferred to the subscription smart contract (smart wallet) for the investor.
The commitment coin represents uncalled capital in the fund structure. It has immediate value for the raise.


![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-accept.png)

<Tabs>
  <TabItem value="2" label="Contract Details">

- Raise contract [accept submission](https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L100) entry point
----
  </TabItem>
<TabItem value="3" label="Example Transactions">

- Example of [GP accepting subscription](https://explorer.provenance.io/tx/D5921879CA11B3197D0E0D0298D51FC7DD4EF17EBAE24CBB872D024899F76093/5877856)
----
</TabItem>
</Tabs>



## Capital Calls

### GP Issues Capital Call

Capital calls notify Investors using Provenance Event Stream


![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-issue-cap-call.png)

<Tabs>
  <TabItem value="2" label="Contract Details">

- Raise contract [issue capital call](https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L103) entry point
----
  </TabItem>
<TabItem value="3" label="Example Transactions">

- Example of [GP issuing capital call](https://explorer.provenance.io/tx/ED4FCD20ABE8315B5BBC1A4CB3033DF1400C3A7BCB9B596FBD454DC953EE61AC/5877857)
----
</TabItem>
</Tabs>

### LP Deposits Fiat

When a GP makes a capital call, the investor in a digital fund will fund the capital call using USD represented on chain 
by a token representing the fiat deposit at an Omnibus Bank. (The stablecoin token is referred to as a "tokenized deposit" or
"omnicoin"). 

Once the omnicoin is deposited in the investor's "smart wallet" (subscription contract), the 
capital call is fulfilled.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-capital-deposit.png)

### Close Capital Call

Upon receiving sufficient funds from limited partners to meet the requirements of a capital call, the fund manager may 
proceed with closing the call and assigning the investment tokens. This is the final stage of the subscription process 
and involves a T-0 bilateral exchange between the Capital Raise and Subscription smart contracts, whereby the capital 
in the form of a USD tokenized deposit or omnicoin is exchanged for shares of the tokenized asset. This exchange takes 
place in a single, atomic blockchain transaction, which streamlines the process by removing intermediaries and the need 
for manual reconciliation and data verification.


![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-close-cap-call.png)

<Tabs>
  <TabItem value="2" label="Contract Details">

- Raise contract [close capital call](https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L109) entry point

----
  </TabItem>
<TabItem value="3" label="Example Transactions">

- Example [GP closes capital call](https://explorer.provenance.io/tx/7A021B17114AF3F5473BE5DF0EE0580544A402A566DF5EA118FC15D64672FF86/8144885)
----
</TabItem>
</Tabs>

## Final Cap Table

The [investment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment) 
now represents the final cap table for the tokenized asset.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-cap-table.png)


## Fund Asset Lifecycle


### Distributions
The Capital Raise and Subscription smart contracts on Provenance Blockchain provide a secure and efficient way 
to execute  fund distributions. The smart 
contract acts as a self-executing agreement between the fund and its investors, where the terms of the agreement 
are encoded into the contract. The contract automatically executes the distribution of funds according to the set 
conditions without the need for intermediaries. This not only reduces the risk of errors and fraud but also saves 
time and costs associated with manual processes.

Furthermore, the decentralized nature of blockchain provides a high level of transparency and security to the 
distribution process. Transactions and distribution details are recorded on a public ledger, providing a clear 
and tamper-proof record of the fund's activities and distributions. This allows investors to monitor their investments 
and track the fund's performance in real-time. The use of smart contracts in private fund distributions not only 
improves operational efficiency but also enhances trust and confidence among investors.


<Tabs>
  <TabItem value="2" label="Contract Details">

- Raise contract [distribution](https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L103) entry point

----
  </TabItem>
<TabItem value="3" label="Example Transactions">

- Example [distribution](https://explorer.provenance.io/tx/68F824AEC9ABE771D04DB69EF1405248911E767C70035EC73510F36FD82F70D0/6615090)
----
</TabItem>
</Tabs>



### Secondary Trading

Tokenization offers innovative approaches to managing, distributing, and trading private funds, reducing barriers, and 
increasing accessibility. This results in lower administrative expenses and faster time to market through a 
immutable source of truth. Secondary trading through bilateral exchange with T-0 settlement enables two parties 
to instantly settle a transaction without any delay. This type of settlement reduces the risk of counterparty d
efault and increases efficiency by allowing for immediate transfer of funds and securities, providing a 
significant advantage over traditional T+n settlement systems.

Benefits of the Provenance Blockchain ecosystem include the ability to use digital fund interests as collateral for capital 
calls and loans, as well as the use of other digital assets for funding purposes. The use of an Account Attribute-based 
passporting system allows for seamless movement of buyers across investments, with secondary trades self-clearing 
and settling instantly using a digital money.

Assets can be made available for secondary trading through a regulated alternative trading system (ATS) on Provenance Blockchain, 
improving the liquidity of previously illiquid funds and reducing search and transaction costs. Additionally, 
digital funds allow investors to fund capital calls using tokenized assets as collateral and provide greater 
opportunities to use fund interests as collateral for loans due to the increased certainty of ownership and 
enhanced liquidity offered by secondary trading windows.

Overall, Provenance Blockchain funds provide easy access to secondary liquidity through exchange-based trading. The process of 
accessing secondary liquidity is significantly streamlined through fund
digitization and representation on Provenance Blockchain. Creating bids and asks 
against an exchange contract is all that is needed to open up secondary liquidity for a digital fund.



