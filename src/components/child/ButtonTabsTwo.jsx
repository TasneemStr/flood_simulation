import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const ButtonTabsTwo = () => {
  // Define the tabs for Pre-Crisis, During Crisis, and Post-Crisis
  const tabs = [
    {
      id: 'pre-crisis',
      title: 'Pre-Crisis',
      icon: 'solar:calendar-outline',
      subTabs: [
        {
          id: 'periodic-monitoring-map',
          title: 'Map View',
          icon: 'solar:map-point-outline',
          url: 'https://strategizeit.maps.arcgis.com/apps/mapviewer/index.html?webmap=4cbab88dcb58465d9c67af7fa99b0771',
        },
        {
          id: 'periodic-monitoring-form',
          title: 'Periodic Monitoring Form',
          icon: 'solar:document-text-outline',
          url: 'https://survey123.arcgis.com/share/661005f2707e4698a20eceec07627489?portalUrl=https://Strategizeit.maps.arcgis.com',
        },
        {
          id: 'periodic-monitoring-dashboard',
          title: 'Periodic Monitoring Dashboard',
          icon: 'solar:chart-outline',
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/aba2c6248a424420b6d49fc09eb3bbad#locale=ar',
        },
        {
          id: 'producers-resources',
          title: 'Producers and Resources Management',
          icon: 'solar:database-outline',
          url: 'http://45.94.209.181:8050/web/#cids=1&action=menu',
        },
      ],
    },
    {
      id: 'during-crisis',
      title: 'During Crisis',
      icon: 'solar:alert-circle-outline',
      subTabs: [
        {
          id: 'disaster-monitoring',
          title: 'Disaster Monitoring Application',
          icon: 'solar:monitor-outline',
          url: 'https://experience.arcgis.com/experience/9d76912c30004b539b854c1ca3cc14b4',
        },
        {
          id: 'event-monitoring-form',
          title: 'Event Monitoring Form',
          icon: 'solar:document-add-outline',
          url: 'https://survey123.arcgis.com/share/cbed0203691d430d9187c3a8693e7194?portalUrl=https://Strategizeit.maps.arcgis.com',
        },
        {
          id: 'event-monitoring-app',
          title: 'Event Monitoring Application',
          icon: 'solar:chart-square-outline',
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/1b99acb792014e7b9c98ba29629a0240',
        },
        {
          id: 'damage-assessment-form',
          title: 'Damage Assessment Form',
          icon: 'solar:document-damage-outline',
          url: 'https://survey123.arcgis.com/share/8d9c139be57a4426b5c23b8ff5c74256?portalUrl=https://Strategizeit.maps.arcgis.com',
        },
        {
          id: 'damage-assessment-dashboard',
          title: 'Damage Assessment Dashboard',
          icon: 'solar:chart-square-outline',
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/01e145ddc3f54887aecb434c1f064840',
        },
      ],
    },
    {
      id: 'post-crisis',
      title: 'Post-Crisis',
      icon: 'solar:analytics-outline',
      subTabs: [
        {
          id: 'post-crisis-analytics',
          title: 'Post-Crisis Analytics',
          icon: 'solar:chart-outline',
          url: 'https://strategizeit.maps.arcgis.com/apps/dashboards/a1e614ea0651479a8aebed9a1242f52d',
        },
      ],
    },
  ];

  return (
    <div className="col-xxl-12">
      <div className="card p-0 overflow-hidden position-relative radius-12 h-100">
        <div className="card-header py-16 px-24 bg-base border border-end-0 border-start-0 border-top-0">
          <h6 className="text-lg mb-0">Crisis Monitoring and Analytics</h6>
        </div>
        <div className="card-body p-24 pt-10">
          {/* Primary Tabs for Pre-Crisis, During Crisis, and Post-Crisis */}
          <ul
            className="nav button-tab nav-pills mb-16"
            id="crisis-tabs"
            role="tablist"
          >
            {tabs.map((tab, index) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  className={`nav-link d-flex align-items-center gap-2 fw-semibold text-primary-light radius-4 px-16 py-10 ${index === 0 ? 'active' : ''}`}
                  id={`pills-${tab.id}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#pills-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`pills-${tab.id}`}
                  aria-selected={index === 0}
                >
                  <Icon icon={tab.icon} className="text-xl" />
                  <span className="line-height-1">{tab.title}</span>
                </button>
              </li>
            ))}
          </ul>
          {/* Primary Tab Content */}
          <div className="tab-content" id="crisis-tabsContent">
            {tabs.map((mainTab, index) => (
              <div
                className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                id={`pills-${mainTab.id}`}
                role="tabpanel"
                aria-labelledby={`pills-${mainTab.id}-tab`}
                tabIndex={0}
                key={mainTab.id}
              >
                {/* Secondary Tabs for SubTabs */}
                <ul
                  className="nav button-tab nav-pills mb-16 flex-wrap"
                  id={`subtabs-${mainTab.id}`}
                  role="tablist"
                >
                  {mainTab.subTabs.map((subTab, subIndex) => (
                    <li className="nav-item" role="presentation" key={subTab.id}>
                      <button
                        className={`nav-link d-flex align-items-center gap-2 fw-semibold text-primary-light radius-4 px-16 py-10 ${subIndex === 0 ? 'active' : ''} ${subTab.url ? '' : 'disabled'}`}
                        id={`pills-${subTab.id}-tab`}
                        data-bs-toggle={subTab.url ? 'pill' : ''}
                        data-bs-target={subTab.url ? `#pills-${subTab.id}` : ''}
                        type="button"
                        role="tab"
                        aria-controls={subTab.url ? `pills-${subTab.id}` : ''}
                        aria-selected={subIndex === 0 && subTab.url}
                        disabled={!subTab.url}
                      >
                        <Icon icon={subTab.icon} className="text-xl" />
                        <span className="line-height-1">{subTab.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {/* Secondary Tab Content */}
                <div className="tab-content" id={`subtabs-${mainTab.id}-content`}>
                  {mainTab.subTabs.map((subTab, subIndex) => (
                    <div
                      className={`tab-pane fade ${subIndex === 0 ? 'show active' : ''}`}
                      id={`pills-${subTab.id}`}
                      role="tabpanel"
                      aria-labelledby={`pills-${subTab.id}-tab`}
                      tabIndex={0}
                      key={subTab.id}
                    >
                      {subTab.url ? (
                        <iframe
                          src={subTab.url}
                          title={subTab.title}
                          className="w-100"
                          allow="camera; microphone; geolocation"
                          style={{ height: 'calc(100vh - 250px)', border: 'none' }}
                          allowFullScreen
                          sandbox="allow-same-origin allow-scripts allow-popups allow-forms" // عشان تدعم الـ scripts والـ forms
                        />
                      ) : (
                        <div className="text-center text-secondary-light p-24">
                          <p>No URL provided for {subTab.title}. Please contact the administrator for the correct link.</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonTabsTwo;



