import { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/calculator/${operation}`, {
                params: { num1, num2 },
            });
            setResult(response.data.result);
        } catch (error) {
            alert(error.response?.data || 'An error occurred');
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default Calculator;
