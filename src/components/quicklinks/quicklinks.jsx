import './quicklinks.css'

function Quicklinks() {
    return (
        <>
            <div className='links-cont'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Quick Access</h5>
                        <a href="https://atengine.mx" target='_blank' className="card-link">AT Engine Official Website</a>
                        <a href="https://atenginemexico.sharepoint.com/:x:/g/Ea-dpgeysJVJrQ2YNLtXxEMBIG5xWKMKgA_Sl8KEOBEEAA?e=oyGNIE" target='_blank' className="card-link">Weekly menu confirmation</a>
                        <a href="http://172.16.5.237/PMO/directory" target='_blank' className="card-link">Part Number Directory</a>
                        <a href="https://itopatem.on.spiceworks.com/portal/registrations" target='_blank' className="card-link">Create an IT Ticket</a>
                        <a href="#" target='_blank' className="card-link">Plant Layout</a>
                        <a href="#" target='_blank' className="card-link">AT Engine Rulebook</a>
                        <div className='card-separator-line'></div>
                        <h5 className="card-title">Quality Policy</h5>
                        <p className="card-text">AT Engine is committed to supply Aeronautical products and services 
                        of quality to satisfy customer requirements through the implementation of quality objectives, 
                        people engagement, human factor development, an open-door policy and the continuous improvement 
                        of its processes.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quicklinks