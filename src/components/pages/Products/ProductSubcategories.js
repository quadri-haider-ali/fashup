import React, { useEffect, useState }  from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

import productAPI from '../../../api/Product';

const ProductSubcategories = props => {
    const product_subcategories1 = [
        {id:1,photo:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',name:'Women',actions:'fa-eye'},
        {id:2,photo:'https://images.pexels.com/photos/20788/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',name:'Women',actions:'fa-eye'},
    ];

    const [product_subcategories, setSubCategories] = useState([]);

    useEffect(async () => {
        const data = await productAPI.getSubCategories();
        console.log(data);
        setSubCategories(data);
    }, []);


    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={product_subcategories1} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default ProductSubcategories
