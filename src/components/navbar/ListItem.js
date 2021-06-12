import React from 'react'

const ListItem = (props) => {
    return (
        <li className="py-4 px-3 mr-4">
            <a href="#">
                <span className="mr-3"><i className={props.item.class}></i></span>
                <span>{props.item.title}</span>
            </a>
        </li>
    );
};

export default ListItem;
