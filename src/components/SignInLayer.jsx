'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// Custom SVG Icons
const Email = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Lock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const Eye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOff = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
);

const Facebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Google = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const SignInLayer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const route=useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    
    if (formData.email === 'asd@gmail.com' && formData.password === '123') {
      try {
        localStorage.setItem('email', formData.email);
        localStorage.setItem('name', 'asd');
      } catch (error) {
        console.log('localStorage not available in this environment');
      }
      
      setAlert({
        show: true,
        type: 'success',
        message: 'Login successful!'
      });

      
      // Auto hide success message and redirect after 2 seconds
      setTimeout(() => {
        setAlert({ show: false, type: '', message: '' });
         route.push('/home')
      }, 2000);
     
    } else {
      setAlert({
        show: true,
        type: 'error',
        message: 'Invalid credentials. Please try again.'
      });
      
      setTimeout(() => {
        setAlert({ show: false, type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <>
     <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .signin-section {
          // min-height: 100vh;
          position: relative;
          background-image: url('assets/images/login/envato-labs-image-edit (7).png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        // .signin-overlay {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   right: 0;
        //   bottom: 0;
        //   background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%);

        //   // background: linear-gradient(135deg, rgba(15, 23, 42, 0.65) 0%, rgba(30, 58, 138, 0.75) 50%, rgba(67, 56, 202, 0.9) 100%);
        // }
        
        .signin-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle-1 {
          position: absolute;
          top: 25%;
          left: 25%;
          width: 8px;
          height: 8px;
          background-color: rgba(96, 165, 250, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .particle-2 {
          position: absolute;
          top: 75%;
          right: 25%;
          width: 4px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: ping 1s infinite;
        }
        
        .particle-3 {
          position: absolute;
          top: 50%;
          left: 75%;
          width: 12px;
          height: 12px;
          background-color: rgba(192, 132, 252, 0.2);
          border-radius: 50%;
          animation: bounce 1s infinite;
        }
        
        .floating-element-1 {
          position: absolute;
          top: 80px;
          left: 40px;
          width: 128px;
          height: 128px;
          background-color: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 2s infinite;
        }
        
        .floating-element-2 {
          position: absolute;
          bottom: 80px;
          right: 40px;
          width: 160px;
          height: 160px;
          background-color: rgba(147, 51, 234, 0.1);
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 2s infinite;
          animation-delay: 1s;
        }
        
        .floating-element-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 96px;
          height: 96px;
          background-color: rgba(236, 72, 153, 0.1);
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 2s infinite;
          animation-delay: 0.5s;
          transform: translate(-50%, -50%);
        }
        
        .signin-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease;
          position: relative;
          z-index: 10;
        }
        
        .signin-card:hover {
          transform: scale(1.05);
        }
        
        .signin-logo {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #3b82f6, #9333ea, #ec4899);
          border-radius: 50%;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }
        
        .signin-logo-inner {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
        }
        
        .signin-logo-dot {
          width: 32px;
          height: 32px;
          background: linear-gradient(45deg, #3b82f6, #9333ea);
          border-radius: 50%;
        }
        
        .signin-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          color: white;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          padding: 16px 16px 16px 48px;
        }
        
        .signin-input:focus {
          background: rgba(255, 255, 255, 0.2);
          border-color: #60a5fa;
          box-shadow: none;
          color: white;
        }
        
        .signin-input::placeholder {
          color: rgba(191, 219, 254, 1);
        }
        
        .signin-input-icon {
          color: rgba(147, 197, 253, 1);
        }
        
        .signin-btn {
          background: linear-gradient(45deg, #2563eb, #9333ea, #db2777);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          padding: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .signin-btn:hover {
          background: linear-gradient(45deg, #1d4ed8, #7c3aed, #be185d);
          transform: scale(1.05);
          color: white;
        }
        
        .social-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          color: white;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          padding: 16px 24px;
        }
        
        .social-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .text-blue-200 {
          color: rgba(191, 219, 254, 1);
        }
        
        .text-blue-300 {
          color: rgba(147, 197, 253, 1);
        }
        
        .text-blue-300:hover {
          color: rgba(191, 219, 254, 1);
        }
        
        .custom-alert {
          border-radius: 12px;
          backdrop-filter: blur(10px);
          animation: slideInDown 0.5s ease-out;
          border: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .custom-alert.alert-danger {
          background: rgba(248, 215, 218, 0.95);
          color: #721c24;
        }
        
        .custom-alert.alert-success {
          background: rgba(212, 237, 218, 0.95);
          color: #0f5132;
        }
        
        .custom-alert .alert-content {
          font-weight: 500;
        }
        
        .alert-icon {
          width: 20px;
          height: 20px;
        }
        
        .alert-icon.error {
          color: #dc3545;
        }
        
        .alert-icon.success {
          color: #198754;
        }
        
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
      `}</style>

      <section className="signin-section d-flex align-items-center justify-content-center p-4">
        {/* Background Overlay */}
        <div className="signin-overlay" />
        
        {/* Animated particles effect */}
        <div className="signin-particles">
          <div className="particle-1"></div>
          <div className="particle-2"></div>
          <div className="particle-3"></div>
        </div>

        {/* Floating elements */}
        <div className="signin-particles">
          <div className="floating-element-1"></div>
          <div className="floating-element-2"></div>
          <div className="floating-element-3"></div>
        </div>

        <div className="signin-card p-5 w-100" style={{maxWidth: '40rem'}}>
          {/* Alert Messages */}
          {alert.show && (
            <div className={`alert custom-alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible d-flex align-items-center mb-4`} role="alert">
              <svg className={`alert-icon me-2 ${alert.type === 'success' ? 'success' : 'error'}`} fill="currentColor" viewBox="0 0 20 20">
                {alert.type === 'success' ? (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                )}
              </svg>
              <div className="alert-content flex-grow-1">
                {alert.message}
              </div>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setAlert({ show: false, type: '', message: '' })}
                aria-label="Close"
              ></button>
            </div>
          )}

          <div className="text-center mb-5">
            {/* Logo */}
            <div className=" d-flex align-items-center justify-content-center mx-auto mb-4">
              <div className="d-flex align-items-center justify-content-center">
                {/* <div className="signin-logo-dot"></div> */}
                <img src="assets/images/logo.png" />
              </div>
            </div>
            
            <h4 className="h3 fw-bold text-white mb-3">Sign In</h4>
            <p className="text-blue-200 fs-5">Welcome back! Please enter your details</p>
          </div>
          
          <div>
            {/* Email Input */}
            <div className="position-relative mb-4">
              <div className="position-absolute signin-input-icon" style={{left: '16px', top: '50%', transform: 'translateY(-50%)'}}>
                <Email />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="form-control signin-input"
              />
            </div>
            
            {/* Password Input */}
            <div className="position-relative mb-4">
              <div className="position-absolute signin-input-icon" style={{left: '16px', top: '50%', transform: 'translateY(-50%)'}}>
                <Lock />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="form-control signin-input"
                style={{paddingRight: '48px'}}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn position-absolute signin-input-icon"
                style={{right: '16px', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', padding: '0'}}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
       
            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              className="btn signin-btn w-100 mb-4"
            >
              Sign In
            </button>
            
            {/* Divider */}
            <div className="position-relative my-4">
              <hr style={{borderColor: 'rgba(255, 255, 255, 0.3)'}} />
              <div className="position-absolute top-50 start-50 translate-middle px-3 text-blue-200 small" style={{backgroundColor: 'transparent'}}>
              </div>
            </div>
            
            {/* Social Login Buttons */}
            {/* <div className="row g-3 mb-4">
              <div className="col-6">
                <button
                  type="button"
                  className="btn social-btn w-100 d-flex align-items-center justify-content-center"
                >
                  <div className="me-2" style={{color: '#3b82f6'}}>
                    <Facebook />
                  </div>
                  <span className="fw-medium">Facebook</span>
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn social-btn w-100 d-flex align-items-center justify-content-center"
                >
                  <div className="me-2">
                    <Google />
                  </div>
                  <span className="fw-medium">Google</span>
                </button>
              </div>
            </div> */}
            
            {/* Sign Up Link
            <div className="text-center small">
              <p className="text-blue-200 mb-0">
                Don't have an account?{' '}
                <button className="btn btn-link text-blue-300 fw-semibold p-0">
                  Sign Up
                </button>
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInLayer;