"use strict";(self.webpackChunkxcpdoc=self.webpackChunkxcpdoc||[]).push([[9712],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Counterwallet notes"},l=void 0,u={unversionedId:"wallets/counterwallet-notes",id:"wallets/counterwallet-notes",title:"Counterwallet notes",description:"More on multiple Counterwallet servers",source:"@site/docs/wallets/counterwallet-notes.md",sourceDirName:"wallets",slug:"/wallets/counterwallet-notes",permalink:"/Documentation/docs/wallets/counterwallet-notes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wallets/counterwallet-notes.md",tags:[],version:"current",frontMatter:{title:"Counterwallet notes"},sidebar:"wallets",previous:{title:"Creating an Armory Offline Wallet for Cold Storage",permalink:"/Documentation/docs/wallets/counterwallet-tutorials/create-armory-addresses"}},c=[{value:"More on multiple Counterwallet servers",id:"more-on-multiple-counterwallet-servers",children:[],level:2},{value:"Counterwallet MultiAPI specifics",id:"counterwallet-multiapi-specifics",children:[{value:"multiAPIFailover for Read API (<code>get_</code>) Operations",id:"multiapifailover-for-read-api-get_-operations",children:[],level:3},{value:"multiAPIConsensus for Action/Write (<code>create_</code>) Operations",id:"multiapiconsensus-for-actionwrite-create_-operations",children:[],level:3},{value:"multiAPINewest for Redundant storage",id:"multiapinewest-for-redundant-storage",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"more-on-multiple-counterwallet-servers"},"More on multiple Counterwallet servers"),(0,a.kt)("p",null,"For the time being, the Counterparty team itself operates the primary Counterwallet platform at ",(0,a.kt)("inlineCode",{parentName:"p"},"counterwallet.io"),". However, as Counterwallet is open source software, it is possible to host your own site with Counterwallet site (for your personal use, or as an offering to others), or to even host your own Counterwallet servers to use with your own Counterparty wallet implementation. The Counterparty team supports and encourages this kind of activity (as long as the servers are secure), as it aids with increasing decentralization."),(0,a.kt)("p",null,"Also note that due to the nature of Counterwallet being a deterministic wallet, users using one Counterwallet platform (i.e. the official one, for instance) have the flexibility to start using a different Counterwallet platform instead at any time, and as funds (i.e. private keys) are not stored on the server in any fashion, they will be able to see their funds on either. (Note that the only thing that will not migrate are saved preferences, such as address aliases, the theme setting, etc.)"),(0,a.kt)("h2",{id:"counterwallet-multiapi-specifics"},"Counterwallet MultiAPI specifics"),(0,a.kt)("p",null,'Counterwallet utilizes a sort of a "poor man\'s load balancing/failover" implementation called multiAPI (and implemented\n',(0,a.kt)("a",{parentName:"p",href:"https://github.com/CounterpartyXCP/counterwallet/blob/master/src/js/util.api.js"},"here"),"). multiAPI can operate in a number of fashions."),(0,a.kt)("h3",{id:"multiapifailover-for-read-api-get_-operations"},"multiAPIFailover for Read API (",(0,a.kt)("inlineCode",{parentName:"h3"},"get_"),") Operations"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"multiAPIFailover")," functionality is currently used for all read API operations. In this model, the first Federated Node\non the shuffled list is called for the data, and if it returns an error or the request times out, the second one on the\nlist is called, and so on. The result of the first server to successfully return are used."),(0,a.kt)("p",null,'Here, a "hacked" server could be modified to return bogus data. As (until being discovered) the server would be in the\nshuffled list, some clients may end up consulting it. However, as this functionality is essentially for data queries only,\nthe worse case result is that a Counterwallet client is shown incorrect/modified data which leads to misinformed actions\non the user\'s behalf. Moreover, the option always exists to move all read-queries to use multiAPIConsensus in the future should the need arise.'),(0,a.kt)("h3",{id:"multiapiconsensus-for-actionwrite-create_-operations"},"multiAPIConsensus for Action/Write (",(0,a.kt)("inlineCode",{parentName:"h3"},"create_"),") Operations"),(0,a.kt)("p",null,"Based on this multiAPI capability, the wallet itself consults more than one of these Federated Nodes via consensus especially\nfor all ",(0,a.kt)("inlineCode",{parentName:"p"},"create_"),"-type operations. For example, if you send XCP, ",(0,a.kt)("inlineCode",{parentName:"p"},"counterparty-server")," on each server is still composing and sending\nback the unsigned raw transaction, but for data security, it compares the results returned from all servers, and will\nonly sign and broadcast (both client-side) if all the results match). This is known as ",(0,a.kt)("em",{parentName:"p"},"multiAPIConsensus"),"."),(0,a.kt)("p",null,"The ultimate goal here is to have a federated net of semi-trusted backend servers not tied to any one country, provider, network or\noperator/admin. Through requiring consensus on the unsigned transactions returned for all ",(0,a.kt)("inlineCode",{parentName:"p"},"create_")," operations, 'semi-trust'\non a single server basis leads to an overall trustworthy network. Worst case, if backend server is hacked and owned\n(and the ",(0,a.kt)("inlineCode",{parentName:"p"},"counterparty-server")," code modified), then you may get some invalid read results, but it won't be rewriting your XCP send\ndestination address, for example. The attackers would have to hack the code on every single server in the same exact\nway, undetected, to do that."),(0,a.kt)("p",null,"Moreover, the Counterwallet web client contains basic transaction validation code that will check that any unsigned Bitcoin\ntransaction returned from a Counterblock Federated Node contains expected inputs and outputs. This provides further\nprotection against potential attacks."),(0,a.kt)("p",null,'multiAPIConsensus actually helps discover any potential "hacked" servers as well, since a returned consensus set with\na divergent result will be rejected by the client, and thus trigger an examination of the root cause by the team.'),(0,a.kt)("h3",{id:"multiapinewest-for-redundant-storage"},"multiAPINewest for Redundant storage"),(0,a.kt)("p",null,"In the same way, these multiple servers are used to provide redundant storage of client-side preferences, to ensure we\nhave no single point of failure. In the case of the stored preferences for instance, when retrieved on login, the data from all servers\nis taken in, and the newest result is used. This ",(0,a.kt)("em",{parentName:"p"},"multiAPINewest"),' functionality effectively makes a query across all available\nFederated Nodes, and chooses the newest result (based on a "last updated"-type timestamp).'),(0,a.kt)("p",null,'Note that with this, a "hacked" server could be modified to always return the latest timestamp, so that its results\nwere used. However, wallet preferences (and other data stored via this functionality) is non-sensitive, and thus user\'s\nfunds would not be at risk before the hacked server could be discovered and removed.'))}p.isMDXComponent=!0}}]);