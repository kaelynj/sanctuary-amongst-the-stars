Once you have successfully penetrated a system, your options will depend on your access privileges and the nature of the system.  Many of the actions you take as an intruder are not that different from a regular user (i.e. searching files, operating devices, etc.) See [[Mesh Actions]]

Any time you attempt to do something that your [[Devices & Authentication#Accounts & Access Privileges|access privileges]] do not allow for, you must [[Hacking|hack]] the system to do what you want.  In most cases, this requires a [[Hacking]].  Apply modifiers from ongoing [[Countermeasures#Security Alerts|system alerts]].  If you win the contest, you succeed, but each attempt puts you in risk of discovery if you roll a superior or critical failure (see [[Hacking#Exposure|Exposure]]).

Aside from exceeding your privileges, there are some techniques that are explicitly subversive.  A sampling of common subversions are described below; GMs should use these as guidelines for arbitrating others.

# Break Encryption
---
You can attempt to decrypt an encrypted file without proper authorization (see [[Devices & Authentication#Codebreaking|codebreaking]]).

# Control Ware
---
If hacking mesh inserts, a cyberbrain ([[Mindware Hacking]]), or a [[Mesh Introduction#PANs Personal Area Networks|PAN's]] master node, you will have privileged access to a morph's ware -- not to mention hacking the ware directly.  A hacker can use this to (de)activate the ware, modify its functioning parameters, access diagnostics and usage logs, or install [[Mesh Actions#Scripting|scripts]] to manipulate this ware in the future, among other creative uses.

# Disable Safety Mechanisms
---
Many systems have safety features in place to prevent people from accidentally (or intentionally) harming themselves or others.  You may override the warnings and mechanisms of safety systems by winning a [[Hacking]].  A -30 modifier applies, as such systems are built with redundant features.  This can be used to open both sides of an airlock simultaneously, mute the imminent collision alert on a spacecraft, or to prevent authorized users from being notified of tampered equipment or dangerous circumstances.  At the GM's discretion, some safety features may automatically restart, requiring suppression [[System Subversion#Suppress Process|Suppress Process]].

# Edit AR Feed
---
If hacking a device broadcasting AR, you can selectively block or edit out specific sensory data using an AR illusion app, or simply terminate the AR feed entirely.  This could entail blocking out all AR data of a specific type (audio, visual, haptics, etc.) or blocking specific people, things, sounds, or other things.  For example, you can block the user form seeing a friend's messages, edit out a person from their vision, prevent them from hearing an alarm siren, and so on.

Depending on the situation and context, the GM may decide that this is automatically successful (something that would be easy to miss) or any give the target a modified [[Skills#Perceive|Perceive Test]] (-0 to -30) to notice the change (if the blocking creates obvious gaps or is off-kilter to the responses of others).  For example, blocking the view of someone moving through a crowd will not change the fact that the crowd is creating a space for that person to move through.  Likewise, blocking the smell of smoke will not stop the target form seeing smoke, flames, or others reacting to the blaze.


# Eliminate Traces
---
To hinder [[Countermeasures#Security Audits|security audits]], you can clean up evidence of your intrusion before you exit a system.  This involves erasing incriminating data in the access and security logs and otherwise hiding any evidence of system tampering.  Take a complex action and make a [[Hacking]].  If successful, you wipe away details that might be used to track you down or reveal what you did, including your mesh ID.

# Force Re-Authentication
---
While sniffing a target, you can break the connection and force them to re-authenticate in order to capture their login credentials ([[Devices & Authentication#Sniffing|Sniffing]]).  This requires winning a [[Hacking]] against the authenticating firewall.

# Hide File or Process
---
You can obfuscate the presence of a file, code element, or even an active app, script, or other software process.  This takes a complex action and an [[Skills#Infosec|Infosec Test]]; note the result.  Anyone that seeks to find that file or process later must bear your result with an [[Skills#Research|Opposed Research Test]] at -30.

# Impair Senses
---
If hacking a device projecting AR, the AR illusions app can be used to distract and impair the target.  For example, dark illusory clouds can obscure vision, ear-wrenching high-volume noises can make people cringe, and a persistent tickling sensation might drive anyone crazy.  Make an [[Skills#Interface|Interface Test]]; if successful the target suffers a -10 impairment modifier to [[Skills#Perceive|Perceive]] and other actions, with an additional -10 per superior success.  Modifiers may be temporary, as the target can adjust their filters and/or turn their AR off if necessary.

# Inject AR Illusion
---
If hacking an AR-capable device, you can insert fake sensory input into an AR feed with a [[Hacking]].  The primary use of the AR illusions app is to inject different kinds of visual, auditory, tactile, and even emotional illusions into the augmented reality of the device's user, depending on the type of interface used.  How the hacked user will respond to the illusion depends on whether they are aware of the intruder, what type of interface they are using (entoptic or haptic), and how realistic the illusion is.

The best illusions are crafted in advance, using real footage and advanced image and sensory manipulation tools.  Such illusions are hyper-realistic.  If injected subtly, with proper timing, and in the proper context, there is no reason for the target to suspect trickery.  If something is off, however, this becomes an [[Making Tests#Opposed Test|Opposed]] test between the illusion creators' [[Skills#Interface|Interface]] skill and the target's [[Skills#Perceive|Perceive]].  GMs should apply modifiers as they feel appropriate.  Keep in mind that even if someone sees through the deception, they may still act instinctively; almost anyone will duck when they see an object suddenly flying at their face, as their body reacts before the brain comprehends that it's an illusion and not a threat.

### Improvising on the Fly:
Hackers may also improvise illusions as needed, taking advantage of the AR illusion app's advanced tools, patching in and manipulating sensory clips as needed in real-time.  This requires a sustained task action from the hacker and is more difficult and easily sotted (+10 to +30 modifier to [[Skills#Perceive|Perceive Tests]]).  The advantage is that the hacker can modify the illusion in reaction to the user's actions or environment factors on the fly.

# Install Backdoor
---
Backdoors are ways into a system that bypass normal authentication and security features.  Backdoors are secretly installed by hidden intruders so that they may access the system at a later time without needing to hack in again.  Backdoor details can be shared with others.

Most backdoors are installed by replacing an existing app with a copy that was modified to incorporate a vulnerability that allows instant remote access to the system.  The trick lies in making the copied app look like the unmodified original, so that it isn't detected during security audits.

To install a backdoor, you must have access to the system, take a complex action, and win a [[Hacking#Hacking Test|Hacking Test]].  Apply a -20 modifier if you want the backdoor to provide [[Devices & Authentication#Security Accounts|security access privileges]], -30 for [[Devices & Authentication#Admin Accounts|admin privileges]].  If you succeed, the backdoor is installed -- you may use it to access the system without making a test until it is removed; you automatically acquire [[Hacking#Covert|covert status]].  Every superior success applies a -10 modifier towards attempts to discover the backdoor later (see [[Countermeasures#Security Audits|Security Audits]]).  On a critical success, the backdoor provides [[Hacking#Hidden|hidden status]].

# Install Blocker
---
To deter countermeasures, you can activate a process that will pre-emptively block a specific app, command, or action on that system.  For example, you could install a blocker to prevent a shutdown from being initiated, stop an app from launching, or prevent a device function from being activated.  Creating a blocker requires a complex action and a [[Hacking#Hacking Test|Hacking Test]]; the particular action it blocks must be specified.  If successful, any attempt to conduct that action automatically fails.  To undo a blocker, it must first be located (requiring a [[Research|Research Test]]) and then deleted (a complex action).  System reboots will also remove all blockers.

> [!info]
> Blockers are not omnipotent; GMs should use their best judgement when defining their limitations.


# Jam Signals
---
You can transmit radio signals that deliberately interfere with other radio signals in order to disrupt communications.  You can choose to selectively jam a particular device or devices, or universally jam all radio signals.  Jamming requires a complex action and an [[Skills#Interface|Interface Test]] to initiate.  If successful, affected devices within range have their radio communications disrupted -- they are cut off from the mesh and cannot communicate wirelessly until the jamming ends or they move out of range.  Wired devices are unaffected.

Jamming is also quite difficult to overcome (see [[Mesh Actions#Bypass Jamming|Bypass Jamming]]).  Jamming may also be used to block radar signals and sensors.

# Loop Sensor Feed
---
A common method of undermining surveillance systems is to loop the sensor feed, so that it repeatedly shows insignificant footage or data, allowing physical intruders to pass undetected.  To loop a feed, you must first find and copy a recorded segment of the sensor feed (possibly requiring a [[Research|Research Test]]) or spend the time to record it.  Looping the feed requires a complex action and a [[Hacking#Hacking Test|Hacking Test]].  Looped feeds can be set to automatically revert after a set time frame.

# Modify Tacnet
---
If hacking a tacnet-enabled system, you can alter, block, or inject tacnet data of your own.  This could be used to change maps, block sensory feeds, alter health status indicators, and so on.  You can also tag foes as friends, which would prevent a smartlink-enabled weapon from being used against them.

# Sniff Traffic
---
You can intercept and monitor wireless signals (see [[Devices & Authentication#Sniffing]]).

# Suppress Alarm
---
You can attempt to turn off a passive alert by winning a [[Hacking#Hacking Test|Hacking Test]].  The system will have alerted any defenders as soon as the alert was triggered, so this will not necessarily deter scrutiny, but it may sidestep automatic countermeasures such as [[Countermeasures#Reauthenticate (Automatic)|re-authentication]] or [[Countermeasures#Reduce Privileges (Automatic)|reduce privileges]].  The same action can be used to reduce an [[Countermeasures#Active Alert|active alert]] to a [[Countermeasures#Passive Alert|passive alert]] (which can then be subsequently turned off with another suppress action).

# Suppress Process
---
Many hacking techniques are fire-and-forget -- you disable a function, kill the app, terminate the connection, etc. -- and move on.  The disruption is temporary; the system defender or another user can simple restart the process.  Some systems are designed to automatically restart certain processes on their own (GM discretion).  To prevent the process from restarting, you need to delete the underlying software from the system (usually requiring [[Mesh Actions#Modify Software|admin privileges]]) or you must actively suppress the process.

Suppressing a process requires a complex action each action turn.  This will counteract the system's automatic attempts to restart the process.  Anyone that wishes to restart the process must successfully defeat you in an [[Making Tests#Opposed Test|Opposed]] [[Skills#Infosec|Infosec test]] though it may be terminated again...unless termination is blocked.

> [!tip]
> Many hackers task their muse with suppressing processes.


# Tap AR
---
You can access and monitor any augmented reality experienced by a user as if it were your own with a [[Hacking#Hacking Test|Hacking Test]].  You can even set this up to automatically forward the same AR experience to you if you leave the system.

# Tap Senses
---
If hacking mesh inserts or a cyberbrain (see [[Mindware Hacking]]), you can tap into the target's sensorium for surveillance purposes.  Sensory data may also be recorded or broadcast as XP.



