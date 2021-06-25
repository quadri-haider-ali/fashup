import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const Products = props => {
    const products = [
        {id:1,name:'Women',category:'Women',subcategory:'Casual',actions:'fa-eye fa-edit fa-trash'},
        {id:2,name:'Women',category:'Women',subcategory:'Casual',actions:'fa-eye fa-edit fa-trash'},
    ];
    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={products} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default Products
