import HeroBanner from "../components/HeroBanner";
// import AppContent from "../components/AppContent";
import { makeStyles } from "@material-ui/core";
import background from '../assets/imgs/hero.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'auto', 
    },
  }
}));

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroBanner />
    </div>
  );
};

export default LandingPage;
