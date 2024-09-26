---
sidebar_position: 5
sidebar_label: Hacking
---

In the digital realm, everything has a vulnerability.  Software is the classic plan that never survives contact with the enemy.  Hackers are continuously scouting for flaws in code that will allow them to exploit it for unintended purposes.  As quickly as these flaws are discovered and patched, new ones are discovered and leveraged for advantage.

Hackers routinely share, trade, and sell their exploits online.  The best of these make their way into pre-packaged exploit app libraries -- software tools that scan a target, openly or with subtlety, probe it for vulnerabilities, and automatically execute attacks.

There are many methods you may use to hack a system.  The first is to circumvent the [authentication](authentication-and-encryption.md#circumventing-authentication) on a legitimate account, but this requires background knowledge of the account and takes time and special effort.  The second is to [sniff the traffic](system-subversion.md#sniff-traffic) of a legitimate user and remotely spoof commands, which can be powerful but limited.  The most common method of hacking is to [directly gain access](#intrusion) to the target and [subvert](system-subversion.md#system-subversion) it from within.

:::tip Simple Hacking
If these rules at first seem intimidating, keep in mind that the core hacking rules are fairly straightforward.  The following guidelines should get you through most situations:
- Almost all hacking-involved tests pit the hacker's [Infosec](../../Skills.md#infosec) vs. the target system's [Firewall Rating](Countermeasures.md#firewall-ratings).
- To hack into a system, you have a choice of fast (immediate -30 modifier, triggers an alert) or slow (no modifier, takes an hour, no alert).
- By default, you get in with [standard privileges](authentication-and-encryption.md#user-accounts).  Superior successes get you better privileges.
- Once in, you can take any action that your [privileges](authentication-and-encryption.md#accounts--access-privileges) allow without making a test.
- If your privileges don't allow it, make a [Hacking Test](#hacking-test) ([Infosec](../../Skills.md#infosec) vs. [Firewall Rating](Countermeasures.md#firewall-ratings)) to pull it off.
- Use your imagination!  If you want to do something -- loop sensors, jam weapons, steal files, open a door, crash an opposing AI -- your GM will tell you if you need to make a test.
- Don't forget to use [Insight Pools](../../Pools.md#insight) for extra mesh actions or to modify rolls!
:::

## Hacking Test
---
Almost all intrusion and subversion efforts rely on Hacking Tests.  This [Opposed Test](../../dice-basics.md#opposed-test) pits the hacker's [Infosec skill](../../Skills.md#infosec) against the target's [Firewall rating](Countermeasures.md#firewall-ratings) -- or the defender's InfoSec skill if the system is actively defended.  If the hacker wins, they pull off their intended action, otherwise their action fails.
## Intrusion
---
The art of intrusion involves penetrating a system's security, taking advantage of code glitches and flawed security protocols to bypass the target's defenses.  The best methods involve infiltrating a system slowly and quietly, without catching a watchdog's attention.  When called for, however, a hacker can toss aside pretenses and attempt to brute-force their way in.

### Establishing a Connection
In order to hack a system, you must establish a direct connection to the target.  If you are making a direct wireless connection, the target system must be wireless-capable and within wireless radio range, and you must know the target is there (see [Stealthed Signals](../Devices.md#stealthed-signals)).  If the system is hardwired, you must physically jack in by using a regular access port (or skinlink, if the system is so equipped) or tap into a cable that carries the system's traffic (requiring a [Hardware: Electronics Test](../../Skills.md#hardware-field) and appropriate equipment, such as an electronics kit).  If you are accessing the target through the mesh, the system must be online and you must know its mesh ID or otherwise be able to find it through [Research](../Research.md#online-research) or [Tracking](../Tracking.md#tracking).

### Brute-Force Attacks
Brute-force hacking is quick, messy, and loud.  You select the target, trigger your exploit app, and let it quickly and methodically cycle through attacks against the most common vulnerabilities.  Brute-force intrusions require only a complex action, meaning they can be a relevant factor even in combat scenarios.  However, the target is almost always alerted to the digital invasion.

To brute-force a target, make a [Hacking Test](#hacking-test).  The intruders suffers a -30 modifier.  If you succeed, you have gained access to the target system with [user-level access](authentication-and-encryption.md#user-accounts) privileges and [spotted status](#spotted), and the system goes on  [active alert](Countermeasures.md#active-alert).  Each superior success increases your privileges one step (first to security then to admin level).  On a critical success, you have [covert status](#covert), but a passive alert is still triggered.  In this situation, both superior and critical results take effect simultaneously.  If you lost the opposed test, you fail to get in and the system goes on passive alert.

### Subtle Intrusion
The preferred method of owning a target is to quietly and systematically probe it, analyze its setup and software, and determine the most likely vulnerabilities.  Subtle intrusion is a task action with a timeframe of 1 hour (GMs may alter this timeframe for heavily secured or unprotected systems).  Make a Hacking Test.  If you succeed, you have gained access to the target system with [user-level access](authentication-and-encryption.md#user-accounts) privileges and [covert Intruder status](#covert).  Each superior success increases your privileges one step (first to security then to admin level).  On a critical success, you have hidden status; the defender remains unaware of the intrusion.  Both superior and critical results may apply.

If the firewall succeeds but loses the opposed test, a [passive alert](Countermeasures.md#passive-alert) is triggered.  If the firewall wins the opposed test, you fail to get in and the system goes on passive alert.

### Joint Hacking
You can cooperate with others while hacking: one person takes the lead, using their connection, while the others take actions to support, providing a [teamwork bonus](../../dice-basics.md#teamwork).  Only the lead hacker may use pools, and only they are targeted by countermeasures.  Alternatively, multiple hackers can separately hack the same system simultaneously.  While their actions are handled separately, if any of them trigger an alert, all intruders on the system will be affected.

### Hacking Again
If you have successfully hacked into a system once, you receive a +30 bonus to Hacking Tests to intrude into the system again, until a [security audit](Countermeasures.md#security-audits) patches the vulnerability.  You may also provide this bonus to others by sharing the exploit used.

## Intruder Status
---
Intruder status is a simple way of measuring a hacker's situation as they invade a system -- have they caught the attention of defenses or do they remain unobtrusive?  Intruder status is first determined when you access a system, though it may change according to events.  Note that intruder status is a separate matter from your [account access privileges](authentication-and-encryption.md#accounts--access-privileges).  The latter represents your permissions and what you are allowed to do on a system.  The former indicates the system's awareness of your true nature as an intruder.

### Hidden
If your status is hidden, the system is completely unaware of your presence and cannot act against you.  Your actions are not recorded in logs and other users cannot detect you.  Your presence may leave some traces, but they will require thorough analysis and time to find.

While hidden, you receive a **+10** modifier on any efforts to [subvert the system](system-subversion.md#system-subversion).

### Covert
With covert status, your presence on the system looks legitimate and doesn't attract any unusual attention.  Only extensive checking will turn up abnormalities.  The system is aware of you, but does not consider you a threat.

### Spotted
If you have spotted status, the system is aware that your presence is an intrusion.  Spotted automatically triggers an [active alert](Countermeasures.md#active-alert).

## Changing Status
---
Your intruder status will change depending on your actions and the actions of the system.

### Upgrading Status
You can attempt to improve your status to better hide yourself from the system.  This requires a complex action and a [Hacking Test](#hacking-test).  If you win, you can upgrade your status by one level (spotted to covert or covert to hidden).  A superior success can take this one level further.

Note that changing your status does not affect the system's alert status.  If you go from spotted to covert or hidden, the system is still aware there was an intrusion, it just can't currently pinpoint you.


### Exposure
Any time you use your [Infosec](../../Skills.md#infosec) skill and engage in hacking while within a system, you run the risk of exposing yourself to the system's security.  If you roll a superior failure on a [Hacking Test](#hacking-test), you trigger a [passive alert](Countermeasures.md#passive-alert).  This may instigate the system defender to take a closer look. 

If you roll a [critical failure](../../dice-basics.md#criticals) on a Hacking test, you automatically switch your status to [spotted](#spotted) and the system goes on [active alert](Countermeasures.md#active-alert).

If you attack a target in [Mesh Combat](mesh-combat.md#mesh-combat), you must also make a Hacking Test or trigger a [passive alert](Countermeasures.md#passive-alert).

### Zeroing In
If a system is on passive alert, the system defender may attempt to pinpoint intruders.  This requires a complex action and an [Opposed](../../dice-basics.md#opposed-test) [Infosec Test](../../Skills.md#infosec) between defender and each hacker.  If the hacker is hidden, the defender incurs a -30 modifier.  If the defender wins, the hacker's status becomes [spotted](#spotted) and the system goes on [active alert](Countermeasures.md#active-alert).