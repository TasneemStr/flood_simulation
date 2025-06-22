import React from 'react'
import Link from 'next/link'

const SoftButtons = () => {
    return (
        <div
            className="position-relative min-vh-100 w-100"
            style={{
                backgroundImage: "url('assets/images/login/envato-labs-image-edit (11).png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}
        >
           
            
            {/* Beautiful Title at the top */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                textAlign: 'center',
                marginTop: '40px',
                zIndex:1,
                pointerEvents: 'none',
            }}>
                <h1 style={{
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    textShadow: '0 4px 24px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.8)',
                    letterSpacing: '1px',
                    margin: 0,
                    padding: 0,
                    opacity: 1,
                }}>
                    Crisis Management System
                </h1>
            </div>

            {/* Large Cards Container */}
            <div className="container-fluid position-relative" style={{ zIndex: 2, maxWidth: '1200px', marginTop: '120px' }}>
                <div className="row g-4 justify-content-center">
                    
                    {/* Pre Crisis Card */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <Link
                            href="/crisis?tab=pre-crisis"
                            style={{
                                textDecoration: 'none',
                                display: 'block',
                            }}
                        >
                            <div
                                className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                                style={{
                                    background: 'rgba(59, 130, 246, 0.15)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 8px 25px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
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
                                            background: 'rgba(59, 130, 246, 0.15)',
                                            border: '3px solid rgba(59, 130, 246, 0.6)'
                                        }}
                                    >
                                        <span style={{ fontSize: '2rem', color: '#3b82f6' }}>🛡️</span>
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: 800,
                                        color: '#ffffff',
                                        marginBottom: '12px',
                                        textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(30, 64, 175, 0.6)'
                                    }}>
                                        Pre Crisis
                                    </h3>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        lineHeight: '1.5',
                                        margin: 0,
                                        textShadow: '0 3px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)'
                                    }}>
                                        Prevention and preparation strategies
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* During Crisis Card */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <Link
                            href="/crisis?tab=during-crisis"
                            style={{
                                textDecoration: 'none',
                                display: 'block',
                            }}
                        >
                            <div
                                className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                                style={{
                                    background: 'rgba(245, 158, 11, 0.15)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 8px 25px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
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
                                            background: 'rgba(245, 158, 11, 0.15)',
                                            border: '3px solid rgba(245, 158, 11, 0.6)'
                                        }}
                                    >
                                        <span style={{ fontSize: '2rem', color: '#f59e0b' }}>⚠️</span>
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: 800,
                                        color: '#ffffff',
                                        marginBottom: '12px',
                                        textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(217, 119, 6, 0.6)'
                                    }}>
                                        During Crisis
                                    </h3>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        lineHeight: '1.5',
                                        margin: 0,
                                        textShadow: '0 3px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)'
                                    }}>
                                        Active response and management
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Post Crisis Card */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <Link
                            href="/crisis?tab=post-crisis"
                            style={{
                                textDecoration: 'none',
                                display: 'block',
                            }}
                        >
                            <div
                                className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                                style={{
                                    background: 'rgba(239, 68, 68, 0.15)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 8px 25px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
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
                                            background: 'rgba(239, 68, 68, 0.15)',
                                            border: '3px solid rgba(239, 68, 68, 0.6)'
                                        }}
                                    >
                                        <span style={{ fontSize: '2rem', color: '#ef4444' }}>🔄</span>
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: 800,
                                        color: '#ffffff',
                                        marginBottom: '12px',
                                        textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(220, 38, 38, 0.6)'
                                    }}>
                                        Post Crisis
                                    </h3>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#ffffff',
                                        fontWeight: 500,
                                        lineHeight: '1.5',
                                        margin: 0,
                                        textShadow: '0 3px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)'
                                    }}>
                                        Recovery and improvement
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SoftButtons