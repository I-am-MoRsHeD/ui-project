import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";


const Home = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1360px] mx-auto">
                <Hero />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
};

export default Home;