import {useState} from 'react'

const Counter = () => {
const [count,setCount] = useState(42)

const increment = () => {
    setCount(count+1)
}

return(
    <>
    <h2>
        {count}
    </h2>
    <button onClick={()=> increment()}>
        <h2>
            Click!!
        </h2>
    </button>
    </>
)
}

export default Counter