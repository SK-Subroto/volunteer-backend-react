import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        axios.get('https://sk-volunteer.herokuapp.com/volunteer')
            .then(res => setVolunteers(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDeleteVolunteer = id => {
        axios.delete(`https://sk-volunteer.herokuapp.com/volunteer/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remainingvolunteers = volunteers.filter(volunteer => volunteer._id !== id);
                    setVolunteers(remainingvolunteers);
                }
            })
    }

    return (
        <Container>
            <div className="bg-white mb-4 p-2">
                <h2>Volunteer register list</h2>
            </div>
            <div className="bg-white p-2">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email Id</th>
                            <th>Registration Date</th>
                            <th>Event Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteers.map((volunteer, index) => {
                                return (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{volunteer.name}</td>
                                        <td>{volunteer.email}</td>
                                        <td>{volunteer.date}</td>
                                        <td>{volunteer.title}</td>
                                        <td onClick={() => handleDeleteVolunteer(volunteer._id)}
                                            className="text-center"
                                            style={{ cursor: 'pointer' }}
                                        ><Trash /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default VolunteerList;