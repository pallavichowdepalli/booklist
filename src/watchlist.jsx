import React from "react";
import { watches } from "./data/watches";
import CartButton from "./components/buttons/cartButton";
import PreviewButton from "./components/buttons/previewButton";

const Watchlist = () => {
    return (
        <div style={{display:'flex',justifyContent:'space around',justifyContent:'space-between'}}>
            {
                watches.map((watch) => {
                    return (
                        <div>
                            <img src={watch.img} alt="Watches" style={{width : '100px'}}/>
                            <h3>{watch.price}</h3>

                            <p>{watch.brand}</p>
                        
                        </div>
                        
                    

                
                    
            
                    )
                })
            }
        </div>
    )
}
export default Watchlist