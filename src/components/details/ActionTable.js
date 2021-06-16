import React from 'react';
import validator from 'validator';
import './Table.css';

const Table = props => {
    if (!props.data.length) return <h5 className="text-muted m-4">No Results for {props.title}</h5>
    const keyExtractor = Object.keys(props.data[0])[props.keyExtractor];
    return (
        <>
            <h4>{props.title}</h4>
            <table className="table">
                <thead>
                    {/* {console.log(Object.keys(props.data[0]).map(label=>console.log(label)))} */}
                    <tr>{Object.keys(props.data[0]).map(label => <th key={label}>{label}</th>)}</tr>
                </thead>
                <tbody>
                    {props.data.map(item => <tr key={item[keyExtractor]}>
                        {Object.values(item).map(value => {
                            if (validator.isURL(value.toString())) {
                                // console.log(value);
                                return <td key={value}><img src={value} alt="" width='200' className='img-thumbnail m-1' /></td>
                            } else {
                                // console.log(value);
                                return <td key={value}>{value}</td>
                            }
                        }
                        )}
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Table
