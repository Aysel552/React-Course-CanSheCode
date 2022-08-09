function DatingProfile(props) {
    return (
        <div>
            <img src={props.img} alt="Human" width="200px"/>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.description}</p>
        </div>
    )
}


export default DatingProfile;