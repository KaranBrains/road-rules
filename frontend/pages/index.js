import Features from "../components/home/Features";
import HomeMain from "../components/home/Main";
import Work from "../components/home/Work";
import Testimonials from "../components/home/testimonials";
import Pricing from "../components/home/pricing";
import Choice from "../components/home/choose";

export default function Home() {
  return (
    <>
      <HomeMain />
      <Choice />
      <Pricing />
      <Features />
      <Work />
      <Testimonials />
    </>
  );
}
