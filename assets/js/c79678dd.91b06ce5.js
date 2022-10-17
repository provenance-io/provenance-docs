"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=s,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(u,o(o({ref:t},h),{},{components:a})):n.createElement(u,o({ref:t},h))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const r={},o="Assets",i={unversionedId:"discover/explorer/ui-walkthrough/assets",id:"discover/explorer/ui-walkthrough/assets",title:"Assets",description:"Assets are typically known as markers or tokens. They are the representation of coins on the blockchain. An asset can contain just itself, or other assets and NFTs. In more abstract terms, if an asset is a fund, that fund can contain shares of other funds and distinct non-fungible assets.&#x20;",source:"@site/docs/discover/explorer/ui-walkthrough/assets.md",sourceDirName:"discover/explorer/ui-walkthrough",slug:"/discover/explorer/ui-walkthrough/assets",permalink:"/provenance-docs/docs/discover/explorer/ui-walkthrough/assets",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Listview",id:"listview",level:2},{value:"Detail",id:"detail",level:2},{value:"Managing Accounts",id:"managing-accounts",level:3},{value:"Asset Holders",id:"asset-holders",level:3},{value:"Transactions",id:"transactions",level:3}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assets"},"Assets"),(0,s.kt)("p",null,"Assets are typically known as ",(0,s.kt)("a",{parentName:"p",href:"../../../modules/marker-module.md"},"markers")," or tokens. They are the representation of coins on the blockchain. An asset can contain just itself, or other assets and ",(0,s.kt)("a",{parentName:"p",href:"/provenance-docs/docs/discover/explorer/ui-walkthrough/forthcoming/nfts"},"NFTs"),". In more abstract terms, if an asset is a fund, that fund can contain shares of other funds and distinct non-fungible assets."," "),(0,s.kt)("h2",{id:"listview"},"Listview"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A listview of assets on the blockchain",src:a(5389).Z,width:"2720",height:"1110"})),(0,s.kt)("p",null,"The listview shows a paginated list of assets on the blockchain, sorted by ",(0,s.kt)("strong",{parentName:"p"},"Last Tx")," descending. This means that the most commonly used assets will show at the top of the list."),(0,s.kt)("p",null,"Information to note:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Name"),": the common name for the asset. This is determined by the asset's metadata, ie ",(0,s.kt)("inlineCode",{parentName:"li"},"nhash")," is more commonly known as ",(0,s.kt)("inlineCode",{parentName:"li"},"hash")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Total Supply"),": the total circulating supply sitting in regular accounts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Holding Account"),": the escrow account for the asset"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Marker Type"),":"," ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Coin -> a marker that represents a standard fungible coin (default)"),(0,s.kt)("li",{parentName:"ul"},"Restricted -> a marker that represents a denom with ",(0,s.kt)("inlineCode",{parentName:"li"},"send_enabled = false")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Mintable"),": whether the asset can be minted through a regular transaction"," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Last Tx"),": the latest transaction timestamp that applied to the asset"," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Age"),": how old the latest transaction is in real time")),(0,s.kt)("h2",{id:"detail"},"Detail"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Header asset information",src:a(4017).Z,width:"2744",height:"744"})),(0,s.kt)("p",null,"Information to note:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Asset Name"),": the common name for the asset. This is determined by the asset's metadata, ie ",(0,s.kt)("inlineCode",{parentName:"li"},"nhash")," is more commonly known as ",(0,s.kt)("inlineCode",{parentName:"li"},"hash")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Min Unit")," / ",(0,s.kt)("strong",{parentName:"li"},"Decimal"),": the minimum unit is the smallest unit of the asset. When you have a fraction of the asset, it is calculated in terms of the minimum unit. Decimal is how many decimal places from the minimum unit to the asset unit, ie from ",(0,s.kt)("inlineCode",{parentName:"li"},"nhash")," to ",(0,s.kt)("inlineCode",{parentName:"li"},"hash"),", its 9 decimal places, where ",(0,s.kt)("inlineCode",{parentName:"li"},"1000000000 nhash = 1 hash")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Holders"),": how many addresses hold the asset"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Fungible Tokens"),": how many distinct fungible tokens the asset holds"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Non-Fungible Tokens"),": how many non-fungible tokens the asset holds")),(0,s.kt)("h3",{id:"managing-accounts"},"Managing Accounts"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"manage accounts page",src:a(4951).Z,width:"2220",height:"540"})),(0,s.kt)("p",null,"An asset can be managed by governance alone, or additional addresses having specific permissions on the asset."," "),(0,s.kt)("h3",{id:"asset-holders"},"Asset Holders"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"asset holders page",src:a(71).Z,width:"2726",height:"926"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Work in progress")),(0,s.kt)("p",null,"The asset holder list, although no names are attached to the addresses, shows which accounts hold a larger portion of the asset itself."),(0,s.kt)("h3",{id:"transactions"},"Transactions"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A list of transactions that perform administrative actions on the asset",src:a(1818).Z,width:"2732",height:"880"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A list of transactions that perform transfer operations associated with the asset",src:a(9585).Z,width:"2726",height:"736"})),(0,s.kt)("p",null,"Two sets of transaction lists show administrative actions performed on the asset, and transfer operations that pertain to the movement of the asset. These can be useful to show what types of operations are commonly performed around the asset."))}p.isMDXComponent=!0},1818:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/admin-actions-c7718260fc2bc7e1d5dc20bfc307758c.png"},4017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asset-detail-599857d2e1cbc0e8f328333dad118de5.png"},71:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asset-holders-1e7a0549df8aa9a105b21a063f2d49d9.png"},5389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asset-listview-ad1a99416fde9f5bc893ec389c9b88ea.png"},4951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/manage-accounts-57d6425f238829ffc0e35ba15a89c18b.png"},9585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transfer-operations-fcb3c61157ca912daf8129adce0d8e93.png"}}]);