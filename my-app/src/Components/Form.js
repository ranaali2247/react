import React, { useState } from 'react';

export default function Form() {
const [count, setCount] = useState(" ");
const [color, setColor] = useState("");
const [font, setFont] = useState("");
const onclick1=()=>{
    let newcount = count.toUpperCase()
     setCount(newcount)
} 
const onclick2=()=>{
    let newcount = count.toLowerCase()
    setCount(newcount)
}
const handleonchange=(event)=>{
    setCount(event.target.value)
}



const  textToSpeech=()=>{
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("form").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
}
const colorchange = ()=>{
    let input = prompt("Enter the color name")
     setColor(input)
}
const changefont= ()=>{
    alert("make sure that the font is installed in your device")
    let input = prompt("Enter the font name")
     setFont(input)
}

return (
    <>
<div  class="mb-3">
<h1>Form</h1>  
<textarea style={{color:color,fontFamily:font}} class="form-control" id="form" onChange={handleonchange} value={count} rows="10"></textarea>
<button onClick={onclick1} className="btn btn-large btn-danger my-3">Capitilize</button>
<button onClick={onclick2} className="btn btn-large btn-danger my-3 mx-3">DeCaptilize</button>
<button onClick={textToSpeech} className="btn btn-large btn-danger my-3 mx-3">Speech</button>
<button onClick={colorchange} className="btn btn-large btn-danger my-3 mx-3">change color</button>
<button onClick={changefont} className="btn btn-large btn-danger my-3 mx-3">change font</button>

</div>

<div className="container">
        <h1>
            Your Text Summary
        </h1>
        <p>
            {count.split(" ").length} Worsd and {count.length} charcaters
        </p>
        <p>{0.008 * count.split(" ").length } mintes To read</p>
        
        <p className=''>{count}</p>

</div>
 </> 
)
}

