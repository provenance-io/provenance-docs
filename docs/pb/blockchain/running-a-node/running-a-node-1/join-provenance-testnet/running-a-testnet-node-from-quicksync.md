# Running a testnet node from quicksync

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Running a testnet node for pio-testnet-1 from a quicksync file." />

The steps for running testnet are exactly the same as mainnet except that the github repo is here https://github.com/provenance-io/testnet and the chain id is `pio-testnet-1`

````markup
Step 1: download the latest quickysync via https://test.provenance.io/quicksync.
Step 2: Note down the provenance version required for the quicksync file downloaded in step 1.
Step 3: Download appropriate release from https://github.com/provenance-io/provenance/releases/ noted from step 2.
Step 4: Untar data directory from the quicksync download and replacing the untarred data directory to $PIO_HOME/data
Step 5: Run the below commands
export PIO_HOME=~/.provenanced // or directory of your choosing.
provenanced init -t choose-a-moniker --chain-id pio-testnet-1
curl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json> genesis.json
mv genesis.json $PIO_HOME/config
Step 6: provenanced start --testnet --p2p.seeds 4403e0e55fa4e43a454c4bf7922c8a93a51fb12d@seed.test.provenance.io:26656 --x-crisis-skip-assert-invariants
````
