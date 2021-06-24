import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const customers = [
    {id:1,name:'name1',email:'name1@somemail.com',phone:'9999999991',location:'',actions:'fa-eye fa-trash'},
    {id:2,name:'name2',email:'name2@somemail.com',phone:'9999999992',location:'',actions:'fa-eye fa-trash'},
    {id:3,name:'name3',email:'name3@somemail.com',phone:'9999999993',location:'Mathura',actions:'fa-eye fa-trash'},
    {id:4,name:'name4',email:'name4@somemail.com',phone:'9999999994',location:'',actions:'fa-eye fa-trash'},
    {id:5,name:'name5',email:'name5@somemail.com',phone:'9999999995',location:'Jodhpur',actions:'fa-eye fa-trash'},
    {id:6,name:'name6',email:'name6@somemail.com',phone:'9999999996',location:'',actions:'fa-eye fa-trash'},
];

const Customers = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={customers} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default Customers
