import React, { useState } from 'react';
import ListItem from './ListItem';

const SubListItem = props => {
    
    const users_items = [
        { title: 'Vendors', class: '' },
        { title: 'Delivery Agents', class: '' },
        { title: 'Customers', class: '' },
    ];
    const products_items = [
        {title:'Product Sizes',class:''},
        {title:'Product Brands',class:''},
        {title:'Product Categories',class:''},
        {title:'Product Sub-Categories',class:''},
        {title:'Product',class:''},
    ];
    const toggleItems = clicked_title => {
        if (clicked_title !== "Users" && clicked_title !== "Products") return;
        console.log("hi thtere");
        if (clicked_title === "Users") {
            setUsers(!users);
        } else if (clicked_title === "Products") {
            setProducts(!products);
        }
        if (users) {
            console.log("adding users sublist");
            return <ul className="d-flex flex-column" style={{listStyleType:"none"}}>
                {users_items.map(item => <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            </ul>
        } else if (products) {
            console.log("adding products sublist");
            return products_items.map(item => <ListItem key={item.title} item={item} viewHandler={props.viewHandler} />)
        }
    };
    
    return (
        <>
            {console.log(props.title)}
            {toggleItems(props.title)}
        </>
    )
}

export default SubListItem
