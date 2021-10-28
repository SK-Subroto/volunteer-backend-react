import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { People, Plus } from 'react-bootstrap-icons';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Group 1329.png'
import AddEvent from '../AddEvent/AddEvent';
import VolunteerList from '../VolunteerList/VolunteerList';

const Admin = () => {
    let { path, url } = useRouteMatch();
    return (
        <Container fluid className="bg-light">
            <Row className="g-3">
                <Col lg="3">
                    <div className="bg-white p-3">
                        <ListGroup>
                            <ListGroup.Item className="border-0"><img className="img-fluid" src={logo} alt="" /></ListGroup.Item>
                            <ListGroup.Item className="border-0" as={NavLink} to={`${url}/volunteer-list`}><People /> Volunteer register list</ListGroup.Item>
                            <ListGroup.Item className="border-0" as={NavLink} to={`${url}/add-event`}><Plus /> Add Event</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="9">
                    <div>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <VolunteerList />
                            </Route>
                            <Route path={`${path}/volunteer-list`}>
                                <VolunteerList />
                            </Route>
                            <Route path={`${path}/add-event`}>
                                <AddEvent />
                            </Route>
                        </Switch>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;