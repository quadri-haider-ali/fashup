import React from 'react';
import Card from '../details/Card';
import Table from '../details/Table';   

const recent_dealers = [
    { id: 1, name: "Aone", contact: "7894561230" },
    { id: 2, name: "test vendor 5", contact: "1111111111" },
    { id: 3, name: "Kapsons", contact: "9812017246" },
];

const recent_products = [
    {id:1,name:'a',image:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
    {id:2,name:'b',image:'https://images.pexels.com/photos/20788/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
    {id:3,name:'c',image:'https://images.pexels.com/photos/20789/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
];

const delivery_agents = [];

const recent_customers = [
    {id:1,name:'Name#1',address:'address#1',phone:'9999999991'},
    {id:2,name:'Name#2',address:'address#2',phone:'9999999992'},
    {id:3,name:'Name#3',address:'address#3',phone:'9999999993'},
    {id:4,name:'Name#4',address:'address#4',phone:'9999999994'},
    {id:5,name:'Name#5',address:'address#5',phone:'9999999995'},
];

const recent_orders = [
    {orderID:'ORDER#1',customerName:'Name#1',status:'Delivered',total:121},
    {orderID:'ORDER#2',customerName:'Name#2',status:'Pending',total:122},
    {orderID:'ORDER#3',customerName:'Name#3',status:'Delivered',total:123},
    {orderID:'ORDER#4',customerName:'Name#4',status:'Pending',total:124},
];

const Dashboard = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div className="h-100">
                <Card>
                    <Table data={recent_dealers} title={'Recent Dealers'} keyExtractor={0}/>
                </Card>
                <Card>
                    <Table data={recent_products} title={'Recent Products'} keyExtractor={0}/>
                </Card>
                <Card>
                    <Table data={delivery_agents} title={'Recent Delivery Agents'} keyExtractor={0}/>
                </Card>
                <Card>
                    <Table data={recent_customers} title={'Recent Customers'} keyExtractor={0}/>
                </Card>
                <Card>
                    <Table data={recent_orders} title={'Recent Orders'} keyExtractor={0}/>
                </Card>
            </div>
        </>
    )
}

export default Dashboard
