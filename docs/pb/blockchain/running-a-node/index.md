# Installing Provenanced

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Install the `provenanced` executable for both client and server operations." />

Provenance Blockchain is wrapped into a single executable named `provenanced`. All interaction \(whether creating a node, querying, or invoking actions\) with Provenance Blockchain can be accomplished using the `provenanced` command. This document explains the basic installation of the command and verification that it has been installed correctly.

## Prerequisites

- Linux or Mac OS
- Go 1.15+ \([https://golang.org/doc/install](https://golang.org/doc/install)\)
- LevelDB 1.23 \([https://github.com/google/leveldb](https://github.com/google/leveldb)\)

:::tip
On MacOS, LevelDB can be installed with `brew install leveldb`.
:::

## `provenanced` Install

All interaction \(whether creating a node, querying, or invoking actions\) with Provenance Blockchain can be accomplished using the `provenanced` command.

:::info
See the [Provenance Blockchain testnet repository](https://github.com/provenance-io/testnet) for the latest "Software Version" information of `pio-testnet-1`
:::

## Installing

Installing `provenanced` is done directly from the source code by cloning the version indicated for `pio-testnet-1` from the [Provenance Blockchain Github](https://github.com/provenance-io/provenance) repo, then `make install`:

```text
git clone -b <version> https://github.com/provenance-io/provenance
cd provenance && make install
```

:::info
`<version> is prefixed with 'v' when cloning version branches (eg. v0.2.0)`
:::

### Verify

:::tip
New go executables are installed at "$GOPATH/bin" where the environment variable GOPATH defaults to "~/go" when not set. Remember to add either "$GOPATH/bin" or "~/go/bin" to your PATH when GOPATH is either set or not.
:::

Check the version number to verify that the command has been successfully installed.

```bash
provenanced version --long
```

```text
name: Provenance Blockchain
server_name: provenanced
version: 0.2.0
commit: 75fef3a701af3787a56d4c8c6b40f67b95b79eb6
```
