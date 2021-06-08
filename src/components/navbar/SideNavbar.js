import React from 'react';
import './SideNavbar.css';
import ListItem from './ListItem';

const SideNavbar = () => {
    const list_items=[
        {title:'Dashboard', class:'fas fa-home fa-lg'},
        {title:'General', class:'fas fa-cog fa-lg'},
        {title:'Users', class:'fas fa-user-friends fa-lg'},
        {title:'Products', class:'fas fa-list fa-lg'},
        {title:'Orders', class:'fas fa-cart-plus fa-lg'},
        {title:'Rewards', class:'fas fa-address-card fa-lg'},
        {title:'Voucher', class:'fas fa-tags fa-lg'},
        {title:'Web', class:'fas fa-passport fa-lg'},
    ];
    return (
        <div style={{flex:"1"}} >
            <ul className="d-flex flex-column" style={{listStyleType:"none"}}>
                {list_items.map(item=><ListItem key={item.title} item={item}/>)}
            </ul>
        </div>
    )
}

export default SideNavbar
