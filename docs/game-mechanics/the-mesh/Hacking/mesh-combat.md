# Mesh Combat
Mesh "combat" is an abstraction.  Unlike physical combat, there are no dueling avatars, no digital maneuvering, no deadly programs.  mesh combat represents efforts to undermine the stability of software -- infomorph mind-states (including #cyberbrains), account shells, apps (including the firewall), or operating systems themselves -- forcing them to crash.  Mesh combat follows the normal rules for combat, as described below.


## LOCAL vs. REMOTE
---
### Local Attacks
To attack a local target in the mesh, you must have access to the system it is running on.  This may require you to locate and hack the system first.  For example, if an infomorph using a remote server as their home device hacks into your mesh inserts, you can attack their account shell on your implants.  You would not be able to attack the infomorph directly however, unless you were to trace it back to its home server, hack in, and attack it there.

### Remove Attacks
You may attack the operating systems of remote devices by flooding them with traffic and malformed packets designed to create instability.  In essence, you are targeting an entire remote device with a denial-of-service attack, hoping to impede or crash it.  Account shells, apps, cyberbrains, and infomorphs cannot be remotely targeted.


## Mesh Attacks & Defense
---

You attack a local or remote target by attempting to destabilize its underlying software processes.  Take a complex action and roll [[Skills#Infosec|Infosec]] skill.  For a local attack, if you do not have admin privileges, you suffer a -30 modifier.

If a system defender is actively shielding the target ([[Mesh Actions#Shield Software|Shield Software]]), this is an opposed test against their [[Skills#Infosec|Infosec]] skill.  If not, it is a standard success test.  Remote attacks are opposed by the [[Countermeasures#Firewall|Firewall]] rating (or the defender's Infosec skill if actively defended).  Firewalls are trained to detect mesh attacks.  Any time an intruder makes a mesh attack, they must also make a [[Hacking#Hacking Test|Hacking Test]].  If they lose, a [[Countermeasures#Passive Countermeasures|passive alert]] is triggered.

##### [[Mesh Actions#Identify Attacker|Attack Awareness]]
It is not automatically apparent where a mesh attack originates from -- or even that it is underway.  If you, your software, or the operating system of the device you are accessing/running on take damage or wounds, you will experience this as malfunction software -- an unfortunately common occurrence, even in #EclipsePhase .  If you supsect you are under attack, you may take a complex action and make an [[Skills#Infosec|Infosec Test]] to identify the attacker and their mesh ID.


## Mesh Damage & Armor
---

If you attack wins, you inflict damage.  A standard mesh attack inflicts DV 2d10.  Some special apps or circumstances may modify this damage.  Each superior success inflicts an extra 1d6 damage.  Critical successes mean damage is doubled.

Some hardened apps, infomorphs, and systems have built-in redundancies to protect against mesh attacks.  This counts as "armor" and is subtracted from the damage roll.

## Mesh Wounds
---
If the damage inflicted upon you exceeds your software's [[Health#Wound|Wound]], a wound is inflicted.  In mesh combat, wounds represent broken processes, instability, memory leaks, and other errors.  Each wound inflicts a cumulative -10 modifier to all actions.  Unlike physical wounds, mesh wounds do not trigger checks for knockdown or unconsciousness.

**OPTIONAL RULE:** For each eound, there is a cumulative 10% change you suffer a [[Mesh Combat#Glitches|glitch]].

## Mesh Durability
---
Software that accumulates damage equal to or exceeding its [[Health#Durability|Durability]] immediately crashes and ceases to function.  All data transfers and other ongoing processes immediately stop.  If your account shell crashes, you are booted from the system (though you may attempt to log back in).  Crashed infomorphs may no longer act.  If a cyberbrain crashes, the morph itself freezes or collapses.  If a service or operating system crashes, all users are disconnected (including the attacker) and any other processes ongoing on the system come to a halt.  Infomorphs, cyberbrains, services, and operating systems automatically [[Countermeasures#Reboot|reboot]], which takes 1d6 action turns.  Rebooting eliminates all accumulated mesh damage and wounds.

Software (except for account shells) may still be attacked after it has crashed.  This represents attempts to irretrievably damage the code so that it may no longer run.  If software accumulates damage equal to or exceeding its [[Health#Death Rating|Death Rating]], it is permanently corrupted.  Apps and services must be reinstalled.  Cyberbrains and devices must be repaired or replaced.  Infomorphs and the egos within cyberbrains are effectively dead.  Damage and wounds inflicted on crashed software are applied when it reboots.

**Distributed Infomorphs:**  Infomorphs that are distributed must evenly split their [[Health#Durability|Durability]] between devices.  [[Health#Wound|Wound Threshold]] remains unchanged, but a wound is inflicted if your distributed presence on any device (or the device itself) is crashed.

### Mesh Durability Table

| Software | Wound Threshold | Durability | Death Rating |
| : ---------- | :---------: | :---------: | :---------:|
| Account Shell | 3  | 15 | NA |
| ALI      | 4  | 20 | 40 |
| Firewall App | 6 | 30 | 60 |
| &nbsp&nbsp Cyberbrain | 7 | 35 | 70 |
| Infomorph | | | | 
| &nbsp &nbsp Digimorph | 5 | 25 | 50
| &nbsp &nbsp Agent | 8 | 40 | 80 |
|&nbsp &nbsp  Ikon | 6 | 30 | 60 |
| &nbsp &nbsp Operator | 7 | 35 | 70 |
| Operating System | | | |
| &nbsp &nbsp Mote | 4 | 20 | 40 |
| &nbsp &nbsp Host | 8 | 40 | 80 |
| &nbsp &nbsp Server | 12 | 60 | 120|


## Mesh Damage Repair
---
Damage and wounds to apps cannot be repaired; the app must be rebooted to remove errors.  Infomorphs, cyberbrains, account shells, and operating systems have built-in redundancy settings that will fix broken processes and correct errors over time.  Such software will repair either 1d10 damage or 1 wound per minute; all damage must be fixed first.


## Hardware Damage
---
Mesh gear ranges from cheap and vulnerable motes to durable, self-repairing servers.  They are treated just like other [[Resolving Combat#Objects & Structures|objects]] for physical combat purposes.  If a device is physically damaged, there is a 10% change it suffers a [[Mesh Combat#Glitches|glitch]].  If the device suffers a wound, it automatically glitches.  Additionally, wound modifiers apply to all mesh tests involving that device.

Shock attacks will temporarily disrupt hardware devices.  No mesh actions may be taken with or on a shocked device for one action turn.  At the GM's discretion, shock attacks may also sever communication links or inflict extra damage.

When damage exceeds a devices' [[Resolving Combat#Destruction Rating|Destruction Rating]], it ceases to function immediately.  Anyone accessing the system loses the connection.  If the hardware was the home device to any infomorphs, they are effectively killed.

It is sometimes possible to retrieve data, including dormant infomorphs, from disabled devices.  At the least, this requires difficult (-30) [[Skills#Hardware|Hardware: Electronics]] and [[Skills#Interface|Interface]] Tests.

## Damage and Infomorph Riders
---
For most physical combat purposes, ware incorporated into a morph is treated as the character, not as distinct hardware.  However, infomorphs that are using such ware as a home device, such as a must in your mesh inserts or a fork in a ghostrider module, require special consideration.

Infomorphs do not sleep, so they remain active even when their morph carrier is resting or hibernating.  Likewise, they may still act even if the morph is incapacitated or grappled.  Shock attacks temporarily disrupt implanted systems, however, so infomorph riders are incapacitated just as the morph is.

If a morph is knock out by wounds or accumulates damage equal to or exceeding its [[Health#Durability|Durability]], there is a 25% chance that any infomorph riders are knocked offline as well.  If not, they may still operate while the morph is unconscious.  if damage equals or exceeds the morph's [[Health#Death Rating|Death Rating]], there is a 75% chance the physical damage decommissions an infomorph rider as well.  Otherwise, it may remain active, though it will lose power after 48 hours.  At the GM's discretion, significant trauma to the head (or ware location) or other exceptional conditions (e.g., falling into a cryovolcano) may increase those odds or automatically disable the infomorph.  Muses and other infomorph riders have been responsible for saving their injured or incapacitated carriers by reaching out for help on countless occasions.

## Glitches
---
Glitches represent additional errors and malfunctions that may affect software or devices.  Glitches may occur dur to overloaded systems, hardware damage, or wounds inflicted by mesh combat.  Each time a glitch is inflicted, roll 1d6, consult the Glitch Table, and apply the result

### Glitch Table

| 1d6 Roll | Glitches |
| --- | --- |
| 1-2 | **Lost Connectivity:** All communication links to remote systems are dropped.  If you are accessing a remote system, you are logged out.  if the affected target is a cyberbrain, its morph collapses or freezes up |
| 3 | **Encoding Error:** If you are a covert or hidden intruder, you become spotted.  if you mesh ID was anonymized, your real ID is leaked and logged.  If you are a legitimate user/software, the system now identifies you as a spotted intruder and will enact appropriate countermeasures.  A firewall or operating system inflicted with this glitch will consider the entire system to be compromised and initiate a reboot.
| 4 | **Memory Loss:** Egos within infomorphs/cyberbrains lose access to certain memories.  the GM selects one set of memories or one skill -- these memories or skill are unabailable until you reboot.  Targeted apps and operating systems forget important data, potentially becoming unusable in certain circumstances. Targeted account shells must take an action to re-authenticate, perhaps requiring a [[Hacking|Hacking Test]] if they lack credentials.
| 5 | **Hung Process:** One of your apps or other connected software (determined by the GM) freezes up and stops functioning until it is restarted (taking 1d6 action turns).  This could even be another process on the system you have recently interacted with (perhaps preventing certain actions).  For cyberbrains, this may mean loasing access to a part of your morph's functionality, such as a limb, a sense, or other ware.
| 6 | **Overload**: A malfunctioning process voraciously consumes system resources.  You are unable to use pool for mesh-related actions for 1d6 turns.  Apps struck by this glitch can only function every other action turn.  Overloaded operating systems may randomly disconnect users.
