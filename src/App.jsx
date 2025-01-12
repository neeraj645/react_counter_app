import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="container bg-gradient-to-t from-[#434343] to-[#000000] text-white w-screen h-screen flex justify-center items-center ">

<div className="box h-40 flex justify-center items-center gap-5  flex-col">

  <h1 className='text-5xl	font-bold		'>The Counter App</h1>
  <p className='text-3xl	font-semibold		'>Counter : {count}</p>

  




  <div className="innerBox flex justify-center items-center gap-5">

  <button className='bg-zinc-600 text-white px-4 py-1 rounded-3xl ' onClick={() => { setCount(count+1); }}>Increase</button>
  <button className='bg-zinc-600 text-white px-4 py-1 rounded-3xl ' onClick={() => { setCount(count-1 ); }} >Decrease</button>
  <button className='bg-red-600 text-white px-4 py-1 rounded-3xl ' onClick={() => { setCount(0); }}>Reset</button>
  </div>









</div>

</div>

    </>
  )
}

export default App
