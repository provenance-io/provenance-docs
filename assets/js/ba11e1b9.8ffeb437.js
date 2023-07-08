"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6262],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},i="Funding",s={unversionedId:"learn/provenance-applications/loan-origination-system-los/funding",id:"learn/provenance-applications/loan-origination-system-los/funding",title:"Funding",description:"Figure will fund a loan at the time of onboarding using stablecoin issued by an Omnibus Bank. When the Omnibus Bank receives funds from the originator, it mints a corresponding amount of stablecoin into a Marker account representing the originator\u2019s funding source. Loans are funded by transferring stablecoin to Omnibus Bank's Marker account with an identifier representing the borrower\u2019s fiat bank information. Next, the Omnibus Bank will convert the borrower\u2019s coin to fiat and send funds to the borrower\u2019s bank account. The stablecoin used is burned in the process of conversion to fiat.",source:"@site/docs/learn/provenance-applications/loan-origination-system-los/funding.md",sourceDirName:"learn/provenance-applications/loan-origination-system-los",slug:"/learn/provenance-applications/loan-origination-system-los/funding",permalink:"/docs/learn/provenance-applications/loan-origination-system-los/funding",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l},d="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"funding"},"Funding"),(0,o.kt)("p",null,"Figure will fund a loan at the time of onboarding using stablecoin issued by an Omnibus Bank. When the Omnibus Bank receives funds from the originator, it mints a corresponding amount of stablecoin into a Marker account representing the originator\u2019s funding source. Loans are funded by transferring stablecoin to Omnibus Bank's Marker account with an identifier representing the borrower\u2019s fiat bank information. Next, the Omnibus Bank will convert the borrower\u2019s coin to fiat and send funds to the borrower\u2019s bank account. The stablecoin used is burned in the process of conversion to fiat."),(0,o.kt)("p",null,"Example Code - fund a loan using stablecoin on Provenance Blockchain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun transferCoin(denom: String, amount: Int, toAddress: String, memo: String) =\n        pbClient().estimateTx {\n            prepare { this.banks.transferFunds(toAddress, listOf(Coin(denom, amount.toString()))) }\n        }.let {\n            val gasFeePair = adjustGasEstimates(it)\n            log.info("Transfer: $amount $denom from keystone ID: ${keystone.provenanceConfig.memberUuid()} " +\n                    "address: ${keystone.address()} index: ${keystone.addressIndex()} to address: $toAddress memo: $memo " +\n                    "est gas: ${gasFeePair.first} est txFees: ${gasFeePair.second}")\n            pbClient().runTx(gas = gasFeePair.first, fees = listOf(Coin(Denom.vspn.name, gasFeePair.second)), memo = memo) {\n                this.banks.transferFunds(toAddress, listOf(Coin(denom, amount.toString())))\n            }\n        }\n\nfun adjustGasEstimates(gasEstimate: GasEstimates): Pair<String, String> =\n        gasEstimate.total.toBigDecimal().times(GAS_AND_FEE_ADJUSTMENT)\n                .setScale(0, RoundingMode.HALF_UP).let { gas ->\n                    val fees = gas.times(FEE_PERCENTAGE).setScale(0, RoundingMode.HALF_UP)\n                    Pair(\n                            gas.toLong().toString(),\n                            fees.toLong().toString()\n                    )\n                }\n')),(0,o.kt)("p",null,"Throughout the funding process, additional BlockVault contracts are invoked to save funding-related metadata to the scope."))}f.isMDXComponent=!0}}]);