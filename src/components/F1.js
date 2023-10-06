import "./style.css";
function F1(){
    const myStyle={
        color:"blue",
        backgroundColor:"black"
    }
    return(
        <div>
            <h1 style={{color:"red", marginLeft:"300px"}}>Inline style</h1>
            <h1 style={myStyle}>Internal style</h1>
            <h1 class="c1">External style</h1>
            <h1 class="text-center text-success bg-dark">Bootstrap style</h1>
        </div>
    )
}

export default F1;