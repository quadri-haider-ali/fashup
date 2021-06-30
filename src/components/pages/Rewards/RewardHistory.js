import React from 'react'
import Card from '../../details/Card';
import Table from '../../details/Table';

const RewardHistory = props => {
    const reward_history = [
        {id:1,Product:'item',category:'Zara',subcategory:'Casual',Reward:'100',actions:'fa-eye fa-edit fa-trash'},
        {id:2,Product:'item',category:'Zara',subcategory:'Casual',Reward:'100',actions:'fa-eye fa-edit fa-trash'},
    ]
    return (
        <>
            <h1>{props.view}</h1>
            <div>
            <Card>
                    <Table data={reward_history} title={props.view} keyExtractor={0} actionTable={true}/>
           </Card>
            </div>
        </>
    )
}

export default RewardHistory
