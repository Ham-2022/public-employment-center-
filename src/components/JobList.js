import React, { useEffect, useState } from 'react';
import './JobList.css';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('title');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = [
                    { id: 1, title: 'Data Analyst', type: 'Full-time', salary: 70000, location: 'New York, NY', workingHours: '9 AM - 5 PM' },
                    { id: 2, title: 'Business Analyst', type: 'Full-time', salary: 75000, location: 'Los Angeles, CA', workingHours: '9 AM - 5 PM' },
                    { id: 3, title: 'Software Engineer', type: 'Full-time', salary: 90000, location: 'San Francisco, CA', workingHours: '9 AM - 6 PM' },
                    { id: 4, title: 'UI/UX Developer', type: 'Contract', salary: 85000, location: 'Remote', workingHours: 'Flexible' },
                ];
                setJobs(jobData);
                setLoading(false);
            } catch (err) {
                setError('Failed to load jobs');
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs
        .filter(job => job.title.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'title') return a.title.localeCompare(b.title);
            if (sort === 'salary') return b.salary - a.salary;
            return 0;
        });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            <h2>Available Jobs</h2>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search by title" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)} 
                />
                <select className="form-select mt-2" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="title">Sort by Title</option>
                    <option value="salary">Sort by Salary</option>
                </select>
            </div>
            <ul className="list-group">
                {filteredJobs.map((job) => (
                    <li key={job.id} className="list-group-item">
                        <h3 className="job-title">{job.title}</h3>
                        <div className="job-detail"><strong>Type:</strong> {job.type}</div>
                        <div className="job-detail"><strong>Location:</strong> {job.location}</div>
                        <div className="job-detail"><strong>Working Hours:</strong> {job.workingHours}</div>
                        <div className="job-detail"><strong>Salary:</strong> ${job.salary.toLocaleString()}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
