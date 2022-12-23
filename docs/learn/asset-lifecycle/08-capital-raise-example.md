import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Example: Private Fund Capital Raise

A blockchain-native fund is one in which the issuance of fund interests, including capital commitments, 
contributions, distributions, and any future transfer of those interests, are recorded on a blockchain. 
The record of the fund interest on the blockchain is designed to be a legally enforceable contract.

Blockchain allows for certainty of assets on both sides of a trade (e.g. digital fund interest in a seller account, 
tokenized deposits in a buyer account) and a protocol that matches that trade, facilitates value transfer, 
and creates an immutable record of the transaction.

Create trust in a real-time, shared source of
truth across multiple parties in a market or transaction

Cap table managed on chain, provides real time and contemporaneous knowledge of ownership, reduces reconciliation time/errors

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-roles.png)

## Fund Onboarding

### GP Configures Raise Contract

A raise contract issues investment coin to associated subscription contracts. This contract manages the entire 
blockchain lifecycle of raising capital for various kinds of digital assets. An Issuer may choose to leverage 
a single contract to manage raising capital for an extended period of time, or to utilize multiple contracts 
that represent discrete phases of funding.

Each fund's capital raise process is governed by a unique instance of the Provenance Blockchain [**Capital Raise smart contract**](https://github.com/FigureTechnologies/marketpalace-raise-contract).
The smart contract executable is loaded onto the blockchain through a [governance proposal](/docs/pb/ecosystem/governance), which requires a vote from
the delegator community. Once the vote is passed, the contract's [WASM](/docs/pb/modules/provwasm-smart-contracts) binary is stored on the blockchain. Each time a fund
wishes to use the contract for a capital raise, a new instance of the smart contract is instantiated by the GP with a
configuration specific for the fund.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-instantiate.png)

The Raise smart contract takes into account investor eligibility criteria, which can be validated against the wallet and account signing transactions.

These are things like the target raise amount, contract admin address, as well as any eligibility requirements
(required tags) that need to be applied to investors (digital identity). Part of the instantiation of this contract
is to create two separate denominations on Provenance Blockchain that are used to hold the various states of
the fundraise by the Raise contract and eventually by the investors themselves: commitment coin and investment coin.

Investment coin is the digital asset that will ultimately represent the final state of investment into a particular
offering, but the beauty of this contract design is that it also accounts for fund raises that decouple commitment
of capital from investment of capital. The point here is to track the entire lifecycle, and many assets are more
complex than a simple record of ownership.

commitment coin: An asset that represents 1:1 capital obligation from a subscription.
investment coin: An asset that represents 1:1 capital investment in a raise.

Investment coin is the digital asset that will ultimately represent the final state of investment into a particular 
offering, but the beauty of this contract design is that it also accounts for fund raises that decouple commitment of 
capital from investment of capital. The point here is to track the entire lifecycle, and many assets are more complex 
than a simple record of ownership.

<Tabs>
  <TabItem value="1" label="Example Contract Configuration" default>

| Parameter | Value | Description |
| ---- | ---- | ---- |
| **acceptable_accreditations** | funds506c.passport.pb | Indicates LP required accreditations (506c qualified investor) |
| **subscription_code_id** | [12](https://explorer.provenance.io/code/12) | Indicates which smart contract to use for LP subscriptions |
| **capital_denom** | [cfigureomni](https://explorer.provenance.io/asset/cfigureomni) (USD cents) | Indicates which settlement token will be accepted as capital by the GP |
| **capital_per_share** | 1,000 | Indicates price per share of fund in capital_denom currency (USD $10) |

  </TabItem>
  <TabItem value="2" label="Contract Details">

- Capital Raise smart contract [source code](https://github.com/FigureTechnologies/marketpalace-raise-contract)
- Capital Raise smart contract [governance proposal](https://explorer.provenance.io/proposal/41)
- Capital Raise smart contract [wasm code](https://explorer.provenance.io/code/22)
----
  </TabItem>
<TabItem value="3" label="Example Details">

- Example [contract instantiation tx](https://explorer.provenance.io/tx/8C3253C39A3A952486AF35A7C5263838A074C2A07102BDFE2D1BDE2AE2E819A1/5877851)
- Example [instantiated contract](https://explorer.provenance.io/contract/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p) with configuration (see History tab)
- Example [commitment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.commitment)
- Example [investment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment)
----
</TabItem>

</Tabs>





## Subscriptions 

### LP Proposes Subscription


The instantiated subscription has no utility until accepted by the GP.

A subscription contract issues commitment coin to the associated raise contract. The subscription smart contract 
manages the blockchain lifecycle of an Investor's interaction with a raise.

pair this stage of the investment with verification of eligibility attributes, as the next stage of the contract 
execution will validate these attributes against the raise parameters, preventing addresses that do not meet the 
eligibility criteria of the offering from proceeding at the core raise level.

In order to accommodate all types of raises, a capital call structure is built into the subscription contract, 
but it is totally up to the issuer to determine the frequency and terms of these calls.

The subscription contract functions like a smart wallet escrowing the various coins, but also helps to orchestrate 
the exchange of commitment, investment, and payment coins. This is hardly the last stage of this journey, however, 
as various capital activities will occur over the life of this investment. Redemptions and distributions are 
issued as easily as a coin transfer with the entire state being tracked and managed by the contract.



![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-propose.png)


https://explorer.provenance.io/contract/pb1fsr88cf0edxjfejhhhz90uqp7634ydvggea0n9thz74mcxn2mrxqahnuys

### GP Accepts Subscription 

The Issuer key used to instantiate a raise, may accept proposed subscription(s). On execution, the subscription 
contract will configure a commitment marker with a supply matching the commitment amount. Also, the raise SC will 
issue the subscription investment coin and in parity the subscription SC will issue the raise commitment coin.

Upon acceptance of a subscription to the raise contract, commitment coin is minted (or previously minted on raise 
creation in some cases) and transferred to the subscription smart contract (smart wallet) for the investor. 
This commitment coin is representative of “uncalled capital” in a fund structure and immediately holds value 
for the raise.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-accept.png)

https://explorer.provenance.io/tx/D5921879CA11B3197D0E0D0298D51FC7DD4EF17EBAE24CBB872D024899F76093/5877856


## Capital Calls

### GP Issues Capital Call

Capital calls notify Investors using Provenance Event Stream

https://explorer.provenance.io/tx/ED4FCD20ABE8315B5BBC1A4CB3033DF1400C3A7BCB9B596FBD454DC953EE61AC/5877857

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-issue-cap-call.png)

### LP Deposits Fiat

When a GP makes a capital call, the investor in a digital fund will have multiple options to fund the capital call 
(wire to wallet, use stablecoin balance on hand, or a crypto loan). If they choose to use a crypto loan, the 
investor will choose a collateral type (we currently support BTC and ETH) and LTV. We currently offer a 25% LTV 
and a 50% LTV option, with lower rates available the more collateral provided. Collateral is housed with our 
custody partner Anchorage. When collateral is received, the investor wallet is funded with stablecoin, the 
capital call is fulfilled, and the value transfer occurs with the LP receiving the digital fund interest and the 
Fund receiving the funding. The loan has margin triggers as LTV increases and the investor can choose to post more 
collateral, pay down a position of the loan, or choose to have the custodian sell collateral to bring LTV back to target.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-capital-deposit.png)

### Close Capital Call

T+0 settlement removes friction, eliminates intermediaries, reconciliations
and manual data verifications

https://explorer.provenance.io/tx/F78C16E04CA35D5D45346BF1209E3B3D6AB836605C8F212433BC4D69074879B7/5877858

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-close-cap-call.png)


complete asset exchange aka "cash out"

https://explorer.provenance.io/tx/7A021B17114AF3F5473BE5DF0EE0580544A402A566DF5EA118FC15D64672FF86/8144885

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-cap-table.png)


## Distributions

A transaction used to pay back capital to a subscription with no returned investment.

https://explorer.provenance.io/tx/68F824AEC9ABE771D04DB69EF1405248911E767C70035EC73510F36FD82F70D0/6615090
https://explorer.provenance.io/tx/BB1115AB896CD87F02D2534415FF7E50F27417FA8F18D82B20C6B57961D4BEA8/5949730

## Secondary

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

## References

Figure DFS 

https://figure.tech/docs/marketplace/

