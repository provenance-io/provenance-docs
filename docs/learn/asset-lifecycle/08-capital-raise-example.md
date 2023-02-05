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

Fund distributions can also be executed through the smart contracts for increased efficiency,
security, and transparency. The smart contract can automate the distribution process, reducing the risk of 
errors and fraud and eliminating the need for intermediaries. Recording transactions and distribution details on a public, decentralized ledger, provides a clear and tamper-proof 
record of the fund's activities and distributions.


https://explorer.provenance.io/tx/68F824AEC9ABE771D04DB69EF1405248911E767C70035EC73510F36FD82F70D0/6615090
https://explorer.provenance.io/tx/BB1115AB896CD87F02D2534415FF7E50F27417FA8F18D82B20C6B57961D4BEA8/5949730

### Secondary

https://figure.tech/docs/marketplace/Smart%20Contracts/Secondary/Intro/

Tokenization allows entirely new ways to structure, distribute, lend against and trade private funds, lowering barriers and increasing participation.

Materially lower administrative expenses (improve net performance) and time to market with a single source of truth.

Broad Digital Ecosystem Benefits
Native digital fund interests as collateral to capital calls and for loans/leverage; Other digital assets to fund capital calls

rictionless buyer movement across investments by leveraging universal passporting. Secondary trades self-clear and settle instantaneously using stablecoin (USDF).

Assets held digitally can be made available for secondary trading on Figure ATS during Sponsor-defined liquidity 
windows, improving the liquidity profile of illiquid funds through bilateral secondary trading of fund interests 
with real-time settlement while significantly reducing the high search and transaction costs of current secondary 
markets. A digital fund allows investors to fund capital calls using crypto assets as collateral, without the 
need to redeem to fiat. Lastly, investors may have an enhanced ability to use digital fund interests as collateral 
for loans given the certainty of ownership provided by blockchain and enhanced liquidity characteristics due to 
secondary trading windows.

One of the largest benefits to a digitally native fund is easy access to secondary liquidity through an exchange. 
Most long duration private funds (private equity, VC, real estate, etc.) have either no or very limited secondary 
markets. Transactions are heavily brokered, can be by appointment only, and involve a lot of paperwork and long 
settlement times. Because our investment has already been fully represented as a digitally native token on blockchain, 
the process has been drastically simplified. To open up secondary liquidity for a digitally-native blockchain fund, 
we really just need to create bids/asks against an exchange contract.


