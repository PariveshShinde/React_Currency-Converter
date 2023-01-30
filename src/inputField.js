import "./inputField.css";

function InputField(props) {
  function handleInputEvent(e) {
    props.obj[props.id] = parseInt(e.target.value);
    document.getElementById("result").innerText = "";
  }
  return <input className="inputField1" onChange={handleInputEvent}></input>;
}
export default InputField;
