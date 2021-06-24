import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const delivery_agents = [];

const DeliveryAgents = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div>
                <Card>
                    <Table data={delivery_agents} title={props.view} keyExtractor={0} actionTable={true}/>
                </Card>
            </div>
        </>
    )
}

export default DeliveryAgents
