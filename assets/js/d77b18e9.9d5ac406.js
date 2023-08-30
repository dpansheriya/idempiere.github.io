"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},r="Vocabulary",s={unversionedId:"basic-functional/vocabulary",id:"basic-functional/vocabulary",title:"Vocabulary",description:"Vocabulary}",source:"@site/docs/basic-functional/vocabulary.md",sourceDirName:"basic-functional",slug:"/basic-functional/vocabulary",permalink:"/docs/basic-functional/vocabulary",draft:!1,editUrl:"https://github.com/idempiere/idempiere.github.io/tree/main/docs/basic-functional/vocabulary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Purpose",permalink:"/docs/basic-functional/introduction"},next:{title:"Login",permalink:"/docs/basic-functional/login"}},l={},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Vocabulary"},"Vocabulary"),(0,o.kt)("p",null,"This page defines basic terms you should know when using iDempiere. Consider bookmarking this page for future reference."),(0,o.kt)("h1",{id:"tenant"},"Tenant Definition and Usage"),(0,o.kt)("p",null,"A Tenant (formerly known as Client) is a global consolidated collection of financial entities. iDempiere is multi-tenant. This means that completely separate groups of people can use the same instance of iDempiere for very different and unrelated purposes. Because different tenants are unrelated, they do not share any information with each other."),(0,o.kt)("p",null,"In a simple scenario where you are a sole proprietor, you will have a single financial entity (Organization) in a single tenant. In a more complicated scenario where you are a multi-national collection of financial entities, you will have multiple financial entities (Organizations) in a single tenant."),(0,o.kt)("h1",{id:"tenant-system"},"System Tenant"),(0,o.kt)("p",null,"The 'System' Tenant is a special tenant found in every instance of iDempiere. It holds the metadata used to define how iDempiere looks and functions."),(0,o.kt)("h1",{id:"organization"},"Organization"),(0,o.kt)("p",null,"An Organization is a legal, financial or taxation entity inside a Tenant. It is most commonly referred to as a 'set of books'. An organization owns all financial things of value. Said another way, all records written to the general ledger will always be associated with an organization."),(0,o.kt)("p",null,"Here are additional important details about the Organization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Organization belongs to a Tenant."),(0,o.kt)("li",{parentName:"ul"},"The Organization window contains a tree to help you structure the relationships between your organizations."),(0,o.kt)("li",{parentName:"ul"},"The Organization window has a Summary check box field."),(0,o.kt)("li",{parentName:"ul"},"Any organization whose Summary check box is checked is considered a 'summary organization'."),(0,o.kt)("li",{parentName:"ul"},"Any organization whose Summary check box is NOT checked is considered a 'transactional organization'."),(0,o.kt)("li",{parentName:"ul"},"Summary organizations are a financial consolidation point."),(0,o.kt)("li",{parentName:"ul"},"You cannot post directly against a summary organization. Instead, summary organizations represent the sum of all postings against the transactional organizations that link to it via the Organization window tree.")),(0,o.kt)("p",null,"Organizations inside the same Tenant can share information. There exists a special Organization named '",(0,o.kt)("em",{parentName:"p"},"' or commonly referred to as \"star\". While the '"),"' Organization is a real organization, it is commonly used to share data by convention. Said another way, if you wish to make a given record available to all users and records in your Tenant, assign that record the '*' Organization."),(0,o.kt)("h1",{id:"business-partner"},"Business Partner"),(0,o.kt)("p",null,"A Business Partner is someone or something you transact with financially. Any given Business Partners can be flagged as either or all of the following: customer, vendor, employee, internal or external sales representative, or prospect. This means you no longer need to maintain duplicate records when a business partner is both a customer and a vendor."),(0,o.kt)("h1",{id:"contact"},"Contact"),(0,o.kt)("p",null,"A Contact is someone or something you communicate with. Contacts are most commonly found in the Business Partner window."),(0,o.kt)("h1",{id:"user"},"User"),(0,o.kt)("p",null,"A User is a Contact that has the additional ability to log into iDempiere. Said another way, a User is a Contact, and a Contact is a User only if they can log into iDempiere. Users are most commonly found in the User window."),(0,o.kt)("p",null,"Note that the User window includes all Users and Contacts for a given Tenant."),(0,o.kt)("h1",{id:"role"},"Role"),(0,o.kt)("p",null,"A Role defines the attributes and abilities of a User logging into an iDempiere session. A User can have many Roles. A User must choose one (and only one) Role during the login process. The User's iDempiere experience is defined by the chosen role during login."),(0,o.kt)("h1",{id:"charge"},"Charge"),(0,o.kt)("p",null,"A Charge is a facade for accounts in the Chart of Accounts (Account Element window => Element Value subtab). Charges are used in transactional windows such as the Invoice (Vendor) window and Physical Inventory window to code value to given accounts."),(0,o.kt)("p",null,"It is commonly asked why the concept of a Charge exists. Asked another way, why not let the user simply choose the account directly? There are important reasons the Charge exists:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Charges give ERP Administrators the ability to provide meaningful names to actions an operator might perform where the operator would have no knowledge of the underlying GL account number or meaning. Example of a Charge name that means something to a warehouse operator: "Damaged Inventory (62300)". Example of a GL account name that might be meaningless to a warehouse operator: "62300 - Material Discrepancy".'),(0,o.kt)("li",{parentName:"ol"},"Charges give you the ability to have multiple operator descriptions for the same GL account. Doing so ensures the correctly named options are available to operators in the right circumstances."),(0,o.kt)("li",{parentName:"ol"},"iDempiere supports multiple Accounting Schemas (functional currencies) with multiple Account Elements (charts of accounts). This means that a transactional document can use a single Charge option regardless of the document's functional currencies. iDempiere knows exactly what account to use when posting to the respective functional currencies.")),(0,o.kt)("h1",{id:"product"},"Product"),(0,o.kt)("p",null,"A Product is used to represent many concepts in iDempiere. A Product can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A stocked product like a chair"),(0,o.kt)("li",{parentName:"ul"},"A not-Stocked product like water"),(0,o.kt)("li",{parentName:"ul"},"A service that you perform")),(0,o.kt)("p",null,"Products are similar to Charges in that they help the system map transactions to GL accounts; however, the Product architecture is much more involved. Products have the following added complexities over Charges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Products depend on Price Lists"),(0,o.kt)("li",{parentName:"ul"},"Products can maintain inventory levels"),(0,o.kt)("li",{parentName:"ul"},"Products maintain costs"),(0,o.kt)("li",{parentName:"ul"},"Products support Bills of Materials (BOM)"),(0,o.kt)("li",{parentName:"ul"},"Products maintain multiple GL accounts (where a Charge maps to a single GL account)"),(0,o.kt)("li",{parentName:"ul"},"Product GL account usage depends on how the Product is configured"),(0,o.kt)("li",{parentName:"ul"},"Products are integrated with Assets and Resources")),(0,o.kt)("p",null,"Many windows give you a choice between using a Product or a Charge (Sales Order => Order Line subtab for example). If you do not know whether to use a Product or a Charge, start by using a Charge. It is more simple. Use Products when you have a requirement that cannot be solved by a Charge."),(0,o.kt)("h1",{id:"accounting-schema"},"Accounting Schema"),(0,o.kt)("h1",{id:"account-element"},"Account Element (Element Value)"))}m.isMDXComponent=!0}}]);