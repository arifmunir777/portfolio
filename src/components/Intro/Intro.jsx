import './intro.scss'
import { init } from 'ityped'
import React,{useEffect,useRef} from 'react';
const Intro = () => {
  
    const textRef=useRef();
     console.log(textRef)
     useEffect(() => {
        init(textRef.current,
             { showCursor: true, 
                backSpeed:  60,
                backDelay:1500,
                strings: ['React Js Developer!', 'MERN STACK  Developer!','Angular JS Developer','Node Js Developer','Wordpress Developer' ] })
     }, [ ])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="Imgcontainer">
                    <img src="../assets/man.png"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
              <h2>Hi There I'm </h2>
              <h1>Arif Munir</h1>
              <h3>  <span ref={textRef}> </span></h3>
              </div>
              <a href="#portfolio">
                <img src="./assets/down.png"></img>
            </a>
            </div>
            
        </div>
    )
}

export default Intro
