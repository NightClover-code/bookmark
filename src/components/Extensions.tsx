const Extensions: React.FC = () => {
  return (
    <section className="extensions__section">
      <div className="extensions__head">
        <h1>Download the extension</h1>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="extensions__grid">
        <div className="extension__card chrome__card">
          <div className="browser__logo">
            <img src="./images/logo-chrome.svg" alt="logo-chrome" />
          </div>
          <h2>Add to Chrome</h2>
          <div className="version">Minimum version 62</div>
          <div className="dots">
            <img src="./images/bg-dots.svg" alt="dots-bg" />
          </div>
          <div className="chrome__button button">Add & Install Extension</div>
        </div>
        <div className="extension__card firefox__card">
          <div className="browser__logo">
            <img src="./images/logo-firefox.svg" alt="logo-firefox" />
          </div>
          <h2>Add to Firefox</h2>
          <div className="version">Minimum version 55</div>
          <div className="dots">
            <img src="./images/bg-dots.svg" alt="dots-bg" />
          </div>
          <div className="chrome__button button">Add & Install Extension</div>
        </div>
        <div className="extension__card opera__card">
          <div className="browser__logo">
            <img src="./images/logo-opera.svg" alt="logo-opera" />
          </div>
          <h2>Add to Opera</h2>
          <div className="version">Minimum version 46</div>
          <div className="dots">
            <img src="./images/bg-dots.svg" alt="dots-bg" />
          </div>
          <div className="chrome__button button">Add & Install Extension</div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
