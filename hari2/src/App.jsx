import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import axios, { Axios } from 'axios'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InsertData from './pages/insertdata.jsx'





function App() {
  const [dummy,setDummy] = useState([])

  useEffect(()=>{
    axios.get("https://client-indol-delta.vercel.app/insertdata")
    .then((response)=>{
      setDummy(response.data)
    })
    .catch((e)=>{
      console.log(`error`)
    })
  },[])

  function addDataSewa(){
    setDummy((prevData)=>{return [...prevData,{
      tanggalSewa:"31/07/2024",
      pelanggan:"PT Arkaya Sutera ",
      noHp:"6281363312349",
      alatSewa:"KESBOR EXC PT Arkaya Sutera",
      qty:1,
      status:"Sedang Disewa",
      durasi: 3
    }]})
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <InsertData dummy={dummy} setDummy={setDummy} addDataSewa={addDataSewa}></InsertData>
    }
  ]);
  

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
