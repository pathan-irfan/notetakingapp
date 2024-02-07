import React from 'react'

function Main({btn,vl,ve,noti,host,}) {
  return ( 
  <>
  
  <div  class="p-5 mb-2 bg-dark text-white bg-opacity-65" style={{height:"55vh",width:"auto"}}>

   <div style={{height:"50vh",width:"auto"}} className='bg-dark-subtle rounded'>
    <textarea onChange={vl} value={ve} style={{height:"200px",width:"100%",textAlign:"top",fontSize:"20px"}}/>
    <button onClick={btn} style={{height:"50px",width:"100%"}} className='my-1 btn btn-primary border border-top-0  bs-dark-border-subtle'>add</button>

    {noti}
   </div>
</div>      

</>

  )
}

export default Main
