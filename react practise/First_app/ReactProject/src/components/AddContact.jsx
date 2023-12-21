import React from "react";

class AddContact extends React.Component{
    state = {
        name: "", 
        email: "",
    }

    add = (e) => {
        e.preventDefault()
        if(this.state.name === "" || this.state.email === ""){
            alert("fill it")
            return
        }
        this.props.AddContactHandler(this.state)
        this.setState({name: "", email: ""})
    }
    render(){
        return(
            <>
            <div>
                <h2>Add contact</h2>
                <form onSubmit={this.add}>
                <div><label>Name</label>
                    <input type="text"
                    name="name" 
                    value={this.state.name}
                    onChange={(e)=>this.setState({name: e.target.value})}></input>
                    </div>
                    <div><label>Email</label>
                    <input type="text" 
                    name="email"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email: e.target.value})}
                    ></input>
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                    
                </form>
            </div>
            </>
        )
    }

}

export default AddContact
