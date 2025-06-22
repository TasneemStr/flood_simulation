'use client'
import { Shield, AlertTriangle, RotateCcw, ArrowRight, MapPin, FileText, BarChart3, Database, Monitor, FilePlus, Target, Route,Waves, Wind, Droplets, FolderOpen, Home, Zap, Activity, Map, Users, TrendingUp, AlertCircle, CheckCircle, Clock, Building2, Car, Truck, Wrench } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import UsersOverviewOne from './UsersOverviewOne';
import SalesStatisticOne from './SalesStatisticOne';
import InputStatus from './InputStatus';

const ButtonTabsTwo = ({ initialTab = 'pre-crisis' }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const tabFromUrl = searchParams.get('tab') || initialTab;
  
  const [activeMainTab, setActiveMainTab] = useState(tabFromUrl);
  const [activeSubTab, setActiveSubTab] = useState({
    'pre-crisis': 'periodic-monitoring-map',
    'during-crisis': 'disaster-monitoring',
    'post-crisis': 'post-crisis-analytics'
  });

  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    location: '',
    date: '',
    description: '',
    severity: 'low'
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && tabParam !== activeMainTab) {
      setActiveMainTab(tabParam);
    }
  }, [searchParams, activeMainTab]);

  const tabs = [
    {
      id: 'pre-crisis',
      title: 'Pre Crisis',
      icon: Shield,
      color: {
        primary: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
        secondary: 'rgba(102, 126, 234, 0.1)',
        border: '#667eea',
        shadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
      },
      description: 'Prevention and preparation strategies',
      emoji: '🛡️',
      subTabs: [
        {
          id: 'periodic-monitoring-map',
          title: 'Map View',
          icon: Map,
          url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115894.29553083822!2d55.1571443!3d25.1152529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c95a4dce9d9%3A0x917b7448db3e3e5e!2z2KfZhNiq2LXYp9mF2Kkg2YTZhNin2YXYuSDYp9mE2LnZhNmK2Kkg2YXYsdmD2LI!5e0!3m2!1sar!2sae!4v1718622722321',
        },
        {
          id: 'periodic-monitoring-form',
          title: 'Periodic Monitoring Form',
          icon: FileText,
          url: 'https://survey123.arcgis.com/share/661005f2707e4698a20eceec07627489?portalUrl=https://Strategizeit.maps.arcgis.com',
        },
        {
          id: 'periodic-monitoring-dashboard',
          title: 'Periodic Monitoring Dashboard',
          icon: Activity,
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/aba2c6248a424420b6d49fc09eb3bbad#locale=ar',
        },
        {
          id: 'producers-resources',
          title: 'Producers and Resources Management',
          icon: Database,
          url: 'http://45.94.209.181:8050/web/#cids=1&action=menu',
        },
      ],
    },
    {
      id: 'during-crisis',
      title: 'During Crisis',
      icon: Zap,
      color: {
        primary: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        secondary: 'rgba(245, 87, 108, 0.1)',
        border: '#f5576c',
        shadow: '0 8px 32px rgba(245, 87, 108, 0.3)'
      },
      description: 'Active response and management',
      emoji: '⚡',
      subTabs: [
        {
          id: 'disaster-monitoring',
          title: 'Disaster Monitoring Application',
          icon: Monitor,
          url: 'https://experience.arcgis.com/experience/9d76912c30004b539b854c1ca3cc14b4',
        },
        {
          id: 'event-monitoring-form',
          title: 'Event Monitoring Form',
          icon: FilePlus,
          url: null,
        },
        {
          id: 'event-monitoring-app',
          title: 'Event Monitoring Application',
          icon: Activity,
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/1b99acb792014e7b9c98ba29629a0240',
        },
        {
          id: 'damage-assessment-form',
          title: 'Damage Assessment Form',
          icon: FileText,
          url: 'https://survey123.arcgis.com/share/8d9c139be57a4426b5c23b8ff5c74256?portalUrl=https://Strategizeit.maps.arcgis.com',
        },
        {
          id: 'damage-assessment-dashboard',
          title: 'Damage Assessment Dashboard',
          icon: BarChart3,
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/01e145ddc3f54887aecb434c1f064840',
        },
      ],
    },
    {
      id: 'post-crisis',
      title: 'Post Crisis',
      icon: RotateCcw,
      color: {
        primary: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        secondary: 'rgba(79, 172, 254, 0.1)',
        border: '#4facfe',
        shadow: '0 8px 32px rgba(79, 172, 254, 0.3)'
      },
      description: 'Recovery and improvement',
      emoji: '🔄',
      subTabs: [
        {
          id: 'post-crisis-analytics',
          title: 'Post-Crisis Analytics',
          icon: BarChart3,
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/a1e614ea0651479a8aebed9a1242f52d',
        },
      ],
    },
  ];

  const PostCrisisDashboard = () => {
    const [animateCounters, setAnimateCounters] = useState(false);

    useEffect(() => {
      setAnimateCounters(true);
    }, []);

    const dashboardCards = [
      {
        id: 'total-incidents',
        title: 'Total Incidents',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderColor: '#667eea',
        shadowColor: 'rgba(102, 126, 234, 0.3)',
        icon: AlertCircle,
        value: 8,
      },
      {
        id: 'completed-tasks',
        title: 'Completed Tasks',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        borderColor: '#f5576c',
        shadowColor: 'rgba(245, 87, 108, 0.3)',
        icon: CheckCircle,
        value: 5,
      },
      {
        id: 'response-teams',
        title: 'Response Teams',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        borderColor: '#4facfe',
        shadowColor: 'rgba(79, 172, 254, 0.3)',
        icon: Users,
        value: 3,
      },
    ];

    const AnimatedCounter = ({ end, duration = 2000 }) => {
      const [count, setCount] = useState(0);

      useEffect(() => {
        if (!animateCounters) return;

        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }, [end, duration, animateCounters]);

      return <span>{count}</span>;
    };

    const chartData = [
      { type: 'فيضانات', count: 8, color: '#3b82f6' },
      { type: 'حرائق', count: 3, color: '#ef4444' },
      { type: 'استشارات', count: 8, color: '#10b981' },
      { type: 'أعمال إسناد', count: 5, color: '#f59e0b' },
    ];

    const mapUrl = 'https://strategizeit.maps.arcgis.com/apps/dashboards/a1e614ea0651479a8aebed9a1242f52d';

    return (
      <div style={{ height: 'calc(100vh)', overflowY: 'auto', padding: '20px' }}>
        <div className="row g-4 mb-4">
          {dashboardCards.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-12">
              <div
                className="card h-100 position-relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: `2px solid ${card.borderColor}30`,
                  boxShadow: `0 10px 40px ${card.shadowColor}`,
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 60px ${card.shadowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 10px 40px ${card.shadowColor}`;
                }}
              >
                <div
                  className="card-header border-0 p-4"
                  style={{
                    background: card.gradient,
                    borderRadius: '18px 18px 0 0',
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between px-3">
                    <div>
                      <h6 className="text-white mb-1 fw-bold">{card.title}</h6>
                      <p className="text-white opacity-75 mb-0 small">{card.subtitle}</p>
                    </div>
                    <div
                      className="rounded-circle p-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {React.createElement(card.icon, {
                        className: 'text-white',
                        size: 20,
                        style: { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' },
                      })}
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-center" style={{
                        padding:'0.875rem 1.5rem !important;'
                      }}>
                  <h6 className="mb-1 fw-bold text-dark">
                    <AnimatedCounter end={card.value} />
                  </h6>
                </div>
                <div className="card-footer border-0 p-4 pt-0">
                  <div className="d-flex align-items-center justify-content-between px-3">
                    <small className="text-muted">latest update: 2 hours ago</small>
                    <button
                      className="btn btn-sm px-3 py-2 rounded-pill d-flex align-items-center gap-2"
                      style={{
                        background: `${card.borderColor}15`,
                        color: card.borderColor,
                        border: `1px solid ${card.borderColor}30`,
                      }}
                    >
                      <span className="small fw-semibold">More Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
                <div
                  className="position-absolute top-0 end-0 opacity-10"
                  style={{
                    width: '120px',
                    height: '100px',
                    background: card.gradient,
                    borderRadius: '0 18px 0 100%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 mb-4 h-100 pt-5" style={{ height: "100vh" }}>
          <div className="col-12">
            <div
              className="card h-100 position-relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '2px solid rgba(102, 126, 234, 0.2)',
                boxShadow: '0 10px 40px rgba(102, 126, 234, 0.1)',
                height: '400px',
              }}
            >
              <div
                className="card-header border-0 p-4"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '18px 18px 0 0',
                }}
              >
                <div className="d-flex align-items-center justify-content-between px-3
                ">
                  <div>
                    <h6 className="text-white mb-1 fw-bold">Post-Crisis Map Analysis</h6>
                  </div>
                  <div
                    className="rounded-circle p-3 d-flex align-items-center justify-content-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="row g-2">
                  <UsersOverviewOne />
                  <div className="col-8 col-lg-8">
                    <div className="position-relative">
                      <img
                        src="assets/images/crisis/1.png"
                        alt="Post Crisis Image"
                        className="w-100 rounded shadow-sm"
                        style={{ height: '378px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 start-0 p-3">
                        <span className="badge bg-primary">Post-Crisis Map</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EventMonitoringForm = () => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      if (formErrors[name]) {
        setFormErrors({ ...formErrors, [name]: '' });
      }
    };

    const validateForm = () => {
      const errors = {};
      if (!formData.eventName.trim()) errors.eventName = 'Event name is required';
      if (!formData.eventType.trim()) errors.eventType = 'Event type is required';
      if (!formData.location.trim()) errors.location = 'Location is required';
      if (!formData.date) errors.date = 'Date is required';
      if (!formData.description.trim()) errors.description = 'Description is required';
      return errors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      console.log('Form submitted:', formData);
      setFormData({
        eventName: '',
        eventType: '',
        location: '',
        date: '',
        description: '',
        severity: 'low'
      });
      alert('Event submitted successfully!');
    };

    return (
      <div
        className="card p-4"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '2px solid rgba(245, 87, 108, 0.2)',
          boxShadow: '0 10px 40px rgba(245, 87, 108, 0.1)',
          maxWidth: '100%',
          margin: '0 auto'
        }}
      >
        {/* <div
          className="card-header border-0 p-3 mb-3"
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: '15px'
          }}
        >
          <h5 className="text-white mb-0 fw-bold">Event Monitoring Form</h5>
        </div> */}
        <InputStatus />
       
      </div>
    );
  };

  const handleMainTabClick = (tabId) => {
    setActiveMainTab(tabId);
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('tab', tabId);
    router.push(newUrl.pathname + newUrl.search);
  };

  const handleSubTabClick = (mainTabId, subTabId) => {
    setActiveSubTab({ ...activeSubTab, [mainTabId]: subTabId });
  };

  const getCurrentMainTab = () => {
    return tabs.find(tab => tab.id === activeMainTab);
  };

  const getCurrentSubTab = () => {
    const mainTab = getCurrentMainTab();
    return mainTab?.subTabs.find(subTab => subTab.id === activeSubTab[activeMainTab]);
  };

  const sideButtons = [
    {
      id: 'assembly-points',
      title: 'Assembly point',
      icon: Users,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      bgColor: 'rgba(102, 126, 234, 0.1)',
      borderColor: '#667eea'
    },
    {
      id: 'emergency-exits',
      title: 'Emergency exits',
      icon: Route,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      bgColor: 'rgba(245, 87, 108, 0.1)',
      borderColor: '#f5576c'
    },
    {
      id: 'barriers',
      title: 'Water breaks',
      icon: Waves,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      bgColor: 'rgba(79, 172, 254, 0.1)',
      borderColor: '#4facfe'
    },
    {
      id: 'water-drainage',
      title: 'Water drains',
      icon: Droplets,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      bgColor: 'rgba(67, 233, 123, 0.1)',
      borderColor: '#43e97b'
    }
  ];

  return (
    <div className="col-xxl-12">
      <div className="card p-0 overflow-hidden position-relative radius-12 h-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
        <div className="card-header py-20 px-30 border-0 position-relative" style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{
                background: getCurrentMainTab()?.color.primary,
                boxShadow: getCurrentMainTab()?.color.shadow
              }}>
                {getCurrentMainTab() && React.createElement(getCurrentMainTab().icon, { 
                  className: "text-white", 
                  size: 24 
                })}
              </div>
              <div>
                <h5 className="text-dark mb-1 fw-bold">{getCurrentMainTab()?.title}</h5>
                <p className="text-muted mb-0 small">{getCurrentMainTab()?.description}</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button
                onClick={() => router.push('/home')}
                className="btn btn-outline-secondary position-relative overflow-hidden d-flex align-items-center justify-content-center"
                title="Return to Home"
                style={{ 
                  width: '50px', 
                  height: '50px',
                  border: '2px solid #6c757d',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255, 255, 255, 0.9)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(108, 117, 125, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <Home size={20} className="text-secondary" />
              </button>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleMainTabClick(tab.id)}
                  className="btn position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  title={tab.title}
                  style={{ 
                    width: '55px', 
                    height: '55px',
                    border: activeMainTab === tab.id ? `3px solid ${tab.color.border}` : '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '18px',
                    background: activeMainTab === tab.id ? tab.color.primary : 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: activeMainTab === tab.id ? tab.color.shadow : '0 4px 15px rgba(0, 0, 0, 0.1)',
                    transform: activeMainTab === tab.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeMainTab !== tab.id) {
                      e.target.style.transform = 'translateY(-3px) scale(1.05)';
                      e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeMainTab !== tab.id) {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                >
                  {React.createElement(tab.icon, { 
                    size: 22,
                    className: activeMainTab === tab.id ? "text-white" : "text-dark",
                    style: { filter: activeMainTab === tab.id ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none' }
                  })}
                  {activeMainTab === tab.id && (
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '15px',
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="card-body p-30" style={{ background: 'rgba(255, 255, 255, 0.98)' }}>
          <div className="mb-4">
            <ul className="nav nav-pills mb-20 flex-wrap gap-2">
              {getCurrentMainTab()?.subTabs.map((subTab) => (
                <li className="nav-item"  style={{ fontSize: '13px' }}  role="presentation" key={subTab.id}>
                  <button
                    className={`nav-link d-flex align-items-center gap-3 fw-semibold radius-12 px-20 py-12 position-relative overflow-hidden ${
                      activeSubTab[activeMainTab] === subTab.id ? 'active' : ''
                    }`}
                    onClick={() => handleSubTabClick(activeMainTab, subTab.id)}
                    type="button"
                    style={{
                      background: activeSubTab[activeMainTab] === subTab.id 
                        ? getCurrentMainTab()?.color.primary 
                        : 'rgba(255, 255, 255, 0.8)',
                      border: activeSubTab[activeMainTab] === subTab.id 
                        ? `2px solid ${getCurrentMainTab()?.color.border}` 
                        : '2px solid rgba(0, 0, 0, 0.1)',
                      color: activeSubTab[activeMainTab] === subTab.id ? 'white' : '#333',
                      transition: 'all 0.3s ease',
                      boxShadow: activeSubTab[activeMainTab] === subTab.id 
                        ? getCurrentMainTab()?.color.shadow 
                        : '0 2px 10px rgba(0, 0, 0, 0.08)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSubTab[activeMainTab] !== subTab.id) {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSubTab[activeMainTab] !== subTab.id) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                      }
                    }}
                  >
                    <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{
                      background: activeSubTab[activeMainTab] === subTab.id 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : getCurrentMainTab()?.color.secondary,
                      width: '35px',
                      height: '35px'
                    }}>
                      {React.createElement(subTab.icon, { 
                        size: 18,
                        className: activeSubTab[activeMainTab] === subTab.id ? "text-white" : "",
                        style: { 
                          color: activeSubTab[activeMainTab] === subTab.id 
                            ? 'white' 
                            : getCurrentMainTab()?.color.border 
                        }
                      })}
                    </div>
                    <span className="line-height-1">{subTab.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {getCurrentSubTab()?.id === 'post-crisis-analytics' ? (
                <PostCrisisDashboard />
              ) : getCurrentSubTab()?.id === 'event-monitoring-form' ? (
                <EventMonitoringForm />
              ) : getCurrentSubTab()?.url ? (
                <div className="d-flex gap-4" style={{ height: 'calc(100vh)' }}>
                  <div className="flex-grow-1" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}>
                    <iframe
                      src={getCurrentSubTab().url}
                      title={getCurrentSubTab().title}
                      className="w-100 h-100"
                      allow="camera; microphone; geolocation"
                      style={{ border: 'none' }}
                      allowFullScreen
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                  {getCurrentSubTab()?.id === 'periodic-monitoring-map' && (
                    <div className="d-flex flex-column gap-3" style={{ minWidth: '220px' }}>
                      {sideButtons.map((button) => (
                        <button 
                          key={button.id}
                          className="btn d-flex align-items-center gap-3 p-4 position-relative overflow-hidden" 
                          style={{ 
                            minHeight: '70px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            border: `2px solid ${button.borderColor}`,
                            borderRadius: '16px',
                            transition: 'all 0.4s ease',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px) scale(1.02)';
                            e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
                            e.target.style.background = button.bgColor;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                          }}
                        >
                          <div className="rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ 
                            width: '50px', 
                            height: '50px', 
                            background: button.gradient,
                            boxShadow: `0 4px 15px ${button.borderColor}40`
                          }}>
                            {React.createElement(button.icon, { 
                              className: "text-white", 
                              size: 22,
                              style: { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }
                            })}
                          </div>
                          <span className="fw-bold text-dark" style={{ fontSize: '14px' }}>{button.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center p-5" style={{ 
                  background: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                  }}>
                    <FolderOpen className="text-white" size={32} />
                  </div>
                  <h6 className="text-dark mb-2">No Content Available</h6>
                  <p className="text-muted">No URL provided for {getCurrentSubTab()?.title}. Please contact the administrator for the correct link.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { opacity: 0.6; }
        }
        .nav-link:hover {
          transform: translateY(-2px);
        }
        .btn {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );
};

export default ButtonTabsTwo;