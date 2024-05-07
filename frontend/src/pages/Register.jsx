import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";



const Register = () => {


    const [user, setUser] = useState({
        fullname: "",
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:2005/api/auth/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {

                setUser({ fullname: "", username: "", email: "", phone: "", password: "" });


                navigate("/login");
            } else {
                const data = await response.json(); // Parse error response
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (<>
        <div className="parent-center">
            <section className="container">
                <div>
                    <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", gap: "0.5em" }}>
                        <GiArchiveRegister fontSize="2em" />
                        <h2 style={{ margin: "0.5em 0" }}>Register here</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex-clm">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text"
                                name="fullname"
                                placeholder="Full Name"
                                autoComplete="off"
                                value={user.fullname}
                                onChange={handleInput}
                                required="true"
                            />

                            <label htmlFor="username">Username</label>
                            <input type="username"
                                name="username"
                                placeholder="Username"
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput}
                                required="true"
                            />

                            <label htmlFor="email">Email Address</label>
                            <input type="email"
                                name="email"
                                placeholder="Email Address"
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                required="true"
                            />

                            <label htmlFor="phone">Phone Number</label>
                            <input type="text"
                                name="phone"
                                placeholder="Phone Number"
                                autoComplete="off"
                                value={user.phone}
                                onChange={handleInput}
                                required="true"
                            />

                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete=" off"
                                value={user.password}
                                onChange={handleInput}
                                required="true"
                            />
                            <button style={{ marginTop: "2em" }} type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div className="ask-user">
                    <p>Already have an account</p>
                    <p className="bld"><Link className="li" to="/login">Login</Link></p>
                </div>
            </section >
        </div>
    </>
    )
}

export default Register;

