import { useEffect, useState } from "react";

export default function CounterFunction(){
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({"firstname" : "Eric", "lastname" : "Reinprecht"});

    let increase = () => {
        setCount(count + 1);
        setPerson({"firstname" : "Werner"});
    }

    useEffect(()=>{
        console.log("hüa")
    },[count]);

    return(
        <div>
            <h1>Functional Counter</h1>
            <h2>{count}</h2>
            <button onClick={increase}>inc</button>
            {person.firstname}
        </div>
    )
}