<<<<<<< HEAD
import React from 'react';
import './SideNavbar.css';
import ListItem from './ListItem';

const SideNavbar = props => {
=======
<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React from 'react';
>>>>>>> ca8b3013e7fe4eaf465f9f96707e1eb04e0341a2
import './SideNavbar.css';
import ListItem from './ListItem';

const SideNavbar = () => {
<<<<<<< HEAD
    const sidebarValue = useState('Dashboard');
    const sidebar = val => {
        
    };

=======
>>>>>>> ca8b3013e7fe4eaf465f9f96707e1eb04e0341a2
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
    const list_items=[
        {title:'Dashboard', class:'fas fa-home fa-lg'},
        {title:'General', class:'fas fa-cog fa-lg'},
        {title:'Users', class:'fas fa-user-friends fa-lg'},
        {title:'Products', class:'fas fa-list fa-lg'},
        {title:'Orders', class:'fas fa-cart-plus fa-lg'},
        {title:'Rewards', class:'fas fa-address-card fa-lg'},
<<<<<<< HEAD
        {title:'Vouchers', class:'fas fa-tags fa-lg'},
        {title:'Web', class:'fas fa-passport fa-lg'},
    ];

    return (
        <div style={{flex:"0.7"}} className="w-75">
            <ul className="d-flex flex-column" style={{listStyleType:"none"}}>
                {list_items.map(item => <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
=======
        {title:'Voucher', class:'fas fa-tags fa-lg'},
        {title:'Web', class:'fas fa-passport fa-lg'},
    ];
    return (
        <div style={{flex:"1"}} >
            <ul className="d-flex flex-column" style={{listStyleType:"none"}}>
                {list_items.map(item=><ListItem key={item.title} item={item}/>)}
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
            </ul>
        </div>
    )
}

export default SideNavbar
