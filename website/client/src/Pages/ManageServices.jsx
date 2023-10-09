import React from 'react';

//import Carousel from '../components/Carousal';
//import ServiceCards from '../components/Services';
import Footer from '../components/Footer';
//import Contact from '../components/ContactUs';
//import ServiceCard from '../components/ServiceCard';
import SubNavbar from '../components/SubNavbar';
function ManageServices() {
    return ( 
    <div>
        <SubNavbar />  
                <div className="wrapper">
                    <div className="d-md-flex align-items-md-center">
                        <div className="h3">Fruits and vegetables</div>
                        {/* Render your filter buttons with event handlers */}
                        <div className="ml-auto d-flex align-items-center views">
                        <span className="btn text-success">
                            <span className="fas fa-th px-md-2 px-1"></span>
                            <span>Grid view</span>
                        </span>
                        <span className="btn">
                            <span className="fas fa-list-ul"></span>
                            <span className="px-md-2 px-1">List view</span>
                        </span>
                        <span className="green-label px-md-2 px-1">428</span>
                        <span className="text-muted">Products</span>
                    </div>
                </div>
            </div>
        <Footer /> 
    </div>
    );
}

export default ManageServices;
