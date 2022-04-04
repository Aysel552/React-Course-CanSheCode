// import

// function

function DatingProfile(props) {
    return (
        <div>
            <img src={props.picture} alt=' A Guy' width="300px"/>
            <h2>{props.candidateName}</h2>
            <p>{props.age}</p>
            <p>{props.description}</p>
        </div>
    )
}


//export

export default DatingProfile;