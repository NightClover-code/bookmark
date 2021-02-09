interface HeroProps {
  isNavOpen: boolean;
}
const Hero: React.FC<HeroProps> = ({ isNavOpen }) => {
  return (
    <section
      className={`bookmark__manager__hero ${isNavOpen ? 'index__lower' : ''}`}
    >
      <div className="text__content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="call__to__action">
          <div className="chrome__button button">Get it on Chrome</div>
          <div className="firefox__button button">Get it on Firefox</div>
        </div>
      </div>
      <div className="illustration__container">
        <img src="./images/illustration-hero.svg" alt="hero-illustration" />
      </div>
    </section>
  );
};

export default Hero;
