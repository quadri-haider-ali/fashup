import React from 'react';
import Card from './Card';

// const dashboard = [
//     recent_dealers= [
//         { id: 1, name: "Aone", contact: "7894561230" },
//         { id: 2, name: "test vendor 5", contact: "1111111111" },
//         { id: 3, name: "Kapsons", contact: "9812017246" },
//     ]
// ]

const Dashboard = () => {
    return (
        <Card className="p-4 align-self-start">
            <h4>Recent Dealers</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>Defaultson</td>
                        <td>def@somemail.com</td>
                    </tr>
                    <tr className="">
                        <td>Success</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr className="">
                        <td>Danger</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    <tr className="">
                        <td>Info</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
                    <tr className="">
                        <td>Warning</td>
                        <td>Refs</td>
                        <td>bo@example.com</td>
                    </tr>
                    <tr className="">
                        <td>Active</td>
                        <td>Activeson</td>
                        <td>act@example.com</td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default Dashboard
