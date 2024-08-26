"use strict";(self.webpackChunksanctuary_amongst_the_starts=self.webpackChunksanctuary_amongst_the_starts||[]).push([[9090],{6907:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=t(4848),n=t(8453);const i={sidebar_position:5,sidebar_label:"Hacking"},r=void 0,o={id:"Game Mechanics/The Mesh/Hacking/Hacking",title:"Hacking",description:"In the digital realm, everything has a vulnerability.  Software is the classic plan that never survives contact with the enemy.  Hackers are continuously scouting for flaws in code that will allow them to exploit it for unintended purposes.  As quickly as these flaws are discovered and patched, new ones are discovered and leveraged for advantage.",source:"@site/docs/Game Mechanics/The Mesh/Hacking/Hacking.md",sourceDirName:"Game Mechanics/The Mesh/Hacking",slug:"/Game Mechanics/The Mesh/Hacking/",permalink:"/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/",draft:!1,unlisted:!1,editUrl:"https://github.com/kaelynj/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/Hacking.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Hacking"},sidebar:"gameSidebar",previous:{title:"Mesh Devices",permalink:"/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Devices"},next:{title:"Authentication & Encryption",permalink:"/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Hacking/Authentication & Encryption"}},c={},h=[{value:"Hacking Test",id:"hacking-test",level:2},{value:"Intrusion",id:"intrusion",level:2},{value:"Establishing a Connection",id:"establishing-a-connection",level:3},{value:"Brute-Force Attacks",id:"brute-force-attacks",level:3},{value:"Subtle Intrusion",id:"subtle-intrusion",level:3},{value:"Joint Hacking",id:"joint-hacking",level:3},{value:"Hacking Again",id:"hacking-again",level:3},{value:"Intruder Status",id:"intruder-status",level:2},{value:"Hidden",id:"hidden",level:3},{value:"Covert",id:"covert",level:3},{value:"Spotted",id:"spotted",level:3},{value:"Changing Status",id:"changing-status",level:2},{value:"Upgrading Status",id:"upgrading-status",level:3},{value:"Exposure",id:"exposure",level:3},{value:"Zeroing In",id:"zeroing-in",level:3}];function l(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"In the digital realm, everything has a vulnerability.  Software is the classic plan that never survives contact with the enemy.  Hackers are continuously scouting for flaws in code that will allow them to exploit it for unintended purposes.  As quickly as these flaws are discovered and patched, new ones are discovered and leveraged for advantage."}),"\n",(0,a.jsx)(s.p,{children:"Hackers routinely share, trade, and sell their exploits online.  The best of these make their way into pre-packaged exploit app libraries -- software tools that scan a target, openly or with subtlety, probe it for vulnerabilities, and automatically execute attacks."}),"\n",(0,a.jsxs)(s.p,{children:["There are many methods you may use to hack a system.  The first is to circumvent the ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Authentication%20&%20Encryption#circumventing-authentication",children:"authentication"})," on a legitimate account, but this requires background knowledge of the account and takes time and special effort.  The second is to ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/System%20Subversion#sniff-traffic",children:"sniff the traffic"})," of a legitimate user and remotely spoof commands, which can be powerful but limited.  The most common method of hacking is to ",(0,a.jsx)(s.a,{href:"#intrusion",children:"directly gain access"})," to the target and ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/System%20Subversion#system-subversion",children:"subvert"})," it from within."]}),"\n",(0,a.jsxs)(s.admonition,{title:"Simple Hacking",type:"tip",children:[(0,a.jsx)(s.p,{children:"If these rules at first seem intimidating, keep in mind that the core hacking rules are fairly straightforward.  The following guidelines should get you through most situations:"}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Almost all hacking-involved tests pit the hacker's ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infosec",children:"Infosec"})," vs. the target system's ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#firewall-ratings",children:"Firewall Rating"}),"."]}),"\n",(0,a.jsx)(s.li,{children:"To hack into a system, you have a choice of fast (immediate -30 modifier, triggers an alert) or slow (no modifier, takes an hour, no alert)."}),"\n",(0,a.jsxs)(s.li,{children:["By default, you get in with ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Authentication%20&%20Encryption#user-accounts",children:"standard privileges"}),".  Superior successes get you better privileges."]}),"\n",(0,a.jsxs)(s.li,{children:["Once in, you can take any action that your ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Authentication%20&%20Encryption#accounts--access-privileges",children:"privileges"})," allow without making a test."]}),"\n",(0,a.jsxs)(s.li,{children:["If your privileges don't allow it, make a ",(0,a.jsx)(s.a,{href:"#hacking-test",children:"Hacking Test"})," (",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infosec",children:"Infosec"})," vs. ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#firewall-ratings",children:"Firewall Rating"}),") to pull it off."]}),"\n",(0,a.jsx)(s.li,{children:"Use your imagination!  If you want to do something -- loop sensors, jam weapons, steal files, open a door, crash an opposing AI -- your GM will tell you if you need to make a test."}),"\n",(0,a.jsxs)(s.li,{children:["Don't forget to use ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Pools#insight",children:"Insight Pools"})," for extra mesh actions or to modify rolls!"]}),"\n"]})]}),"\n",(0,a.jsx)(s.h2,{id:"hacking-test",children:"Hacking Test"}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsxs)(s.p,{children:["Almost all intrusion and subversion efforts rely on Hacking Tests.  This ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/dice-basics#opposed-test",children:"Opposed Test"})," pits the hacker's ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infosec",children:"Infosec skill"})," against the target's ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#firewall-ratings",children:"Firewall rating"})," -- or the defender's InfoSec skill if the system is actively defended.  If the hacker wins, they pull off their intended action, otherwise their action fails."]}),"\n",(0,a.jsx)(s.h2,{id:"intrusion",children:"Intrusion"}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.p,{children:"The art of intrusion involves penetrating a system's security, taking advantage of code glitches and flawed security protocols to bypass the target's defenses.  The best methods involve infiltrating a system slowly and quietly, without catching a watchdog's attention.  When called for, however, a hacker can toss aside pretenses and attempt to brute-force their way in."}),"\n",(0,a.jsx)(s.h3,{id:"establishing-a-connection",children:"Establishing a Connection"}),"\n",(0,a.jsxs)(s.p,{children:["In order to hack a system, you must establish a direct connection to the target.  If you are making a direct wireless connection, the target system must be wireless-capable and within wireless radio range, and you must know the target is there (see ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Devices#stealthed-signals",children:"Stealthed Signals"}),").  If the system is hardwired, you must physically jack in by using a regular access port (or skinlink, if the system is so equipped) or tap into a cable that carries the system's traffic (requiring a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#hardware-field",children:"Hardware: Electronics Test"})," and appropriate equipment, such as an electronics kit).  If you are accessing the target through the mesh, the system must be online and you must know its mesh ID or otherwise be able to find it through ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Research#online-research",children:"Research"})," or ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Tracking#tracking",children:"Tracking"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"brute-force-attacks",children:"Brute-Force Attacks"}),"\n",(0,a.jsx)(s.p,{children:"Brute-force hacking is quick, messy, and loud.  You select the target, trigger your exploit app, and let it quickly and methodically cycle through attacks against the most common vulnerabilities.  Brute-force intrusions require only a complex action, meaning they can be a relevant factor even in combat scenarios.  However, the target is almost always alerted to the digital invasion."}),"\n",(0,a.jsxs)(s.p,{children:["To brute-force a target, make a ",(0,a.jsx)(s.a,{href:"#hacking-test",children:"Hacking Test"}),".  The intruders suffers a -30 modifier.  If you succeed, you have gained access to the target system with ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Authentication%20&%20Encryption#user-accounts",children:"user-level access"})," privileges and ",(0,a.jsx)(s.a,{href:"#spotted",children:"spotted status"}),", and the system goes on  ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#active-alert",children:"active alert"}),".  Each superior success increases your privileges one step (first to security then to admin level).  On a critical success, you have ",(0,a.jsx)(s.a,{href:"#covert",children:"covert status"}),", but a passive alert is still triggered.  In this situation, both superior and critical results take effect simultaneously.  If you lost the opposed test, you fail to get in and the system goes on passive alert."]}),"\n",(0,a.jsx)(s.h3,{id:"subtle-intrusion",children:"Subtle Intrusion"}),"\n",(0,a.jsxs)(s.p,{children:["The preferred method of owning a target is to quietly and systematically probe it, analyze its setup and software, and determine the most likely vulnerabilities.  Subtle intrusion is a task action with a timeframe of 1 hour (GMs may alter this timeframe for heavily secured or unprotected systems).  Make a Hacking Test.  If you succeed, you have gained access to the target system with ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Authentication%20&%20Encryption#user-accounts",children:"user-level access"})," privileges and ",(0,a.jsx)(s.a,{href:"#covert",children:"covert Intruder status"}),".  Each superior success increases your privileges one step (first to security then to admin level).  On a critical success, you have hidden status; the defender remains unaware of the intrusion.  Both superior and critical results may apply."]}),"\n",(0,a.jsxs)(s.p,{children:["If the firewall succeeds but loses the opposed test, a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#passive-alert",children:"passive alert"})," is triggered.  If the firewall wins the opposed test, you fail to get in and the system goes on passive alert."]}),"\n",(0,a.jsx)(s.h3,{id:"joint-hacking",children:"Joint Hacking"}),"\n",(0,a.jsxs)(s.p,{children:["You can cooperate with others while hacking: one person takes the lead, using their connection, while the others take actions to support, providing a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/dice-basics#teamwork",children:"teamwork bonus"}),".  Only the lead hacker may use pools, and only they are targeted by countermeasures.  Alternatively, multiple hackers can separately hack the same system simultaneously.  While their actions are handled separately, if any of them trigger an alert, all intruders on the system will be affected."]}),"\n",(0,a.jsx)(s.h3,{id:"hacking-again",children:"Hacking Again"}),"\n",(0,a.jsxs)(s.p,{children:["If you have successfully hacked into a system once, you receive a +30 bonus to Hacking Tests to intrude into the system again, until a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#security-audits",children:"security audit"})," patches the vulnerability.  You may also provide this bonus to others by sharing the exploit used."]}),"\n",(0,a.jsx)(s.h2,{id:"intruder-status",children:"Intruder Status"}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsxs)(s.p,{children:["Intruder status is a simple way of measuring a hacker's situation as they invade a system -- have they caught the attention of defenses or do they remain unobtrusive?  Intruder status is first determined when you access a system, though it may change according to events.  Note that intruder status is a separate matter from your ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Authentication%20&%20Encryption#accounts--access-privileges",children:"account access privileges"}),".  The latter represents your permissions and what you are allowed to do on a system.  The former indicates the system's awareness of your true nature as an intruder."]}),"\n",(0,a.jsx)(s.h3,{id:"hidden",children:"Hidden"}),"\n",(0,a.jsx)(s.p,{children:"If your status is hidden, the system is completely unaware of your presence and cannot act against you.  Your actions are not recorded in logs and other users cannot detect you.  Your presence may leave some traces, but they will require thorough analysis and time to find."}),"\n",(0,a.jsxs)(s.p,{children:["While hidden, you receive a ",(0,a.jsx)(s.strong,{children:"+10"})," modifier on any efforts to ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/System%20Subversion#system-subversion",children:"subvert the system"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"covert",children:"Covert"}),"\n",(0,a.jsx)(s.p,{children:"With covert status, your presence on the system looks legitimate and doesn't attract any unusual attention.  Only extensive checking will turn up abnormalities.  The system is aware of you, but does not consider you a threat."}),"\n",(0,a.jsx)(s.h3,{id:"spotted",children:"Spotted"}),"\n",(0,a.jsxs)(s.p,{children:["If you have spotted status, the system is aware that your presence is an intrusion.  Spotted automatically triggers an ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#active-alert",children:"active alert"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"changing-status",children:"Changing Status"}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.p,{children:"Your intruder status will change depending on your actions and the actions of the system."}),"\n",(0,a.jsx)(s.h3,{id:"upgrading-status",children:"Upgrading Status"}),"\n",(0,a.jsxs)(s.p,{children:["You can attempt to improve your status to better hide yourself from the system.  This requires a complex action and a ",(0,a.jsx)(s.a,{href:"#hacking-test",children:"Hacking Test"}),".  If you win, you can upgrade your status by one level (spotted to covert or covert to hidden).  A superior success can take this one level further."]}),"\n",(0,a.jsx)(s.p,{children:"Note that changing your status does not affect the system's alert status.  If you go from spotted to covert or hidden, the system is still aware there was an intrusion, it just can't currently pinpoint you."}),"\n",(0,a.jsx)(s.h3,{id:"exposure",children:"Exposure"}),"\n",(0,a.jsxs)(s.p,{children:["Any time you use your ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infosec",children:"Infosec"})," skill and engage in hacking while within a system, you run the risk of exposing yourself to the system's security.  If you roll a superior failure on a ",(0,a.jsx)(s.a,{href:"#hacking-test",children:"Hacking Test"}),", you trigger a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#passive-alert",children:"passive alert"}),".  This may instigate the system defender to take a closer look."]}),"\n",(0,a.jsxs)(s.p,{children:["If you roll a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/dice-basics#criticals",children:"critical failure"})," on a Hacking test, you automatically switch your status to ",(0,a.jsx)(s.a,{href:"#spotted",children:"spotted"})," and the system goes on ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#active-alert",children:"active alert"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["If you attack a target in ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Mesh%20Combat#mesh-combat",children:"Mesh Combat"}),", you must also make a Hacking Test or trigger a ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#passive-alert",children:"passive alert"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"zeroing-in",children:"Zeroing In"}),"\n",(0,a.jsxs)(s.p,{children:["If a system is on passive alert, the system defender may attempt to pinpoint intruders.  This requires a complex action and an ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/dice-basics#opposed-test",children:"Opposed"})," ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/Skills#infosec",children:"Infosec Test"})," between defender and each hacker.  If the hacker is hidden, the defender incurs a -30 modifier.  If the defender wins, the hacker's status becomes ",(0,a.jsx)(s.a,{href:"#spotted",children:"spotted"})," and the system goes on ",(0,a.jsx)(s.a,{href:"/sanctuary-amongst-the-stars/docs/Game%20Mechanics/The%20Mesh/Hacking/Countermeasures#active-alert",children:"active alert"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var a=t(6540);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);