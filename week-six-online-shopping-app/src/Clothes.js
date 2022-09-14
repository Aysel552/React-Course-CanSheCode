function Clothes({itemsForSale}) {
    return (
        <div className="products">
            {itemsForSale.map((element => {
                const { id, name, searchTerm, price, image } = element;

                return (
                    <div className="product-card" key={id}>
                        <img src={image} alt='Clothes' width='400px' height='500px' />
                        
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4> € {price}</h4>
                        </div>
                    </div>
                    


                )
            }))}
        </div>
    )
    
}

export default Clothes;