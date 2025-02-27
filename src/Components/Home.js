import "react-responsive-carousel/lib/styles/carousel.min.css"; //import carousel
import { Carousel } from "react-responsive-carousel";
import "../styles.css";

const Home = () => {
    return(
        <div className="home">
            <h2>Welcome To India Tourism</h2>
            {/* <p>Explore the beauty of India's rich heritage and landscapes.</p> */}
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src="/images/tajmahal.jpg" alt="Taj Mahal" />
                    <p className="legend">Taj Mahal, Agra</p>
                </div>
                <div>
                    <img src="/images/Lakshadweep.webp" alt="Lakshadweep Beaches" />
                    <p className="legend">Lakshadweep Beaches, Lakshadweep</p>
                </div>
                <div>
                    <img src="/images/BanarasGhat.jpeg" alt="Banaras Ghat" />
                    <p className="legend">Banaras Ghat, Banaras</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Home;