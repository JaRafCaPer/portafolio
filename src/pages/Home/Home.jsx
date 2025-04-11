import Carousel from "../../blocks/Components/Carousel/Carousel";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <p>Providing high-quality web development and front-end solutions.</p>
        <Carousel />
      </div>
    </section>
  );
};

export default Home;
