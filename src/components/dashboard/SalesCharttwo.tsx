import ReactApexCharts from "react-apexcharts";

export default function SalesCharttwo() {
  const chartSeries = [
    {
      name: "Series 1",
      data: [45, 35, 35, 40, 35, 35],
    },
    {
      name: "Series 2",
      data: [25, 45, 25, 25, 25, 25],
    },
  ];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },

      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 0,
      fill: {
        colors: ["#A565FF", "#60A9FF"],
      },
    },
    fill: {
      opacity: 1,
      colors: ["#A565FF", "#60A9FF"],
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      stepSize: 20,
      labels: {
        show: false,
      },
    },
  };
  return (
    <div>
      <div id="chart">
        <ReactApexCharts
          className="w-full lg:max-w-[250px]"
          options={chartOptions}
          series={chartSeries}
          type="radar"
          height={294}
        />
      </div>
    </div>
  );
}
