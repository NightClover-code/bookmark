//importing hooks
import { useEffect, useState, useRef } from 'react';
//importing data
import data from '../utils';
import { DataInterface } from '../utils';
//features component
const Features: React.FC = () => {
  //refs
  const listRef = useRef<HTMLUListElement | null>(null);
  //component level state
  const [counter, setCounter] = useState(0);
  const [currentData, setCurrentData] = useState<DataInterface>(data[0]);
  //on Click Handler
  const onClickHandler = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const el = event.target as HTMLInputElement;
    //changing content if target is an <li>
    if (el.tagName === 'LI') {
      //data attribute
      const id = el.getAttribute('data-id')!;
      //checking if listRef.current isn't null
      if (listRef.current) {
        const listArray = Array.from(listRef.current.children);
        listArray.map(item => item.classList.remove('active'));
      }
      //changing counter & showing item is active
      setCounter(parseFloat(id));
      el.classList.add('active');
    }
  };
  //changing current data based on counter change
  useEffect(() => {
    setCurrentData(data[counter]);
  }, [counter]);
  return (
    <section className="features__section">
      <div className="features__head" data-aos="fade-up">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features__tabs" data-aos="fade-up">
        <ul className="tabs__list" onClick={onClickHandler} ref={listRef}>
          <li className="active" data-id="0">
            Simple Bookmarking
          </li>
          <li data-id="1">Speedy Searching</li>
          <li data-id="2">Easy Sharing</li>
        </ul>
      </div>
      <div className="features__content">
        <div
          className="illustration__container"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src={currentData.imgSource}
            alt="features-illustration"
            id="features__tabs__image"
          />
        </div>
        <div
          className="text__content"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h1 id="features__heading">{currentData.title}</h1>
          <p id="features__paragraph">{currentData.description}</p>
          <div className="chrome__button button">More Info</div>
        </div>
      </div>
    </section>
  );
};

export default Features;
