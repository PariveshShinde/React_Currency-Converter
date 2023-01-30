function Currency(props) {
  function handleSelect(e) {
    props.obj[props.id] = e.target.value;
    document.getElementById("result").innerText = "";
  }
  return (
    <select className="currency" onChange={handleSelect}>
      <option value="Select Currency">Select Currency</option>
      <option value="US Dollar">US Dollar</option>
      <option value="Indian Rupee">Indian Rupee</option>
      <option value="UAE Dirham">UAE Dirham</option>
      <option value="Russian Ruble">Russian Ruble</option>
      <option value="Japanese Yan">Japanese Yan</option>
    </select>
  );
}
export default Currency;
