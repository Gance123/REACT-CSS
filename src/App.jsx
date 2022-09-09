import { useState, useCallback } from "react";
import { ChildeArea } from "./ChildeArea";
import "./styles.css";

export default function App() {
  console.log("Appがレンダリングされた");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);
  // useCallback(関数、関心対象)
  //本来ならばonChangeTextでText変更によりstateが変わり、
  //レンダリング際にonClickCloseもstateが変わったと見なされ、再レンダリングされてしまう

  //関心対象を空の配列にすることで、”最初に生成したsetOpen(false)をそのままずっと使う”という意味になる
  //・・・再レンダリングされない

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildeArea open={open} onClickClose={onClickClose} />
        {/* {open && <ChildeArea />} */}
      </div>
    </>
  );
}
