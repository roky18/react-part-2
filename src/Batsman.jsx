import { useState } from "react";

export default function Batsman() {
  const [run, setrun] = useState(0);
  const [six, setsix] = useState(0);
  const [four, setfour] = useState(0);

  const handleSingle = () => {
    const updateRun = run + 1;
    setrun(updateRun);
  };
  const handleTwo = () => {
    const updateRun = run + 2;
    setrun(updateRun);
  };
  const handleSix = () => {
    const updateRun = run + 6;
    const updatesix = six + 1;
    setsix(updatesix);
    setrun(updateRun);
  };
  const handleFour = () => {
    const updateRun = run + 4;
    const updatefour = four + 1;
    setfour(updatefour);
    setrun(updateRun);
  };

  return (
    <div className="card">
      <h3>Player: Bangla Batsman</h3>
      {run <= 0 && <p>Good luck</p>}
      {run >= 50 && <p>Congratuletion</p>}
      {run >= 100 && <p>❤❤✔Congratuletion✔❤✔♻💠</p>}
      <h1>Score: {run}</h1>
      <div>
        <h4>
          <small>Sixes: {six}</small>
        </h4>
        <h4>
          <small>Four: {four}</small>
        </h4>
      </div>
      <div className="card2">
        <button onClick={handleSingle}>single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
        <button onClick={handleTwo}>Two</button>
      </div>
    </div>
  );
}
