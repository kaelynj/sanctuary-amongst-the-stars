---
sidebar_label: Using Psi
---

# Using Psi
Drawing on a sleight to procure an effect does not always require a test.  Each sleight description details how the power is used.


## Range
---
Psi-chi sleights only affect the async.  Psi-gamma sleights may be used on the self or other biological life at a short distance.  While there is no modifier for using a ranged sleight on yourself, using ranged sleights on others imposes a modifier according to the distance.

#### Touch:
Touch range gives you +20 modifier to your [Psi Test](../Action%20&%20Combat/Skills.md#psi) (but not on sleights used on yourself).  You must have physical contact with the target (clothing, armor, vacsuits, etc. do not impeded).  if the target avoids being touched, this requires a successful melee attack as a quick action, applying the touch-only +20 modifier.  This attack does not cause damage, but the target may use [Fray](../Action%20&%20Combat/Skills.md#fray) to avoid.  If you fail to touch, you may still use the sleight at **Point-Blank** range.

#### Point-Blank:
+10 Psi Test (but not on sleights used on yourself).  You must be within 2 meters of the target or less.

#### Close:
No modifier.  You must be within 10 meters of the target.  For every 2 meters beyond that, apply a -10 modifier to the test.

#### Psi-vs-Psi:
Due to the nature of psi, sleights are more effective against other asyncs and exsurgents.  Double the range of each category above: Point-Blank counts to 4 meters, Close counts out to 20 meters.

## Targeting
---
You may not target synthmorphs, bots, and vehicles with psi sleights, as they lack biological systems.  Pods and biomorphs with cyberbrains are less susceptible; asyncs suffer a -30 modifier against them.  Note that infomorphs may never be targeted by psi sleights as psi is not effective within the mesh or simulspace.

You must have line of sight to your target or otherwise be aware of their presence in relation to yours (such as by using the ego sense sleight or viewing them through a tacnet).  Walls with a combined Armor/DR of 100 or more will block psi sleights.  Ranged combat modifiers for cover and hidden targets apply to Psi Tests.

#### Animals & Less Complex Life Forms:
Psi works against any living creature with a brain and/or nervous system.  Against partially sapient and partially uplifted animals, it suffers a -20 modifier.  Against non-sapient animals, it suffers a -30 modifier.  It has no effect on or against less complex life forms like plants, algae, bacteria, etc.

#### Factors & Aliens:
At the GM's discretion, psi sleights may not work on alien creatures at all, depending on their physiology and neurology.  If it does work, it is likely to suffer at least a -20 modifier.

## Opposed Tests
---
Psi that targets another character is handled as an [opposed test](../Action%20&%20Combat/Making%20Tests.md#opposed-test), the async's [Psi](../Action%20&%20Combat/Skills.md#psi) versus the defender's WIL Check.  [Moxie pool](../Action%20&%20Combat/Pools.md#moxie) may be used by both.  Willing characters may choose not to resist, but they must be aware of what is happening (either the async has warned them or they have experienced it before).  Unconscious or sleeping characters cannot resist.

#### Psi Full Defense:
Like [full defense](../Action%20&%20Combat/action-factors.md#full-defense) in physical combat, you may spend a complex action to concentrate your mental defenses, gaining a +30 modifier to resist sleights until your next action.

#### Criticals:
If the defender wins with a critical success, the async is temporarily "locked out" of their mind and may not target them again until they take a recharge action.

If the async rolls a critical failure, they suffer 1d6 DV as the effort takes a physical toll in the form of headaches and ruptured blood vessels. 

If the async wins with a critical success, double the potency of the sleight's effect.  In the case of psi attacks, the DV is doubled.

### Mental Armor
The [Psi Armor](psi_chi.md#psi-armor) and [Psi Shield](psi_gamma.md#psi-shield) sleights provide mental armor, a form of neural hardening against psi-based attacks.  Like physical armor, this mental armor reduces the amount of damage inflicted by a psychic assault.

## Target Awareness
---
The target of a psi sleight is aware they are being targeted any time they succeed on their half of the opposed test (regardless of whether the async rolls higher or not).  Note that awareness does not necessarily mean that the target understands that psi abilities are being used on them, especially as most people in *Eclipse Phase* are unaware of psi's existence.  Instead, the target understands that some outside influence is at work or that something strange is happening.  They may suspect that they have been drugged, hacked, or are under the influence of some strange technology.  A character with Psi skill may make a Psi Test to identify the sleight being used against them.  Targets who fail their roll remain unaware.

## Duration
---
Psi sleights have one of four durations: *constant*, *instant*, *temporary*, or *sustained*.

#### Constant:
Constant sleights are always "on"

#### Temporary:
Temporary sleights last for a limited duration with no extra effort.  The temporary duration is determined by your $ \text{WIL}\div 5$ and is measured in action turns, minutes, or hours, as noted.  [Influence effects](influence_effects.md#influence-effects) are applied immediately when the sleight is activated, not at the end of the duration.

#### Sustained:
Sustained sleights last as long as you want, but require active effort and concentration: apply a -10 modifier to all other skill tests while the sleight is sustained.  The async must also stay within ***Close*** range + 10 meters of the target, otherwise the sleight immediately ends.  More than one sleight may be sustained at a time, with a cumulative modifier.  [Influence effects](influence_effects.md#influence-effects) are applied immediately when the sleight is activated, not at the end of the duration.  At the GM's discretion, sleights that are sustained for long periods may incur additional [Infection Modifiers](#infection-modifiers) and [Infection Tests](##infection-tests).

# Infection Modifiers
---
Whenever you take advantage of your psychic abilities, there is a cost to pay.  This may manifest physically, in the form of fatigue, headaches, and hemorrhaging.  or it may give the infection a chance to claw at the cracks in your psyche and manipulate your outlook.

Whenever you use psi-gamma sleights, two things happen.  First, your [Infection Rating](Psi_overview.md#infection-rating) increases by that sleight's Infection modifier.  This represents the infection temporarily taking a stronger hold over your mind.  Second, the exovirus must make an Infection Test.  As the infectee, the async player rolls this test.  Asyncs that only use psi-chi sleights do not need to worry about infection flare-ups unless they [push](#pushing-sleights).

### Infection Test
The target number for your Infection Test equals your current Infection Rating (including the modifier from the sleight you are using).  If this test fails, nothing happens, and you pull off the sleight without any negative effects.  If it succeeds, you suffer an [influence effect](#the-infections-influence) appropriate to the sub-strain.

You may not spend pool to affect the Infection Test, but you may spend [Moxie](../Action%20&%20Combat/Pools.md#moxie) to avoid making the Infection Test altogether, powering through the sleight with sheer willpower.  However, your Infection Rating still increases.

#### Critical Failure:
If you roll a critical failure, the exovirus temporarily loses its grip on you.  You are immune to [influence effects](influence_effects.md#influence-effects) until your next recharge.

#### Superior Success:
Apply a +1 modifier to the influence effect roll per superior success.

#### Critical Success:
On a critical success, an influence effect is chosen and the GM also picks one of the following:

- **Checkout Time**: This infection is awakened, but bides its time.  The next time you take a long recharge or are rendered unconscious, you may awaken to discover that the infection has been active while your mind was under -- literally taking control of your body.  What the exovirus does during this time is up to the GM and may not be immediately apparent to your character.  You may awaken to a corpse in your bed or strange symbols meticulously etched with bloody fingernails over every inch of your wall, or you may discover a half-completed alien device secreted away in a locker weeks later.  More than one async has stimmed themselves awake for days, afraid to fall asleep and let the presence inside them take control.
- **Interference**: The exovirus actively impedes you at a critical point.  At some points in the future, when you are about to make a test, you must make an opposed test pitting your WIL Check against your Infection Rating +30. If the infection wins, your test will automatically suffer a critical failure (pools may not be applied).  GMs are encouraged to select situations that will have dramatic and dire results.

# The Infection's Influence
---
Every time an Infection Test succeeds, the exovirus exerts a bit more control over your psyche.  Every async experiences this differently, depending on their particular sub-strain.

Roll 1d6 and consult your sub-strain's [influence effects](influence_effects.md#influence-effects), applying a +1 per superior success rolled on the Infection Test.  Influence effects kick in immediately as the sleight is activated.  During character creation (or when your PC becomes infected with Watts-MacLeod), you should write down these six influence effects on your character sheet.

- **Physical Damage**:
You suffer DV 1d6 in the form of fatigue, headaches, and hemorrhaging.
- **Enhanced/Restricted Behavior**:
For a temporary period of 1d6 minutes, you acquire an Enhanced or Restricted Behavior trait.  This trait should directly impact your roleplaying.  The level of the trait depends on your current Infection Rating: under 33 (Level 1), 33+ (Level 2), 66+ (Level 3).
- **Motivation**:
For a temporary period of 1d6 hours, you acquire an extra motivation that should be actively roleplayed.  This itch lurks in the back of your mind, relentlessly pushing you to take action.  if the motivation is satisfied, you benefit you do not need to act on it immediately.  However, if the duration ends and the GM determines you have not satisfied its terms, you suffer SV 1d6.  At the GM's discretion, staying in proximity to the motivation's focus (if any) without acting upon it may require a WIL Check to restrain yourself and may inflict a -10 modifier to all skill tests until you give in or the duration ends.
- **Other Effects**:
A few influence effects (such as frenzy and hallucinations) are unique to the sub-strain and function as detailed.


# Pushing Sleights
You may boost your sleight's effectiveness, at the cost of increasing the infection's influence.  You may choose to push a psi-gamma sleight when you activate it, but before any test is made.  Your [Infection Modifier](#infection-modifiers) doubles and you automatically suffer DV 1d6 in addition to making an [Infection Test](#infection-test) as normal.

Choose one of the following effects for your pushed sleight:
- **Increased Range**: Range doubles; Point-Blank extends to 4 meters, Close extends to 20 meters.  This effect is cumulative with the range increase against other asyncs (Point-Blank become 6, Close becomes 30).
- **Increased Effect**: Any modifiers provided by the sleight are doubled.  For example, +10 becomes +20; +1 pool becomes +2; and so son.
- **Increased Power**: The sleight is resisted by WIL Check $\div 2$.
- **Increased Penetration**: [Psi Shield](psi_gamma.md#psi-shield) armor is reduced by half.
- **Increased Duration**: Double the sleight's Duration (temporary sleights only).
- **Extra Target**: You may affect one extra target with the sleight, with the same action, as long as each of them can be targeted via the rules above.  You only roll once, with each of the defending characters making their opposed tests against that roll.

You may also push already active psi-chi sleights.  In this case, increase your [Infection Rating](Psi_overview.md#infection-rating) by 5 and make an [Infection Test](#infection-test).  Psi-chi pushes are temporary, lasting only WIL $\div$ 5 minutes.

[Moxie pool](../Action%20&%20Combat/Pools.md#moxie) may be used when pushing to negate the physical damage, but you must still make an Infection Test as normal.  If 2 points of Moxie are spent, however, the test is negated entirely.

Additionally, pushing a sleight is not necessarily obvious, though the mental effort and pain/damage may be apparent with a [Kinesics Test](../Action%20&%20Combat/Skills.md#kinesics).



# Easing The Infection
For every short recharge action you take, reduce your [Infection Rating](Psi_overview.md#infection-rating) by 10.  It may not be decreased lower than your base Infection Rating (Psi Level $\times$ 10).  For every long recharge, reset your Infection to its base rating.

You may not reduce your Infection Rating if you have active influence effects -- the urge must be satiated first.