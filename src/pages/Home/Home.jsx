import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import HowToWork from "./HowToWork/HowToWork";
import PremiumMember from "./PremiumMember/PremiumMember";
import SuccessCount from "./SuccessCount/SuccessCount";
import SuccessStory from "./SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Wedding Wave |Home </title>
      </Helmet>
      <Banner></Banner>
      <PremiumMember></PremiumMember>
      <HowToWork></HowToWork>
      <SuccessCount></SuccessCount>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
