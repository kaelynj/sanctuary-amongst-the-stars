import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Game Mechanics',
    icon: '⚙️',
    description: 'Rules references for dice, skills, combat, PSI, hacking, and transhuman tech.',
    to: '/docs/game-mechanics/getting-started',
    accentVar: '--sats-neon-cyan',
  },
  {
    title: 'World Information',
    icon: '🌌',
    description: 'Lore on the factions, locations, and history of the Eclipse Phase universe.',
    to: '/docs/world-information',
    accentVar: '--sats-neon-magenta',
  },
  {
    title: 'Player Resources',
    icon: '🧬',
    description: 'Character creation, gear, reputation, and everything else your character needs.',
    to: '/docs/player-resources',
    accentVar: '--sats-neon-purple',
  },
];

function Feature({icon, title, description, to, accentVar}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard} style={{'--accent': `var(${accentVar})`}}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
