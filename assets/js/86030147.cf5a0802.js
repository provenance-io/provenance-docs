"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8740],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>o});var a=t(7294);const o=e=>{let{text:n}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},5440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(7462),o=(t(7294),t(3905)),r=t(8677);const i={},s="Using Provenanced",p={unversionedId:"pb/blockchain/using-provenance/index",id:"pb/blockchain/using-provenance/index",title:"Using Provenanced",description:"To get started with Provenance Blockchain you first need to install Provenance Blockchain and have access to a Provenance Blockchain node.",source:"@site/docs/pb/blockchain/using-provenance/index.md",sourceDirName:"pb/blockchain/using-provenance",slug:"/pb/blockchain/using-provenance/",permalink:"/docs/pb/blockchain/using-provenance/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Running a mainnet node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node"},next:{title:"Query Command",permalink:"/docs/pb/blockchain/using-provenance/query-command"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Creating a Key(s)",id:"creating-a-keys",level:3},{value:"Restoring a Key",id:"restoring-a-key",level:3},{value:"Getting Hash",id:"getting-hash",level:3},{value:"Using `jq` to Parse JSON Output",id:"using-jq-to-parse-json-output",level:3},{value:"Before",id:"before",level:4},{value:"After",id:"after",level:4}],d={toc:l};function u(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-provenanced"},"Using Provenanced"),(0,o.kt)(r.Y,{text:"Using the `provenanced` binary as a blockchain client.",mdxType:"DocSubheader"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To get started with Provenance Blockchain you first need to install Provenance Blockchain and have access to a Provenance Blockchain node."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../running-a-node/"},"See Installing Provenance Blockchain")," if you have not installed",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../running-a-node/running-a-node-1/"},"See Running a Node"),"if you do not have access to a node or do not want to connect to a publicly available node.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'~$ provenanced --help\nProvenance Blockchain App\n\nUsage:\n  provenanced [command]\n\nAvailable Commands:\n\n\n  add-genesis-account   Add a genesis account to genesis.json\n  add-genesis-marker    Adds a marker to genesis.json\n  add-genesis-root-name Add a name binding to genesis.json\n  collect-gentxs        Collect genesis txs and output a genesis.json file\n  debug                 Tool for helping with debugging your application\n  export                Export state to JSON\n  gentx                 Generate a genesis tx carrying a self delegation\n  help                  Help about any command\n  init                  Initialize files for a Provenance Blockchain daemon node\n  keys                  Manage your application\'s keys\n  migrate               Migrate genesis to a specified target version\n  query                 Querying subcommands\n  start                 Run the full node\n  status                Query remote node for status\n  tendermint            Tendermint subcommands\n  testnet               Initialize files for a simapp testnet\n  tx                    Transactions subcommands\n  unsafe-reset-all      Resets the blockchain database, removes address book files, and resets data/priv_validator_state.json to the genesis state\n  validate-genesis      validates the genesis file at the default location or at the location passed as an arg\n  version               Print the application binary version information\n\nFlags:\n  -h, --help                help for provenanced\n      --home string         directory for config and data (default "/Users/mconroy/Library/Application Support/Provenance")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n  -t, --testnet             Indicates this command should use the testnet configuration (default: false [mainnet])\n      --trace               print out full stack trace on errors\n\nUse "provenanced [command] --help" for more information about a command.\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Commands used throughout these examples will use some consistent flags that are worth noting."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--testnet")," to use testnet rather than mainnet"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--chain-id pio-testnet-1")," assumes that we are connected to the Provenance Blockchain testnet"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--node tcp://localhost:26657")," this is the default node location and port. In the examples below, we'll connect to a remote node without starting a local node. The remote node is a public testnet node hosted at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://rpc.test.provenance.io:443."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," binary provides a command-line interface to create and query transactions. To create a transaction requires just a few items:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a key pair capable of signing the transaction"),(0,o.kt)("li",{parentName:"ul"},"a key pair capable of paying the gas fee"),(0,o.kt)("li",{parentName:"ul"},"a blockchain node to submit the transaction to.")),(0,o.kt)("h3",{id:"creating-a-keys"},"Creating a Key(s)"),(0,o.kt)("p",null,"All interactions with Provenance Blockchain are secured with a public/private key pair that will act as your account(s) on the blockchain. We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"44'/1'/0'/0/0"),' BIP32 path as an example where the coin-type "1" is a reference to Provenance Blockchain testnet. We use the ',(0,o.kt)("inlineCode",{parentName:"p"},"44'/505'/0'/0/0"),' BIP32 path as an example where coin-type "505" is a reference to the HASH token on Provenance Blockchain mainnet.'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/basics/accounts"},"Accounts")," section for more information",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/basics/accounts#hd-wallet"}," HD Wallet "),"paths.")),(0,o.kt)("p",null,"Create a key pair and store it in a local Keyring (change ",(0,o.kt)("inlineCode",{parentName:"p"},"<name-of-key>")," to a string value of your choosing):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# TESTNET (note: --hd-path \"44'/1'/0'/0/0\" can be used instead of coin type)\nprovenanced keys add <name_of_key> --coin-type=1 --testnet  -i\n\n# MAINNET (note: the default coin type is 505 for mainnet so no extra parameters are required)\nprovenanced keys add <name_of_key> -i\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nfancy solar describe long tag soul gold boost vacuum baby famous narrow drink final smoke region pulse wrap expire fabric pause giant merit bird\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When generating a new key it is important to store the generated mnemonic in a safe location to be used in the event that the key needs to be restored.")),(0,o.kt)("h3",{id:"restoring-a-key"},"Restoring a Key"),(0,o.kt)("p",null,"This command will prompt you for a mnemonic to restore the key at a specific path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# TESTNET\nprovenanced keys add <name_of_key>  -i --testnet\n\n# MAINNET\nprovenanced keys add <name_of_key>  -i\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> Enter your bip39 mnemonic, or hit enter to generate one.\nfancy solar describe long tag soul gold boost vacuum baby famous narrow drink final smoke region pulse wrap expire fabric pause giant merit bird\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# TESTNET\n> Enter your bip39 passphrase. This is combined with the mnemonic to derive the seed. Most users should just hit enter to use the default, ""\n\n- name: <name_of_key>\n  type: local\n  address: tp1gn8jlv9krqe23ql3ltq0ajcwwf7dyaq6uuludl\n  pubkey: tppub1addwnpepqd4tpv506lhl3j8hux0ss8km84gwmgapjtuea9wzt8z8n9eqjrjxg897tw0\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# MAINNET\n> Enter your bip39 passphrase. This is combined with the mnemonic to derive the seed. Most users should just hit enter to use the default, ""\n\n- name: <name_of_key>\n  type: local\n  address: pb1jd9yey59p6e70wp68ufltx8eh2xvxphqwhzcm9\n  pubkey: pbpub1addwnpepqfftn6g0p5hs94tp7f4h4d8tkpkjmx87nzxwmmclz89gfdtqfhstv9qd5s8\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n')),(0,o.kt)("h3",{id:"getting-hash"},"Getting Hash"),(0,o.kt)("p",null,"Hash is the digital currency used to transact on the Provenance Blockchain. In order to execute any commands beyond basic queries against a node, you'll need Hash. On testnet receiving Hash is as easy as accessing the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.test.provenance.io"},"Provenance Blockchain Faucet")," and supplying your address. This small distribution of Hash on testnet allows you to develop against the public testnet as well as quickly get a feel for how the Provenance Blockchain ecosystem operates."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The address associated to your key pair is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Bech32"},"Bech32")," address which is an encoded value of the public key portion of our key pair. Provenance Blockchain testnet Bech32 addresses begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"tp")," whereas mainnet addresses begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"pb"),"."),(0,o.kt)("p",{parentName:"admonition"},"Once we transferred Hash to our Bech32 address, it became a ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/basics/accounts"},"Provenance Blockchain account"),".")),(0,o.kt)("p",null,"First, find the Bech32 address of the key created in the previous section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced --testnet keys show <name-of-key>\n")),(0,o.kt)("p",null,"The output will show the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," of your key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'- name: <name-of-key>\n  type: local\n  address: tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs\n  pubkey: tppub1addwnpepqgxlsrgv9znqeass2al9u9h37khapuecpp0al82wqyhzvn9hwtnzwak5uf3\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n')),(0,o.kt)("p",null,"Copy the key ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," and open the Provenance Blockchain testnet Hash faucet ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.test.provenance.io/faucet"},"https://explorer.test.provenance.io/faucet"),", paste the value, and press Get Tokens:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Use the testnet Faucet to get Hash",src:t(4322).Z,width:"2254",height:"1708"})),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," will now have enough Hash to pay gas fees. Confirm your key ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," has Hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced --testnet q bank balances tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs \\\n --node=https://rpc.test.provenance.io:443\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'balances:\n- amount: "1000000000"\n  denom: nhash\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--node")," flag allows us to connect our ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," client to a node running remotely. Thus, we're connecting to a public testnet node hosted at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://rpc.test.provenance.io:443."))),(0,o.kt)("h3",{id:"using-jq-to-parse-json-output"},"Using ","`","jq","`"," to Parse JSON Output"),(0,o.kt)("p",null,"Using a json parsing tool is often useful for formatting data returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," commands. One way to accomplish this is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," command to parse and query json data. For more info on ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," see ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"https://stedolan.github.io/jq/download"),"."),(0,o.kt)("p",null,"Example ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," command that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," to parse the output."),(0,o.kt)("h4",{id:"before"},"Before"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"provenanced  --testnet q block\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"block_id":{"hash":"3B27CC4E15D4022587B06787734254C2D2D14BA79C19493A5561BCCB8CD9C220","parts":{"total":1,"hash":"35A1168D5518D97CC12F09534072A8F688758A11ED37302A1E3FB0AA052FDF86"}},"block":{"header":{"version":{"block":"11"},"chain_id":"pio-testnet-1","height":"26373","time":"2021-03-11T10:59:13.427265301Z","last_block_id":{"hash":"EB40B2392FA71D21A405263A9C26E48EDD23A1AF30D5440B040C2276A1A64959","parts":{"total":1,"hash":"441E673DE088DE1916C590499716227515600D4B55323E8BD3EAFAAB1614C2BA"}},"last_commit_hash":"07FE26AEB1739B6287E698DF89D8BE563C8E59C9F4D9EC6F2F5B696C17BC8989","data_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","validators_hash":"D99B22042480A642560299B08DEB4E2F5597145B7EF8CFBDA7A15235E7CE30FD","next_validators_hash":"D99B22042480A642560299B08DEB4E2F5597145B7EF8CFBDA7A15235E7CE30FD","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"E9ADB51FB9BBAF83083E82F41C0D948221268B372FD0DE574CFC522CB6E2D27B","last_results_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","evidence_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","proposer_address":"4CC7186D6C520A9EF696A6A0D6802564593D7380"},"data":{"txs":null},"evidence":{"evidence":null},"last_commit":{"height":"26372","round":0,"block_id":{"hash":"EB40B2392FA71D21A405263A9C26E48EDD23A1AF30D5440B040C2276A1A64959","parts":{"total":1,"hash":"441E673DE088DE1916C590499716227515600D4B55323E8BD3EAFAAB1614C2BA"}},"signatures":[{"block_id_flag":2,"validator_address":"4CC7186D6C520A9EF696A6A0D6802564593D7380","timestamp":"2021-03-11T10:59:13.443821923Z","signature":"ct9KWn804qYTu3QkoSWaLaXxB5ZkgGHV+iLA3v+p3R5Vqro9+hqfr49H8RaO5M2ENaYZpeJZELRShUWdKiztBg=="},{"block_id_flag":2,"validator_address":"7100D18B251B4AB281A26BF64C81B20BABD77390","timestamp":"2021-03-11T10:59:13.427265301Z","signature":"uesfDwmY8egrBNNc7H130jnprNakHRDfTQFVmpbUSHkUDMYvT+CCRPk87Gn7ew6F7qSktUBRRp3Y+1AESxxLBQ=="},{"block_id_flag":2,"validator_address":"CF53B691AFA2EB28C3D2AE118EF8F88FC48459BC","timestamp":"2021-03-11T10:59:13.425947442Z","signature":"jA0+R+y4tzpov4qPEHhOOI1rsm/uma7qukpTEPYA5VLMcnvd93VATuehWmf/R5r95rkWwP46ZUUjoj+U7OBfCA=="},{"block_id_flag":2,"validator_address":"E354428AB16927EBBC3AC4036D8D25B59A47495B","timestamp":"2021-03-11T10:59:13.461404024Z","signature":"7+Rvqw9guBF/ET0TQwc1TRZGzqG0iIcr4/aKQIJ8+T5/dJlFQsn1uktaTpg/jLa4zKoTqXDZm8jUiuLPZUVyCg=="}]}}}\n')),(0,o.kt)("h4",{id:"after"},"After"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'provenanced  --testnet q block | jq ".block.last_commit.height"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"25923"\n')))}u.isMDXComponent=!0},4322:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/faucet-ae333710984b4e7bf2e47f15aa362251.png"}}]);