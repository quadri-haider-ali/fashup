import React from 'react';
// import ReactDOM from 'react-dom';
import './ListItem.css';

const ListItem = (props) => {
    const clickEventHandler = (event) => {
        // props.item.title;
        props.viewHandler(props.item.title);
        // alert('hi');
    }
    return (
        <li className="">
            <button className="py-4 px-3 mr-4 w-100 text-left bg-transparent border-0 text-white" onClick={clickEventHandler}>
                <i className={props.item.class+' mr-3'} id={props.item.titles}></i>{props.item.title}
            </button>
        </li>
    );
};

export default ListItem;
