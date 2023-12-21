import React from "react";


const user = {
    name: "rup",
    image: "https://i.imgur.com/yXOvdOSs.jpg"
}

const products = [
    {
        title : "a", 
        id :1
    },
    {
        title: "b",
        id :2
    }
]
  // items = Data.map((items) => <Card titleText={items.title} descTest={items.desc} /> )

const listItem = products.map(product =>
    
        <p key={product.id}>
        {product.title}
        </p>
        
    )

const handleClick =() => {
        alert("clicked")
    }

const MyButton = () => {
    return(
        <>
        <button onClick={handleClick}>clicked button</button>
        <h1>{user.name}</h1>
        <img src={user.image} ></img>
        <button>button</button>
        {listItem}
        </>
        
    )
}

export default MyButton