import React from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from '../Components/ServicesJs/Dashbord';
import Associates from '../Components/ServicesJs/Associates';
import Clients from '../Components/ServicesJs/Clients';

const services = () => {
    return (
        <div className="clearfix row">
            <Router>
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path="/ServicesJs/dashboard" component={Dashboard} />
                    <Route path="/ServicesJs/associates" component={Associates} />
                    <Route path="/ServicesJs/clients" component={Clients} />
                </Switch>
            </div>
            </Router>
        </div>
    )
}

export default services;