import React, { Component } from "react";

const emp = [
    {
        name: "aa", 
        isGood: false,
        id: 1
        
    },
    {
        name: "bb",
        isGood: true,
         id: 2, 
         
    }
]

const empList = emp.map(empMap => 
    <p 
    key = {empMap.id}
    style = {{ color: empMap.isGood ? 'green' : 'red' }}>
    {empMap.name} 
    </p>)

class ClassComp extends Component {
    render(){
        return(
            <>{empList}</>
        )
    }  
}

export default ClassComp

