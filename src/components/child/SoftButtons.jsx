import React from 'react'

const SoftButtons = () => {
    return (
        <div
            className="position-relative min-vh-100 w-100"
            style={{
                backgroundImage: "url('/assets/images/home-flood/flood.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}
        >
            {/* Overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(255,255,255,0.7)',
                zIndex: 1
            }} />
            
            {/* Beautiful Title at the top */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                textAlign: 'center',
                marginTop: '40px',
                zIndex: 3,
                pointerEvents: 'none',
            }}>
                <h1 style={{
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    color: 'rgba(30, 41, 59, 0.85)',
                    textShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    letterSpacing: '1px',
                    margin: 0,
                    padding: 0,
                    opacity: 0.95,
                }}>
                    Crisis Management System
                </h1>
            </div>

            {/* Large Cards Container */}
            <div className="container-fluid position-relative" style={{ zIndex: 2, maxWidth: '1200px', marginTop: '120px' }}>
                <div className="row g-4 justify-content-center">
                    
                    {/* Pre Crisis Card */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                            style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '24px',
                                boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                minHeight: '280px'
                            }}
                        >
                            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
                                <div
                                    className="rounded-circle mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'rgba(59, 130, 246, 0.2)',
                                        border: '2px solid rgba(59, 130, 246, 0.4)'
                                    }}
                                >
                                    <span style={{ fontSize: '2rem', color: '#3b82f6' }}>🛡️</span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#1e40af',
                                    marginBottom: '12px',
                                    textShadow: '0 2px 8px rgba(30, 64, 175, 0.1)'
                                }}>
                                    Pre Crisis
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#1e40af',
                                    opacity: 0.8,
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>
                                    Prevention and preparation strategies
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* During Crisis Card */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                            style={{
                                background: 'rgba(245, 158, 11, 0.1)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '24px',
                                boxShadow: '0 12px 40px rgba(245, 158, 11, 0.2)',
                                border: '1px solid rgba(245, 158, 11, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                minHeight: '280px'
                            }}
                        >
                            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
                                <div
                                    className="rounded-circle mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'rgba(245, 158, 11, 0.2)',
                                        border: '2px solid rgba(245, 158, 11, 0.4)'
                                    }}
                                >
                                    <span style={{ fontSize: '2rem', color: '#f59e0b' }}>⚠️</span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#d97706',
                                    marginBottom: '12px',
                                    textShadow: '0 2px 8px rgba(217, 119, 6, 0.1)'
                                }}>
                                    During Crisis
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#d97706',
                                    opacity: 0.8,
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>
                                    Active response and management
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Post Crisis Card */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                            style={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '24px',
                                boxShadow: '0 12px 40px rgba(239, 68, 68, 0.2)',
                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                minHeight: '280px'
                            }}
                        >
                            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
                                <div
                                    className="rounded-circle mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'rgba(239, 68, 68, 0.2)',
                                        border: '2px solid rgba(239, 68, 68, 0.4)'
                                    }}
                                >
                                    <span style={{ fontSize: '2rem', color: '#ef4444' }}>🔄</span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#dc2626',
                                    marginBottom: '12px',
                                    textShadow: '0 2px 8px rgba(220, 38, 38, 0.1)'
                                }}>
                                    Post Crisis
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#dc2626',
                                    opacity: 0.8,
                                    lineHeight: '1.5',
                                    margin: 0
                                }}>
                                    Recovery and improvement
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SoftButtons