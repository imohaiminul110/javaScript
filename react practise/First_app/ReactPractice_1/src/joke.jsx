export default function Joke(props){

    
    

    let stars = ""
    for (let i = 0; i < 5; i++){
        if (i < props.rating) {
            stars += "*"
        } else {
            stars += "!"
        }
    }
    return(
        <div>
            <p>{props.joke}</p>
            <p>{stars}</p>
        </div>
    )
}