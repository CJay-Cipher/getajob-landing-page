import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import TopCategories from "./components/top_categories/TopCategories";
import How from "./components/how_it_works/How";
import Companies from "./components/Companies";
import Reviews from "./components/Reviews";
import GetStarted from "./components/GetStarted";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Heading />
            <Hero />
            <Jobs />
            <How />
            <TopCategories />
            <Companies />
            <Reviews />
            <GetStarted />
            <Footer />
        </>
    );
}

export default App;
