import { createElement,useContext,createContext,useState,useEffect } from "react";
import Nav from "./nav";

function Contex(){
    var context = createContext();
    //Hooks can only work inside a functional component

    const [nam , setNam] = useState("banik");

    function PrintAge(){
        var { Age,nam } = useContext(context);
        return <h1>Age is {nam==='banik'? Age: 30}</h1>
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            if(nam==="banik"){
                setNam("khan");
            }else{
                setNam("banik");
            }
        },2000);
    },[nam]);

    return (<div>
        <Nav />
        <context.Provider value={{nam,setNam,Age:20}}>
            <h1>Hello {nam}</h1>
            <PrintAge />
        </context.Provider>
    </div>);
}

export default Contex;