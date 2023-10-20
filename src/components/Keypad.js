// Code Keypad Component Here

function Keypad() {
  function handlePassword() {
    console.log("Entering password...");
  }

  return (
    <div>
      <label>Enter Password</label>
      <input type="password" onChange={handlePassword} />
    </div>
  );
}

export default Keypad;
