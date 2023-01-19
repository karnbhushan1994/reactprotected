import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import Header4 from './Header4'

export default function Headers() {
    return (
        <>
            <div className="container-fluid">
                {/* Navbar 1 Start */}
                <div className="row py-2">
                    <div className="col-md-10">
                        <Header1 />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <button className="btn btn-dark">Use this</button>
                    </div>
                </div>
                {/* Navbar 1 End */}

                {/* Navbar 2 Start */}
                <div className="row py-2">
                    <div className="col-md-10">
                        <Header2 />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <button className="btn btn-primary">Use this</button>
                    </div>
                </div>
                {/* Navbar 2 End */}

                {/* Navbar 3 Start */}
                <div className="row py-2">
                    <div className="col-md-10">
                        <Header3 />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <button className="btn text-dark" style={{ backgroundColor: "#e3f2fd" }}>Use this</button>
                    </div>
                </div>
                {/* Navbar 3 End */}

                {/* Navbar 4 Start */}
                <div className="row py-2">
                    <div className="col-md-10">
                        <Header4 />
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <button className="btn btn-light">Use this</button>
                    </div>
                </div>
                {/* Navbar 4 End */}
            </div>
        </>
    )
}
