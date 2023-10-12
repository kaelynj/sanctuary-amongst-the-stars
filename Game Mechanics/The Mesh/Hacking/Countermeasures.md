
The ongoing struggle between hackers and electronic security is best described as an ever-evolving arms race.  hackers continually find and share new exploits that allow them to subvert new systems, software vendors release automatically installed update patches to close the holes, repeat ad nauseam.  System admins and security hackers have a menu of options for handling intruders, though the level of security on a system can range from paper-thin to extremely hostile.

> [!info]
> Every system is unique and handles security differently.  The GM maps out each system's set-up.
> #### ***Motes***: 
> 	Notorious for minimal security and outdated defenses.  Sometimes, however, they are slaved to a controlled "chokepoint" node with better security (this is the case with most [[Mesh Introduction#PANs Personal Area Networks|PANs]]).
> #### ***Host***:
> 	Defenses largely depend on the security consciousness of their owner.  Muses act as a system defender for mesh inserts and ectos.
> #### ***Servers:***
> 	Use security [[AIs & Muses#ALIs|ALIs]] and take their defenses seriously.  Corporate networks often use [[Mesh Introduction#Tiered Systems|tiered networks]] or [[Mesh Introduction#Air-Gapped Systems|air-gapped systems]] to protect critical assets.  Security hackers may be on-site or on-call, arriving in 1d6 action turns.  Some simply seek to kick intruders out.  Others will [[Tracking|trace]] intruders, dispatching security forces or police to apprehend the suspects if located, or hack them back.  Security audits are likely to be frequent

# Firewall
---
In *Eclipse Phase*, a firewall is a non-sapient neural-net security suite that monitors network traffic and defends against hackers.  Every system has a firewall app actively defending it.  Firewalls may initiate automatic countermeasures, depending on their programming.

Each firewall has a rating measuring its defensive capabilities.  Firewall ratings are based on the type of device, as noted on the Firewall Ratings table.  This is used to oppose [[Hacking|Hacking Tests]] made by hackers.  at the GM's discretion, some firewalls may be weaker if old or non-maintained or stronger if state-of-the-art.

If the firewall app on a device is deleted or crashed, tests to hack the system are unopposed until the firewall is restored, unless a system defender engages in active monitoring.

## Firewall Threat Models
Firewalls build an understanding of what behavior is common or unusual and use these algorithms to identify potential intruders.  For example, a firewall will know when a certain user usually logs on, where from, what apps they use, what files they access, and so on.  If a hacker uses their credentials but from a different place, at a different time, and doing different things, the firewall may suspect something is amiss and take a closer look.  Even a skillful hacker may still be identified by anomalous actions.

GMs can call for a [[Hacking]] whenever they feel a hacker may have exceeded normal activity.  If the firewall wins, downgrade the hacker's status one level -- from [[Hacking#Hidden|hidden]] to [[Hacking#Covert|cover]] (triggering a [[Countermeasures#Passive Alert|passive alert]]), or [[Hacking#Covert|covert]] to [[Hacking#Spotted|spotted]] (triggering an [[Countermeasures#Active Alert|active alert]]).  Alternatively, a hacker who is clearly engaging in shady activity on a well-secured system may trigger an alert, no matter how well they roll.  Use this option sparingly, and remember that it applies both to PCs and NPCs.

### Firewall Ratings
| ***Device*** | ***Firewall Rating*** |
| --- | :---: |
| Most | 30 |
| Host | 50 |
| Server | 70 |

# System Defender
---
The firewall is but the first line of defense.  Almost every system is also monitored by an entity known as its ***system defender***.  For most devices, this is the resident ALI.  characters skilled in [[Skills#Infosec|infosec]] typically guard their own ***Personal Area Networks*** (***PANs***); people who are not rely on their muses.  Dedicated teams of operatives often slave their PANs to the group's hacker, who can overwatch the entire groups' security.

System defenders have security if not admin privileges.  If a [[Countermeasures#Passive Alert|passive]] or [[Countermeasures#Active Alert|active]] alert is triggered, they are informed.  defenders are responsible for triggering non-automatic countermeasures.

#### Multiple defenders:
Some systems may have more than one defender present.  When it comes to active countermeasures and other actions, defenders choose to work together or separately.  If acting in convert, the other defenders provide a [[Making Tests#Teamwork|teamwork bonus]]; only the primary defender can use pools.  If acting individually, each defender relies on their own [[Resolving Combat#Initiative|Initiative]], [[Skills]], and [[Pools]].

### Active Defense
As a complex action, a system defender can assume control of a system's firewall defenses for one action turn.  While engaged in active defense, use the defender's [[Skills#Infosec|Infosec Skill]] in place of [[Countermeasures#Firewall Ratings|Firewall rating]] for [[Hacking|Hacking tests]].  The defender may use pools on these tests.  Only on defender can engage in active defense at a time.


# Security Alerts
---
If a hacking attempt is not stealthy enough, it is likely to earn the attention of the firewall and system defender.  Security alerts come in 
two flavors: [[Countermeasures#Passive Alert|Passive]] and [[Countermeasures#Active Alert|Active]].

## Passive Alert
Passive alerts are triggered whenever the firewall or defender succeeds on their roll but loses the [[Making Tests#Opposed Test|opposed]] test against a hacker's [[Hacking#Subtle Intrusion|subtle intrusion]] attack.  The are also set off when a hacker exposes themselves by rolling a superior failure on a [[Hacking]] within the system.

Passive alerts occur when a system detects anomalous activity that may indicate a hacking attempt in progress.  The system immediately flags a visual or acoustic cue to the system defender(s) and possibly the owner or admins.  The system may be configured to automatically launch one or more passive countermeasures.  Depending on the system, extra security hackers or AIs may be brought in to help investigate.  If the intruder is not encountered again or located within a set time period (usually 10 minutes), the alarm is deactivated and the event is logged as an anomaly.


## Active Alert
An active alert is triggered when an intruder achieves spotted status or someone attempts a brute-force attack without scoring a critical success.

Active alerts are issued when the system knows an intruder is present.  The system immediately alerts the system defender(s), owners, and admins.  Additional security assets (hackers and AIs) may be called in.  The system also launches active countermeasures against the intruder (see below).  Active alerts are maintained for as long as the intruder is present and sometimes for a lengthy period afterwards just in case the hacker returns.

When a system is on active alert, all intruders suffer a -10 modifier to [[Skills#Infosec|Infosec Tests]] for the duration of the alert.

# Passive Countermeasures
---
Passive countermeasures are launched as a precaution whenever there is unusual activity or other signs that there may be an intruder or malware at work.  Some of these countermeasures are automatically triggered by the system or firewall whenever a passive or active alert is initiated.

### Backup (Automatic)
Some systems are set to automatically backup all logs and critical data when a passive alert goes off.  These backups are often copied to a secure storage in the cloud or to another dedicates system, where they are protected from deletion.

### Egress Filtering (Automatic)
In an attempt to deter data exfiltration, the firewall temporarily blocks attempts to download or transfer specific files or data types.  Ego backups and access logs are commonly flagged and blocked, though each system may designate its own specifics.  To overcome this filtering, a hacker must make a complex action and win a [[Hacking]].

### Locate Intruder
The system defender can attempt to track down the source of the passive alert and pinpoint any interlopers ([[Hacking#Zeroing In|Zeroing In]]).

### Reauthenticate (Automatic)
System firewalls can be set to automatically re-authenticate all active users whenever a passive alert is triggered.  Each user will be re-authenticated in 1d6 action turns, though a large system with hundreds of thousands of users may take 1d6 minutes.  Any intruders that do not have hidden status must make a [[Hacking]] against the system [[Countermeasures#Firewall Ratings|firewall.]]  If the firewall wins, the intruder gains the spotted status and the system goes to active alert.  if the intruder has valid credentials (such as a stolen passcode), they automatically succeed.

### Reduce Privileges (Automatic)
As a protective measure, the system temporarily reduces access privileges available to standard users -- and sometimes security accounts as well.  This means that legitimate users may be unable to perform certain functions, use some apps/services, or access certain directories without authorization from an admin account.


# Active Countermeasures
---
Active countermeasures are initiated when an intruder is fully detected ([[Hacking#Spotted|spotted status]]).  Systems/firewalls can be set to immediately trigger automatic countermeasures; others may be pursued at the defender's discretion.

### Counter-Intrusion
Though illegal in some jurisdictions, system defenders may proactively protect their wards by counter-attacking the hacker.  For this to occur, the intruder must first be *successfully* [[Tracking|traced]] and their [[Authentication & Encryption#Mesh ID|mesh ID]] obtained.  Once this occurs, the defender can then launch their own intrusions on the system from which the hacker originates.

### Crash & Lockout
The defender can attempt to crash the account shell of an intruder that has been spotted ([[Mesh Combat]]).  If successful, the intruder's [[Authentication & Encryption#Mesh ID|Mesh ID]] can be blocked from accessing the system again ([[Mesh Actions#Lockout|Lockout]]).  Hacked accounts are quarantined or deleted and not usable again until a security audit approves and reinstates it.

### Reboot/Shutdown
The nuclear option for handling an interloper is to reboot or shut down the system.  In this case, the system closes all connections to other systems, logs off users, terminates all processes, and shuts itself down -- thereby booting out the intruder (at least temporarily).  The disadvantage, of course, is that the system must interrupt its activities.  For example, shutting down your mesh inserts means losing all communication with teammates, access to augmented reality, and control over [[Mesh Introduction#Slaved Devices|slaved or linked devices]].  The intruder may attempt to access the system when it reboots, but if they don't have account credentials or a [[Hacking#Intrusion|back door]], they will need to hack in again.  Remote defenders will also need to take an action to log back in.

Initiating a reboot/shutdown only takes a complex action, but the actual shutdown process takes 1d6 actions turns (for [[Devices#Motes|motes & hosts]]) or 1d6 minutes (for [[Devices#Servers|servers]]).  Rebooting takes an equivalent amount of time.

Logged-in users (including [[Hacking#Intrusion|intruders]]) are warned when a reboot or shutdown is initiated.  Once started, the shutdown process cannot be stopped, but it may be prolonged by 1d6 action turns with a complex action;  this requires [[Devices#Accounts & Access Privileges|security or admin privileges]] or an [[Skills#Infosec|Infosec Test]].

#### Hard Shutdown:
The shutdown process takes time in order to warn users, save files, end processes neatly, and otherwise protect the system.  A "hard" shutdown is also possible in emergency situations.  This requires:
- An [[Skills#Interface|Interface Test]] 
- A complex action 
- [[Devices#Accounts & Access Privileges|Admin privileges]]

If successful, the system shuts down at the end of that action turn.  hard shutdowns require double the reboot time and may result in lost data (GM discretion).  You can also cause a hard shutdown by physically powering down, cutting power, or destroying the device.

### Terminate Connections [Automatic]
An alternative to shutdown or rebooting is simply to sever all connections (usually by temporarily disabling the device's wireless capabilities and going into "airplane mode").  The system loses all active connections, but any intruders are dumped.  Termination takes a complex action to initiate and completes at the end of that action turn.  Connectivity may be set to restore on the next action turn, in a set time frame, or only when initiated by a local admin.  Restarting connectivity takes 1 action turn.  Any remote users will need to log back in; intruders without proper credentials will need to [[Hacking|hack]] the system again.  While connections are terminated, the system cannot communicate and interact with other systems.

### Trace [Automatic]
Defenders can initiate a trace on a spotted intruder.  Most hackers are careful to use an anonymizing service to mask their [[Authentication & Encryption#Mesh ID|mesh ID]] and location, but this is not always the case.  If an intruder is physically located, the standard procedure is to alert habitat security or other local or private police, who will mobilize to apprehend the suspect.

# Security Audits
---
Security-conscious systems will undergo an audit on a regular basis or after any detected intrusion, with the intent of patching vulnerabilities that were exploited, eliminating [[System Subversion#Install Backdoor|backdoors]] that were installed, and determining what the intruder did and what they were after.  The GM determines when an audit is undertaken.  Make an [[Skills#Infosec|Infosec Test]] for the system defender, with a timeframe of 24 hours.  If successful, any recently exploited vulnerabilities are patched (the hacker loses the +30 bonus to hack again).  Superior successes reveal [[System Subversion#Install Backdoor|backdoors]] or supply additional info on what the intruder was up to.
