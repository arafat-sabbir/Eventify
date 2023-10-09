import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Services from "../../Components/Services/Services";
import UserReview from "../UserReview/UserReview";
import WhyUs from "../Why us/WhyUs";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="-m-44 hidden lg:block">

        </div>
        <div className="">
          <Services></Services>
        </div>
        <WhyUs></WhyUs>
        <UserReview></UserReview>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
