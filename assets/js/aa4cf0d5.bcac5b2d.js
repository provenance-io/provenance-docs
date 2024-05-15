"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8690],{18558:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=o(85893),s=o(11151),t=o(98677);const c={},r="Joining Testnet",a={id:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/index",title:"Joining Testnet",description:"Start a Provenance Blockchain full node to understand how nodes are used by applications that integrate with the Provenance Blockchain ecosystem.",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/index.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet",slug:"/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Running a Node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/"},next:{title:"Running a testnet node from quicksync",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync"}},d={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Start a Node in Foreground",id:"start-a-node-in-foreground",level:4},{value:"Setting Up a New Node",id:"setting-up-a-new-node",level:2},{value:"Cleaning up Existing testnet Node",id:"cleaning-up-existing-testnet-node",level:3},{value:"Download and Install Provenance Blockchain",id:"download-and-install-provenance-blockchain",level:3},{value:"Initialize Provenance Blockchain Node",id:"initialize-provenance-blockchain-node",level:3},{value:"Download and Install testnet Genesis File",id:"download-and-install-testnet-genesis-file",level:3},{value:"Manually Configure config.toml Settings",id:"manually-configure-configtoml-settings",level:3},{value:"Configure Seed Nodes",id:"configure-seed-nodes",level:4},{value:"Configure Database Backend",id:"configure-database-backend",level:4},{value:"Configure Logging",id:"configure-logging",level:4},{value:"Configure Instrumentation",id:"configure-instrumentation",level:4},{value:"Using Provenance Blockchain testnet config.toml",id:"using-provenance-blockchain-testnet-configtoml",level:3},{value:"Download and Install testnet config.toml",id:"download-and-install-testnet-configtoml",level:4},{value:"Configure Cosmovisor",id:"configure-cosmovisor",level:3},{value:"Download and Install Cosmovisor using <code>go get</code>",id:"download-and-install-cosmovisor-using-go-get",level:4},{value:"Build Cosmovisor from Source (Optional)",id:"build-cosmovisor-from-source-optional",level:4},{value:"Export Cosmovisor Environment Variables",id:"export-cosmovisor-environment-variables",level:4},{value:"Create cosmovisor Directories",id:"create-cosmovisor-directories",level:4},{value:"Start Node using Cosmovisor",id:"start-node-using-cosmovisor",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"joining-testnet",children:"Joining Testnet"}),"\n","\n",(0,i.jsx)(t.Y,{text:"Join a locally installed Provenance Blockchain node to the testnet."}),"\n",(0,i.jsxs)(n.p,{children:["Start a Provenance Blockchain ",(0,i.jsx)(n.a,{href:"https://docs.tendermint.com/master/nodes/#node-types",children:"full node"})," to understand how nodes are used by applications that integrate with the Provenance Blockchain ecosystem."]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.p,{children:["The quickest way to start a node is to install the ",(0,i.jsx)(n.code,{children:"provenanced"})," daemon process, initialize a local installation, download the genesis file, and start the ",(0,i.jsx)(n.code,{children:"provenanced"})," node in the foreground. Be sure to change",(0,i.jsx)(n.code,{children:"choose-a-moniker"})," to a custom name for the new node."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"While using the quick-start method provides a quick and easy way to start a testnet node, it does place the burden of keeping Provenance Blockchain software up-to-date on the reader. The recommended approach is to use Cosmovisor to manage the Provenance Blockchain node as described in the next section."})}),"\n",(0,i.jsx)(n.h4,{id:"start-a-node-in-foreground",children:"Start a Node in Foreground"}),"\n",(0,i.jsx)(n.p,{children:"Use the following to start up a Provenance Blockchain node in the foreground."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/testnet",children:"https://github.com/provenance-io/testnet"})," for the latest testnet version. As of this writing, it is ",(0,i.jsx)(n.code,{children:"1.16.0"})," as reflected in the version tags below."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export PIO_HOME=~/.provenanced\ngit clone https://github.com/provenance-io/provenance.git\ncd provenance\ngit checkout tags/v1.16.0 -b v1.16.0\nmake clean\nmake install\nprovenanced -t init choose-a-moniker --chain-id pio-testnet-1\ncurl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json > genesis.json\nmv genesis.json $PIO_HOME/config\nprovenanced start --testnet --p2p.seeds 4403e0e55fa4e43a454c4bf7922c8a93a51fb12d@seed.test.provenance.io:26656 --x-crisis-skip-assert-invariants\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note that initially, a Provenance Blockchain node may take about 1-2 hours to start up as it has to sync up with all the old transactions on the blockchain. During startup, the ",(0,i.jsx)(n.code,{children:"provenanced"})," daemon will output state sync information such as:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2:20PM INF committed state app_hash=3AA9147C2DBAE3328BAF633B6F33B1FBB6557FE8D81ECBC769A5AFB8DDFE98E3 height=29475 module=state num_txs=0\n"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The crisis module halts the blockchain under the circumstance that a blockchain ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/building-modules/invariants.md",children:"invariant"})," is broken. Invariants can be registered with the application during the application initialization process. During sync, it makes sense to disable this module so the ",(0,i.jsx)(n.code,{children:"--x-crisis-skip-assert-invariants"})," is specified."]})}),"\n",(0,i.jsxs)(n.p,{children:["Once the node has synced it is joined to the Provenance Blockchain testnet. Note after the sync is completed, the information sent to the screen is associated with the live blockchain transactions. At this point, the local ",(0,i.jsx)(n.code,{children:"provenanced"})," process is a testnet node suitable for learning the ",(0,i.jsx)(n.code,{children:"provenanced"})," CLI, querying the blockchain, signing and submitting transactions, and developing applications that connect to mainnet. However, there are configuration options to the testnet node that are more suitable as a long-running process."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-a-new-node",children:"Setting Up a New Node"}),"\n",(0,i.jsxs)(n.p,{children:["Unlike the Quick Start instructions, this section describes setting up a new full node from scratch with ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/main/run-node/cosmovisor.html",children:"Cosmovisor"})," and better configuration options. This section effectively configures and starts a Provenance Blockchain full node."]}),"\n",(0,i.jsxs)(n.p,{children:["Before starting this section, be sure the prerequisites have been installed as described in ",(0,i.jsx)(n.a,{href:"../../#prerequisites",children:"Installing Provenance Blockchain"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/testnet",children:"testnet repo"})," for the latest genesis/config files and version information. The node started in this section is chain id ",(0,i.jsx)(n.code,{children:"pio-testnet-1"})," Provenance Blockchain release 1.16.0 (",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/releases/tag/v1.16.0",children:"https://github.com/provenance-io/provenance/releases/tag/v1.16.0"}),")"]})}),"\n",(0,i.jsx)(n.h3,{id:"cleaning-up-existing-testnet-node",children:"Cleaning up Existing testnet Node"}),"\n",(0,i.jsxs)(n.p,{children:["If the Quick Start was followed, it will have saved the configuration and state to the ",(0,i.jsx)(n.code,{children:"$PIO_HOME"})," directory. When setting up a new node, use the following to start from a fresh state by cleaning up artifacts and setting the ",(0,i.jsx)(n.code,{children:"$PIO_HOME"})," environment variable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rm -rf ~/.provenanced\nexport PIO_HOME=~/.provenanced\nmkdir -p $PIO_HOME/config\n"})}),"\n",(0,i.jsx)(n.h3,{id:"download-and-install-provenance-blockchain",children:"Download and Install Provenance Blockchain"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"git"})," to download the latest testnet version of Provenance Blockchain (",(0,i.jsx)(n.code,{children:"1.16.0"})," as of this writing):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone -b v1.16.0 https://github.com/provenance-io/provenance.git\ncd provenance\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Build the ",(0,i.jsx)(n.code,{children:"provenanced"})," process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make clean\nmake install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Confirm the ",(0,i.jsx)(n.code,{children:"provenanced"})," version."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"provenanced version --long\n\nname: Provenance Blockchain\nserver_name: provenanced\nversion: 1.16.0\ncommit: 75fef3a701af3787a56d4c8c6b40f67b95b79eb6\nbuild_tags: netgo,gcc,cleveldb,ledger\ngo: go version go1.15.5 darwin/amd64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"initialize-provenance-blockchain-node",children:"Initialize Provenance Blockchain Node"}),"\n",(0,i.jsxs)(n.p,{children:["Next, initialize the node to create the base config files at ",(0,i.jsx)(n.code,{children:"$PIO_HOME"}),". Choose a moniker, simply a name containing only ASCII characters, for the node. This ",(0,i.jsx)(n.code,{children:"moniker"})," may be edited later in the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"provenanced init <your_custom_moniker> --testnet\n"})}),"\n",(0,i.jsx)(n.h3,{id:"download-and-install-testnet-genesis-file",children:"Download and Install testnet Genesis File"}),"\n",(0,i.jsxs)(n.p,{children:["Before starting the ",(0,i.jsx)(n.code,{children:"provenanced"})," node, a genesis file must be established. This may be downloaded from the Provenance Blockchain testnet site using ",(0,i.jsx)(n.code,{children:"curl"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json > genesis.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Move the ",(0,i.jsx)(n.code,{children:"genesis.json"})," file to the Provenance Blockchain home configuration directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mv genesis.json $PIO_HOME/config\n"})}),"\n",(0,i.jsx)(n.h3,{id:"manually-configure-configtoml-settings",children:"Manually Configure config.toml Settings"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Provenance Blockchain provides a base ",(0,i.jsx)(n.code,{children:"config.toml"})," file that can be used instead of following these steps in this section. ",(0,i.jsx)(n.a,{href:"./#using-provenance-testnet-config-toml",children:'Refer to the "Using Provenance Blockchain testnet config.toml" section for more information.'})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," contains important node settings including ",(0,i.jsx)(n.a,{href:"https://docs.tendermint.com/master/spec/p2p/node.html#seeds",children:"seed node"})," locations, moniker, and database backend. This section describes the updates to the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file needed to start a new node. The ",(0,i.jsx)(n.a,{href:"/docs/pb/blockchain/running-a-node/running-a-node-1/become-a-validator",children:"Become a Validator"})," section will describe ",(0,i.jsx)(n.a,{href:"/docs/pb/ecosystem/community/validator",children:"validator node"}),"-specific settings."]}),"\n",(0,i.jsx)(n.h4,{id:"configure-seed-nodes",children:"Configure Seed Nodes"}),"\n",(0,i.jsxs)(n.p,{children:["Nodes need to know how to find peers on testnet. This is done by setting seed nodes in the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"}),"file. Depending on the version, the seed nodes are available in the Provenance Blockchain testnet repo. Because the ",(0,i.jsx)(n.code,{children:"pio-testnet-1"})," chain is used in this document, ",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/testnet#pio-testnet-1",children:"the seed nodes are available here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file and edit the ",(0,i.jsx)(n.code,{children:"seeds"})," configuration setting using the ",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/testnet#pio-testnet-1",children:"seed nodes from the Provenance Blockchain testnet repo"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Comma separated list of seed nodes to connect to\nseeds = "2de841ce706e9b8cdff9af4f137e52a4de0a85b2@104.196.26.176:26656,add1d50d00c8ff79a6f7b9873cc0d9d20622614e@34.71.242.51"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"configure-database-backend",children:"Configure Database Backend"}),"\n",(0,i.jsxs)(n.p,{children:["As listed in the ",(0,i.jsx)(n.a,{href:"../../#prerequisites",children:"prerequisites section"}),", ",(0,i.jsx)(n.code,{children:"leveldb"})," is the recommended node backend database."]}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file and edit the ",(0,i.jsx)(n.code,{children:"db_backend"})," configuration setting to use ",(0,i.jsx)(n.code,{children:"leveldb"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb\n# * goleveldb (github.com/syndtr/goleveldb - most popular implementation)\n#   - pure go\n#   - stable\n# * cleveldb (uses levigo wrapper)\n#   - fast\n#   - requires gcc\n#   - use cleveldb build tag (go build -tags cleveldb)\n# * boltdb (uses etcd\'s fork of bolt - github.com/etcd-io/bbolt)\n#   - EXPERIMENTAL\n#   - may be faster is some use-cases (random reads - indexer)\n#   - use boltdb build tag (go build -tags boltdb)\n# * rocksdb (uses github.com/tecbot/gorocksdb)\n#   - EXPERIMENTAL\n#   - requires gcc\n#   - use rocksdb build tag (go build -tags rocksdb)\n# * badgerdb (uses github.com/dgraph-io/badger)\n#   - EXPERIMENTAL\n#   - use badgerdb build tag (go build -tags badgerdb)\ndb_backend = "cleveldb"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"configure-logging",children:"Configure Logging"}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, and to cut down on informational logs, open the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file and edit the ",(0,i.jsx)(n.code,{children:"log_level"})," configuration settings to use ",(0,i.jsx)(n.code,{children:"error:"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Output level for logging, including package level options\nlog_level = "error"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"configure-instrumentation",children:"Configure Instrumentation"}),"\n",(0,i.jsxs)(n.p,{children:["Change the instrumentation ",(0,i.jsx)(n.code,{children:"namespace"})," option to ",(0,i.jsx)(n.code,{children:"provenance"})," in the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Instrumentation namespace\nnamespace = "provenance"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"using-provenance-blockchain-testnet-configtoml",children:"Using Provenance Blockchain testnet config.toml"}),"\n",(0,i.jsxs)(n.p,{children:["Instead of manually configuring the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," file as shown in the previous section, a reference file is available at ",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/testnet/tree/main/pio-testnet-1",children:"Provenance Blockchain testnet."})]}),"\n",(0,i.jsx)(n.h4,{id:"download-and-install-testnet-configtoml",children:"Download and Install testnet config.toml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/config.toml > config.toml\nmv config.toml $PIO_HOME/config\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"$PIO_HOME/config/config.toml"})," and update the ",(0,i.jsx)(n.code,{children:"moniker"})," to use the moniker set in the ",(0,i.jsx)(n.a,{href:"./#initialize-provenance-node",children:"Initialize Provenance Blockchain Node"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# A custom human readable name for this node\nmoniker = "pio-testnet2"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configure-cosmovisor",children:"Configure Cosmovisor"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cosmovisor"})," is a small process manager around Cosmos SDK binaries that monitors the governance module for chain upgrade proposals. Approved proposals will then be run to download the new Provenance Blockchain code, stop the Provenance Blockchain node, run the migration script, replace the node binary, and start with the new genesis file."]}),"\n",(0,i.jsxs)(n.h4,{id:"download-and-install-cosmovisor-using-go-get",children:["Download and Install Cosmovisor using ",(0,i.jsx)(n.code,{children:"go get"})]}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"go get"})," commands in this section ",(0,i.jsx)(n.strong,{children:"will not work"})," if you are still in the ",(0,i.jsx)(n.code,{children:"provenance"})," directory created during the github clone. Change to or create a different directory before running ",(0,i.jsx)(n.code,{children:"go get."})]}),(0,i.jsxs)(n.p,{children:["Some MacOS users have experienced issues with using ",(0,i.jsx)(n.code,{children:"go get"})," to install ",(0,i.jsx)(n.code,{children:"cosmovisor"})," when using ",(0,i.jsx)(n.code,{children:"go"})," version ",(0,i.jsx)(n.code,{children:"1.5.x"}),". Refer to the Build Cosmovisor from Source section if the ",(0,i.jsx)(n.code,{children:"go get"})," steps do not work."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/provenance-io/cosmovisor/cmd/cosmovisor\n"})}),"\n",(0,i.jsx)(n.h4,{id:"build-cosmovisor-from-source-optional",children:"Build Cosmovisor from Source (Optional)"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Building ",(0,i.jsx)(n.code,{children:"cosmovisor"})," from source is only necessary if the ",(0,i.jsx)(n.code,{children:"go get"})," installation steps did not work."]}),(0,i.jsxs)(n.p,{children:["Skip this section if ",(0,i.jsx)(n.code,{children:"cosmovisor"})," has been installed using ",(0,i.jsx)(n.code,{children:"go get"})," in the previous section."]})]}),"\n",(0,i.jsx)(n.p,{children:"Create a new directory to install cosmovisor:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $PIO_HOME/cosmovisor/install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make the current working directory the new ",(0,i.jsx)(n.code,{children:"$PIO_HOME/cosmovisor/install"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd $PIO_HOME/cosmovisor/install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The Cosmos SDK GitHub repo contains the ",(0,i.jsx)(n.code,{children:"cosmovisor"})," build, clone the repo:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/provenance-io/cosmovisor.git\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Change to the ",(0,i.jsx)(n.code,{children:"cosmovisor"})," build directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd cosmovisor\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make ",(0,i.jsx)(n.code,{children:"cosmovisor"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make cosmovisor\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"cosmovisor"})," binary to the ",(0,i.jsx)(n.code,{children:"$GOPATH"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp build/cosmovisor $GOPATH/bin/cosmovisor\n"})}),"\n",(0,i.jsx)(n.h4,{id:"export-cosmovisor-environment-variables",children:"Export Cosmovisor Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cosmovisor"})," reads its configuration from environment variables."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DAEMON_HOME"})," is the location where upgrade binaries should be kept. Use ",(0,i.jsx)(n.code,{children:"$PIO_HOME."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DAEMON_NAME"})," is the name of the Provenance Blockchain binary, or, ",(0,i.jsx)(n.code,{children:"provenanced"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DAEMON_ALLOW_DOWNLOAD_BINARIES"})," (",(0,i.jsx)(n.em,{children:"optional"}),") if set to ",(0,i.jsx)(n.code,{children:"true"})," will enable auto-downloading of new binaries."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DAEMON_RESTART_AFTER_UPGRADE"})," (",(0,i.jsx)(n.em,{children:"optional"}),") if set to ",(0,i.jsx)(n.code,{children:"true"})," will restart the sub-process with the same command line arguments and flags (but new binary) after a successful upgrade."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export DAEMON_NAME="provenanced"\nexport DAEMON_HOME="${PIO_HOME}"\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES="true"\nexport DAEMON_RESTART_AFTER_UPGRADE="true"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"create-cosmovisor-directories",children:"Create cosmovisor Directories"}),"\n",(0,i.jsxs)(n.p,{children:["Cosmovisor requires directories for genesis and wrapping the ",(0,i.jsx)(n.code,{children:"provenanced"})," daemon process. To create directories and symlinks, use the following."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir -p $PIO_HOME/cosmovisor/genesis/bin\nmkdir -p $PIO_HOME/cosmovisor/upgrades\nln -sf $PIO_HOME/cosmovisor/genesis/bin $PIO_HOME/cosmovisor/genesis/current\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To create a symlink to the ",(0,i.jsx)(n.code,{children:"provenanced"})," daemon in the ",(0,i.jsx)(n.code,{children:"cosmovisor"})," genesis directory, use the following."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp $(which provenanced) $PIO_HOME/cosmovisor/genesis/bin\nln -sf $PIO_HOME/cosmovisor/genesis/bin/provenanced $(which provenanced)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"start-node-using-cosmovisor",children:"Start Node using Cosmovisor"}),"\n",(0,i.jsxs)(n.p,{children:["Once ",(0,i.jsx)(n.code,{children:"cosmovisor"})," has been installed and configured, it effectively wraps up the ",(0,i.jsx)(n.code,{children:"provenanced"})," daemon process. To start the Provenanced node, use the following ",(0,i.jsx)(n.code,{children:"cosmovisor"})," process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cosmovisor start --testnet --home $PIO_HOME --p2p.seeds 4403e0e55fa4e43a454c4bf7922c8a93a51fb12d@seed.test.provenance.io:26656 --x-crisis-skip-assert-invariants\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A node process should now be running in the foreground. It is an exercise for the reader to integrate the ",(0,i.jsx)(n.code,{children:"provenanced"})," (again, wrapped by ",(0,i.jsx)(n.code,{children:"cosmovisor"}),") with a service manager like ",(0,i.jsx)(n.code,{children:"systemd"})," or ",(0,i.jsx)(n.code,{children:"launchd"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},98677:(e,n,o)=>{o.d(n,{Y:()=>s});o(67294);var i=o(85893);const s=e=>{let{text:n}=e;return(0,i.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>c});var i=o(67294);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);