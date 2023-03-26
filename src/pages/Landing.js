import { Button } from "@material-ui/core";
import { Image } from "@mui/icons-material";
import LoginButton from "../components/LoginButton";
import gymImage from "../assets/imgs/gym.jpg";

export function LandingPage() {
  return (
    <div className="landing-root">
        <Image src={gymImage} />
      <div className="landing-buttonContainer">
        <LoginButton className="landing-button" />
        <Button className="landing-button" variant="outlined" color="primary">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
