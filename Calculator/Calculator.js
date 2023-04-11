import React from "react";
import { useState } from "react";
import "./Calculator.css"

function Calculator(){
    const[result , setresult]=useState("");

    const  clickhandler=(event)=>{
         setresult(result.concat(event.target.value));
    }

    const ClearData=()=>{
        setresult("")
    }

    const Calculate=()=>{
        setresult(eval(result).toString())
    }
    const Backspace=()=>{
        setresult(result.slice(0 ,-1));
    }


return(
    <div className="Parrent-div">
    <div className="Calculator">
    <input type="text" placeholder="0" id="Answer" value={result}/>
    <input type="button" value="9" className="button" onClick={clickhandler}/>
    <input type="button" value="8" className="button" onClick={clickhandler}/>
    <input type="button" value="7" className="button" onClick={clickhandler}/>
    <input type="button" value="6" className="button" onClick={clickhandler}/>
    <input type="button" value="5" className="button" onClick={clickhandler}/>
    <input type="button" value="4" className="button" onClick={clickhandler}/>
    <input type="button" value="3" className="button" onClick={clickhandler}/>
    <input type="button" value="2" className="button" onClick={clickhandler}/>
    <input type="button" value="1" className="button" onClick={clickhandler}/>
    <input type="button" value="0" className="button" onClick={clickhandler}/>
    <input type="button" value="." className="button" onClick={clickhandler}/>
    <input type="button" value="+" className="button" onClick={clickhandler}/>
    <input type="button" value="-" className="button" onClick={clickhandler}/>
    <input type="button" value="*" className="button" onClick={clickhandler}/>
    <input type="button" value="/" className="button" onClick={clickhandler}/>
    <input type="button" value="%" className="button" onClick={clickhandler}/>
    <input type="button" value="Clear" className="button1 button" onClick={ClearData}/>
    <input type="button" value="=" className="button1 button" onClick={Calculate}/>
    <input type="button" value="C" className="button1 button button2" onClick={Backspace}/> 
</div>
</div>)
}

export default Calculator ;