---
sidebar_position: 7
sidebar_label: Tracking Users
---

# Tracking

Every time you interact with other systems on the mesh, you leave traces of your presence.  Logins are recorded, access is logged, and most devices even keep a record of all other devices that have been within radio range.  At the least your [mesh ID](Hacking/authentication-and-encryption.md#mesh-id) will be recorded, and possibly other data as well: type of device, length of connection, apps used, AR perceived, time, physical location, and possibly the mesh IDs of other systems you were connected to.  On top of this, apps and services -- particularly commercial ones -- keep a usage history and often surreptitiously log other data about you, which is then transmitted to their vendors and sold to advertising networks and other data brokers.  This may include friends lists, installed apps, browsing history, personal data, cached forms, and a "fingerprint" of your device that can be used to track you online even if you switch your mesh ID.

# Physical Tracking
---
Many users willingly allow themselves to be physically tracked via the mesh.  To them, this is a useful feature -- it allows their friends to find them, their loved ones to know where they are, and for authorities to come to their aid in the event of an emergency.  Finding their location is simply a matter of looking them up in the local directory, no test required (assuming you know who they are).  Mesh positioning is accurate to within 5 meters.  Once located, the position of the target can be monitored as they move as long as they maintain an active wireless connection to the mesh.  For people who do not freely disclose their location, the following rules apply.

## Tracing by Mesh ID

To track the current or last known physical location of a [mesh ID](Hacking/authentication-and-encryption.md#mesh-id) requires a [Research Test](Research.md#research-tests).  If successful, the results are returned instantly if the target is within the local mesh region; targets further away may take longer, as dictated by distance lag.  Superior successes may fine-tune the location of provide supplementary details such as live sensor footage.

if the target is in [privacy mode](mesh-introduction.md#privacy-mode), apply a -30 modifier to this test.  If the target is actively disguising their activity by spoofing mesh IDs or cycling through false mesh IDs, this becomes an opposed test pitting [Research](../Skills.md#research) against the target's [Infosec](../Skills.md#infosec) skill, with a timeframe of 1 hour.  If the target is using an anonymizing service, they can only be tracked back to the service itself.

## Tracking by Biometrics

The prevalence of sensor motes, XP feeds, and biometric recognition apps make it possible to track people by their face, morph, gait, voice, clothing, gear, thermal signatures, scent, and other physical characteristics.  However, the sheer amount of sensors and people can make this challenging and trigger both false-positives and false-negatives.  The success of searches of this nature is best left to GM fiat, but a [Perceive](../Skills.md#perceive) (if eyeballing) or [Research](Research.md#research-tests) (if using a biometric matcher app) Test can also be called for, modified appropriately by the size of the area surveilled, as noted on the Biometric Searches table.  If the target is actively avoiding sensor detection, this research test is opposed by the target's [Infiltrate](../Skills.md#infiltrate) skill (or [Exotic Skill: Disguise](../Skills.md#exotic-skill-field)).

> ### Biometric Searches
> | Area | Modifier |
> |:-- | --:|
> |Large Habitat (Cylinder) or City | -30 |
> | Medium Habitat (Torus) or Neighborhood | -20 |
> | Small Habitat (Tin Cans) or Large Building | -10 |
> | Heavy Traffic | -10 |
> | Multiple Biometrics | +10 |
> | Less Available Biometric Sensor (scent, thermal) | -10 |
> | Access to Private Sensor Nets | +10 to +30 |
> | Target in Privacy Mode | -10 |

# Mesh Activity Tracking
---
While viewing someone's public mesh presence is relatively easy, tracking someone's less-public online activity is usually a more challenging affair.

## Researching Public Mesh Presence
Most people post a vast amount of information about themselves online.  Social network profiles, forum posts, lifelog entries, personal media collections, XP casts, work portfolios, habitat resident indices, and more are readily accessible with a [Research Test](Research.md#research-tests).  Privacy-conscious people usually have a similar online presence, except pseudonymous and/or only viewable to vetted friends and contacts.  Private profile data can still be scraped, but it requires using proxies, sock puppet accounts, and data collection services (apply the -30 private data modifier).  Alternatively, rep favors can work just as well, especially if the target is a friend of a friend.

Most hypercorps and governments have access to vast databases compiled by marketing and private intel firms.  These can provide extensive data such as purchasing and travel habits, known acquaintances, and more  Access to this data is often brokered through black market services.

## Tracking Ongoing Mesh Activity
It is tricky, but not impossible, to acquire a far more detailed assessment of someone's mesh activity: rep-net interactions, services used, sites browsed, people messaged, etc.  At the least, this would entail knowing their [mesh ID](Hacking/authentication-and-encryption.md#mesh-id) and applying a -30 obscure data modifier to your [Research Test](Research.md#research-tests), simply because you would largely be relying on access and transaction logs which are only rarely public.  A slightly better approach is to focus on one specific type of activity -- for example, use of certain online services -- and either deploy some judicious low-level hacking (summarized with a quick-and-dirt [Infosec Test](../Skills.md#infosec), timeframe of 1 hour) or use rep favors, bribes, or threats to get the info you need.  The GM must use their best judgement here when applying modifiers.  Additionally, tracking someone's activity on a single system is much easier, requiring a [monitor activity](mesh-actions.md#monitor-activity) action.

## Active Monitoring
By far the best approach to monitor someone's mesh activity, especially in real-time, is to actively analyze their mesh traffic.  This can be done remotely and requires only their [mesh ID](Hacking/authentication-and-encryption.md#mesh-id) and a [sniffer app](Devices.md#sniffing).  Alternatively, you can hack their PAN and monitor what they do from there.

# Tracking Countermeasures
---
Given the prevalence of surveillance and mesh tracking, covert operatives and those concerned about their privacy have several options above and beyond the simple [privacy mode](./mesh-introduction.md#privacy-mode).

## Burner Mesh IDs
The easiest method of anonymizing your mesh activity is to deploy a "burner" [mesh ID](Hacking/authentication-and-encryption.md#mesh-id) for each separate online transaction.  Burner IDs are meant to be used one time and then erased.  Though illegal in many jurisdictions, they are popular with criminals and anyone wanting a low profile.  You may use burner IDs simultaneously as your real mesh ID or other burners for different online connections (though this is considered poor opsec, as they may be correlated).

Burner IDs are ideal in that they are use only for short periods.  Though they may be traced or even sniffed like other mesh IDs, the trail will end when they stop being used.  Though they are easy to deploy, they are not fool-proof, and some care must be taken to avoid leaking your real [mesh ID](Hacking/authentication-and-encryption.md#mesh-id) or carelessly associating it with accounts or other data that may betray you.  Keep in mind that a burner ID will not help you if you are traced or sniffed while you are still using it.  A resourceful opponent may also be able to correlate burner ID use with physical surveillance footage or other mesh ID logs.  If someone attempts to trace you using a burner mesh ID you have discarded, they must make a [Research Test](Research.md#research-tests) at -30 against your [Infosec](../Skills.md#infosec) skill.

#### Disposable Ectos
A more low-tech version of this trick is to simply use burner ectos.  Use once, or until hot, then discard.  The advantage is that ectos can be physically left behind or planted on others, both useful for misdirection.

## Anonymous Proxy Services
Many people have a vested interest in keeping their affairs anonymous.  To meet this demand, online service vendors offer anonymous proxy accounts.  Simply log in to your anon account first and route all of your traffic through its exit node.  All mesh activity conducted via the anon proxy will use the proxy's mesh ID.  Attempts to trace that mesh ID back will end at the anonymizing service.  Your interactions with the anonymizing service are not logged, so even if the vendor's servers are hacked, an intruder will not find any leads.  While some anonymous accounts are established for regular use, the truly paranoid use multiple one-time accounts for maximum security.

Tracking an anonymous account is a practical impossibility and something that only an extremely resourceful organization employing a systematic and expensive effort could attempt.

## Spoofing Mesh IDs
Some hackers prefer to mask themselves as other users, either as a red herring, a statement, or to frame someone else.  This follows the same procedure as [spoofing someone for authentication](Hacking/authentication-and-encryption.md#spoofing).
