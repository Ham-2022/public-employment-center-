// src/components/PeopleList.js
import React, { useEffect, useState } from 'react';
import './PeopleList.css'; // Import custom CSS for additional styling

const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // Mock API call with sample data
        const fetchPeople = async () => {
            try {
                // Simulating an API call with sample data
                const response = {
                    data: [
                        {
                            id: '1',
                            name: 'John Doe',
                            skills: ['JavaScript', 'React', 'Node.js'],
                            location: 'New York, NY',
                            experience: 5,
                            education: 'B.Sc. in Computer Science',
                            contact: 'john.doe@example.com',
                            profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg'
                        },
                        {
                            id: '2',
                            name: 'Jane Smith',
                            skills: ['Python', 'Django', 'Machine Learning'],
                            location: 'San Francisco, CA',
                            experience: 3,
                            education: 'M.Sc. in Data Science',
                            contact: 'jane.smith@example.com',
                            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg'
                        },
                        {
                            id: '3',
                            name: 'Alice Johnson',
                            skills: ['Java', 'Spring Boot', 'AWS'],
                            location: 'Austin, TX',
                            experience: 7,
                            education: 'B.Sc. in Software Engineering',
                            contact: 'alice.johnson@example.com',
                            profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg'
                        },
                        {
                            id: '4',
                            name: 'Bob Brown',
                            skills: ['PHP', 'Laravel', 'MySQL'],
                            location: 'Chicago, IL',
                            experience: 4,
                            education: 'B.A. in Information Technology',
                            contact: 'bob.brown@example.com',
                            profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg'
                        }
                    ]
                };
                setPeople(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPeople();
    }, []);

    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="container mt-5">
            <h2 className="text-center">People Looking for Jobs</h2>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search by name or skill" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
            <ul className="list-groups">
                {filteredPeople.map((person) => (
                    <li key={person.id} className="list-group-item d-flex align-items-center">
                        <img 
                            src={person.profilePicture || '/default-profile.png'} 
                            alt={person.name} 
                            className="profile-picture me-3"
                        />
                        <div>
                            <h3>{person.name}</h3>
                            <p><strong>Skills:</strong> {person.skills.join(', ')}</p>
                            <p><strong>Location:</strong> {person.location}</p>
                            <p><strong>Experience:</strong> {person.experience} years</p>
                            <p><strong>Education:</strong> {person.education}</p>
                            <p><strong>Contact:</strong> {person.contact ? person.contact : 'N/A'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PeopleList;
