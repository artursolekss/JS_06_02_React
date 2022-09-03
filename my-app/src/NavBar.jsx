import { Link, Outlet } from "react-router-dom";
// function NavBar({ openPage }) {
function NavBar() {

    const onLogout = () => {
        sessionStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                            {/* <button className="btn" onClick={() => openPage("HomePage")}>Home</button> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/loadPage">Load Page</Link>
                            {/* <button className="btn" onClick={() => openPage("LoadPage")}>Load from file</button> */}
                        </li>
                    </ul>
                </div>
                <ul className="nav navbar-nav nav-list navbar-right">
                    <li className="nav-item">
                        <a>{sessionStorage.getItem("user")}</a>
                    </li>
                    <li className="nav-item align-middle">
                        <button className="btn" onClick={onLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </>
    )

}

export default NavBar;