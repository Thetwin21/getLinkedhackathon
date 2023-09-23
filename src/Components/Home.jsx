import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Main from "./Main";
import Second from "./Second";
import Third from "./Third";
import Fourt from "./Fourt";
import Faqs from "./Faqs";
import Timeline from "./Timeline";
import Prizes from "./Prizes";
import Sponsors from "./Sponsors";
import Privacy from "./Privacy";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Loadingspin from "./Loadingspin";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loadingspin />
      ) : (
        <section
          id="home"
          className=" bg-bg w-full min-w-screen min-h-screen h-full"
        >
          <Main />
          <Second />
          <Third />
          <Fourt />
          <Faqs />
          <Timeline />
          <Prizes />
          <Sponsors />
          <Privacy />
          <Footer />
          <Copyright />
        </section>
      )}
    </>
  );
};

export default Home;
