function NavBar({ openPage }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button className="btn" onClick={() => openPage("HomePage")}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn" onClick={() => openPage("LoadPage")}>Load from file</button>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;