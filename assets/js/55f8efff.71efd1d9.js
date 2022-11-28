"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2779],{3905:(e,n,o)=>{o.d(n,{Zo:()=>h,kt:()=>d});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},h=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=l(o),d=a,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||c;return o?t.createElement(k,i(i({ref:n},h),{},{components:o})):t.createElement(k,i({ref:n},h))}));function d(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=o.length,i=new Array(c);i[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var l=2;l<c;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9242:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=o(7462),a=(o(7294),o(3905));const c={},i="Blockchain FAQ",r={unversionedId:"pb/faq/blockchain-faq",id:"pb/faq/blockchain-faq",title:"Blockchain FAQ",description:"What\u2019s the difference between Provenance Blockchain, the Cosmos Network, and the Cosmos Hub?",source:"@site/docs/pb/faq/blockchain-faq.md",sourceDirName:"pb/faq",slug:"/pb/faq/blockchain-faq",permalink:"/provenance-docs/docs/pb/faq/blockchain-faq",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Ecosystem FAQ",permalink:"/provenance-docs/docs/pb/faq/ecosystem-faq"},next:{title:"Hash Utility Token FAQ",permalink:"/provenance-docs/docs/pb/faq/hash-utility-token-faq"}},s={},l=[{value:'What\u2019s the difference between Provenance Blockchain, the Cosmos Network, and the Cosmos Hub? <a id="whats-the-difference-between-provenance-the-cosmos-network-and-the-cosmos-hub"></a>',id:"whats-the-difference-between-provenance-blockchain-the-cosmos-network-and-the-cosmos-hub-",level:2},{value:'On what consensus algorithm does Provenance Blockchain run? <a id="on-what-consensus-algorithm-does-provenance-run"></a>',id:"on-what-consensus-algorithm-does-provenance-blockchain-run-",level:2},{value:'Can I store big files on the blockchain? <a id="how-can-i-store-big-files-on-the-blockchain"></a>',id:"can-i-store-big-files-on-the-blockchain-",level:2},{value:'Is Provenance Blockchain based on Bitcoin? <a id="is-provenance-based-on-bitcoin"></a>',id:"is-provenance-blockchain-based-on-bitcoin-",level:2},{value:'Is Provenance Blockchain based on Ethereum 2.0? <a id="is-provenance-based-on-ethereum-2-0"></a>',id:"is-provenance-blockchain-based-on-ethereum-20-",level:2},{value:'Is Provenance Blockchain based on Cosmos/Tendermint? <a id="is-provenance-based-on-cosmos-tendermint"></a>',id:"is-provenance-blockchain-based-on-cosmostendermint-",level:2},{value:'What makes a Provenance Blockchain instance? <a id="what-makes-a-provenance-blockchain-instance"></a>',id:"what-makes-a-provenance-blockchain-instance-",level:2}],h={toc:l};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blockchain-faq"},"Blockchain FAQ"),(0,a.kt)("h2",{id:"whats-the-difference-between-provenance-blockchain-the-cosmos-network-and-the-cosmos-hub-"},"What\u2019s the difference between Provenance Blockchain, the Cosmos Network, and the Cosmos Hub? ",(0,a.kt)("a",{id:"whats-the-difference-between-provenance-the-cosmos-network-and-the-cosmos-hub"})),(0,a.kt)("p",null,"The Cosmos Network is a network of heterogeneous blockchains connected via the Cosmos Hub ","(","i.e. a router",")"," and a standard communication layer called the Inter-Blockchain Communication protocol ","(","i.e. TCP/IP",")","."),(0,a.kt)("p",null,"The Cosmos Hub was one of the first blockchains to be launched on the Cosmos Network. It acts as a router that facilitates token transactions between future Cosmos blockchains. To ensure security and to prevent double spending, the Cosmos Hub keeps track of the state of all connected blockchains. Its native utility-token is the ATOM."),(0,a.kt)("p",null,"The Provenance Blockchain is built with the Cosmos SDK and is therefore an application-specific Cosmos blockchain. Provenance Blockchain\u2019s blockchain is constructed with specific modules that enable the Provenance Blockchain ecosystem to support sophisticated DeFi-applications. Provenance Blockchain\u2019s native utility token is called Hash."),(0,a.kt)("h2",{id:"on-what-consensus-algorithm-does-provenance-blockchain-run-"},"On what consensus algorithm does Provenance Blockchain run? ",(0,a.kt)("a",{id:"on-what-consensus-algorithm-does-provenance-run"})),(0,a.kt)("p",null,"The Provenance Blockchain uses Tendermint consensus algorithm and BPoS ","(","Bonded Proof of Stake",")"," to secure transactions."),(0,a.kt)("h2",{id:"can-i-store-big-files-on-the-blockchain-"},"Can I store big files on the blockchain? ",(0,a.kt)("a",{id:"how-can-i-store-big-files-on-the-blockchain"})),(0,a.kt)("p",null,"The size of the blocks on the Provenance Blockchain is limited to 22020096 bytes or about 20MB."),(0,a.kt)("h2",{id:"is-provenance-blockchain-based-on-bitcoin-"},"Is Provenance Blockchain based on Bitcoin? ",(0,a.kt)("a",{id:"is-provenance-based-on-bitcoin"})),(0,a.kt)("p",null,"No. Bitcoin is a different blockchain technology."),(0,a.kt)("h2",{id:"is-provenance-blockchain-based-on-ethereum-20-"},"Is Provenance Blockchain based on Ethereum 2.0? ",(0,a.kt)("a",{id:"is-provenance-based-on-ethereum-2-0"})),(0,a.kt)("p",null,"No. Ethereum is a different blockchain technology."),(0,a.kt)("h2",{id:"is-provenance-blockchain-based-on-cosmostendermint-"},"Is Provenance Blockchain based on Cosmos/Tendermint? ",(0,a.kt)("a",{id:"is-provenance-based-on-cosmos-tendermint"})),(0,a.kt)("p",null,"Yes.The Provenance Blockchain network is built with the Cosmos SDK and therefore fully implements the Cosmos/Tendermint interfaces, RPCs, protocols, and consensus mechanism."),(0,a.kt)("h2",{id:"what-makes-a-provenance-blockchain-instance-"},"What makes a Provenance Blockchain instance? ",(0,a.kt)("a",{id:"what-makes-a-provenance-blockchain-instance"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," is the name of the Provenance Blockchain network. It is both the Provenance Blockchain Daemon and command-line interface ","(","CLI",")",". It runs a full node of the Provenance Blockchain application. ",(0,a.kt)("inlineCode",{parentName:"p"},"provenanced")," is built on the Cosmos SDK using the following modules:"),(0,a.kt)("p",null,"x/auth: Accounts and signatures."),(0,a.kt)("p",null,"x/auth/ante"),(0,a.kt)("p",null,"x/bank: Token transfers."),(0,a.kt)("p",null,"x/capability"),(0,a.kt)("p",null,"x/crisis"),(0,a.kt)("p",null,"x/distribution: Fee distribution logic."),(0,a.kt)("p",null,"x/evidence"),(0,a.kt)("p",null,"x/genutil"),(0,a.kt)("p",null,"x/gov: Governance logic."),(0,a.kt)("p",null,"x/ibc: Inter-blockchain communication."),(0,a.kt)("p",null,"x/mint: Inflation logic."),(0,a.kt)("p",null,"x/params: Handles app-level parameters."),(0,a.kt)("p",null,"x/slashing: Slashing logic."),(0,a.kt)("p",null,"x/staking: Staking logic."),(0,a.kt)("p",null,"x/upgrade"),(0,a.kt)("p",null,"These Cosmos SDK modules are augmented by the following Provenance Blockchain custom module implementations:"),(0,a.kt)("p",null,"x/attribute: Tagging addresses with information."),(0,a.kt)("p",null,"x/marker: Value and ownership structures."),(0,a.kt)("p",null,"x/metadata: NFT and asset-backed contract agreements."),(0,a.kt)("p",null,"x/name: Human readable address c","`","ross-reference."),(0,a.kt)("p",null,"x/wasm: Smart Contracts."),(0,a.kt)("p",null,"Note: the list of those modules may change with future releases. For an up-to-date list refer to the following: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance/blob/main/app/app.go"},"https://github.com/provenance-io/provenance/blob/main/app/app.go")),(0,a.kt)("p",null,"In addition to the modules, so-called ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," configuration files are required in which service rates are set and where references to seed-node are used to sync the blockchain state with other Provenance Blockchain instances."))}u.isMDXComponent=!0}}]);