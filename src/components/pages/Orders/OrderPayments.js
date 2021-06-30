import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const OrderPayments = props => {
    const orders = [
        {id:1,Order:'item',AMOUNT:'100',DATE:'26/06/2021',DELIVERYAGENT:"joe",PAYMENTMETHOD:"Online",STATUS:"Completed",actions:'fa-eye'},
        {id:2,Order:'item',AMOUNT:'100',DATE:'26/06/2021',DELIVERYAGENT:"joe",PAYMENTMETHOD:"Online",STATUS:"Completed",actions:'fa-eye'},
    ];
    return (
        <>
            <h1>{props.view}</h1>
            <div>
               <Card>
                    <Table data={orders} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default OrderPayments
