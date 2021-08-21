
import { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const submitTask = (e) => {
    setList([...list,task])
    setTask('')
  }

  const crossLine = (event) => {
    const element = event.target;
    element.classList.toggle("crossed-line");
}

  return (
    <>
    <input
      value={task}
      type="text"
      onChange={(event) => {
        handleInput(event);
      }}
    ></input>
    <button type='button' onClick={(event)=> submitTask(event)}>Add</button>
    {console.log('list',list)}
    { list.map((item) => <h4 onClick={(event)=>crossLine(event)}>{item}</h4>)}
    </>
  );
};

export default ToDo;
