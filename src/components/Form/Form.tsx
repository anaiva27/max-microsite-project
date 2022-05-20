import React from "react";
import "./styles.css";

function Form() {
  return (
    <form className="artist-form">
      <h1 className="form-header">
        Register to see an exclusive livestream performance with kem
      </h1>
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
        <p className="checkbox-text">
          <input type="checkbox" id="check" required />
          By checking this box and clicking enter, I agree that I am 21 years of
          age or older.
        </p>
        <button type="submit" className="button-submit">
          Enter
        </button>
      </div>
      </div>
    </form>
  );
}

export default Form;
