import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const vendors_data = [
    {id:1,priority:1,name:'Kapsons1',email:'Kapsons1@somemail.com',phone:'9999999991',default_location:'Yamunanagar1',location:'',actions:'fa-eye fa-edit fa-trash'},
    {id:2,priority:2,name:'Kapsons2',email:'Kapsons2@somemail.com',phone:'9999999992',default_location:'Yamunanagar2',location:'',actions:'fa-eye fa-edit fa-trash'},
    {id:3,priority:3,name:'Kapsons3',email:'Kapsons3@somemail.com',phone:'9999999993',default_location:'Yamunanagar3',location:'Mathura',actions:'fa-eye fa-edit fa-trash'},
    {id:4,priority:4,name:'Kapsons4',email:'Kapsons4@somemail.com',phone:'9999999994',default_location:'Yamunanagar4',location:'',actions:'fa-eye fa-edit fa-trash'},
    {id:5,priority:5,name:'Kapsons5',email:'Kapsons5@somemail.com',phone:'9999999995',default_location:'Yamunanagar5',location:'Jodhpur',actions:'fa-eye fa-edit fa-trash'},
    {id:6,priority:6,name:'Kapsons6',email:'Kapsons6@somemail.com',phone:'9999999996',default_location:'Yamunanagar6',location:'',actions:'fa-eye fa-edit fa-trash'},
];

const Vendors = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={vendors_data} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default Vendors
