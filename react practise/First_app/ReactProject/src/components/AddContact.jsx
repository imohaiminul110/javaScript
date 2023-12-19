import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <>
            <div>
                <h2>Add contact</h2>
                <form>
                <div><label>Name</label>
                    <input type="text" name="name"></input>
                    </div>
                    <div><label>Email</label>
                    <input type="text" name="email"></input>
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
