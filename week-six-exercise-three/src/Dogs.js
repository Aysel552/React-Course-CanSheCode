function Dogs({anyDog}) {
    return (
        <div>
            {anyDog.map((element => {
                const { id, image } = element;

                return (
                    <div key={id}>
                        <h1>{id}</h1>
                        <img src={image} alt='Dog'/>
                    </div>
                )
            }))}
        </div>
    )
    
}

export default Dogs;