import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Event.css'
import demoImg from '../../images/childSupport.png'
import { useHistory } from 'react-router';

const Event = (props) => {
    const history = useHistory();
    const { _id, title, date, description, img } = props.event;
    const colorArray = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']

    const getRandomInt = (max) => Math.floor(Math.random() * max);

    const handleEnroll = () => {
        history.push(`/event-register/${_id}`)
    }
    return (
        <Col>
            <Card className="border-0 position-relative">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body
                    onClick={handleEnroll}
                    className="text-center event-title position-absolute bottom-0 w-100"
                    style={{ backgroundColor: colorArray[getRandomInt(colorArray.length)] }}
                >
                    {title}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;