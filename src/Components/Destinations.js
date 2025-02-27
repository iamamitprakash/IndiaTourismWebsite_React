import "../styles.css";

const Destinations = () => {
    return(
        <div className="destinations">
            <h2>Top Destinations in India...</h2>
            <div className="destination-grid">
                <div className="destination-card">
                    <img src="/images/tajmahal.jpg" alt="Taj Mahal" />
                    <p>Taj Mahal, Agra</p>
                </div>
                <div className="destination-card">
                    <img src="/images/AmritUdyan.jpg" alt="Amrit Udyan" />
                    <p>Amrit Udyan, Rashtrapati Bhawan, New Delhi</p>
                </div>
                <div className="destination-card">
                    <img src="/images/BanarasGhat.jpeg" alt="Banaras Ghat" />
                    <p>Banaras Ghat, Banaras</p>
                </div>
                <div className="destination-card">
                    <img src="/images/Jaipur.jpg" alt="Jal Mahal" />
                    <p>Jal Mahal, Jaipur</p>
                </div>
                <div className="destination-card">
                    <img src="/images/JhandewalanHanumanMandir.avif" alt="Jhandewalan Hanuman Mandir" />
                    <p>Jhandewalan Hanuman Mandir, New Delhi</p>
                </div>
                <div className="destination-card">
                    <img src="/images/Kerala Backwater.jfif" alt="Kerala Backwaters" />
                    <p>Kerala Backwaters, Kerala</p>
                </div>
                <div className="destination-card">
                    <img src="/images/Lakshadweep.webp" alt="Lakshadweep Beaches" />
                    <p>Lakshadweep Beaches, Lakshadweep</p>
                </div>
                <div className="destination-card">
                    <img src="/images/Shimla.jpg" alt="Shimla" />
                    <p>Shimla, Himachal Pradesh</p>
                </div>
                <div className="destination-card">
                    <img src="/images/DarjeelingTeaGarden.jfif" alt="Darjeeling Tea Garden" />
                    <p>Darjeeling Tea Garden, Darjeeling</p>
                </div>
                <div className="destination-card">
                    <img src="/images/GoldenTemple.jpg" alt="Golden Temple" />
                    <p>Golden Temple, Amritsar</p>
                </div>
            </div>
        </div>
    );
};

export default Destinations;