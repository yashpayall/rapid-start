import ReactApexCharts from "react-apexcharts";

export default function RevenuGrothChart() {
  const chartSeries = [
    {
      name: "Inflation",
      data: [3, 5, 7, 9, 11, 9, 7],
    },
  ];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 171,
      sparkline: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "10px",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#81E492"],
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: "#A5A2AD ",
          fontSize: "13px",
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 400,
        },
      },
      categories: ["M", "T", "W", "T", "F", "S", "S"],
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
          className="max-md:w-full w-[130px]"
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={171}
        />
      </div>
    </div>
  );
}
