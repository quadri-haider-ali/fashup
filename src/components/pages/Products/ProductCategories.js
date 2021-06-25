import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const ProductCategories = props => {
    const product_categories = [
        {id:1,photo:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',name:'Women',actions:'fa-eye fa-edit fa-trash'},
        {id:2,photo:'https://images.pexels.com/photos/20788/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',name:'Women',actions:'fa-eye fa-edit fa-trash'},
    ];
    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={product_categories} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default ProductCategories
