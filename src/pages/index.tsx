import {GetServerSideProps} from 'next';
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
      <Home level={props.level} currentXP={props.currentXP} challengesCompleted={props.challengesCompleted}/>
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