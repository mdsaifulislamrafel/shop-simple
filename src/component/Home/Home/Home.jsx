import Banner from "../Banner/Banner";
import Checkout from "../Checkout/Checkout";
import FaqSection from "../FaqSection/FaqSection";
import Clock from "../Product/Clock";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner />
            <Clock />
            <Review />
            <FaqSection />
            <Checkout />
        </div>
    );
};

export default Home;