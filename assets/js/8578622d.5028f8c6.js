"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9592],{62049:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(85893),t=s(11151);const i={},d="Transfers",o={id:"sdk/marker/transfers",title:"Transfers",description:"There are some complex interactions involved with transfers of restricted coins.",source:"@site/docs/sdk/marker/12_transfers.md",sourceDirName:"sdk/marker",slug:"/sdk/marker/transfers",permalink:"/docs/sdk/marker/transfers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Authorization",permalink:"/docs/sdk/marker/authorization"},next:{title:"x/metadata",permalink:"/docs/sdk/metadata/"}},a={},c=[{value:"General",id:"general",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Transfer Permission",id:"transfer-permission",level:3},{value:"Forced Transfers",id:"forced-transfers",level:3},{value:"Required Attributes",id:"required-attributes",level:3},{value:"Individuality",id:"individuality",level:3},{value:"Deposits",id:"deposits",level:3},{value:"Bypass Accounts",id:"bypass-accounts",level:3},{value:"Send Restrictions",id:"send-restrictions",level:2},{value:"Flowcharts",id:"flowcharts",level:3},{value:"The SendRestrictionFn",id:"the-sendrestrictionfn",level:4},{value:"validateSendDenom",id:"validatesenddenom",level:4},{value:"MsgTransferRequest",id:"msgtransferrequest",level:4},{value:"Quarantine Complexities",id:"quarantine-complexities",level:3},{value:"Sending Restricted Coins to a Quarantined Account",id:"sending-restricted-coins-to-a-quarantined-account",level:4},{value:"Accepting Quarantined Restricted Coins",id:"accepting-quarantined-restricted-coins",level:4},{value:"Successful Quarantine and Accept Sequence",id:"successful-quarantine-and-accept-sequence",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"transfers",children:"Transfers"}),"\n",(0,r.jsx)(n.p,{children:"There are some complex interactions involved with transfers of restricted coins."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#general",children:"General"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#definitions",children:"Definitions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#transfer-permission",children:"Transfer Permission"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#forced-transfers",children:"Forced Transfers"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#required-attributes",children:"Required Attributes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#individuality",children:"Individuality"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#deposits",children:"Deposits"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#bypass-accounts",children:"Bypass Accounts"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#send-restrictions",children:"Send Restrictions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#flowcharts",children:"Flowcharts"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#quarantine-complexities",children:"Quarantine Complexities"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.p,{children:["Accounting of restricted coins is handled by the bank module. Restricted funds can be moved using the bank module's ",(0,r.jsx)(n.code,{children:"MsgSend"})," or ",(0,r.jsx)(n.code,{children:"MsgMutliSend"}),". They can also be moved using the marker module's ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["During such transfers several things are checked using a ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," injected into the bank module. This restriction is applied in almost all instances when funds are being moved between accounts. The exceptions are delegations, undelegations, minting, burning, and marker withdrawals. A ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," also bypasses the ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," in order to include the ",(0,r.jsx)(n.code,{children:"admin"})," account in the logic."]}),"\n",(0,r.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsx)(n.h3,{id:"transfer-permission",children:"Transfer Permission"}),"\n",(0,r.jsxs)(n.p,{children:["One permission that can be granted to an address is ",(0,r.jsx)(n.code,{children:"transfer"}),".  The ",(0,r.jsx)(n.code,{children:"transfer"}),' permission is granted to accounts that represent a "Transfer Agent" or "Transfer Authority" for restricted marker tokens. An address with ',(0,r.jsx)(n.code,{children:"transfer"})," permission can utilize ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," to move restricted funds from one account to another. If the marker allows forced transfer, the source account can be any account, otherwise, it must be the admin's own account."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MsgSend"})," and ",(0,r.jsx)(n.code,{children:"MsgMultiSend"})," can also be used by an address with ",(0,r.jsx)(n.code,{children:"transfer"})," permission to move funds out of their own account."]}),"\n",(0,r.jsx)(n.h3,{id:"forced-transfers",children:"Forced Transfers"}),"\n",(0,r.jsxs)(n.p,{children:["A restricted coin marker can be configured to allow forced transfers. If allowed, an account with ",(0,r.jsx)(n.code,{children:"transfer"})," permission can use a ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," to transfer the restricted coins out of almost any account to another. Forced transfer cannot be used to move restricted coins out of module accounts or smart contract accounts, though."]}),"\n",(0,r.jsx)(n.h3,{id:"required-attributes",children:"Required Attributes"}),"\n",(0,r.jsx)(n.p,{children:"Required attributes allow a marker Transfer Authority to define a set of account attestations created with the name/attribute modules to certify an account as an approved holder of the token.  Accounts that possess all of the required attributes are considered authorized by the Transfer Authority to receive the token from normal bank send operations without a specific Transfer Authority approval. Required attributes are only supported on restricted markers."}),"\n",(0,r.jsxs)(n.p,{children:["For example, say account A has some restricted coins of a marker that has required attributes. Also say account B has all of those required attributes, and account C does not. Account A could use a ",(0,r.jsx)(n.code,{children:"MsgSend"})," to send those restricted coins to account B. However, account B could not send them to account C (unless B also has ",(0,r.jsx)(n.code,{children:"transfer"})," permission)."]}),"\n",(0,r.jsxs)(n.p,{children:["If a restricted coin marker does not have any required attributes defined, the only way the funds can be moved is by someone with ",(0,r.jsx)(n.code,{children:"transfer"})," permisison."]}),"\n",(0,r.jsx)(n.h3,{id:"individuality",children:"Individuality"}),"\n",(0,r.jsxs)(n.p,{children:["If multiple restricted coin denoms are being moved at once, each denom is considered separately.\nFor example, if the sender has ",(0,r.jsx)(n.code,{children:"transfer"})," permission on one of them, it does not also apply to the other(s)."]}),"\n",(0,r.jsx)(n.h3,{id:"deposits",children:"Deposits"}),"\n",(0,r.jsx)(n.p,{children:"A deposit is when any funds are being sent to a marker's account. The funds being sent do not have to be in the denom of the destination marker."}),"\n",(0,r.jsxs)(n.p,{children:["Whenever funds are being deposited into a marker, the sender must have ",(0,r.jsx)(n.code,{children:"deposit"})," permission on the target marker. If the funds to deposit are restricted coins, the sender also needs ",(0,r.jsx)(n.code,{children:"transfer"})," permission on the funds being moved; required attributes are not taken into account."]}),"\n",(0,r.jsx)(n.h3,{id:"bypass-accounts",children:"Bypass Accounts"}),"\n",(0,r.jsxs)(n.p,{children:["There are several hard-coded module account addresses that are given special consideration in the marker module's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authtypes.FeeCollectorName"})," - Allows paying fees with restricted coins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reward"})," - Allows reward programs to use restricted coins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"quarantine"})," - Allows quarantine and acceptance of quarantined coins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gov"})," - Allows deposits to have quarantined coins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"distribution"})," - Allows collection of delegation rewards in restricted coins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stakingtypes.BondedPoolName"})," - Allows delegation of restricted coins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stakingtypes.NotBondedPoolName"})," - Allows delegation of restricted coins."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"All of these are treated equally in the application of a marker's send restrictions."}),"\n",(0,r.jsx)(n.p,{children:"For restricted markers without required attributes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"toAddr"})," is a bypass account, the ",(0,r.jsx)(n.code,{children:"fromAddr"})," must have transfer authority."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"fromAddr"})," is a bypass account, it's assumed that the funds got where they currently are because someone with transfer authority got them there, so this transfer is allowed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For restricted markers with required attributes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"toAddr"})," is a bypass account, the transfer is allowed regardless of whether the ",(0,r.jsx)(n.code,{children:"fromAddr"})," has transfer authority. It's assumed that the next destination's attributes will be properly checked before allowing the funds to leave the bypass account."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"fromAddr"})," is a bypass account, the ",(0,r.jsx)(n.code,{children:"toAddr"})," must have the required attributes."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Bypass accounts are not considered during a ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"send-restrictions",children:"Send Restrictions"}),"\n",(0,r.jsxs)(n.p,{children:["The marker module injects a ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," into the bank module. This function is responsible for deciding whether any given transfer is allowed from the marker module's point of view. However, it is bypassed during a ",(0,r.jsx)(n.code,{children:"MsgTransfer"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"flowcharts",children:"Flowcharts"}),"\n",(0,r.jsx)(n.h4,{id:"the-sendrestrictionfn",children:"The SendRestrictionFn"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," uses the following flow."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:'%%{ init: { \'flowchart\': { \'curve\': \'monotoneY\'} } }%%\nflowchart TD\n    start[["SendRestrictionFn(Sender, Receiver, Amount)"]]\n    qhasbp{{"Does context have bypass?"}}\n    nextd["Get next Denom from Amount."]\n    vsd[["validateSendDenom(Sender, Receiver, Denom)"]]\n    isdok{{"Is Denom transfer allowed?"}}\n    mored{{"Does Amount have another Denom?"}}\n    ok(["Send allowed."])\n    style ok fill:#bbffaa,stroke:#1b8500,stroke-width:3px\n    denied(["Send denied."])\n    style denied fill:#ffaaaa,stroke:#b30000,stroke-width:3px\n    start --\x3e qhasbp\n    qhasbp ------\x3e|yes| ok\n    qhasbp -.->|no| denomloop\n    subgraph denomloop ["Denom Loop"]\n    isdok --\x3e|yes| mored\n    vsd --\x3e isdok\n    mored --\x3e|yes| nextd\n    nextd --\x3e vsd\n    end\n    mored -.->|no| ok\n    isdok -.->|no| denied\n\n    style denomloop fill:#bbffff\n    linkStyle 8 stroke:#b30000,color:#b30000\n    linkStyle 1,7 stroke:#1b8500,color:#1b8500\n'})}),"\n",(0,r.jsx)(n.h4,{id:"validatesenddenom",children:"validateSendDenom"}),"\n",(0,r.jsxs)(n.p,{children:["Each ",(0,r.jsx)(n.code,{children:"Denom"})," is checked using ",(0,r.jsx)(n.code,{children:"validateSendDenom"}),", which has this flow:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:'%%{ init: { \'flowchart\': { \'curve\': \'monotoneY\'} } }%%\nflowchart TD\n    start[["validateSendDenom(Sender, Receiver, Denom)"]]\n    qisrdep{{"Is Receiver a restricted coin marker account?"}}\n    qhasdep{{"Does Sender have Deposit\\non Receiver marker?"}}\n    qisrc{{"Is Denom a restricted coin?"}}\n    qisdeny{{"Is Sender on marker\'s deny list?"}}\n    qhastrans{{"Does Sender have\\ntransfer for Denom?"}}\n    qisdep{{"Is Receiver a marker account?"}}\n    qmhasattr{{"Does Denom have\\nrequired attributes?"}}\n    qissbp{{"Is Sender a\\nbypass account?"}}\n    qisrbp{{"Is Receiver a\\nbypass account?"}}\n    qrhasattr{{"Does Receiver have\\nthe required attributes?"}}\n    ok(["Denom transfer allowed."])\n    style ok fill:#bbffaa,stroke:#1b8500,stroke-width:3px\n    denied(["Send denied."])\n    style denied fill:#ffaaaa,stroke:#b30000,stroke-width:3px\n    start --\x3e qisrdep\n    qisrdep --\x3e|yes| qhasdep\n    qisrdep -.->|no| qisrc\n    qhasdep -.->|no| denied\n    qhasdep --\x3e|yes| qisrc\n    qisrc --\x3e|yes| qisdeny\n    qisrc -.->|no| ok\n    qisdeny --\x3e|yes| denied\n    qisdeny -.->|no| qhastrans\n    qhastrans -.->|no| qisdep\n    qhastrans --\x3e|yes| ok\n    qisdep --\x3e|yes| denied\n    qisdep -.->|no| qmhasattr\n    qmhasattr -.->|no| qissbp\n    qmhasattr --\x3e|yes| qisrbp\n    qissbp -..->|no| denied\n    qissbp ---\x3e|yes| ok\n    qisrbp -.->|no| qrhasattr\n    qisrbp --\x3e|yes| ok\n    qrhasattr -.->|no| denied\n    qrhasattr --\x3e|yes| ok\n\n    linkStyle 3,7,11,15,19 stroke:#b30000,color:#b30000\n    linkStyle 6,10,16,18,20 stroke:#1b8500,color:#1b8500\n'})}),"\n",(0,r.jsx)(n.h4,{id:"msgtransferrequest",children:"MsgTransferRequest"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," bypasses the ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," and applies its own logic. A ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," only allows for a single coin amount, i.e. there's only one ",(0,r.jsx)(n.code,{children:"Denom"})," to consider."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:'%%{ init: { \'flowchart\': { \'curve\': \'monotoneY\'} } }%%\nflowchart TD\n    start[["TransferCoin(Sender, Receiver, Admin)"]]\n    qisrc{{"Is Denom a restricted coin?"}}\n    qhast{{"Does Admin have transfer for Denom?"}}\n    qadminfrom{{"Does Sender == Admin?"}}\n    qallowft{{"Is forced transfer allowed for Denom?"}}\n    qauthz{{"Has Sender granted Admin\\npermission with authz?"}}\n    qmodacc{{"Is Sender a\\nmodule account?"}}\n    qblocked{{"Is Receiver an\\naddress blocked by\\nthe bank module?"}}\n    ok(["Transfer allowed."])\n    style ok fill:#bbffaa,stroke:#1b8500,stroke-width:3px\n    denied(["Transfer denied."])\n    style denied fill:#ffaaaa,stroke:#b30000,stroke-width:3px\n    start --\x3e qisrc\n    qisrc --\x3e|yes| qhast\n    qisrc -.->|no| denied\n    qhast --\x3e|yes| qadminfrom\n    qhast -.->|no| denied\n    qadminfrom --\x3e|yes| qblocked\n    qadminfrom -.->|no| qallowft\n    qallowft --\x3e|yes| qmodacc\n    qallowft -.->|no| qauthz\n    qmodacc -.->|no| qblocked\n    qmodacc --\x3e|yes| denied\n    qauthz --\x3e|yes| qblocked\n    qauthz -.->|no| denied\n    qblocked -.->|no| ok\n    qblocked --\x3e|yes| denied\n\n    linkStyle 2,4,10,12,14 stroke:#b30000,color:#b30000\n    linkStyle 13 stroke:#1b8500,color:#1b8500\n'})}),"\n",(0,r.jsx)(n.h3,{id:"quarantine-complexities",children:"Quarantine Complexities"}),"\n",(0,r.jsx)(n.p,{children:"There are some noteable complexities involving restricted coins and quarantined accounts."}),"\n",(0,r.jsx)(n.h4,{id:"sending-restricted-coins-to-a-quarantined-account",children:"Sending Restricted Coins to a Quarantined Account"}),"\n",(0,r.jsxs)(n.p,{children:["The marker module's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," is applied before the quarantine module's. So, when funds are being sent to a quarantined account, the marker module runs its check using the original ",(0,r.jsx)(n.code,{children:"Sender"})," and ",(0,r.jsx)(n.code,{children:"Receiver"})," (i.e. the ",(0,r.jsx)(n.code,{children:"Receiver"})," is not ",(0,r.jsx)(n.code,{children:"QFH"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"Receiver"})," is a quarantined account, we can assume that it is neither a marker, nor a bypass account. Then, assuming the ",(0,r.jsx)(n.code,{children:"Sender"})," is not on the deny list, the ",(0,r.jsx)(n.code,{children:"validateSendDenom"})," flow can be simplified to this for restricted coins."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:'%%{ init: { \'flowchart\': { \'curve\': \'monotoneY\'} } }%%\nflowchart LR\n    vsd[["validateSendDenom(Sender, Receiver, Denom)"]]\n    transq{{"Does Sender have\\ntransfer for Denom?"}}\n    mreqattr{{"Does Denom have\\nrequired attributes?"}}\n    treqattr{{"Does Receiver have\\nthose attributes?"}}\n    ok(["Denom transfer allowed."])\n    style ok fill:#bbffaa,stroke:#1b8500,stroke-width:3px\n    denied(["Send denied."])\n    style denied fill:#ffaaaa,stroke:#b30000,stroke-width:3px\n    transq --\x3e|yes| ok\n    transq -.->|no| mreqattr\n    mreqattr --\x3e|yes| treqattr\n    mreqattr -.->|no| denied\n    treqattr --\x3e|yes| ok\n    treqattr -.->|no| denied\n\n    linkStyle 3,5 stroke:#b30000,color:#b30000\n    linkStyle 0,4 stroke:#1b8500,color:#1b8500\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"Send"})," is allowed, and the ",(0,r.jsx)(n.code,{children:"Receiver"})," is a quarantined account, the quarantine module's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," will then change the ",(0,r.jsx)(n.code,{children:"Send"}),"'s destination to ",(0,r.jsx)(n.code,{children:"QFH"})," (the Quarantined-funds-holder account) and make a record of the transfer. The ",(0,r.jsx)(n.code,{children:"Send"})," then transfers funds from the ",(0,r.jsx)(n.code,{children:"Sender"})," to ",(0,r.jsx)(n.code,{children:"QFH"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The marker's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," should never have ",(0,r.jsx)(n.code,{children:"QFH"})," as a ",(0,r.jsx)(n.code,{children:"Receiver"}),". The only way this would happen is if ",(0,r.jsx)(n.code,{children:"MsgSend"})," is used to send funds directly to ",(0,r.jsx)(n.code,{children:"QFH"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," is used to transfer a restricted coin to a quarantined account, the standard ",(0,r.jsx)(n.code,{children:"MsgTransferRequest"})," logic is applied (bypassing the marker module's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"}),"). The quarantine module's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," is not bypassed, though, so the funds still go to the ",(0,r.jsx)(n.code,{children:"QFH"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"accepting-quarantined-restricted-coins",children:"Accepting Quarantined Restricted Coins"}),"\n",(0,r.jsxs)(n.p,{children:["Once funds have been sent to ",(0,r.jsx)(n.code,{children:"QFH"}),", the ",(0,r.jsx)(n.code,{children:"Receiver"})," will probably want to accept them, and have them sent to their account. They issue an ",(0,r.jsx)(n.code,{children:"Accept"})," to the quarantine module which utilizes the bank module's ",(0,r.jsx)(n.code,{children:"Send"})," functionality to try to transfer funds from ",(0,r.jsx)(n.code,{children:"QFH"})," to the ",(0,r.jsx)(n.code,{children:"Receiver"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"QFH"})," is a bypass account. Since ",(0,r.jsx)(n.code,{children:"Receiver"})," is a quarantined account, we can assume that it is neither a marker nor bypass account. So, the ",(0,r.jsx)(n.code,{children:"validateSendDenom"})," flow can be simplified to this for restricted coins."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:'%%{ init: { \'flowchart\': { \'curve\': \'monotoneY\'} } }%%\nflowchart LR\n    vsd[["validateSendDenom(Sender, Receiver, Denom)"]]\n    mreqattr{{"Does Denom have\\nrequired attributes?"}}\n    treqattr{{"Does Receiver have\\nthose attributes?"}}\n    ok(["Denom transfer allowed."])\n    style ok fill:#bbffaa,stroke:#1b8500,stroke-width:3px\n    denied(["Send denied."])\n    style denied fill:#ffaaaa,stroke:#b30000,stroke-width:3px\n    mreqattr --\x3e|yes| treqattr\n    mreqattr -.->|no| ok\n    treqattr --\x3e|yes| ok\n    treqattr -.->|no| denied\n\n    linkStyle 3 stroke:#b30000,color:#b30000\n    linkStyle 1,2 stroke:#1b8500,color:#1b8500\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"Send"})," is allowed, the requested funds are transferred from ",(0,r.jsx)(n.code,{children:"QFH"})," to ",(0,r.jsx)(n.code,{children:"Receiver"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"Send"})," is denied, the funds remain with ",(0,r.jsx)(n.code,{children:"QFH"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An important subtle part of this process is the rechecking of ",(0,r.jsx)(n.code,{children:"Receiver"})," attributes. It's possible for the initial send to be okay (causing funds to be quarantined), then later, during this ",(0,r.jsx)(n.code,{children:"Accept"}),", the send is not okay, and the quarantined funds are effectively locked with",(0,r.jsx)(n.code,{children:"QFH"})," until the ",(0,r.jsx)(n.code,{children:"Receiver"})," gets the required attributes."]}),"\n",(0,r.jsx)(n.p,{children:"If the marker does not have required attributes though, it's assumed that they were originally sent by someone with transfer authority, so they are allowed to continue from here too."}),"\n",(0,r.jsx)(n.h4,{id:"successful-quarantine-and-accept-sequence",children:"Successful Quarantine and Accept Sequence"}),"\n",(0,r.jsxs)(n.p,{children:["When restricted coin funds are sent to a quarantined account (1), the marker's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," is called using the original ",(0,r.jsx)(n.code,{children:"Sender"})," and ",(0,r.jsx)(n.code,{children:"Receiver"})," (2). Then, the quarantine's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," is called (4) which will return ",(0,r.jsx)(n.code,{children:"QFH"})," for the new destination (5). Funds are then transferred from ",(0,r.jsx)(n.code,{children:"Sender"})," to ",(0,r.jsx)(n.code,{children:"QFH"})," (6)."]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"Receiver"})," attempts to ",(0,r.jsx)(n.code,{children:"Accept"})," those quarantined funds (7), the marker's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," is called again, this time using ",(0,r.jsx)(n.code,{children:"QFH"})," (as the sender) and ",(0,r.jsx)(n.code,{children:"Receiver"})," (9). The quarantine's ",(0,r.jsx)(n.code,{children:"SendRestrictionFn"})," is bypassed (11), so the destination is not changed (12). Funds are then transferred from ",(0,r.jsx)(n.code,{children:"QFH"})," to ",(0,r.jsx)(n.code,{children:"Receiver"})," (13)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:"sequenceDiagram\n    autonumber\n    actor Sender\n    actor Receiver\n    participant Bank Module\n    participant Quarantine Module\n    participant Marker Restriction\n    participant Quarantine Restriction\n    participant QFH\n    Sender ->>+ Bank Module: Send(sender, receiver)\n    Bank Module ->>+ Marker Restriction: Is this send  from Sender to Receiver allowed?\n    Marker Restriction --\x3e>- Bank Module: Yes\n    Bank Module ->>+ Quarantine Restriction: Is Receiver quarantined?\n    Quarantine Restriction --\x3e>- Bank Module: Yes. Change destination to QFH.\n    Sender ->> QFH: Funds transferred from Sender to QFH.\n    deactivate Bank Module\n\n    Note over Sender,QFH: Some Time Later\n\n    Receiver ->>+ Quarantine Module: Accept(receiver, sender)\n    Quarantine Module ->> Bank Module: Send(QFH, receiver)\n    activate Bank Module\n    Bank Module ->>+ Marker Restriction: Is this send  from QFH to Receiver allowed?\n    Marker Restriction --\x3e>- Bank Module: Yes\n    Bank Module ->>+ Quarantine Restriction: Is Receiver quarantined?\n    Quarantine Restriction --\x3e>- Bank Module: Restriction bypassed. No change.\n    QFH ->> Receiver: Funds transferred from QFH to Receiver.\n    deactivate Bank Module\n    deactivate Quarantine Module\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>d});var r=s(67294);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);