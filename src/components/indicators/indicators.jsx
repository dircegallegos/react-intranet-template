import './indicators.css'

function Indicators() {
    return (
        <>
            <div className='indicators-cont'>
                <div className='ind-title'>
                    <h5 className='card-title'>YEAR TO DATE KPI's</h5>
                </div>
                <div className='ind-kpi-cards'>
                    <div className='card mb-3 kpi-card'>
                        <div className="card-header">Sales</div>
                        <div className="card-body">
                            <h1 className="card-title">##</h1>
                        </div>
                    </div>
                    <div className='card mb-3 kpi-card'>
                        <div className="card-header">QN's</div>
                        <div className="card-body">
                            <h1 className="card-title">##</h1>
                        </div>
                    </div>
                    <div className='card mb-3 kpi-card'>
                        <div className="card-header">Scraps</div>
                        <div className="card-body">
                            <h1 className="card-title">##</h1>
                        </div>
                    </div>
                    <div className='card mb-3 kpi-card'>
                        <div className="card-header">Escapes</div>
                        <div className="card-body">
                            <h1 className="card-title">##</h1>
                        </div>
                    </div>
                    <div className='card mb-3 kpi-card'>
                        <div className="card-header">Days No Acc</div>
                        <div className="card-body">
                            <h1 className="card-title">##</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Indicators