# Mindware Hacking
Pods, synthmorphs, and some bots, vehicles, and biomorphs are equipped with cyberbrains.  This technology enables transhuman egos to sleeve into and control these forms.  Under the hood, cyberbrains are specialized hardware (hosts) for running an infomorph's digital mind-state.  The drawback to both cyberbrains and infomorphs is that they can be hacked, just like any other electronic device.

# Preconditions
---
To hack a cyberbrain, you must be able to access the cyberbrain itself.  Most cyberbrains are linked to mesh inserts and slaved to the user's PAN, meaning they can be wirelessly accessed by hacking the PAN first.  Cyberbrains are also equipped with access jacks on the exterior of the morph, so if you have physical access to the morph, you can plug in and access via a wired connection.  If the subject is not willing or incapacitated, you must first successfully [grapple](../../Action%20&%20Combat/Melee%20Combat.md#grappling) the target. 

To hack an infomorph, you must know its mesh ID and have access to its home device.  This may mean you must first hack the device the infomorph is running on.

Additionally, because they run an ego, cyberbrains and infomorphs feature hard-coded security measures; apply a -30 modifier to all hacking attempts.

# Mindware Subversion
---
Once a cyberbrain or device running an infomorph has been infiltrated, it may be subverted just like other systems.  Since such mindware contains an ego, however, an intruder has several unique options.

All of the actions below require a [Hacking Test](Hacking.md#hacking-test).

### Trap Ego
As an intruder, the first action you may wish to take will be to install a lockbox app.  This malware traps the ego/infomorph within the cyberbrain/device, preventing it from transferring to a new system.  Lockbox malware also locks the ego/infomorph out of its root admin controls, effectively cutting it off from countermeasures or other defensive actions.   The only mesh actions a lockboxed mind may take depend entirely on what permissions, if any, you give it.

Egos trapped within a lockbox are quite vulnerable.  They could, for example, be subject to enforced uploading, simulspaces, forking, or psychosurgery.   Egos trapped for extended periods may suffer stress from helplessness.

### Control Ware (Cyberbrain)
As in [Control Ware](System%20Subversion.md#control-ware), you will have privileged access to a morph's ware -- not to mention hacking the ware directly.  One can use this to (de)activate the ware, modify its functioning parameters, access diagnostics and usage logs, or install [scripts](../Mesh%20Actions.md#scripting) to manipulate this ware in the future, among other creative uses.

### Copy Ego
You can copy the source code of an infomorph resident in a cyberbrain/device.  This counts as an inactive backup file of the ego, though it may be run as an infomorph on a host or server.  The "forknapping" of infomorphs from compromised systems by criminal interests remains an ongoing problem in the inner system.  Some infomorphs come equipped with a copylock app; this applies an additional -30 modifier (cumulative with the infomorph's -30 encoded security modifier) to copy attempts.

### Delete Ego
Deleting an ego is the digital equivalent of murder -- or at least property destruction.  This has no effect on the infomorph's backup files (which must be deleted separately) or the morph's cortical stack.

### Freeze Morph (Cyberbrain)
The connection between a cyberbrain and the morph it resides in can be temporarily blocked or permanently severed.  This usually causes the morph to freeze in place (a safety feature for cyberbrain glitches), though it may cause the morph to collapse.  In either case, the morph is incapacitated.  An ego trapped in an incapacitated morph for extended periods may suffer mental stress form helplessness.

### Mindhack Ego
You can mindhack the ego within using psychosurgery.  All of the psychosurgery procedures are an option, from interrogation to altering memories or personality traits.  Since psychosurgery takes time and specialized software, this is usually reserved for targets that are somehow captured and restrained (forknapped, trapped within a lockbox, physically incapacitated, etc.).

### Modify Meshware
Any known meshware installed in an infomorph or cyberbrain may be removed or deactivated.  Likewise, new meshware may be installed.

### Modify Sensory Input (Cyberbrain)
You can modify the sensory inputs from a morph to its resident cyberbrain.  Blocked senses will simply stop functioning until re-enabled.  Recorded sensory input may be fed into the cyberbrain instead, replacing either a single sense or the whole sensorium (the same as XP).  Unless the sensory input was previously recorded from that morph, such injected sensory inputs are easy to recognize as artificial ([Perceive Test](../../Game%20Mechanics/Action%20&%20Combat/Skills#perceive) at +30).  It is also possible to feed contradictory sensory input into the cyberbrain, invoking severe synesthesia with the intention to distract or confuse; apply a modifier between -10 and -30 (hacker's choice0.  Prolonged exposure to hostile sensory input should be treated as torture psychosurgery and may inflict mental stress).

### Puppeteer (Cyberbrain)
Morphs with puppet sock implants may be remotely operated, just like a bot.  If the residents ego is not locked out with a lockbox app, it may fight attempts to puppet the morph as an automatic action -- you may likewise counter the ego's attempted actions.  Make an opposed test pitting the ego's [WIL Check](../../Action%20&%20Combat/Skills#aptitude-checks) against your [Interface](../../Action%20&%20Combat/Skills#interface) skill.  If the opposer wins, no action is taken.  Morphs with locked-out cyberbrains may still be puppeted.  If the cyberbrain is shut down, however, no puppeting is possible.

### Scorch Ego
Direct access to an infomorph/cyberbrain ego opens the possibility for types of attacks that are normally infeasible due to strict content filtering.  You conduct such attacks using [scorchers](../../../Player%20Resources/Gear/Meshware.md#scorchers) -- hostile apps that employ damaging neurofeedback routines.

### Shutdown
Cyberbrains and infomorphs may be deactivated, just like [other systems](Countermeasures.md#rebootshutdown) -- this includes hard shutdowns.  If a cyberbrain is shut down, its morph will freeze in place or collapse.  Shut down morphs may not be puppeted.

### Tap Senses
You may tap into the target's sensorium for surveillance purposes.  Sensory data may also be recorded or broadcast as XP.

### Terminate Cortical Stack Feed
The cyberbrain feeds backup data to the cortical stack.  This is a one-way connection, so the cortical stack itself may not be hacked, but the transfer of data may be cut off.  Likewise, an infomorph's ongoing updates to its inactive backup files may be terminated.  This can be done for a temporary period or it can be indefinitely severed.  A restored backup will be missing memories from the period when the feed was terminated.