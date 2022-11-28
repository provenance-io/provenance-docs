"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[8690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>a});var o=t(7294);const a=e=>{let{text:n}=e;return o.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},7518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(7462),a=(t(7294),t(3905)),i=t(8677);const r={},s="Joining Testnet",l={unversionedId:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/index",id:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/index",title:"Joining Testnet",description:"Start a Provenance Blockchain full node to understand how nodes are used by applications that integrate with the Provenance Blockchain ecosystem.",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/index.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet",slug:"/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Running a Node",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/"},next:{title:"Running a testnet node from quicksync",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync"}},c={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Start a Node in Foreground",id:"start-a-node-in-foreground",level:4},{value:"Setting Up a New Node",id:"setting-up-a-new-node",level:2},{value:"Cleaning up Existing testnet Node",id:"cleaning-up-existing-testnet-node",level:3},{value:"Download and Install Provenance Blockchain",id:"download-and-install-provenance-blockchain",level:3},{value:"Initialize Provenance Blockchain Node",id:"initialize-provenance-blockchain-node",level:3},{value:"Download and Install testnet Genesis File",id:"download-and-install-testnet-genesis-file",level:3},{value:"Manually Configure config.toml Settings",id:"manually-configure-configtoml-settings",level:3},{value:"Configure Seed Nodes",id:"configure-seed-nodes",level:4},{value:"Configure Database Backend",id:"configure-database-backend",level:4},{value:"Configure Logging",id:"configure-logging",level:4},{value:"Configure Instrumentation",id:"configure-instrumentation",level:4},{value:"Using Provenance Blockchain testnet config.toml",id:"using-provenance-blockchain-testnet-configtoml",level:3},{value:"Download and Install testnet config.toml",id:"download-and-install-testnet-configtoml",level:4},{value:"Configure Cosmovisor",id:"configure-cosmovisor",level:3},{value:"Download and Install Cosmovisor using <code>go get</code>",id:"download-and-install-cosmovisor-using-go-get",level:4},{value:"Build Cosmovisor from Source (Optional)",id:"build-cosmovisor-from-source-optional",level:4},{value:"Export Cosmovisor Environment Variables",id:"export-cosmovisor-environment-variables",level:4},{value:"Create cosmovisor Directories",id:"create-cosmovisor-directories",level:4},{value:"Start Node using Cosmovisor",id:"start-node-using-cosmovisor",level:3}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"joining-testnet"},"Joining Testnet"),(0,a.kt)(i.Y,{text:"Join a locally installed Provenance Blockchain node to the testnet.",mdxType:"DocSubheader"}),(0,a.kt)("p",null,"Start a Provenance Blockchain ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/nodes/#node-types"},"full node")," to understand how nodes are used by applications that integrate with the Provenance Blockchain ecosystem."),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"The quickest way to start a node is to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," daemon process, initialize a local installation, download the genesis file, and start the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," node in the foreground. Be sure to change",(0,a.kt)("inlineCode",{parentName:"p"},"choose-a-moniker")," to a custom name for the new node."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"While using the quick-start method provides a quick and easy way to start a testnet node, it does place the burden of keeping Provenance Blockchain software up-to-date on the reader. The recommended approach is to use Cosmovisor to manage the Provenance Blockchain node as described in the next section.")),(0,a.kt)("h4",{id:"start-a-node-in-foreground"},"Start a Node in Foreground"),(0,a.kt)("p",null,"Use the following to start up a Provenance Blockchain node in the foreground."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/testnet"},"https://github.com/provenance-io/testnet")," for the latest testnet version. As of this writing, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"0.2.0")," as reflected in the version tags below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export PIO_HOME=~/.provenanced\ngit clone https://github.com/provenance-io/provenance.git\ncd provenance\ngit checkout tags/v0.2.0 -b v0.2.0\nmake clean\nmake install\nprovenanced -t init choose-a-moniker --chain-id pio-testnet-1\ncurl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json > genesis.json\nmv genesis.json $PIO_HOME/config\nprovenanced start --testnet --p2p.seeds 2de841ce706e9b8cdff9af4f137e52a4de0a85b2@104.196.26.176:26656,add1d50d00c8ff79a6f7b9873cc0d9d20622614e@34.71.242.51:26656 --x-crisis-skip-assert-invariants\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that initially, a Provenance Blockchain node may take about 1-2 hours to start up as it has to sync up with all the old transactions on the blockchain. During startup, the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," daemon will output state sync information such as:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"2:20PM INF committed state app_hash=3AA9147C2DBAE3328BAF633B6F33B1FBB6557FE8D81ECBC769A5AFB8DDFE98E3 height=29475 module=state num_txs=0\n"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The crisis module halts the blockchain under the circumstance that a blockchain ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/building-modules/invariants.md"},"invariant")," is broken. Invariants can be registered with the application during the application initialization process. During sync, it makes sense to disable this module so the ",(0,a.kt)("inlineCode",{parentName:"p"},"--x-crisis-skip-assert-invariants")," is specified.")),(0,a.kt)("p",null,"Once the node has synced it is joined to the Provenance Blockchain testnet. Note after the sync is completed, the information sent to the screen is associated with the live blockchain transactions. At this point, the local ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," process is a testnet node suitable for learning the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," CLI, querying the blockchain, signing and submitting transactions, and developing applications that connect to mainnet. However, there are configuration options to the testnet node that are more suitable as a long-running process."),(0,a.kt)("h2",{id:"setting-up-a-new-node"},"Setting Up a New Node"),(0,a.kt)("p",null,"Unlike the Quick Start instructions, this section describes setting up a new full node from scratch with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/run-node/cosmovisor.html"},"Cosmovisor")," and better configuration options. This section effectively configures and starts a Provenance Blockchain full node."),(0,a.kt)("p",null,"Before starting this section, be sure the prerequisites have been installed as described in ",(0,a.kt)("a",{parentName:"p",href:"../../#prerequisites"},"Installing Provenance Blockchain"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/testnet"},"testnet repo")," for the latest genesis/config files and version information. The node started in this section is chain id ",(0,a.kt)("inlineCode",{parentName:"p"},"pio-testnet-1")," Provenance Blockchain release 0.2.0 (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance/releases/tag/v0.2.0"},"https://github.com/provenance-io/provenance/releases/tag/v0.2.0"),")")),(0,a.kt)("h3",{id:"cleaning-up-existing-testnet-node"},"Cleaning up Existing testnet Node"),(0,a.kt)("p",null,"If the Quick Start was followed, it will have saved the configuration and state to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME")," directory. When setting up a new node, use the following to start from a fresh state by cleaning up artifacts and setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME")," environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/.provenanced\nexport PIO_HOME=~/.provenanced\nmkdir -p $PIO_HOME/config\n")),(0,a.kt)("h3",{id:"download-and-install-provenance-blockchain"},"Download and Install Provenance Blockchain"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," to download the latest testnet version of Provenance Blockchain (",(0,a.kt)("inlineCode",{parentName:"p"},"0.2.0")," as of this writing):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b v0.2.0 https://github.com/provenance-io/provenance.git\ncd provenance\n")),(0,a.kt)("p",null,"Build the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make clean\nmake install\n")),(0,a.kt)("p",null,"Confirm the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced version --long\n\nname: Provenance Blockchain\nserver_name: provenanced\nversion: 0.2.0\ncommit: 75fef3a701af3787a56d4c8c6b40f67b95b79eb6\nbuild_tags: netgo,gcc,cleveldb,ledger\ngo: go version go1.15.5 darwin/amd64\n")),(0,a.kt)("h3",{id:"initialize-provenance-blockchain-node"},"Initialize Provenance Blockchain Node"),(0,a.kt)("p",null,"Next, initialize the node to create the base config files at ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME"),". Choose a moniker, simply a name containing only ASCII characters, for the node. This ",(0,a.kt)("inlineCode",{parentName:"p"},"moniker")," may be edited later in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced init <your_custom_moniker> --testnet\n")),(0,a.kt)("h3",{id:"download-and-install-testnet-genesis-file"},"Download and Install testnet Genesis File"),(0,a.kt)("p",null,"Before starting the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," node, a genesis file must be established. This may be downloaded from the Provenance Blockchain testnet site using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json > genesis.json\n")),(0,a.kt)("p",null,"Move the ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," file to the Provenance Blockchain home configuration directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv genesis.json $PIO_HOME/config\n")),(0,a.kt)("h3",{id:"manually-configure-configtoml-settings"},"Manually Configure config.toml Settings"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Provenance Blockchain provides a base ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," file that can be used instead of following these steps in this section. ",(0,a.kt)("a",{parentName:"p",href:"./#using-provenance-testnet-config-toml"},'Refer to the "Using Provenance Blockchain testnet config.toml" section for more information.'))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," contains important node settings including ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/p2p/node.html#seeds"},"seed node")," locations, moniker, and database backend. This section describes the updates to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file needed to start a new node. The ",(0,a.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/become-a-validator"},"Become a Validator")," section will describe ",(0,a.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/ecosystem/community/validator"},"validator node"),"-specific settings."),(0,a.kt)("h4",{id:"configure-seed-nodes"},"Configure Seed Nodes"),(0,a.kt)("p",null,"Nodes need to know how to find peers on testnet. This is done by setting seed nodes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml"),"file. Depending on the version, the seed nodes are available in the Provenance Blockchain testnet repo. Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"pio-testnet-1")," chain is used in this document, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/testnet#pio-testnet-1"},"the seed nodes are available here"),"."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file and edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"seeds")," configuration setting using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/testnet#pio-testnet-1"},"seed nodes from the Provenance Blockchain testnet repo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Comma separated list of seed nodes to connect to\nseeds = "2de841ce706e9b8cdff9af4f137e52a4de0a85b2@104.196.26.176:26656,add1d50d00c8ff79a6f7b9873cc0d9d20622614e@34.71.242.51"\n')),(0,a.kt)("h4",{id:"configure-database-backend"},"Configure Database Backend"),(0,a.kt)("p",null,"As listed in the ",(0,a.kt)("a",{parentName:"p",href:"../../#prerequisites"},"prerequisites section"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"leveldb")," is the recommended node backend database."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file and edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"db_backend")," configuration setting to use ",(0,a.kt)("inlineCode",{parentName:"p"},"leveldb"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb\n# * goleveldb (github.com/syndtr/goleveldb - most popular implementation)\n#   - pure go\n#   - stable\n# * cleveldb (uses levigo wrapper)\n#   - fast\n#   - requires gcc\n#   - use cleveldb build tag (go build -tags cleveldb)\n# * boltdb (uses etcd\'s fork of bolt - github.com/etcd-io/bbolt)\n#   - EXPERIMENTAL\n#   - may be faster is some use-cases (random reads - indexer)\n#   - use boltdb build tag (go build -tags boltdb)\n# * rocksdb (uses github.com/tecbot/gorocksdb)\n#   - EXPERIMENTAL\n#   - requires gcc\n#   - use rocksdb build tag (go build -tags rocksdb)\n# * badgerdb (uses github.com/dgraph-io/badger)\n#   - EXPERIMENTAL\n#   - use badgerdb build tag (go build -tags badgerdb)\ndb_backend = "cleveldb"\n')),(0,a.kt)("h4",{id:"configure-logging"},"Configure Logging"),(0,a.kt)("p",null,"Optionally, and to cut down on informational logs, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file and edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"log_level")," configuration settings to use ",(0,a.kt)("inlineCode",{parentName:"p"},"error:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Output level for logging, including package level options\nlog_level = "error"\n')),(0,a.kt)("h4",{id:"configure-instrumentation"},"Configure Instrumentation"),(0,a.kt)("p",null,"Change the instrumentation ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"provenance")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Instrumentation namespace\nnamespace = "provenance"\n')),(0,a.kt)("h3",{id:"using-provenance-blockchain-testnet-configtoml"},"Using Provenance Blockchain testnet config.toml"),(0,a.kt)("p",null,"Instead of manually configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," file as shown in the previous section, a reference file is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/testnet/tree/main/pio-testnet-1"},"Provenance Blockchain testnet.")),(0,a.kt)("h4",{id:"download-and-install-testnet-configtoml"},"Download and Install testnet config.toml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/config.toml > config.toml\nmv config.toml $PIO_HOME/config\n")),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/config/config.toml")," and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"moniker")," to use the moniker set in the ",(0,a.kt)("a",{parentName:"p",href:"./#initialize-provenance-node"},"Initialize Provenance Blockchain Node")," section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# A custom human readable name for this node\nmoniker = "pio-testnet2"\n')),(0,a.kt)("h3",{id:"configure-cosmovisor"},"Configure Cosmovisor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," is a small process manager around Cosmos SDK binaries that monitors the governance module for chain upgrade proposals. Approved proposals will then be run to download the new Provenance Blockchain code, stop the Provenance Blockchain node, run the migration script, replace the node binary, and start with the new genesis file."),(0,a.kt)("h4",{id:"download-and-install-cosmovisor-using-go-get"},"Download and Install Cosmovisor using ",(0,a.kt)("inlineCode",{parentName:"h4"},"go get")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," commands in this section ",(0,a.kt)("strong",{parentName:"p"},"will not work")," if you are still in the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenance")," directory created during the github clone. Change to or create a different directory before running ",(0,a.kt)("inlineCode",{parentName:"p"},"go get.")),(0,a.kt)("p",{parentName:"admonition"},"Some MacOS users have experienced issues with using ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," to install ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," when using ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.5.x"),". Refer to the Build Cosmovisor from Source section if the ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," steps do not work.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/provenance-io/cosmovisor/cmd/cosmovisor\n")),(0,a.kt)("h4",{id:"build-cosmovisor-from-source-optional"},"Build Cosmovisor from Source (Optional)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Building ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," from source is only necessary if the ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," installation steps did not work."),(0,a.kt)("p",{parentName:"admonition"},"Skip this section if ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," has been installed using ",(0,a.kt)("inlineCode",{parentName:"p"},"go get")," in the previous section.")),(0,a.kt)("p",null,"Create a new directory to install cosmovisor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $PIO_HOME/cosmovisor/install\n")),(0,a.kt)("p",null,"Make the current working directory the new ",(0,a.kt)("inlineCode",{parentName:"p"},"$PIO_HOME/cosmovisor/install")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd $PIO_HOME/cosmovisor/install\n")),(0,a.kt)("p",null,"The Cosmos SDK GitHub repo contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," build, clone the repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/provenance-io/cosmovisor.git\n")),(0,a.kt)("p",null,"Change to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," build directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd cosmovisor\n")),(0,a.kt)("p",null,"Make ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make cosmovisor\n")),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," binary to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp build/cosmovisor $GOPATH/bin/cosmovisor\n")),(0,a.kt)("h4",{id:"export-cosmovisor-environment-variables"},"Export Cosmovisor Environment Variables"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," reads its configuration from environment variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DAEMON_HOME")," is the location where upgrade binaries should be kept. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"$PIO_HOME.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DAEMON_NAME")," is the name of the Provenance Blockchain binary, or, ",(0,a.kt)("inlineCode",{parentName:"li"},"provenanced"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DAEMON_ALLOW_DOWNLOAD_BINARIES")," (",(0,a.kt)("em",{parentName:"li"},"optional"),") if set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," will enable auto-downloading of new binaries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DAEMON_RESTART_AFTER_UPGRADE")," (",(0,a.kt)("em",{parentName:"li"},"optional"),") if set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," will restart the sub-process with the same command line arguments and flags (but new binary) after a successful upgrade.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export DAEMON_NAME="provenanced"\nexport DAEMON_HOME="${PIO_HOME}"\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES="true"\nexport DAEMON_RESTART_AFTER_UPGRADE="true"\n')),(0,a.kt)("h4",{id:"create-cosmovisor-directories"},"Create cosmovisor Directories"),(0,a.kt)("p",null,"Cosmovisor requires directories for genesis and wrapping the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," daemon process. To create directories and symlinks, use the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $PIO_HOME/cosmovisor/genesis/bin\nmkdir -p $PIO_HOME/cosmovisor/upgrades\nln -sf $PIO_HOME/cosmovisor/genesis/bin $PIO_HOME/cosmovisor/genesis/current\n")),(0,a.kt)("p",null,"To create a symlink to the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," daemon in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," genesis directory, use the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp $(which provenanced) $PIO_HOME/cosmovisor/genesis/bin\nln -sf $PIO_HOME/cosmovisor/genesis/bin/provenanced $(which provenanced)\n")),(0,a.kt)("h3",{id:"start-node-using-cosmovisor"},"Start Node using Cosmovisor"),(0,a.kt)("p",null,"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," has been installed and configured, it effectively wraps up the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," daemon process. To start the Provenanced node, use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor start --testnet --home $PIO_HOME --p2p.seeds 2de841ce706e9b8cdff9af4f137e52a4de0a85b2@104.196.26.176:26656,add1d50d00c8ff79a6f7b9873cc0d9d20622614e@34.71.242.51:26656 --x-crisis-skip-assert-invariants\n")),(0,a.kt)("p",null,"A node process should now be running in the foreground. It is an exercise for the reader to integrate the ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," (again, wrapped by ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor"),") with a service manager like ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"launchd"),"."))}m.isMDXComponent=!0}}]);