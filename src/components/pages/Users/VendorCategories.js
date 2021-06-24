import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const vendor_categories = [
    {id:1,name:'Home Decor',actions:'fa-eye fa-edit fa-trash'},
    {id:2,name:'Home Decor',actions:'fa-eye fa-edit fa-trash'},
];

const VendorCategories = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={vendor_categories} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default VendorCategories
