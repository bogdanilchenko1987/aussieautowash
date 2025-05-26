import About from "../components/about/About";

import FAQ from "../components/faq/Faq";
import Hero from "../components/hero/Hero";
import Location from "../components/location/Location";
import Pricing from "../components/pricing/Pricing";
import Steps from "../components/steps/Steps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pricing />
      <About />
      <Steps />
      <FAQ />
      <Location />

    </>
  );
}
