import ReactApexCharts from "react-apexcharts";

export default function EarningReports() {
  const chartSeries = [
    {
      name: "Earnings",
      data: [28000, 10000, 45000, 38000, 15000, 30000, 35000, 28000, 8000],
    },
  ];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 1920,
        options: {
          bar: {
            columnWidth: 28,
          },
        },
      },
      {
        breakpoint: 1536,
        options: {
          bar: {
            columnWidth: 28,
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          bar: {
            columnWidth: 28,
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          bar: {
            columnWidth: 20,
          },
          dataLabels: {
            enabled: false,
            formatter: function (value: number) {
              return value / 1000 + "k";
            },
            style: {
              fontFamily: "Manrope ,sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              colors: ["#BEC2D0"],
            },
          },
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
            labels: {
              formatter: function (value: number) {
                return value / 1000 + "k";
              },
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
          bar: {
            columnWidth: 15,
          },
          dataLabels: {
            enabled: false,
            formatter: function (value: number) {
              return value / 1000 + "k";
            },
            style: {
              fontFamily: "Manrope ,sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              colors: ["#BEC2D0"],
            },
          },
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
            labels: {
              formatter: function (value: number) {
                return value / 1000 + "k";
              },
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
          bar: {
            columnWidth: 10,
          },
          dataLabels: {
            enabled: false,
            formatter: function (value: number) {
              return value / 1000 + "k";
            },
            style: {
              fontFamily: "Manrope ,sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              colors: ["#BEC2D0"],
            },
          },
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
            labels: {
              formatter: function (value: number) {
                return value / 1000 + "k";
              },
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
          bar: {
            columnWidth: 7,
          },
          dataLabels: {
            enabled: false,
            formatter: function (value: number) {
              return value / 1000 + "k";
            },
            style: {
              fontFamily: "Manrope ,sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              colors: ["#BEC2D0"],
            },
          },
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
            labels: {
              formatter: function (value: number) {
                return value / 1000 + "k";
              },
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        dataLabels: {
          total: {
            enabled: true,
            formatter: function (value: string) {
              // @ts-ignore
              return value / 1000 + "k";
            },
            style: {
              fontFamily: "Manrope ,sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#6D758F",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (value: number) {
        return value / 1000 + "k";
      },
      style: {
        fontFamily: "Manrope ,sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        colors: ["#BEC2D0"],
      },
    },
    xaxis: {
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
      ],
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
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      colors: ["#A565FF"],
      opacity: 1,
    },
    yaxis: {
      stepSize: 10000,
      labels: {
        formatter: function (value: number) {
          return value / 1000 + "k";
        },
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
    <div className="flex items-center justify-center w-full mx-auto">
      <div id="chart" className="lg:max-w-[704px] w-full">
        <ReactApexCharts
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={200}
        />
      </div>
    </div>
  );
}
