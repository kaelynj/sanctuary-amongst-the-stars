"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[142],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>d});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},h=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=s,d=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?n.createElement(d,r(r({ref:a},h),{},{components:t})):n.createElement(d,r({ref:a},h))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[m]="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7360:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const i={},r="Surveillance Hacking",o={unversionedId:"Game Mechanics/The Mesh/Hacking/Surveillance Hacking",id:"Game Mechanics/The Mesh/Hacking/Surveillance Hacking",title:"Surveillance Hacking",description:"Surveillance is one of the mesh's primary uses.  Knowing how to conduct your business unseen is a necessary skill for characters of all stripes.",source:"@site/docs/Game Mechanics/The Mesh/Hacking/Surveillance Hacking.md",sourceDirName:"Game Mechanics/The Mesh/Hacking",slug:"/Game Mechanics/The Mesh/Hacking/Surveillance Hacking",permalink:"/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/Surveillance Hacking",draft:!1,editUrl:"https://github.com/kaelynj/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/Surveillance Hacking.md",tags:[],version:"current",frontMatter:{},sidebar:"gameSidebar",previous:{title:"Mindware Hacking",permalink:"/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/Mindware Hacking"},next:{title:"System Subversion",permalink:"/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/System Subversion"}},c={},l=[{value:"Concealed Sensors:",id:"concealed-sensors",level:4},{value:"Active Sensors:",id:"active-sensors",level:4},{value:"Mass Hacking:",id:"mass-hacking",level:4},{value:"Clearing Sensors",id:"clearing-sensors",level:3},{value:"Route Mapping",id:"route-mapping",level:3}],h={toc:l},m="wrapper";function p(e){let{components:a,...t}=e;return(0,s.kt)(m,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"surveillance-hacking"},"Surveillance Hacking"),(0,s.kt)("p",null,"Surveillance is one of the mesh's primary uses.  Knowing how to conduct your business unseen is a necessary skill for characters of all stripes."),(0,s.kt)("h1",{id:"detecting-sensors"},"Detecting Sensors"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Though it is often wisest to act as if you are under surveillance all of the time, sometimes you may want to know where the cameras are.  Many sensors actively broadcast their presence, and even if they don't, their location can be triangulated via their radio emissions.  If in stealth mode, they can be found with an ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#interface"},"Interface Test")," at -30."),(0,s.kt)("p",null,"Spotting sensors requires a ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#perceive"},"Perceive Test"),".  Given their small to minute sizes, apply a modifier between -10 and -30 as appropriate.  If looking in an area with multiple sensors, roll once and apply no modifiers; use superior successes to ascertain how well you find the smaller ones.  Nanoswarms cannot be detected except with a nanodetector."),(0,s.kt)("p",null,"Certain gear and implants can also be used to detect sensors, including electrical sense ware, spy swarm, and dazzlers."),(0,s.kt)("h4",{id:"concealed-sensors"},"Concealed Sensors:"),(0,s.kt)("p",null,"Sensors are sometimes actively camouflaged.  Apply a -30 modifier to ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#perceive"},"Perceive Tests")," to spot them."),(0,s.kt)("h4",{id:"active-sensors"},"Active Sensors:"),(0,s.kt)("p",null,"Active sensors such as radar and lidar betray their presence because they transmit on certain wavelengths, they don't just passively receive.  A passive radar detector can detect an active radar sensor for example.  Enhanced vision can perceive the emissions of most active sensors."),(0,s.kt)("h1",{id:"avoiding-recognition"},"Avoiding Recognition"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"If you can't avoid the sensors, trick them.  Privacy devices like the shroud are common and provide anonymity, though your presence may still be noted. Invisibility cloaks will hide you from many sensors, but are more likely to raise questions.  Ware such as skin flex, synthetic mask, sex switch, and chameleon skin may also help conceal your identity or counter biometric matching.  Old-fashioned disguise is also an option; make an ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Psi/using_psi#opposed-tests"},"opposed test")," between ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#exotic-skill-field"},"Exotic Skill: Disguise")," and ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#perceive"},"Perceive"),".  Face- and pattern- matching algorithms fare poorly against certain makeup and visual patterns; apply a -20 to Perceive Tests when using such patterns."),(0,s.kt)("h1",{id:"active-jamming"},"Active Jamming"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"One noisy and short-lived option for countering coveillance is to jam all radio frequencies (see ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/System%20Subversion#jam-signals"},"Jam Signals"),").  This will not stop sensors from detecting or recording, but it will prevent them from transmittign this information via the mesh using wireless radio -- for as long as the jamming lasts.  hardwired sensors or systems using laser or microwave links are unaffected (though microwave links may be jammed separately).  Jamming is useful as you can do it on the go, but it also impacts everyone and everything around you and is likely to attract the attention of security forces.  In a similar manner, dazzlers may be used to temporarily blind cameras."),(0,s.kt)("h1",{id:"hacking-sensors"},"Hacking Sensors"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Selective sensor hacking can be quite useful, particularly in situations where coverage is minimal.  This also gives you many options: deactivating sensors, blocking them from transmitting data, erasing recordings, looping the feed, or injecting fake sensor data."),(0,s.kt)("h4",{id:"mass-hacking"},"Mass Hacking:"),(0,s.kt)("p",null,"In areas with heavy sensor coverage, hacking all of the sensors is more challenging.  Luckily, motes tend to be less secure.  Treat this as a single consolidated hacking task action against all of the sensors in one area as a group.  The GM can apply additional modifiers for the number of sensors (-10 for every group of 5)."),(0,s.kt)("h1",{id:"ripping-sensors"},"Ripping Sensors"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Ripping is akin to permanent jamming.  Most sensors are motes, and while their optical electronic components protect them from electromagnetic pulses, their antennas are vulnerable.  EM bursts using a ripper or EMP grenade effectively destroy the ability of motes in the area to wirelessly communicate.  EM pulses are also quite effective against nanoswarms.  Ripping is a technique favored by criminal groups, given its longer effect, as sensors in an area must be physically replaced/repaired."),(0,s.kt)("h1",{id:"dead-zones"},"Dead Zones"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The omnipresence of fixed sensors is not always reliable.  There are many places that have been overlooked, where sensors have fallen into disrepair, or where the the environment and petty vandalism have taken their toll.  Every habitat has dead zones in its sensor coverage -- and if it doesn't, someone will go out of their way to make some."),(0,s.kt)("h3",{id:"clearing-sensors"},"Clearing Sensors"),(0,s.kt)("p",null,"Physically clearing an area of sensors takes time and effort.  Treat this as a ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#perceive"},"Perceive task action")," with a timeframe based on the area size.  Clearing an area without being noticed doubles the timeframe and may require an ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infiltrate"},"Infiltrate Test")," as well.  Disabled, missing, and destroyed sensors may be noticed (prompting a maintenance bot or security check) and replaced over time.  Spy nanoswarms must be cleared with guardian swarms."),(0,s.kt)("h3",{id:"route-mapping"},"Route Mapping"),(0,s.kt)("p",null,"It is sometimes possible to map a route that travels through blind spots, avoiding most if not all sensors.  This requires an ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infiltrate"},"Infiltrate task action"),"; apply modifiers appropriate to the amount of sensor coverage and base the timeframe on the area covered.  Dead zone maps are valuable on the black market."),(0,s.kt)("h1",{id:"skipjacking"},"Skipjacking"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Skipjacking is the art of moving in a way that minimizes exposure even under ubiquitous coveillance.  This involves using people, vehicles, and objects as cover, timing the movement of drones and cameras, taking advantage of distractions, and similar tricks -- all while avoiding suspicion.  Treat skipjacking as an opposed test between the skipjacker's ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infiltrate"},"Infiltrate skill")," and the tracker's ",(0,s.kt)("a",{parentName:"p",href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#perceive"},"Perceive."),"  Apply modifiers as appropriate to the situation."),(0,s.kt)("h1",{id:"avoiding-eavesdropping"},"Avoiding Eavesdropping"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The combination of total surveillance and lip-reading apps means that even conversations out of microphone range may be eavesdropped if they are under a camera's watchful eye.  To bypass this, direct communication can be established via skinlink, a fiber-optic wire between access jacks, or even tight-beam laser link."))}p.isMDXComponent=!0}}]);