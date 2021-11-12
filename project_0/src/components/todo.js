import React,{ useState,useEffect,useRef } from "react";
import Nav from "./nav";

function Todo() {
    const [list,setList] = useState([]);
    var l_ref = useRef(null);
    var inp_ref = useRef(null);
    useEffect(()=>{
        if(list.length > 0)
            l_ref.current.appendChild(document.createElement('li')).innerHTML = list[list.length-1];
    },[list]);
    function update_list(){
        setList(list.concat(inp_ref.current.value));
        inp_ref.current.value = '';
    }
    return (
        <div>
            <Nav />
            <h1>TODO</h1>
            <ul ref={l_ref}>
            </ul>
            <input type="text" ref={inp_ref}/>
            <button onClick={update_list}>Add</button>
        </div>
    );
}

export default Todo;
