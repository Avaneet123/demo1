import React,{useState} from 'react'

export default function Textform(props) {
 const HandleOnChange=(event)=>{
    setText(event.target.value)

 }
 const HandleUpClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)

 }
 const HandleLwrClick=()=>{
    let newtext1=text.toLowerCase();
    setText(newtext1)
 }
 const HandleClear=()=>{
    let newtext2=(" ");
    setText(newtext2)
 }
//  const HandleCopy=()=>{
//    console.log("i am copy")
//    var text=document.getElementById("mybox");
//    text.select();
//    navigator.clipboard.writeText(text.value);
// }
const HandleSpace=()=>{
   let newtext4=text.split(/[ ]+/);
   setText(newtext4.join(" "))
}

    const [text,setText]=useState('Enter text here');
    return (
    <div>  
        <h1>{props.heading}</h1>    
   <div className="mb-3">
    <textarea className="form-control" id="mybox" value={text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={HandleUpClick}>Convert To UpperCase</button>
<button type="button" className="btn btn-primary mx-1" onClick={HandleLwrClick}>Convert To LowerCase</button>
<button type="button" className="btn btn-primary mx-1 " onClick={HandleClear}>Clear Text</button>  
<button type="button" className="btn btn-primary mx-1" onClick={HandleSpace}>Remove Extra Sapce</button>    
    <div className="container my-2">
      <h4>Your Text summary</h4>
      <p>{text.split(" ").length}Words and {text.length}character</p>

    </div>
    </div>

  )
}

