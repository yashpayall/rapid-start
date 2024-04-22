import ReactApexCharts from "react-apexcharts";

export default function SalesChart() {
  const chartSeries = [
    {
      name: "STOCK ABC",
      data: [18, 11, 31, 17, 21],
    },
  ];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 80,
      width: 304,
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

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#81E492"],
    },
    fill: {
      colors: ["#28C76F"],
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "datetime",
      categories: [2004, 2008, 2012, 2016, 2020],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexCharts
          options={chartOptions}
          series={chartSeries}
          height={80}
          type="area"
        />
      </div>
    </div>
  );
}
