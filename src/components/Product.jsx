import "./Products.css"
export default function products(){
    const products=[
        {id:1,name:"Product1",price:"11"},
        {id:2,name:"Product2",price:"12"},
        {id:3,name:"Product3",price:"13"},
        {id:4,name:"Product4",price:"14"},
        {id:5,name:"Product5",price:"15"},
        {id:6,name:"Product6",price:"16"},
    ];
    return(
        <div>
            <h2>Products List</h2>
            <div className="App-Products-row">
                {products.map((value,index)=>(
                    <div className="App-Products-Box">
                        <h3>{value.name}</h3>
                        <h4>{value.price}</h4>
                        <button onclick="#">Add to Cart</button>
                    </div>
                ))}
            </div>
            <hr/>
        </div>
    )
}