function Login() {

    return (
        <div className="row justify-content-center align-items-center">
            <form className="form">
                <div className="form-outline mb-4">
                    <input type="text" id="username" name="username" className="form-control form-control-l" />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" name="password" className="form-control form-control-l" />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )

}

export default Login;