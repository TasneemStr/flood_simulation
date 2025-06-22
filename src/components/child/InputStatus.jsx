'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

const InputStatus = () => {
    const [formData, setFormData] = useState({
        reserveName: '',
        date: '',
        disasterType: '',
        disasterNature: '',
        totalArea: '',
        affectedArea: '',
        reserveCondition: '',
        buildingsCount: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="col-lg-12" dir="rtl" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="card">
                <div className="card-header" style={{ backgroundColor: '#f59e0b ', color: 'white' ,borderRadius:'17px'}}>
                    <h3 className="card-title mb-0 text-white fw-bold" style={{ textAlign: 'right',fontSize:'20px' }}> المتابعة الميدانية</h3>
                </div>
                <div className="card-body">
                    <div className="row gy-3 needs-validation">
                         <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>الموقع</label>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115894.29553083822!2d55.1571443!3d25.1152529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c95a4dce9d9%3A0x917b7448db3e3e5e!2z2KfZhNiq2LXYp9mF2Kkg2YTZhNin2YXYuSDYp9mE2LnZhNmK2Kkg2YXYsdmD2LI!5e0!3m2!1sar!2sae!4v1718622722321"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>اسم الامارة <span style={{ color: 'red' }}>*</span></label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:nature-reserve" />
                                </span>
                                <input
                                    type="text"
                                    name="reserveName"
                                    className="form-control"
                                    placeholder="أدخل اسم الامارة"
                                    value={formData.reserveName}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                />
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى إدخال اسم الامارة</div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>التاريخ</label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:calendar" />
                                </span>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                />
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى إدخال التاريخ</div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>طبيعة الكارثة <span style={{ color: 'red' }}>*</span></label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:alert-circle" />
                                </span>
                                <select
                                    name="disasterType"
                                    className="form-control"
                                    value={formData.disasterType}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                >
                                    <option value="">- الرجاء الاختيار -</option>
                                    <option value="fire">حريق</option>
                                    <option value="flood">فيضان</option>
                                    <option value="earthquake">زلزال</option>
                                    <option value="drought">جفاف</option>
                                    <option value="storm">عاصفة</option>
                                </select>
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى اختيار طبيعة الكارثة</div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>نوع الكارثة</label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:warning" />
                                </span>
                                <select
                                    name="disasterNature"
                                    className="form-control"
                                    value={formData.disasterNature}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                >
                                    <option value="">- الرجاء الاختيار -</option>
                                    <option value="natural">طبيعية</option>
                                    <option value="human">بشرية</option>
                                    <option value="mixed">مختلطة</option>
                                </select>
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى اختيار نوع الكارثة</div>
                            </div>
                        </div>

                        {/* المناطق Section */}
                        <div className="col-md-12 mt-4">
                            <div className="d-flex align-items-center mb-3 pt-3" style={{ justifyContent: 'flex-start' }}>
                                <Icon icon="mdi:map-marker" style={{ color: '#f59e0b', fontSize: '18px' }} />
                                <h6 className="mb-0" style={{ color: '#f59e0b ', fontWeight: 'bold', marginLeft: '8px' }}>المناطق</h6>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>المساحة الكلية</label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:ruler-square" />
                                </span>
                                <input
                                    type="number"
                                    name="totalArea"
                                    className="form-control"
                                    placeholder="المساحة بالكيلومتر المربع"
                                    value={formData.totalArea}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                />
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى إدخال المساحة الكلية</div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>مساحة المناطق المتضررة</label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:ruler-square-compass" />
                                </span>
                                <input
                                    type="number"
                                    name="affectedArea"
                                    className="form-control"
                                    placeholder="المساحة المتضررة بالكيلومتر المربع"
                                    value={formData.affectedArea}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                />
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى إدخال مساحة المناطق المتضررة</div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>حالة المناطق المتضررة</label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:clipboard-list" />
                                </span>
                                <select
                                    name="reserveCondition"
                                    className="form-control"
                                    value={formData.reserveCondition}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                >
                                    <option value="">- الرجاء الاختيار -</option>
                                    <option value="light">أضرار طفيفة</option>
                                    <option value="moderate">أضرار متوسطة</option>
                                    <option value="severe">أضرار شديدة</option>
                                    <option value="total">دمار كامل</option>
                                </select>
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى اختيار حالة المناطق المتضررة</div>
                            </div>
                        </div>

                        {/* المباني Section */}
                        <div className="col-md-12 mt-4">
                            <div className="d-flex align-items-center mb-3 pt-4" style={{ justifyContent: 'flex-start' }}>
                                <Icon icon="mdi:building" style={{ color: '#f59e0b ', fontSize: '18px' }} />
                                <h6 className="mb-0" style={{ color: '#f59e0b ', fontWeight: 'bold', marginLeft: '8px' }}>المباني</h6>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label className="form-label" style={{ textAlign: 'right', display: 'block' }}>عدد المباني داخل المحمية</label>
                            <div className="icon-field has-validation" style={{ position: 'relative' }}>
                                <span className="icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                    <Icon icon="mdi:counter" />
                                </span>
                                <input
                                    type="number"
                                    name="buildingsCount"
                                    className="form-control"
                                    placeholder="أدخل عدد المباني"
                                    value={formData.buildingsCount}
                                    onChange={handleInputChange}
                                    required=""
                                    style={{ textAlign: 'right', paddingRight: '40px', paddingLeft: '10px' }}
                                />
                                <div className="invalid-feedback" style={{ textAlign: 'right' }}>يرجى إدخال عدد المباني</div>
                            </div>
                        </div>

                        <div className="col-md-12 mt-4 pt-4" style={{ textAlign: 'left' }}>
                            <button className="btn btn-success" type="button" style={{ backgroundColor: '#f59e0b ', borderColor: '#f59e0b', padding: '10px 30px' }} onClick={() => alert('تم إرسال البيانات بنجاح!')}>
                                إرسال البيانات
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputStatus