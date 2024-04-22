import ReactApexCharts from "react-apexcharts";

export default function SalesOverviewChart() {
  const chartSeries = [
    {
      name: "Sales",
      data: [190, 220, 205, 350, 360, 430, 400, 300, 330, 230, 370, 410],
    },
    {
      name: "Sales",
      data: [500, 180, 230, 280, 210, 220, 205, 250, 200, 120, 260, 120],
    },
  ];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#8C39FF", "#6D758F"],
    },
    fill: {
      colors: ["#8C39FF", "#6D758F"],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                colors: "#BEC2D0",
              },
            },
          },
          yaxis: {
            stepSize: 100,
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                colors: "#BEC2D0",
              },
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          xaxis: {
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                colors: "#BEC2D0",
              },
            },
          },
          yaxis: {
            stepSize: 100,
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                colors: "#BEC2D0",
              },
            },
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          xaxis: {
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                colors: "#BEC2D0",
              },
            },
          },
          yaxis: {
            stepSize: 100,
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                colors: "#BEC2D0",
              },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          xaxis: {
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "10px",
                colors: "#BEC2D0",
              },
            },
          },
          yaxis: {
            stepSize: 100,
            labels: {
              style: {
                fontFamily: "Manrope ,sans-serif",
                fontWeight: 400,
                fontSize: "10px",
                colors: "#BEC2D0",
              },
            },
          },
        },
      },
    ],
    xaxis: {
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontFamily: "Manrope ,sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          colors: "#BEC2D0",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      stepSize: 100,
      labels: {
        style: {
          fontFamily: "Manrope ,sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          colors: "#BEC2D0",
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexCharts
          className="w-full"
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={255}
        />
      </div>
    </div>
  );
}
