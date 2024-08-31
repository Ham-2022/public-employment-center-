// src/components/JobAssignment.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const JobAssignment = () => {
    const [people, setPeople] = useState([]);
    const [jobId, setJobId] = useState('');
    const [personId, setPersonId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Hardcoded job list
    const jobs = [
        { id: 1, title: 'Data Analyst' },
        { id: 2, title: 'Business Analyst' },
        { id: 3, title: 'Software Engineer' },
        { id: 4, title: 'UI/UX Developer' },
    ];

    useEffect(() => {
        axios.get('/api/people') // Replace with your API endpoint
            .then(response => setPeople(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAssignJob = (e) => {
        e.preventDefault();
        axios.post('/api/assign-job', { jobId, personId, startDate, endDate }) // Replace with your API endpoint
            .then(response => alert('Job assigned successfully!'))
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-5">
            <h2>Assign Job</h2>
            <form onSubmit={handleAssignJob}>
                <div className="mb-3">
                    <label className="form-label">Select Job:</label>
                    <select className="form-select" value={jobId} onChange={(e) => setJobId(e.target.value)}>
                        <option value="">Select a job</option>
                        {jobs.map((job) => (
                            <option key={job.id} value={job.id}>{job.title}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Select Person:</label>
                    <select className="form-select" value={personId} onChange={(e) => setPersonId(e.target.value)}>
                        <option value="">Select a person</option>
                        {people.map((person) => (
                            <option key={person.id} value={person.id}>{person.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Date:</label>
                    <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">End Date:</label>
                    <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Assign Job</button>
            </form>
        </div>
    );
};

export default JobAssignment;