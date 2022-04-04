// import


//function 

function GroceryShop(props) {
    return (
        <div>
            <img src={props.image} alt="Bio" width="200px" />
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}



// export

export default GroceryShop;