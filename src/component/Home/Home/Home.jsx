import Banner from "../Banner/Banner";
import Checkout from "../Checkout/Checkout";
import FaqSection from "../FaqSection/FaqSection";
import Product from "../Product/Product";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
            <Review />
            <FaqSection />
            <Checkout />
        </div>
    );
};

export default Home;