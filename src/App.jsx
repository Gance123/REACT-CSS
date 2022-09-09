import { useState } from "react";
import { ChildeArea } from "./ChildeArea";
import "./styles.css";

export default function App() {
  console.log("Appがレンダリングされた");
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onClickOnOff = () => {
    setOpen(!open);
  };

  // const countup = () => {
  //   setCount(count + 1);
  // };
  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <button onClick={onClickOnOff}>表示</button>
        <ChildeArea open={open} />
        {/* {open && <ChildeArea />} */}
      </div>
    </>
  );
}
