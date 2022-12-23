import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Example: Private Fund Capital Raise


![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-roles.png)

## Fund Onboarding

### GP Configures Raise Contract

Each fund's capital raise process is governed by a unique instance of the Provenance Blockchain [**Capital Raise smart contract**](https://github.com/FigureTechnologies/marketpalace-raise-contract).
The smart contract executable is loaded onto the blockchain through a [governance proposal](/docs/pb/ecosystem/governance), which requires a vote from
the delegator community. Once the vote is passed, the contract's [WASM](/docs/pb/modules/provwasm-smart-contracts) binary is stored on the blockchain. Each time a fund
wishes to use the contract for a capital raise, a new instance of the smart contract is instantiated by the GP with a
configuration specific for the fund.

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-instantiate.png)


<Tabs>
  <TabItem value="1" label="Example Contract Configuration" default>

| Parameter | Value | Description |
| ---- | ---- | ---- |
| **acceptable_accreditations** | funds506c.passport.pb | Indicates LP required accreditations (506c qualified investor) |
| **subscription_code_id** | [12](https://explorer.provenance.io/code/12) | Indicates which smart contract to use for LP subscriptions |
| **capital_denom** | [cfigureomni](https://explorer.provenance.io/asset/cfigureomni) (USD cents) | Indicates which currency (coin) will be accepted as capital by the GP |
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
- Example [instantiated contract address](https://explorer.provenance.io/contract/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p) with configuration
- Example [commitment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.commitment)
- Example [investment coin Marker](https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment)
----
</TabItem>

</Tabs>




## Subscriptions 

### LP Proposes Subscription

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-propose.png)


https://explorer.provenance.io/contract/pb1fsr88cf0edxjfejhhhz90uqp7634ydvggea0n9thz74mcxn2mrxqahnuys

### GP Accepts Subscription 

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-accept.png)

https://explorer.provenance.io/tx/D5921879CA11B3197D0E0D0298D51FC7DD4EF17EBAE24CBB872D024899F76093/5877856


## Capital Calls

### GP Issues Capital Call

https://explorer.provenance.io/tx/ED4FCD20ABE8315B5BBC1A4CB3033DF1400C3A7BCB9B596FBD454DC953EE61AC/5877857

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-issue-cap-call.png)

### LP Deposits Fiat

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-capital-deposit.png)

### Close Capital Call

https://explorer.provenance.io/tx/F78C16E04CA35D5D45346BF1209E3B3D6AB836605C8F212433BC4D69074879B7/5877858

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-close-cap-call.png)


complete asset exchange aka "cash out"

https://explorer.provenance.io/tx/7A021B17114AF3F5473BE5DF0EE0580544A402A566DF5EA118FC15D64672FF86/8144885

![asset lifecycle](/img/learn/asset-lifecycle/funds-lifecycle-cap-table.png)


## Distributions

https://explorer.provenance.io/tx/68F824AEC9ABE771D04DB69EF1405248911E767C70035EC73510F36FD82F70D0/6615090
https://explorer.provenance.io/tx/BB1115AB896CD87F02D2534415FF7E50F27417FA8F18D82B20C6B57961D4BEA8/5949730



