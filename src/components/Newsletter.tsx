//importing hooks
import { useState } from 'react';
//newletter component
const Newsletter: React.FC = () => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  //validating the email
  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  //on submit handler
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValid(validateEmail(email));
  };
  return (
    <section className="newsletter__section">
      <div className="wrapper" data-aos="fade-up">
        <h3>35,000+ already joined</h3>
        <h1 className={isValid !== null ? 'resize__heading' : ''}>
          Stay up-to-date with what we're doing
        </h1>
        <form onSubmit={onSubmitHandler} noValidate>
          <div
            className={`input__container ${
              isValid !== null ? (isValid ? 'valid' : 'error') : ''
            }`}
          >
            <input
              type="email"
              className="email__input"
              placeholder="Enter your email address"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <span>
              {isValid !== null
                ? isValid
                  ? 'Successfully sent!'
                  : 'Whoops, please make sure the email is valid'
                : ''}
            </span>
          </div>
          <button className="button">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
