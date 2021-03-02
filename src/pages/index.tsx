import Head from 'next/head';
import {GetServerSideProps} from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css';
import { SideNavBar } from '../components/SideNavBar';
import { Home } from './Home';

interface HomeProps {
  level: number;
  currentXP: number;
  challengesCompleted: number;
}

export default function index(props:HomeProps) {
  return (
    <div>
      <SideNavBar />
      <Home level={props.level} currentXP={props.currentXP} challengesCompleted={props.challengesCompleted} />
    </div>
  );
}

export const getServerSideProps : GetServerSideProps = async(ctx) => {

  const { level, currentXP, challengesCompleted } = ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      challengesCompleted: Number(challengesCompleted),
    }
  }

}