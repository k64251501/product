import React, {useState} from 'react'

// class Counter extends React.Component{
//     qauntity= 1;
//     state ={
//       quantity : 1     
//     }
     
//     render (){
//         return <div>

//         </div>
//     }
// }


const Counter = () => {

    const [count, setCount] = useState(0)


    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <h1>{count}</h1>

        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}

export default Counter