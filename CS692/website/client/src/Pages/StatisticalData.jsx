import React, { useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import '../css/StatisticalData.css';
import Navbar from '../components/Navbar';

function StatisticalData() {
    
    const registeredUsers = {
        animationEnabled: true,
        title: {
            text: "New Registered Users"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "New Customers", y: 12, color: "rgba(105, 42, 178, 0.5)" },
                { label: "Service Providers", y: 5, color: "rgba(255, 99, 132, 0.5)" }
            ]
        }]
    }

    const loggedInUsers = {
        animationEnabled: true,
        title: {
            text: "LoggedIn Users"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Customers", y: 190, color: "rgba(105, 42, 178, 0.5)" },
                { label: "Service Providers", y: 105, color: "rgba(255, 99, 132, 0.5)" }
            ]
        }]
    }

    const serviceProvidersTypes = {
        animationEnabled: true,
        title: {
            text: "Total Types of Service Providers"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "{label}: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { label: "Laundry", y: 70 },
                { label: "HouseKeeping", y: 40 },
                { label: "Pet Care", y: 10 },
                { label: "Child Care", y: 30 },
                { label: "Senior Care", y: 50 }
            ]
        }]
    };

    const servicesUsed = {
        animationEnabled: true,
        title: {
            text: "Maximum Services used by Customers"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "{label}: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { label: "Laundry", y: 90 },
                { label: "HouseKeeping", y: 80 },
                { label: "Pet Care", y: 30 },
                { label: "Child Care", y: 60 },
                { label: "Senior Care", y: 10 }
            ]
        }]
    };
    
    const date = new Date();
    const lastMonth = date.getMonth() === 0 ? 11 : date.getMonth() - 1;
    function getMonthName(monthNumber) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[monthNumber];
    }

    const [activeGraph, setActiveGraph] = useState(<CanvasJSChart options={registeredUsers} />);
    
    const graphList = [
        { name: "Registered Users", component: <CanvasJSChart options={registeredUsers} /> },
        { name: "Logged In Users", component: <CanvasJSChart options={loggedInUsers} /> },
        { name: "Service Provider Types", component: <CanvasJSChart options={serviceProvidersTypes} /> },
        { name: "Services Used by Customers", component: <CanvasJSChart options={servicesUsed} /> }
    ];

    return (
        <>
            <Navbar /><br/><br/>
            <div className='header-container'>
                <h2>Statistical Data for {getMonthName(lastMonth)}'s Month</h2>
            </div>
            <div className="graph-list-container">
                {graphList.map((graph, index) => (
                    <button key={index} onClick={() => setActiveGraph(graph.component)}>
                        {graph.name}
                    </button>
                ))}
            </div>
            <div className="table-container">
                {activeGraph}
            </div>
            <div className='header-container'>
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </>
    );
}

export default StatisticalData;
