function Shopping(props) {
    return (
        <div>
            <img src={props.img} alt="Fruit" width="300px"/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Shopping;