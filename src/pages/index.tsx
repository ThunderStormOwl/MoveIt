import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Home | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountdownProvider>
            <Countdown />
          </CountdownProvider>
        </div>
        <div>
          <CountdownProvider>
            <ChallengeBox />
          </CountdownProvider>
        </div>
      </section>
    </div>
    
  );
}
