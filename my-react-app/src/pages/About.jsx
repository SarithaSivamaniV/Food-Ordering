const About = () => {
  return (
    <div className="about-page">
      <div className="about-banner">
        <img src="/about.jpg" alt="About Banner" />
        <div className="overlay"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At Foodie Express, we believe great food should be just a click away.
            Our mission is to deliver your favorite meals quickly and reliably,
            so you can enjoy delicious dishes from your local restaurants without leaving home.
          </p>
          <p>
            From mouth-watering pizzas and fresh salads to hearty burgers and flavorful pastas,
            we partner with trusted local eateries to ensure every order arrives hot and fresh.
            Sit back, relax, and let Foodie Express take care of your cravings anytime, anywhere.
          </p>
        </div>

        <div className="about-image">
          <img src="/deliver.jpg" alt="Food Delivery" />
        </div>
      </div>
    </div>
  );
};

export default About;
