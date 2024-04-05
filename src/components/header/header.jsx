import './header.css'

function Header() {
    return (
        <>
        <div className='header'>
            <h1>AT Engine México — Internal Network</h1>
            <div className='header-btns'>
                <a href='http://172.16.5.237/Quality/Main/' target='_blank'>Quality</a>
                <a href='http://172.16.5.237/Production/Main/' target='_blank'>Production</a>
                <a href='http://172.16.5.237/Engineering/Main/' target='_blank'>Engineering</a>
                <a href='http://172.16.5.237/HR/Main/' target='_blank'>HR</a>
                <a href='http://172.16.5.237/Finance/Main/' target='_blank'>Finance</a>
                <a href='http://172.16.5.237/IT/Main/' target='_blank'>IT</a>
                <a href='http://172.16.5.237/PMO/Main' target='_blank'>PMO</a>
                <a href='http://172.16.5.237:1112/login' target='_blank'>Newsletter</a>
            </div>
        </div>
        </>
    )
}

export default Header