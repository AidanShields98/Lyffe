import HeroBanner from "../components/HeroBanner";
import LandingComponent1 from "../components/LandingComponent1";
import { Stack } from "@mui/system";
export function LandingPage() {

  return (
   <Stack spacing={{ md: 1, xs:2}}>
    <HeroBanner />
    <LandingComponent1 />
   </Stack>
  )
}

export default LandingPage;