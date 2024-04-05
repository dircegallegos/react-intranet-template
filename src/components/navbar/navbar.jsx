import './navbar.css'

function Navbar() {
    return (
        <>
            <section className="navbar-top">
                <div className="nav-logo">
                    <a href="http://172.16.5.237/Home/">
                        <img src="../public/atem-navbar-icon.png" />
                    </a>
                </div>
                <div className="nav-title">
                    <h5>Welcome!</h5>
                </div>
                <div className="nav-menu">
                    {/* <img src="../public/menu-icon.png" /> */}
                </div>
            </section>
        </>

        // <>
        //     <nav className="navbar navbar-dark"
        //         style={{
        //             backgroundColor: '#005280'
        //         }}>
        //         <div className="container-fluid">
        //             <a className="navbar-brand text-center" href="http://atem.net/Home/">atem.net</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        //                 <div className="offcanvas-header"
        //                     style={{
        //                         backgroundColor: '#003F63'
        //                     }}>
        //                     <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Welcome</h5>
        //                     <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //                 </div>
        //                 <div className="offcanvas-body"
        //                     style={{
        //                         backgroundColor: '#003F63',
        //                         display: 'flex',
        //                         flexDirection: 'column',
        //                         alignContent: 'space-between'
        //                     }}>

        //                     <ul className="navbar-nav flex-grow-1 pe-3"
        //                         style={{
                                    
        //                         }}>
        //                         <li className="nav-item">
        //                             <Link className="nav-link active" aria-current="page" to={'App'}>Newsletter</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link active" to={'Postear'}>Create Entry</Link>
        //                         </li>
        //                         <li className="nav-item" style={{
        //                             visibility: aproveRoute()
        //                         }}>
        //                             <Link className="nav-link active" to={'Updaitear'}>Approve Publications</Link>
        //                         </li>

        //                     </ul>
        //                     <div className="mt-auto" style={{ textAlign: 'left' }}>
        //                         <Link to={'/login'}>
        //                             <button className="button-27">Sign Out</button>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </>
    )
}

export default Navbar