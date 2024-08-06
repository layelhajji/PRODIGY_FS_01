import { Form, Button } from "react-bootstrap";
import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted!"); // Vérifie si le formulaire est bien soumis

        try {
            const response = await fetch("http://127.0.0.1:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            console.log("Response received:", response); // Vérifie si la réponse est reçue

            const result = await response.json(); // Assurez-vous que le serveur renvoie du JSON
            console.log("Result:", result); // Vérifie le résultat

            if (response.ok) {
                navigate("/dashboard");
            } else {
                console.error("Failed to register:", result);
            }
        } catch (error) {
            console.error("Error during submission:", error.message);
        } finally {
            setFormData({
                
                email: "",
                password: ""
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="formulaire">
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login
