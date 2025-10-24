import profilepic from "./assets/websiteColor.png";

function Card(){
    return(
        <div className="card">
        <img className="card-img" src={profilepic} alt="profile picture"></img>
        <h2 className="card-title">John Doe</h2>
        <p className="card-text">Blacksmith.</p>
        </div>
    )
}

export default Card;