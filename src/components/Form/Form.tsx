import { useState } from "react";
import "./styles.css";

const path =
  "M6.49982755,12.4954632 L10.6568542,12.5585047 L10.6568542,12.5585047 L10.6568542,-0.0836309448 C10.6568542,-0.864679528 11.2900192,-1.49784451 12.0710678,-1.49784451 C12.8504909,-1.49784451 13.4823382,-0.865997242 13.4823382,-0.0865741412 C13.4823382,-0.0855940979 13.4823372,-0.0846140549 13.4823351,-0.0836340138 L13.4528978,14.0463556 C13.4511719,14.8747809 12.7782014,15.5449532 11.949776,15.5432273 C11.9457416,15.5432189 11.9417072,15.5431942 11.937673,15.5431533 L6.48477197,15.4877925 C5.66232801,15.4794426 5,14.8103561 5,13.9878698 L5,13.9727182 C5,13.156759 5.66146566,12.4952933 6.47742491,12.4952933 C6.48489278,12.4952933 6.49236054,12.49535 6.49982755,12.4954632 Z";

function Form() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form className="artist-form">
      <div className="form-wrapper">
        <p className="form-header">
          Register to see an exclusive livestream performance with kem
        </p>
        <p className="form-text">
          and be entered for a chance to win a virtual &amp; greet
        </p>
        <div className="form-container">
          <div className="form-names">
            <input
              type="text"
              id="firstName"
              className="input-name"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastName"
              className="input-name"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-items">
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Zip code"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="checkbox-text">
              <label style={{display:"flex", flexDirection:"row"}}>
                {/* hidden radio button for accessibility purposes */}
                <input
                  type="checkbox"
                  id="check"
                  onClick={() => setIsChecked(!isChecked)}
                  required
                />
                <svg
                  className={`checkbox ${isChecked ? "active" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  aria-hidden="true"
                >
                  <path d={path} transform="rotate(45 9.243 7.03)"></path>
                </svg>
                <p className="checkbox-label">
                  By checking this box and clicking enter, I agree that I am 21
                  years of age or older.
                </p>
              </label>
            </div>
            <button type="submit" className="button-submit">
              Enter
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
