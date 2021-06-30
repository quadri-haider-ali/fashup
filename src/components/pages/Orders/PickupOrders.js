import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const PickupOrders = props => {
    const order_pickup = [
        {id:1,Order:'item',AMOUNT:'100',DATE:'26/06/2021',DELIVERYAGENT:"joe",PAYMENTMETHOD:"Online",STATUS:"Completed",actions:'fa-eye fa-edit fa-trash'},
        {id:2,Order:'item',AMOUNT:'100',DATE:'26/06/2021',DELIVERYAGENT:"joe",PAYMENTMETHOD:"Online",STATUS:"Completed",actions:'fa-eye fa-edit fa-trash'},
    ];
    return (
        <>
            <h1>{props.view}</h1>
            <div>
               <Card>
                    <Table data={order_pickup} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default PickupOrders