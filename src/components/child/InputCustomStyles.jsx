'use client'
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const InputCustomStyles = () => {
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title mb-0">Input Custom Styles</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {/* Google Map iframe on the left */}
                        
                        
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Google Map</label>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063559165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1640123456789!5m2!1sen!2seg"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-12">
                                   <div className="col-md-6">
                            <label className="form-label">Input with Placeholder</label>
                            <input
                                type="text"
                                name="#0"
                                className="form-control"
                                defaultValue="info@gmail.com"
                                required=""
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Medium Size File Input </label>
                            <input className="form-control" type="file" name="#0" required="" />
                            <div className="invalid-feedback">Please choose a file.</div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Input with Icon</label>
                            <input
                                type="email"
                                name="#0"
                                className="form-control"
                                placeholder="Enter Email"
                                required=""
                            />
                            <div className="invalid-feedback">
                                Please provide email address.
                            </div>
                        </div>
                        </div>

                        
                    </div>

                    {/* Original form fields */}
                    <form className="row gy-3 needs-validation mt-4" noValidate="">
                 
                    
                        <div className="col-12">
                            <button className="btn btn-primary-600" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputCustomStyles;