import { Button } from "@material-ui/core";
import LoginButton from "../components/LoginButton";

export function LandingPage() {

  return (
    <div className="landing-root">
      <div className="landing-buttonContainer">
        <LoginButton className="landing-button"/>
        <Button className="landing-button" variant="outlined" color="primary">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
