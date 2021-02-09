const Accordion: React.FC = () => {
  return (
    <section className="faq__section">
      <div className="faq__head">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="faq__accordion">
        <div className="accordion__item">
          <input
            type="checkbox"
            name="checkbox__button"
            className="accordion__checked"
            id="accordion-a"
          />
          <label className="question" htmlFor="accordion-a">
            What is Bookmark?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </div>
        </div>
        <div className="accordion__item">
          <input
            type="checkbox"
            name="checkbox__button"
            className="accordion__checked"
            id="accordion-b"
          />
          <label className="question" htmlFor="accordion-b">
            How can I request a new browser?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="answer">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </div>
        </div>
        <div className="accordion__item">
          <input
            type="checkbox"
            name="checkbox__button"
            className="accordion__checked"
            id="accordion-c"
          />
          <label className="question" htmlFor="accordion-c">
            Is there a mobile app?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="answer">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </div>
        </div>
        <div className="accordion__item">
          <input
            type="checkbox"
            name="checkbox__button"
            className="accordion__checked"
            id="accordion-d"
          />
          <label className="question" htmlFor="accordion-d">
            What about other Chromium browsers?
            <i className="fas fa-chevron-down"></i>
          </label>
          <div className="answer">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit. More Info 35,000+ already joined Stay
            up-to-date with what we’re doing Contact Us Features Pricing Contact
          </div>
        </div>
      </div>
      <div className="chrome__button button">More Info</div>
    </section>
  );
};

export default Accordion;
