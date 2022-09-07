# Query Command

:::info
See [Using Provenanced](./) for basic information about the `provenanced` command.
:::

:::info
This section uses the `provenanced` application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the [Installing Provenance Blockchain section](../running-a-node/) before continuing with this section.
:::

## Command

Querying the Provenance Blockchain is one of the simplest use cases for `provenanced`.

```text
~$ provenanced query --help
Querying subcommands

Usage:
  provenanced query [flags]
  provenanced query [command]

Aliases:
  query, q

Available Commands:
  account                  Query for account by address
  attribute                Querying commands for the account metadata module
  auth                     Querying commands for the auth module
  bank                     Querying commands for the bank module
  block                    Get verified data for a the block at given height
  distribution             Querying commands for the distribution module
  evidence                 Query for evidence by hash or for all (paginated) submitted evidence
  gov                      Querying commands for the governance module
  ibc                      Querying commands for the IBC module
  ibc-transfer             IBC fungible token transfer query subcommands
  marker                   Querying commands for the marker module
  metadata                 Querying commands for the metadata module
  mint                     Querying commands for the minting module
  name                     Querying commands for the name module
  params                   Querying commands for the params module
  slashing                 Querying commands for the slashing module
  staking                  Querying commands for the staking module
  tendermint-validator-set Get the full tendermint validator set at given height
  tx                       Query for a transaction by hash in a committed block
  txs                      Query for paginated transactions that match a set of events
  upgrade                  Querying commands for the upgrade module
  wasm                     Querying commands for the wasm module
```

### Current Block Height

Query the block height using a remote public node:

```text
provenanced --testnet q block \
    --node=https://rpc.test.provenance.io:443 \
| jq ".block.last_commit.height"
```

### Account Balances

Query account balance using a remote public node:

```text
provenanced --testnet q bank balances tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt \
 --node=https://rpc.test.provenance.io:443
```

:::info
The `--node=https://rpc.test.provenance.io:443` flag is not necessary when running against a locally installed node.
:::
