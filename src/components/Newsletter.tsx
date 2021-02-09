const Newsletter: React.FC = () => {
  return (
    <section className="newsletter__section">
      <div className="wrapper">
        <h3>35,000+ already joined</h3>
        <h1>Stay up-to-date with what we're doing</h1>
        <form>
          <input
            type="email"
            className="email__input"
            placeholder="Enter your email address"
          />
          <button className="button">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
