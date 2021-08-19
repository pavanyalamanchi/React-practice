import { useState, useEffect } from "react";

let newList=[]
const ToDo = () => {
const [item, setItem] = useState('');
const [list,setList] = useState()
const [bool,setBool] = useState(false)

//const pathToSave = join(dirname(fileURLToPath(import.meta.url)),'../data')

const handleInput = (value) => {
    setItem(value)
    //list.push(value)
}
const submitForm = () => {
   // e.preventDefault();
    
    setList(item)
    newList.push(item)
    console.log(item)
    //setBool(true)
    console.log(bool)
    
    setItem('')
    }

    useEffect(()=> {
        setList(item)
        newList.push(item)
        setBool(true)
        console.log(list)
    },[])


  return (
    <>
    {console.log('hey! i am rendered')}
   
      <form onSubmit={submitForm}>
        <input
        type="text"
        onChange={(event)=>{
            handleInput(event.target.value)
        }}
        ></input>
        <button type='submit'>Add</button>
      </form>
      {/*list.map((listItem) => {
          <h4>{listItem}</h4>
      })*/}
      
    {bool && newList.map(listItem => <h4>{listItem}</h4>)}
    
    </>
  );
};

export default ToDo;
