import React from 'react';

const Caroussel = (props) =>{
    
    const { item } = props;
    console.log("Mandando do carrossel", item);
    
    return( <div>
        {
        item.map(partido => {
            return(
                <div key={partido.id}>
                    <h5>{partido.nome}</h5>
                    <h6>{partido.sigla}</h6>
                </div>
                
            );
        })
        }
    </div>)
};
export default Caroussel;