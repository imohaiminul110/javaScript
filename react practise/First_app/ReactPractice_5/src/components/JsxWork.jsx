import React from 'react';

let x = 22
let array = ["a", "b","c"]
let abc = ["m", "n", "o"]
let ijk = ["i", "j", "k"]

let data = "girl"

const JsxWork = () => {
    return( <div>
            {/* {x}
    {array.map ((user)=>{return <h2>{user}</h2> })}
    {abc.map((letter)=>{return <h2>{letter}</h2> })}
    {ijk.map(function(iii) {return <h2>{iii}</h2> })} */}

    {/* conditioanal rendering */}
    {data === "boy"? <h1>its a Boy</h1>: <h1>Its a girl</h1> }


    </div>);
}

export default JsxWork;