import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import Footer from "../LandingPage/Footer";
import JobCategories from "../LandingPage/JobCategories";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-[poppins]">
      <Header />
      <DreamJob />
      <Companies />
      <JobCategories />
      <Working />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
