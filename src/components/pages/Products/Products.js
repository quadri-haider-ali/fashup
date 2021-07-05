import React, { useEffect, useState }  from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

import productAPI from '../../../api/Product';

const Products = props => {
    var products1 = [
        {id:1,name:'Women',category:'Women',subcategory:'Casual',actions:'fa-eye fa-edit fa-trash'},
        {id:2,name:'Women',category:'Women',subcategory:'Casual',actions:'fa-eye fa-edit fa-trash'},
    ];

    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const data = await productAPI.getProducts();
        console.log(data);
        setProducts(data);
    }, []);

    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={products1} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default Products
