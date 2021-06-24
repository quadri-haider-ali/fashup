import React from 'react'
import Dashboard from '../pages/Dashboard'
import General from '../pages/General'
import Users from '../pages/Users/Users'
import Products from '../pages/Products/Products'
import Orders from '../pages/Orders/Orders'
import Rewards from '../pages/Rewards/Rewards'
import Vouchers from '../pages/Vouchers/Vouchers'
import Web from '../pages/Web/Web'
import VendorCategories from '../pages/Users/VendorCategories'
import Vendors from '../pages/Users/Vendors'
import DeliveryAgents from '../pages/Users/DeliveryAgents'
import Customers from '../pages/Users/Customers'

const Details = props => {
    const renderSwitch = (props) => {
        switch (props.view) {
            case 'Dashboard':
                return <Dashboard view='Dashboard'/>
            case 'General':
                return <General view='General'/>
            // case 'Users':
            //     return ;
                // return <Users view='Users'/>
            case 'Products':
                return <Products view='Products'/>
            case 'Orders':
                return <Orders view='Orders'/>
            case 'Rewards':
                return <Rewards view='Rewards'/>
            case 'Vouchers':
                return <Vouchers view='Vouchers'/>
            case 'Web':
                return <Web view='Web'/>
            case 'Vendor Categories':
                return <VendorCategories view='Vendor Categories'/>
            case 'Vendors':
                return <Vendors view='Vendors'/>
            case 'Delivery Agents':
                return <DeliveryAgents view='Delivery Agents'/>
            case 'Customers':
                return <Customers view='Customers'/>
            case 'default': 
                return <Dashboard view='Dashboard'/>
        }
    }
    return (
        <div style={{ flex: "5" }} className="ml-4">
            {renderSwitch(props)}
        </div>
    )
}

export default Details
