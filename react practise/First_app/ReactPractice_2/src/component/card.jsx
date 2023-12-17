import "../style.css"
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props)
{
    const {titleText, descTest} = props
    return( <div className='card'>
    <h3 className='cardTitle'>{titleText}</h3>
    <p className='cardDesc'>{descTest}</p>
    <p className='cardFooter' >{ dateName + "/" + monthName + "/" + currentYear }</p>
    </div>)
}

export default Card;