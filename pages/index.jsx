import Head from 'next/head'
import {useEffect, useState} from 'react' 
import CanvasDraw from "react-canvas-draw";



export default function Home() {
const [curWindow, setCurWindow] = useState(null);

useEffect(()=>{
  setCurWindow(window)
},[])

  return (
    <div className="">
      <Head>
        <title>Zoozle | Draw Your Thoughts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        curWindow!=null?(<CanvasDraw 
          canvasWidth={curWindow.innerWidth}
          canvasHeight={curWindow.innerHeight-50}
          brushColor="#000"
          brushRadius={2}
          lazyRadius={0}
          />):(
            <div className="flex justify-center items-center h-96">
              Loading
            </div>
          )
      }
     <img src="/logo.svg" 
     className="absolute top-0 left-0 w-44 mx-10 mt-6"
     alt="Zoozle" />
      <footer className="flex items-center justify-center w-full h-12 border-t">
        <a
          className="flex items-center justify-center"
          href="https://ziqx.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         ⚡ Ziqx
        </a>
      </footer>
    </div>
  )
}
