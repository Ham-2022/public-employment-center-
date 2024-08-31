// src/components/Home.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import custom CSS for additional styling

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <div className="circle">
                    <strong>Empowering Your Career Journey!</strong>
                </div>
            </div>
            <h1 className="text-center">Welcome to the Public Employment Center</h1>
            <p className="text-center">
                Our platform connects job seekers with employers efficiently. Explore job opportunities, manage job assignments, and handle salary payments with ease.
            </p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img 
                            src="https://cdn.aarp.net/content/dam/aarpe/en/home/work/job-search/find-job-openings/_jcr_content/root/container_main/container_body_main/container_image/articlecontentfragme/cfimage.coreimg.75.1440.jpeg/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.jpg" 
                            className="card-img-top" 
                            alt="Job Opportunities" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">Find Jobs</h5>
                            <p className="card-text">Browse a wide range of job listings and find the perfect job for you. Whether you're looking for full-time, part-time, or freelance opportunities, we've got you covered.</p>
                            <Link to="/jobs" className="btn btn-primary">View Jobs</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img 
                            src="https://atlas-content-cdn.pixelsquid.com/assets_v2/261/2619930964129748426/jpeg-600/G03.jpg?modifiedAt=1" width={200} height={235}
                            className="card-img-top" 
                            alt="People Looking for Jobs" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">Meet Candidates</h5>
                            <p className="card-text">View profiles of people looking for jobs and find the right fit for your vacancies. Connect with skilled professionals ready to contribute to your organization.</p>
                            <Link to="/people" className="btn btn-primary">View People</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img 
                            src="https://www.shutterstock.com/image-vector/busy-work-time-management-concept-260nw-2494173639.jpg" width={200} height={235}
                            className="card-img-top" 
                            alt="Job Assignment" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">Manage Assignments</h5>
                            <p className="card-text">Easily assign and reassign jobs as needed. Our platform simplifies job management, making it easy to keep track of assignments and ensure optimal placement.</p>
                            <Link to="/assign" className="btn btn-primary">Assign Job</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-info mt-5">
                <h2>Contact Us</h2>
                <p><strong>CEO Nest</strong></p>
                <p>50 Broadway, Suite 1604, New York, NY 10004</p>
                <p><strong>Phone:</strong> 212.422.4430</p>
                <p><strong>Fax:</strong> 212.248.4432</p>
                <p><strong>Email:</strong> <a href="mailto:info@ceoworks.org">info@ceoworks.org</a></p>
            </div>
            <div className="subscribe mt-5">
                <h2>Subscribe to Our Mailing List</h2>
                <form>
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter your email address" 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
            <footer className="text-center mt-5 py-3 bg-light">
                <p>
                    <a href="/privacy-policy">Privacy Policy</a> | 
                    <span> © 2024 Center for Employment Opportunities</span>
                </p>
            </footer>
        </div>
    );
};

export default Home;
