"use client";
import useReactApexChart from "@/hook/useReactApexChart";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const UsersOverviewOne = () => {
  const reportsData = [
    { label: 'done', value: 150, color: '#28a745' },
    { label: 'In Progress', value: 85, color: '#ffc107' },
    { label: 'New', value: 120, color: '#007bff' },
    { label: 'Refuse', value: 25, color: '#dc3545' }
  ];

  const donutChartSeries = reportsData.map(item => item.value);
  
  const donutChartOptions = {
    chart: {
      type: 'donut',
      fontFamily: 'Inter, sans-serif'
    },
    labels: reportsData.map(item => item.label),
    colors: reportsData.map(item => item.color),
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        colors: ['#fff']
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        }
      }
    }]
  };

  return (
    <div className='col-xxl-4 col-xl-4'>
      <div className='card h-100 radius-8 border-0 overflow-hidden'>
        <div className='card-body p-24'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between mb-3'>
            <h6 className='mb-2 fw-bold text-lg'>Number of Reports</h6>
          </div>
          
          <ReactApexChart
            options={donutChartOptions}
            series={donutChartSeries}
            type='donut'
            height={264}
          />
          
          <ul className='d-flex flex-wrap align-items-center justify-content-between'>
            {reportsData.map((item, index) => (
              <li key={index} className='d-flex align-items-center gap-2'>
                <span 
                  className='w-12-px h-12-px radius-2' 
                  style={{ backgroundColor: item.color }}
                />
                <span className='text-secondary-light text-sm fw-normal'>
                  {item.label}:
                  <span className='text-primary-light fw-semibold ms-1'>
                    {item.value}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersOverviewOne;