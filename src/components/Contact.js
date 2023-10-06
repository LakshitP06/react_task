import {useEffect, useState} from 'react';
import Axios from 'axios';
function Contact()
{
    const [name,setName]=useState("Lakshit");
    useEffect(()=>{
        Axios.get("httos://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){
                console.log(res)
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
        },[])
    const handleClick=()=>{
        setName("Laksh");
    }
    return(
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={handleClick}>Change Owner</button>
        </div>
    )
}
export default Contact;