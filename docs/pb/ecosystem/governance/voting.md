# Governance

Provenance Blockchain provides a governance system through which stakeholders can participate in network decisions.
Proposals can be simple statements or initiatives to change network configuration, perform software upgrades, and more.

Voting is the process of assigning active stake to one of four different states for a proposal: `yes`, `no`, `abstain`,
or
`veto`. Each actively staked Hash corresponds to one vote. The governance voting process is broken down into three
stages:
Deposit, Voting, and Tallying results.

## Deposit Stage

Anyone can submit a proposal to the Provenance network for stake holders to review. Proposals must meet the minimum
required deposit of 1,000 HASH to proceed to the voting stage. A proposal has up to 48 hours to collect enough deposits
to become eligible for voting. If the proposal does not achieve quorum or the proposal is vetoed, the deposits are
forfeit.

## Voting Period

During the 48-hour voting period, validators and delegators may place their votes of Yes, No, Abstain, or No with Veto.
When a validator votes, the total of their delegations is applied as weight to their choice. Their individual delegators
can accept the vote of the validator they have staked against or explicitly vote their intention, which will take
precedence over the validator's vote.

## Tallying Results

At the end of the voting period, the cast votes are tallied according to the following thresholds to determine if a
proposal passes or not:

- **Quorum**: At least **33.4%** of the active state in the network must vote on a proposal for the vote to be
  considered valid. If quorum is not reached, the proposal fails.
- **Threshold**: Of the votes cast, at least **50%** must be Yes votes for the proposal to pass.
- **No with Veto**: If more than **33.4%** of the votes are cast as a No with Veto, The measure fails, regardless of if over
  50% of the votes were Yes. This last option allows a minority stakeholder to prevent a measure from passing even if
  the majority endorses it.

If the majority of a proposal vote exceeds quorum and is not vetoed, the proposal is passed at the end of the voting
period. Certain proposals such as software upgrades have their effects applied at this time.

## Governance Configuration

Current governance configuration parameters can be viewed on the 
[Explorer](https://explorer.provenance.io/network/params) (see the `Gov` configuration section).

