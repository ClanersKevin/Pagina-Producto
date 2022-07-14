import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => 
        navigate('/Cart')
      }>
        Carrito
      </Button>
    </>
  )
}

export default Home