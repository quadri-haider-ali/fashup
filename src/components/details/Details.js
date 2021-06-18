import React from 'react'
import Dashboard from '../pages/Dashboard'
import General from '../pages/General'
import Users from '../pages/Users'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Rewards from '../pages/Rewards'
import Vouchers from '../pages/Vouchers'
import Web from '../pages/Web'


const Details = props => {
    const renderSwitch = (props) => {
        switch (props.view) {
            case 'Dashboard':
                return <Dashboard />
            case 'General':
                return <General />
            case 'Users':
                return <Users />
            case 'Products':
                return <Products />
            case 'Orders':
                return <Orders />
            case 'Rewards':
                return <Rewards />
            case 'Vouchers':
                return <Vouchers />
            case 'Web':
                return <Web />
            case 'default': 
                return <Dashboard />
        }
    }
    return (
        <div style={{ flex: "4" }} className="ml-4">
            <h1>{props.view}</h1>
            {renderSwitch(props)}
        </div>
    )
}

export default Details
