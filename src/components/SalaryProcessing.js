import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SalaryProcessing = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [cardType, setCardType] = useState('credit'); // Default to credit
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch the employee list from a mock API or local storage
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/employees'); // Mock API endpoint
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, []);

    const handlePayment = async () => {
        if (!employeeId || !amount || !paymentDate || !cardNumber || !cvv) {
            setStatus('Please fill in all fields.');
            return;
        }

        setLoading(true);
        setStatus('Processing payment...');

        try {
            // Mock API endpoint for payment processing
            const response = await axios.post('/api/payments', {
                employeeId,
                amount,
                paymentDate,
                cardType,
                cardNumber,
                cvv,
                status: 'under processing',
            });

            if (response.status === 200) {
                setStatus('Payment processed successfully!');
                // Update employee status to 'completed'
                setEmployees(prevEmployees =>
                    prevEmployees.map(emp =>
                        emp.id === employeeId ? { ...emp, status: 'completed' } : emp
                    )
                );
            } else {
                setStatus('Payment failed. Please try again.');
            }
        } catch (error) {
            console.error('Payment error:', error);
            setStatus('An error occurred while processing the payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Salary Payment Processing</h2>
            <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">Employee ID</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="employeeId" 
                    value={employeeId} 
                    onChange={(e) => setEmployeeId(e.target.value)} 
                    placeholder="Enter Employee ID" 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="amount" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter Amount" 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="paymentDate" className="form-label">Payment Date</label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="paymentDate" 
                    value={paymentDate} 
                    onChange={(e) => setPaymentDate(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cardType" className="form-label">Card Type</label>
                <select 
                    className="form-control" 
                    id="cardType" 
                    value={cardType} 
                    onChange={(e) => setCardType(e.target.value)} 
                    required 
                >
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="cardNumber" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                    placeholder="Enter Card Number" 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="cvv" 
                    value={cvv} 
                    onChange={(e) => setCvv(e.target.value)} 
                    placeholder="Enter CVV" 
                    required 
                />
            </div>
            <button 
                className="btn btn-primary" 
                onClick={handlePayment} 
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Process Payment'}
            </button>
            {status && <p className="mt-3">{status}</p>}

            <h3 className="mt-5">Employee Payment Status</h3>
            <ul className="list-group">
                {employees.map(employee => (
                    <li key={employee.id} className="list-group-item">
                        <h4>{employee.name}</h4>
                        <p><strong>Status:</strong> {employee.status}</p>
                        <p><strong>Bank Details:</strong> {employee.bankDetails}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SalaryProcessing;
