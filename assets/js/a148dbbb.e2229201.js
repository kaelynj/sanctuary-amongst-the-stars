"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3123],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2,sidebar_label:"Getting Started"},s="Getting Started",o={unversionedId:"Game Mechanics/getting-started",id:"Game Mechanics/getting-started",title:"Getting Started",description:"Eclipse Phase is played as a collaborative story-telling project that takes place in the player's imaginations.  The gamemaster (GM) details the setting, portrays the NPCs, adjudicates rules, and sets the stage for the adventure scenario.  The players take on the role of their characters and describe their actions.  Each character is defined by a set of characteristics -- skills, traits, etc. -- listed on their character sheet.  When the characters encounter difficulties or engage in conflicts with NPCs, dice are used to determine the outcome.",source:"@site/docs/Game Mechanics/getting-started.md",sourceDirName:"Game Mechanics",slug:"/Game Mechanics/getting-started",permalink:"/docs/Game Mechanics/getting-started",draft:!1,editUrl:"https://github.com/kaelynj/sanctuary-amongst-the-stars/docs/Game Mechanics/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Getting Started"},sidebar:"gameSidebar",previous:{title:"Rules Primer",permalink:"/docs/Game Mechanics/rules-primer"},next:{title:"Dice Basics",permalink:"/docs/Game Mechanics/dice-basics"}},l={},c=[{value:"Making Tests",id:"making-tests",level:2},{value:"Pools",id:"pools",level:2},{value:"Aptitudes",id:"aptitudes",level:2},{value:"Rep",id:"rep",level:2},{value:"Motivations",id:"motivations",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Eclipse Phase")," is played as a collaborative story-telling project that takes place in the player's imaginations.  The gamemaster (GM) details the setting, portrays the NPCs, adjudicates rules, and sets the stage for the adventure scenario.  The players take on the role of their characters and describe their actions.  Each character is defined by a set of characteristics -- skills, traits, etc. -- listed on their character sheet.  When the characters encounter difficulties or engage in conflicts with NPCs, dice are used to determine the outcome."),(0,n.kt)("h2",{id:"making-tests"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Game%20Mechanics/dice-basics#dice-basics"},"Making Tests")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Eclipse Phase")," uses two ten-sided dice for skill tests and most other trolls.  Rolled dice are read as percentiles (d100), with the first die serving as the tens digit and the second as the ones digit.  Percentile dice rolls result in a number between 0 and 99 (00 is read as zero).  A roll of 5 and 3, for example, is read as 53.  Use different colored dice to note which one to read first or use ten-siders made for percentile rolling."),(0,n.kt)("p",null,"When the GM calls for a test, roll percentile dice and compare the result to the target number.  The target number is based on the character's skill, aptitude check, or rep network score.  If the result is equal to or less than the target number, the test succeeds.  If the result is higher, the test fails."),(0,n.kt)("p",null,"Depending on the circumstances, the GM may apply a ",(0,n.kt)("em",{parentName:"p"},"modifier")," to your roll, representing the degree of difficulty (or ease) a given action may have.  If a roll is particularly difficult, you may also decide to work together and cooperate on a test.  For a complete rundown of rolling percentile dice and making tests, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game%20Mechanics/dice-basics#dice-basics"},"Dice Basics")," page."),(0,n.kt)("h2",{id:"pools"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Game%20Mechanics/Pools#pools"},"Pools")),(0,n.kt)("p",null,"Your character also has access to several ",(0,n.kt)("em",{parentName:"p"},"pools")," during gameplay.  These pools reflect your character's transhuman capabilities and allow you to spend them in order to change or affect the outcome of a roll.  More on this can be found in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game%20Mechanics/Pools"},"Pools")," section of the docs the list of pools are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Insight")," - The pool which is linked to your mental capabilities: Cognitions, Intuition, and their linked skills."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Moxie")," - This pool is linked to social interactions: Savvy, Willpower, and their linked skills.  It can also be sued for Rep and Infection Tests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Vigor")," - This pool is linked to physical efforts: Reflexes, Somatics, and their linked skills."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flex")," - This is a wild-card pool.  Points spent from here can be used to affect dice rolls for any tests and allow you to take some narrative control of the game.")),(0,n.kt)("h2",{id:"aptitudes"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Game%20Mechanics/Skills#aptitudes--skills"},"Aptitudes")),(0,n.kt)("p",null,"Your aptitudes represent your natural, inherent abilities.  They are the foundation for your skills.  There are 6 of them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cognition (COG)")," represents your intelligence, problem-solving talent, and capacity for logical analysis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Intuition (INT)")," is your gut instinct and ability to evaluate on the fly.  It includes physical awareness, creativity, cleverness, and cunning."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reflexes (REF)")," is your coordination, manual dexterity, nimbleness, balance, and reaction speed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Savvy (SAV)")," represents your social awareness, adaptability, empathy, and ability to influence others."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Somatics (SOM)")," is how well you can exploit your morph's physical capabilities, including strength, stamina, and sustained positioning and motion."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Willpower (WIL)")," is your self-control, mental fortitude, and strength of personality.")),(0,n.kt)("h2",{id:"rep"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Game%20Mechanics/Transhuman%20Tech/reputation#reputation"},"Rep")),(0,n.kt)("p",null,"Your character has a reputation score in different social networks.  This rep will help you score favors, gather information, and acquire necessary gear.  Rep scores are used as your target number for Rep Tests.  There are seven rep networks to choose from:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"@-rep"),": The Circle-A List, for autonomists, anarchists, Titanians, scum, and Extropians."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"c-rep"),": CivicNet, used by the ",(0,n.kt)("a",{parentName:"li",href:"/docs/World%20Information/Factions/Inner%20System%20Polities#the-planetary-consortium"},"Planetary Consortium"),", Morningstar Constellation, ",(0,n.kt)("a",{parentName:"li",href:"/docs/World%20Information/Factions/Inner%20System%20Polities#the-lunar-lagrange-alliance"},"Lunar-Lagrange Alliance"),", Jovian Republic, and other hypercorps and capitalists."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"f-rep"),": Fame, the media network used by metacelebrities, journalists, socialites, artists, and glitterati."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"g-rep"),": Guanxi, the network for triads, cartels, gangs, and other criminal groups."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"i-rep"),": The Eye, Firewall's secret internal network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"r-rep"),": Research Network Affiliates, used by Argonauts, scientists, technologists, and researchers of all stripes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"x-rep"),": ExploreNet, the social network for gatecrashers and exoplanet colonists.")),(0,n.kt)("h2",{id:"motivations"},(0,n.kt)("a",{parentName:"h2",href:"/docs/Player%20Resources/Character%20Creation/motivations#step-13-motivations"},"Motivations")),(0,n.kt)("p",null,"Your motivations define your character's personal agenda, beliefs, and long-term goals.  They help you earn ",(0,n.kt)("a",{parentName:"p",href:"/docs/Player%20Resources/rez-points#rez-points"},"Rez Points")," for character advancement and cope with mental trauma."))}h.isMDXComponent=!0}}]);