// src/components/Reassignment.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reassignment = () => {
    const [jobId, setJobId] = useState('');
    const [oldPersonId, setOldPersonId] = useState('');
    const [newPersonId, setNewPersonId] = useState('');
    const [people, setPeople] = useState([]);

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

    const handleReassignJob = (e) => {
        e.preventDefault();
        axios.post('/api/reassign-job', { jobId, oldPersonId, newPersonId }) // Replace with your API endpoint
            .then(response => alert('Job reassigned successfully!'))
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-5">
            <h2>Reassign Job</h2>
            <form onSubmit={handleReassignJob}>
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
                    <label className="form-label">Old Person ID:</label>
                    <input type="text" className="form-control" value={oldPersonId} onChange={(e) => setOldPersonId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Person ID:</label>
                    <input type="text" className="form-control" value={newPersonId} onChange={(e) => setNewPersonId(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Reassign Job</button>
            </form>
        </div>
    );
};

export default Reassignment;