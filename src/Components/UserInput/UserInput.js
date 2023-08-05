import { useState } from "react";
import Style from "./UserInput.module.css";

const exampleUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 10,
  duration: 5,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(exampleUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = (event) => {
    setUserInput(exampleUserInput);
  };

  const InputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: +value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={Style.form}>
        <div className={Style["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                InputChangeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                InputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={Style["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                InputChangeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                InputChangeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={Style.actions}>
          <button
            onClick={resetHandler}
            type="reset"
            className={Style.buttonAlt}
          >
            Reset
          </button>
          <button type="submit" className={Style.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
