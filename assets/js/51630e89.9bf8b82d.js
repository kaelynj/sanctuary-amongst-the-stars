"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2517],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>p});var a=s(7294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,i=function(e,t){if(null==e)return{};var s,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(s),m=i,p=h["".concat(c,".").concat(m)]||h[m]||d[m]||n;return s?a.createElement(p,r(r({ref:t},u),{},{components:s})):a.createElement(p,r({ref:t},u))}));function p(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=s.length,r=new Array(n);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<n;l++)r[l]=s[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},6443:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=s(7462),i=(s(7294),s(3905));const n={sidebar_position:4,sidebar_label:"Mesh Devices"},r="Devices",o={unversionedId:"Game Mechanics/The Mesh/Devices",id:"Game Mechanics/The Mesh/Devices",title:"Devices",description:"---",source:"@site/docs/Game Mechanics/The Mesh/Devices.md",sourceDirName:"Game Mechanics/The Mesh",slug:"/Game Mechanics/The Mesh/Devices",permalink:"/docs/Game Mechanics/The Mesh/Devices",draft:!1,editUrl:"https://github.com/kaelynj/sanctuary-amongst-the-stars/docs/Game Mechanics/The Mesh/Devices.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Mesh Devices"},sidebar:"gameSidebar",previous:{title:"Mesh Actions",permalink:"/docs/Game Mechanics/The Mesh/Mesh Actions"},next:{title:"Hacking",permalink:"/docs/Game Mechanics/The Mesh/Hacking/"}},c={},l=[{value:"Hardware",id:"hardware",level:2},{value:"Motes",id:"motes",level:4},{value:"Hosts",id:"hosts",level:4},{value:"Servers",id:"servers",level:4},{value:"Overloaded Devices",id:"overloaded-devices",level:4},{value:"Software",id:"software",level:2},{value:"Apps",id:"apps",level:3},{value:"Operating System",id:"operating-system",level:3},{value:"Services",id:"services",level:3},{value:"Wireless Links",id:"wireless-links",level:2},{value:"Stealthed Signals",id:"stealthed-signals",level:3},{value:"Sniffing",id:"sniffing",level:3},{value:"Laser Links",id:"laser-links",level:3},{value:"Other Links",id:"other-links",level:3},{value:"Accessing Multiple Systems",id:"accessing-multiple-systems",level:2}],u={toc:l},h="wrapper";function d(e){let{components:t,...s}=e;return(0,i.kt)(h,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"devices"},"Devices"),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Behind the augmented reality, it is hardware and software that makes the mesh work.  Mesh security also relies heavily on authentication and encryption to identify legitimate users and keep protected data from being intercepted."),(0,i.kt)("h2",{id:"hardware"},"Hardware"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"While online, you'll be accessing and interacting with numerous devices. This hardware falls into three categories: motes, hosts, and servers."),(0,i.kt)("h4",{id:"motes"},"Motes"),(0,i.kt)("p",null,"The vast majority of meshed devices are motes: the wireless transceivers, microcomputers, and sensors embedded into almost everything.  This includes appliances, tools, implants, sensors, wearables, peripherals, and similar specialized hardware.  Motes possess enough processing power, memory, and networking capabilities to handle their specialized functions, mesh with nearby devices, and run a small assortment of apps."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!info]","- Mote Accounts\nMotes have only [","[Devices#Public Accounts|public]","] and [","[Devices#Admin Accounts|admin]","] accounts.  They are only capable of running ALIs; some motes (GMs call) can run infomorphs if the ALI is deleted, but they become overloaded.")),(0,i.kt)("h4",{id:"hosts"},"Hosts"),(0,i.kt)("p",null,"A host is a generalized, multi-purpose personal computer, with significant processing and networking capabilities, designed to be separated by an end user.  Hosts include mesh inserts, ectos, cyberbrains, tablets, ghostrider modules, and the systems in most bots and vehicles.  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!info]","- Host Accounts\nHosts can handle multiple users and accounts, but are only capable of running one active infomorph at a time.")),(0,i.kt)("h4",{id:"servers"},"Servers"),(0,i.kt)("p",null,"Servers have much greater processing powers and data-management capabilities than hosts.  They can handle hundreds or even thousands of users, run simulspace software, and stream services to clients across the mesh.  Servers are maintained by all types of service providers, egocasting terminals, social media and news portals, corporate hubs, backup facilities, psychosurgery clinics, and VR and gaming platforms."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!info]","- Server Accounts\nServers can run multiple infomorphs.  Most servers are large and stationary, though some bot and portable models exist.  High-end enhanced and specialized servers may provide modifiers.")),(0,i.kt)("h4",{id:"overloaded-devices"},"Overloaded Devices"),(0,i.kt)("p",null,"Certain circumstances may impair a hardware device's functionality.  Its processing capabilities may be strained by resource-intensive processes (such as VR or psychosurgery), a DDoS attack, network outages, overwhelming traffic during a habitat crisis, damaging solar flares, or similar scenarios.  Overloaded devices inflict a -10 to -30 modifier to mesh actions involving the device.  Additionally, [","[Pools#Insight|Insight pools]","] cannot be used for tests involving that device, and the chance of acquiring a [","[Mesh Combat#Glitches|glitch in mesh combat]","] is doubled."),(0,i.kt)("h2",{id:"software"},"Software"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Everyone uses software to do things online.  Most of your online interactions are facilitated by software interfaces.  Software can be grouped info four categories: apps, infomorphs, operating systems, and services.  Software can be attacked in [","[Mesh Combat]","]."),(0,i.kt)("h3",{id:"apps"},"Apps"),(0,i.kt)("p",null,"Apps include programs that are run on your own hardware devices.  Many of these provide specialized functions to make use of the device, such as the smartlink app to help you target your weapon, the chemical analysis app that runs on your chem sniffer, or the software systems that allow you to remotely pilot a bot."),(0,i.kt)("p",null,"While mose apps are also available as online services, tehere are advantages to running it on your local device.  You might, for example, be cut off or distanced from the mesh on an exoplanet, remote asteroid, or within a secured corporate facility."),(0,i.kt)("p",null,"Perhaps the most important app on each device is your firewall.  [","[Countermeasures#Firewall|Firewalls]","] provide the smart security that protects each system."),(0,i.kt)("h3",{id:"operating-system"},"Operating System"),(0,i.kt)("p",null,"Your operating system (OS) is the software interface for your hardware device.  It allows you to control hardware functions and manage other software resources, such as apps and services."),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,'Software services are available to authorized clients from "the cloud" -- various servers on the mesh.  Think of it as programs you can use locally but that are actually run on someone else\'s computer.  Many services are provided for free: search engines, real-time translation, rep network interfaces, anonymizing agents, and so on.  Others require an account and a subscription: egocasting, simulspaces, decryption, games, XP feeds, etc.  The availability of services changes depending on the local habitat and legal jurisdictions.  Due to the nature of the mesh, however, even illegal services such as exploit tools, cracked proprietary software, and narco-algorithms proliferate.  The drawback to using a service over an app, however, is that the service may keep logs of your activity.'),(0,i.kt)("p",null,"Services are only available when you have a direct mesh connection to the service provider.  This means you can lose access to services if [","[System Subversion#Jam Signals|jammed]","], suffering distance lag, or otherwise cut off from the mesh.  Services also log your [","[Authentication & Encryption#Mesh ID|mesh ID]","] and may be used to [","[Tracking|track you]","]."),(0,i.kt)("h2",{id:"wireless-links"},"Wireless Links"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The most common way for devices to connect is via short-range (~50 meters) wireless radio.  Most devices will automatically mesh with any other devices in range (and log the interactions).  It is a trivial affair to pull up a list of all devices within range, along with their [","[Authentication & Encryption#Mesh ID|mesh IDs]","], or to have your muse automatically alert you if a new or specific device comes within range."),(0,i.kt)("h3",{id:"stealthed-signals"},"Stealthed Signals"),(0,i.kt)("p",null,"For increased privacy, you can stealth your wireless radio signals, making them harder to detect.  This method uses a combination of spread-spectrum signals, frequency hopping, and modulation.  To detect a stealthed signal, you must take a complex action and win an [","[Making Tests#Opposed Test|Opposed]","] [","[Skills#Interface|Interface Test]",'] with the stealthed entity.  The scanning entity suffers a -30 modifier to this test.  GMs may wish to make this roll secretly.  Some secure facilities will dedicate ALIs to actively monitor for stealthed signals; this includes correlating surveillance feeds with mesh signals, to identify anyone who is mysteriously "silent."  For this reason covert operatives sometimes carry ectos on a separate PAN to broadcast innocently and distract from their stealthed PAN.  For covert devices that are only transmitting in short bursts, wireless detection is only possible during the short period the burst transmission is being made.'),(0,i.kt)("h3",{id:"sniffing"},"Sniffing"),(0,i.kt)("p",null,'Wireless radio traffic is broadcast through the air (or space), meaning that it can be intercepted by other wireless devices.  Since all mesh traffic is relayed through numerous devices, each connection is encrypted for privacy.  "Sniffing" involves the circumvention of this encryption in order to capture and analyze the actual traffic data.'),(0,i.kt)("p",null,"To intercept wireless communications, you need a sniffer app and you must be within radio range of the target (alternatively, you can access a device that is within radio range of the target and sniff from that location).  The sniffer app automatically convinces the target to relay their mesh traffic through you (just like any other mesh node).  This provides you with a list of [","[Authentication & Encryption#Mesh ID|mesh IDs]","] to systems with which the target is actively connected.  It will also identify any connections that are protected by a VPN or quantum crypto."),(0,i.kt)("p",null,"You may target any one of these connections for active eavesdropping with a complex action and a [","[Hacking#Hacking Test|Hacking Test]","].  If successful, you capture data traffic to and from the targeted device and the connected system as long as you stay within range.  Each connection requires a separate test, though GMs may allow a single test for all connections on less important NPCs."),(0,i.kt)("p",null,"When you capture sniffed traffic, you acquire all data passing between the two systems.  This includes emails, chats, transferred files, media streams, and more.  To find useful data in large amounts of captured traffic may require a [","[Research|Research Test]","].  If you capture traffic during an authentication process, while a target is logging in, you may even capture their access credentials, such as their passcode or biometric scan.  You can break a connection and force a re-authentication to capture credentials, but this requires winning a [","[Hacking#Hacking Test|Hacking Test]","] with the authenticating firewall."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!info]","- Sniffing VPNs\nVPNs are more difficult to intercept: apply a -30 modifier.  If successful, you acquire the encryption keys used by the two systems and may capture VPN traffic between them.  However, VPNs frequently change their encryption keys to deter sniffing attacks; you can only sniff a VPN for 1d6 minutes before you must make another [","[Hacking#Hacking Test|Hacking Test]","] at -30.  You can use superior success to increase the duration by 1d6 minutes or to make detection harder.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!warning]","- Detecting Sniffing Attacks\nVPNs automatically monitor signal latency and other clues to detect sniffing attacks.  Once a minute, the firewall (or system defender if actively defended) may make a Firewall or [","[Skills#Infosec|Infosec]","] test.  You can use superior successes scored on the sniffing attack to modify this test by -10.  If successful, the defender detects their signals are being intercepted and may take action (see [","[Countermeasures]","])")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!danger]"," Sniffing QE Comms:\nQuantum-encrypted communications cannot be sniffed.")),(0,i.kt)("h3",{id:"laser-links"},"Laser Links"),(0,i.kt)("p",null,"Laser links are common where line-of-sight is not an issue.  Laser links use wavelengths that are invisible to standard vision, but they may be seen with enhanced vision.  For this reason they are avoided in high-traffic areas, as they can be distracting.  Laser links can be disrupted by fog, smoke, dust storms, or other atmospheric contaminants.  They are commonly used as the primary communications links between nearby habitats.  Laser links are sometimes favored for covert ops tacnets, as even stealthed radio signals can be detected.  Laser links cannot be sniffed"),(0,i.kt)("h3",{id:"other-links"},"Other Links"),(0,i.kt)("p",null,'Microwave links function much like laser links, except that they do not require line of sight, but are hindered by metallic obstructions.  They are more common in less-settled areas.  Skinlink systems, popular in wearables, require devices and users to be physically touching, and thus have no emissions that can be intercepted.  Similarly, hardwired systems rely on fiberoptic cable connections.  These provide excellent security against wireless interception and jamming, and are common in certain "noisy" environments.'),(0,i.kt)("h2",{id:"accessing-multiple-systems"},"Accessing Multiple Systems"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Online, you may connect to and interact with numerous devices, networks, and services simultaneously.  You can only focus on and interact with one system at a time, though you may switch between them freely, even within the same action turn.  You could, for example, use 3 quick actions to directly message your friend, instruct your home oven to start cooking dinner, and ding a stranger's social network profile, all within the same action turn.  You may also send the same command to multiple meshed systems, slaved devices, or teleoperated drones with the same quick action.  However, any complex action may only be directed towards one system at a time."))}d.isMDXComponent=!0}}]);