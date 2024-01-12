


import Button from "@mui/material/Button";
import { useState } from 'react';
import { Input } from 'antd';


const { TextArea } = Input;

const MainTextArea = (p) => {
  const [text, setText] = useState("")
  const clickbtn = () => {
    let newText = text.toUpperCase()
    setText(newText)

  }
  const onChange = (e) => {
    setText(e.target.value);
  };
  const clearAll = ()=>{
    setText('')
  }
  return (
    <>
      <div>
        <h1>{p.heading}</h1>
        <TextArea
          value={text}
          maxLength={100}
          onChange={onChange}
          placeholder="disable resize"
          style={{
            height: 120,
            resize: "none",
          }}
        />
        <Button onClick={clickbtn} className="my-4" variant="contained">
          UPPERCASE
        </Button>
        <Button onClick={clearAll} className="m-5" variant="contained">
          Clear All
        </Button>
      </div>
      <div className="container">
        <h1>Your Text summery</h1>
        <p>{text.split(" ").length - 1 } : Words</p>
        <br />
        <p>{text.length} : Characters</p>
      </div>
    </>
  );
};

export default MainTextArea;
