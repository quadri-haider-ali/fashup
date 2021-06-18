import React from 'react'
import ListItem from './ListItem';

const UsersSubList = props => {
    const users_items = [
        { title: 'Vendors', class: '' },
        { title: 'Delivery Agents', class: '' },
        { title: 'Customers', class: '' },
    ];
    return (
        <ul className="d-flex flex-column" style={{listStyleType:"none"}}>
            {users_items.map(item => <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
        </ul>
    )
}

export default UsersSubList
