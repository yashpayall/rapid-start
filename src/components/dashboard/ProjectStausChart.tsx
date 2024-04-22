import ReactApexCharts from "react-apexcharts";

export default function ProjectStausChart() {
  const chartSeries = [
    {
      name: "Earnings",
      data: [10000, 25000, 18000, 7000, 30000, 34000, 45000, 45000],
    },
  ];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "stepline",
      width: 4,
      colors: ["#FD7B39"],
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      stepSize: 10000,
      labels: {
        show: false,
      },
    },
    fill: {
      colors: ["#FF9F43"],
      opacity: 0.1,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexCharts
          className="lg:max-w-[352px] w-full"
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={200}
        />
      </div>
    </div>
  );
}
