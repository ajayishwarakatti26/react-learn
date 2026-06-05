import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // Fixed state variable names to match what you use in your JSX
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Fixed ref name capitalization
  const passwordRef = useRef(null);

  // Fixed function spelling to match the useEffect call
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    
    // Fixed: You need to pass the 'pass' variable into the state setter!
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Added the imported useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="password-container">
      <h1 className="heading">Password Generator</h1>

      <div className="input-group">
        <input
          type="text"
          value={password}
          className="password-display"
          placeholder="Your secure password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="copy-btn"
          title="Copy to clipboard"
        >
          Copy
        </button>
      </div>

      <div className="controls-container">
        <div className="control-row length-control">
          <label htmlFor="lengthSlider" className="length-label">
            Length: <span className="highlight-text">{length}</span>
          </label>
          <input
            id="lengthSlider"
            type="range"
            min={6}
            max={100}
            value={length}
            className="range-slider"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>

        <div className="control-row options-control">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Include Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;``