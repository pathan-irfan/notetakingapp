import React from 'react'
function Saved({nw,del,}) {
  return (
    <div  class="p-5 mb-2 bg-dark text-white bg-opacity-65" style={{height:"55vh",width:"auto"}}>

    <div style={{height:"50vh",width:"auto"}} className='bg-dark-subtle rounded overflow-y-auto text-dark'>
    {nw.map((item, index) => (
        <div key={index}>
          <div style={{height:"50px",width:"auto"}} className=" bg-info-subtle ">
          <h5 >{item}</h5>
          </div>
          <button onClick={() => del(index)} className='btn btn-danger my-1'>Remove Data</button>
         
        </div>
      ))}
  

    </div>

 </div>   
    )
}

export default Saved
