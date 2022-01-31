import {useState} from "react";
import "./styles.css"
import {ChildArea} from "./ChildArea";

export default function App() {
  const [text ,setText] = useState('');
  const [open ,setOpen] = useState(false);

  const onChangeText = (event) => {
    setText(event.target.value);
  }

  const onClickOpen = () => setOpen(!open);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br/>
      <br/>
      <botton onClick={onClickOpen}>表示</botton>
      <ChildArea open={open}/>
    </div>
  );
}