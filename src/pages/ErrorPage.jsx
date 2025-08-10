import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error=useRouteError()
    console.log(error);
    
  return (
    
    <>
    <h1>OOP's !!! AN ERROR OCCURED</h1>
    {error&&<h2>{error.error.stack}<h2>{error.status}</h2></h2>}
    <NavLink to="/"><button>Go Home</button></NavLink>
    </>
  )
}

export default ErrorPage