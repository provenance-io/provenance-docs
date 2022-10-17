"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[3889],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),b=o,g=l["".concat(s,".").concat(b)]||l[b]||u[b]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={description:"running a mainnet node for pio-mainnet-1"},i="Running a mainnet node",c={unversionedId:"pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",id:"pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",title:"Running a mainnet node",description:"running a mainnet node for pio-mainnet-1",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1",slug:"/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",draft:!1,tags:[],version:"current",frontMatter:{description:"running a mainnet node for pio-mainnet-1"},sidebar:"docs",previous:{title:"Configure a Sentry",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry"},next:{title:"Using Provenanced",permalink:"/provenance-docs/docs/pb/blockchain/using-provenance/"}},s={},d=[],p={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-mainnet-node"},"Running a mainnet node"),(0,o.kt)("p",null,"The steps for running mainnet are exactly the same as testnet except that the github repo is here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/mainnet"},"https://github.com/provenance-io/mainnet")," and the chain id is ",(0,o.kt)("inlineCode",{parentName:"p"},"pio-mainnet-1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"Step 1:download the latest quickysync via https://provenance.io/quicksync and latest provenanced version.\nAt the time of writing this document latest version on mainnet was v1.7.6.\nDownload release from https://github.com/provenance-io/provenance/releases/\nFor e.g for version v1.7.6 url is https://github.com/provenance-io/provenance/releases/tag/v1.7.6\nStep 2:Untar data directory from the quicksync download and replacing the untarred data directory to $PIO_HOME/data\nStep 3: Run the below commands\nexport PIO_HOME=~/.provenanced // or directory of your choosing.\nprovenanced init choose-a-moniker --chain-id pio-mainnet-1\ncurl https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json> genesis.json\nmv genesis.json $PIO_HOME/config\nStep 4:Change config.toml to have the db-backend set to `cleveldb` \n```# Database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb\n# * goleveldb (github.com/syndtr/goleveldb - most popular implementation)\n#   - pure go\n#   - stable\n# * cleveldb (uses levigo wrapper)\n#   - fast\n#   - requires gcc\n#   - use cleveldb build tag (go build -tags cleveldb)\n# * boltdb (uses etcd's fork of bolt - github.com/etcd-io/bbolt)\n#   - EXPERIMENTAL\n#   - may be faster is some use-cases (random reads - indexer)\n#   - use boltdb build tag (go build -tags boltdb)\n# * rocksdb (uses github.com/tecbot/gorocksdb)\n#   - EXPERIMENTAL\n#   - requires gcc\n#   - use rocksdb build tag (go build -tags rocksdb)\n# * badgerdb (uses github.com/dgraph-io/badger)\n#   - EXPERIMENTAL\n#   - use badgerdb build tag (go build -tags badgerdb)\ndb_backend = \"cleveldb```\nStep 5: provenanced start --p2p.seeds 4bd2fb0ae5a123f1db325960836004f980ee09b4@seed-0.provenance.io:26656, 048b991204d7aac7209229cbe457f622eed96e5d@seed-1.provenance.io:26656 --x-crisis-skip-assert-invariants\n")))}u.isMDXComponent=!0}}]);