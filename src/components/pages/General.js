import React from 'react'
import Card from '../details/Card';
import Table from '../details/Table';

const locations = [
    {id:1,name:'a',pincode:'874569',price:569,actions:'fa-eye fa-edit fa-trash'},
    {id:2,name:'b',pincode:'158752',price:752,actions:'fa-eye fa-edit fa-trash'},
    {id:3,name:'c',pincode:'984625',price:625,actions:'fa-eye fa-edit fa-trash'},
];

// const locations = [
//     {id:1,name:'a',pincode:'874569',price:569},
//     {id:2,name:'b',pincode:'158752',price:752},
//     {id:3,name:'c',pincode:'984625',price:625},
// ];

// ,action:'fa fa-eye'
// ,action:'fas fa-edit'
// ,action:'fa fa-trash'

const General = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div className="h-100">
                <Card>
                    <Table data={locations} title={'Locations'} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default General
