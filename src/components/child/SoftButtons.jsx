import React from 'react'

const SoftButtons = () => {
    return (
        <div 
            className="position-relative min-vh-100 w-100"
            style={{
                backgroundImage: "url('/assets/images/home-flood/flood.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(255,255,255,0.85)',
                zIndex: 1
            }} />
            <div className="col-xl-6 position-relative" style={{ zIndex: 2 }}>
                <div className="card h-100 p-0">
                    <div className="card-header border-bottom bg-base py-16 px-24">
                        <h6 className="text-lg fw-semibold mb-0">Crisis Management System</h6>
                    </div>
                    <div className="card-body p-24 " >
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <button
                                type="button"
                                className="btn rounded-pill btn-primary-100 text-primary-600 radius-8 px-20 py-11"
                            >
                                Pre Crisis
                            </button>
                            {/* <button
                                type="button"
                                className="btn rounded-pill btn-lilac-100 text-lilac-600 radius-8 px-20 py-11"
                            >
                               During Crisis
                            </button> */}
                            {/* <button
                                type="button"
                                className="btn rounded-pill btn-success-100 text-success-600 radius-8 px-20 py-11"
                            >
                                Success
                            </button> */}
                            {/* <button
                                type="button"
                                className="btn rounded-pill btn-info-100 text-info-600 radius-8 px-20 py-11"
                            >
                                Info
                            </button> */}
                            <button
                                type="button"
                                className="btn rounded-pill btn-warning-100 text-warning-600 radius-8 px-20 py-11"
                            >
                                 During Crisis
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-danger-100 text-danger-600 radius-8 px-20 py-11"
                            >
                                Post Crisis
                            </button>
                            {/* <button
                                type="button"
                                className="btn rounded-pill btn-neutral-100 text-primary-light radius-8 px-20 py-11"
                            >
                                Dark
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-link text-secondary-light text-decoration-none radius-8 px-20 py-11"
                            >
                                Link
                            </button>
                            <button
                                type="button"
                                className="btn rounded-pill btn-light-50 text-dark radius-8 px-20 py-11"
                            >
                                Light
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftButtons