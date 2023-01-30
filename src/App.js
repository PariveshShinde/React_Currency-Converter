import "./App.css";
import Currency from "./Currency-selector";
import InputField from "./inputField";

function App() {
  const rates = {
    "Indian Rupee": {
      "US Dollar": 80.965,
      "UAE Dirham": 22.04,
      "Russian Ruble": 1.19,
      "Japanese Yan": 0.63,
    },
    "US Dollar": {
      "Indian Rupee": 0.0124,
      "UAE Dirham": 0.27,
      "Russian Ruble": 0.015,
      "Japanese Yan": 0.0077,
    },
    "UAE Dirham": {
      "Indian Rupee": 0.04,
      "US Dollar": 3.67,
      "Russian Ruble": 0.054,
      "Japanese Yan": 0.028,
    },
    "Russian Ruble": {
      "Indian Rupee": 0.84,
      "US Dollar": 68.25,
      "UAE Dirham": 18.58,
      "Japanese Yan": 0.53,
    },
    "Japanese Yan": {
      "Indian Rupee": 1.6,
      "US Dollar": 129.58,
      "UAE Dirham": 35.28,
      "Russian Ruble": 1.9,
    },
  };

  let obj = {
    inputField1: null,
    currency1: null,
    currency2: null,
  };
  function handleClickEvent() {
    if (obj.currency1 && obj.currency2 && obj.inputField1) {
      if (obj.currency1 === obj.currency2) {
        alert("Please Select Different Currencies for Conversion");
        document.getElementById("result").innerText = "";
      } else {
        document.getElementById("result").innerText =
          obj.inputField1 * rates[obj.currency2][obj.currency1];
        console.log(obj);
      }
    } else {
      alert("Please Enter All Fields");
    }
  }

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="child-container">
        <label>Amount</label>
        <InputField className="inputField" id="inputField1" obj={obj} />
        <label>From</label>
        <Currency className="currency" id="currency1" obj={obj} />
        <label>To</label>
        <Currency className="currency" id="currency2" obj={obj} />
        <label className="hidden">Result</label>
        <p className="hidden" id="result"></p>
        <button className="btn" onClick={handleClickEvent}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
