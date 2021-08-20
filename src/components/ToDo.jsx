import { useState, useEffect } from "react";

let newList = [];
const ToDo = () => {
  const [item, setItem] = useState("");
  const [bool, setBool] = useState(false);

  //const pathToSave = join(dirname(fileURLToPath(import.meta.url)),'../data')

  const handleInput = (value) => {
    setItem(value);
    //list.push(value)
  };
  const submitForm = (e) => {
    e.preventDefault();
    newList.push(item);
    setBool(true);
    setItem("");
  };

  useEffect(() => {
    newList.push(item);
    setBool(true);
    setItem("");
  }, []);

  return (
    <>
      {console.log("hey! i am rendered")}

      <form
        onSubmit={(event) => {
          submitForm(event);
        }}
      >
        <input
          type="text"
          onChange={(event) => {
            handleInput(event.target.value);
          }}
        ></input>
        <button type="submit">Add</button>
      </form>
      {/*list.map((listItem) => {
          <h4>{listItem}</h4>
      })*/}

      {bool && newList.map((listItem) => <h4>{listItem}</h4>)}
    </>
  );
};

export default ToDo;
