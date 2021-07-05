import React, { useEffect, useState }  from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

import productAPI from '../../../api/Product';

const ProductBrands = props => {
    const product_brands1 = [
        {id:1,photo:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',actions:'fa-eye fa-edit fa-trash'},
        {id:2,photo:'https://images.pexels.com/photos/20788/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',actions:'fa-eye fa-edit fa-trash'},
    ];

    const [product_brands, setBrands] = useState([]);

    useEffect(async () => {
        const data = await productAPI.getBrands();
        console.log(data);
        setBrands(data);
    }, []);

    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={product_brands1} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default ProductBrands
