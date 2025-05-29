import React, {useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Hero.css"; // Custom CSS for styling

const Hero = () => {
  // State to manage slides data
  const [slides] = useState([
    {
      title: "Empowering Digital Solutions",
      description:
        "GarvityIntel helps you turn ideas into reality with cutting-edge technology.A futuristic cityscape with glowing digital nodes and a holographic interface",
    },
    {
      title: "Innovate with Us",
      description:
        "A robotic arm assembling a circuit board with glowing code lines and holographic screens.",
    },
    {
      title: "Seamless Integration",
      description:
        "Connected devices (smartphone, laptop, IoT) with glowing lines and a central integration core.",
    },
    {
      title: "Future-Ready Technology",
      description:
        "A futuristic AI brain with interconnected nodes, starry sky transitioning into a digital grid.",
    },
    {
      title: "Expert Support",
      description:
        "A stylized tech team in a control room with holographic charts, blue and gold hues.",
    },
    {
      title: "Application Support",
      description:
        "A stylized tech team in a control room with holographic charts, blue and gold hues.",
    },
  ]);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Change slide every 2 seconds
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <section className="hero">
      {/* Background Video or Animation */}
      <div className="hero-background">
        <video autoPlay loop muted playsInline>
          <source src="videos/back2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Carousel */}
      <div className="hero-content">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className="hero-buttons">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Contact Us</button>
                </div>
              </div>
              <div className="hero-image">
                <img src={`images/hero${index+1}.jpg`} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;