import {useState} from "react"; 
 
const emojis = [
    {id:1,symbol:"😊"},
    {id:2,symbol:"😂"},
    {id:3,symbol:"😍"},
    {id:4,symbol:"😎"}, 
    {id:5,symbol:"😭"},
    {id:6,symbol:"😏"},
    {id:7,symbol:"🤑"},
    {id:8,symbol:"🤴"},
    {id:9,symbol:"😩"}, 
    {id:10,symbol:"👌"}
]; 
function Emoji(){
    const[click,setClick]=useState([]);//click[];
    const[score,setScore]=useState(0);
const handleClick=(id)=>{
    if(click.includes(id)){
        alert("Pakkaki velli adhuko.....")
        setScore(0);
        setClick([]);
    }
    else{
        setClick([...click,id]);
        setScore(score+1);
    }
};
return(
    <div>
        <h2>Emoji Game</h2>
        <h3>Score:{score}</h3>
        <div>
            {emojis.map((emoji)=>(
          <span
          key={emoji.id}
          onClick={()=>handleClick(emoji.id)}
          style={{fontSize:"30px",margin:"10px",cursor:"pointer"}}
          >{emoji.symbol}</span>
            ))}                                  
        </div>
    </div>
)
}
export default Emoji;