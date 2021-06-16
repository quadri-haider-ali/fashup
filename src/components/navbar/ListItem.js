<<<<<<< HEAD
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
=======
import React from 'react'

const ListItem = (props) => {
    return (
        <li className="py-4 px-3 mr-4">
            <a href="#">
                <span className="mr-3"><i className={props.item.class}></i></span>
                <span>{props.item.title}</span>
            </a>
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
        </li>
    );
};

export default ListItem;
