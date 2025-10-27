import profilepic from "./assets/websiteColor.png";

function Card(props){
    return(
        <div className="card">
        <img className="card-img" src={props.profilepic} alt="profile picture"></img>
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.about}</p>
        </div>
    )
}

export default Card;