import { useState } from "react";

function Register() {

    const [register, setRegister] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRep, setPasswordRepeat] = useState("");

    const onRegister = (event) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        fetch("http://localhost/userManagement/RegisterUser.php", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response) => {
            response.json().then((body) => {
            
            })
        })

        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(event) => { onRegister(event) }} method="POST">
                <div className="form-outline mb-4">
                    <input type="text" id="username" name="username" className="form-control"
                        onChange={(event) => {
                            setUserName(event.target.value)
                        }}
                    />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" name="password" className="form-control"
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="passwordRep" className="form-control"
                        onChange={(event) => {
                            setPasswordRepeat(event.target.value)
                        }}
                    />
                    <label className="form-label" htmlFor="passwordrep">Repeat Password</label>
                </div>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )

}

export default Register;