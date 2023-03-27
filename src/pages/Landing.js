import { Button } from "@material-ui/core";
import { Image } from "@mui/icons-material";
import LoginButton from "../components/LoginButton";
import gymImage from "../assets/imgs/background.jpg";
import Logo from "../assets/imgs/logo.png";
import Typography from '@material-ui/core/Typography';
export function LandingPage() {
  return (
    <div
      className="landing-root"
      style={{ backgroundImage: `url(${gymImage})` }}
    >
      <div style={{ textAlign: "center"}}>
        <img src={Logo} alt="My Logo" />
        <Typography variant="h5" style={{color: "white" }}>
          Welcome to My App
        </Typography>
        <Typography variant="subtitle1" style={{ margin: "10px", color: "white" }}>
          This app does something really cool!
        </Typography>
      </div>

      <div className="landing-buttonContainer">
        <LoginButton className="landing-button" />
      </div>
    </div>
  );
}
