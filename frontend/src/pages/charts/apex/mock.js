var generateDayWiseTimeSeries = function (baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};

function generateHeatMapData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

export default {
  line: {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
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
      },
      colors: ["#FEB04A"],
    },
  },
  area: {
    series: [
      {
        name: "South",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60,
          },
        ),
      },
      {
        name: "North",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 20,
          },
        ),
      },
      {
        name: "Central",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 15,
          },
        ),
      },
    ],
    options: {
      chart: {
        stacked: true,
      },
      colors: ["#007BC6", "#3BBF97", "#E9ECEF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      xaxis: {
        type: "datetime",
      },
    },
  },
  column: {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      colors: ["#12B4DE"],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
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
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        labels: {
          style: {
            offsetY: -18,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        align: "left",
      },
    },
  },
  bar: {
    series: [
      {
        name: "Males",
        data: [
          0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
          4.5, 3.9, 3.5, 3,
        ],
      },
      {
        name: "Females",
        data: [
          -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
          -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
        ],
      },
    ],
    options: {
      chart: {
        stacked: true,
      },
      colors: ["#F5695A", "#007BC6"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      grid: {
        xaxis: {
          showLines: false,
        },
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%";
          },
        },
      },
      title: {
        text: "Mauritius population pyramid 2011",
      },
      xaxis: {
        categories: [
          "85+",
          "80-84",
          "75-79",
          "70-74",
          "65-69",
          "60-64",
          "55-59",
          "50-54",
          "45-49",
          "40-44",
          "35-39",
          "30-34",
          "25-29",
          "20-24",
          "15-19",
          "10-14",
          "5-9",
          "0-4",
        ],
        title: {
          text: "Percent",
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%";
          },
        },
      },
    },
  },
  mixed: {
    series: [
      {
        name: "Income",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: "Cashflow",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
      },
      {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#005792", "#1A86D0", "#21AE8C"],
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "XYZ - Stock Analysis (2009 - 2016)",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#547fff",
          },
          labels: {
            style: {
              color: "#547fff",
            },
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#547fff",
            },
          },
          tooltip: {
            enabled: true,
          },
        },

        {
          seriesName: "Income",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#3abf94",
          },
          labels: {
            style: {
              color: "#3abf94",
            },
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: "#3abf94",
            },
          },
        },
        {
          seriesName: "Revenue",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#005792",
          },
          labels: {
            style: {
              color: "#005792",
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#005792",
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  },
  pie: {
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      stroke: {
        show: false,
        width: 0,
      },
      colors: ["#1A86D0", "#21AE8C", "#FDA700", "#FD5F00", "#005792"],
    },
  },
  donut: {
    series: [44, 55, 41, 17, 15],
    options: {
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      stroke: {
        show: false,
        width: 0,
      },
      colors: ["#1A86D0", "#21AE8C", "#FDA700", "#FD5F00", "#005792"],
    },
  },
  radial: {
    series: [76, 67, 61, 90],
    options: {
      labels: ["January", "February", "March", "April", "May", "June"],
      title: {
        text: "Basic Radial Chart",
      },
      colors: ["#005792", "#21AE8C", "#FDA700", "#FD5F00"],
    },
  },
  heatmap: {
    series: [
      {
        name: "Jan",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Feb",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Mar",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Apr",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "May",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Jun",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Jul",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Aug",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
      {
        name: "Sep",
        data: generateHeatMapData(20, {
          min: -30,
          max: 55,
        }),
      },
    ],
    options: {
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,

          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                name: "low",
                color: "#547fff",
              },
              {
                from: 6,
                to: 20,
                name: "medium",
                color: "#1A86D0",
              },
              {
                from: 21,
                to: 45,
                name: "high",
                color: "#FDA700",
              },
              {
                from: 46,
                to: 55,
                name: "extreme",
                color: "#FD5F00",
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },

      title: {
        text: "HeatMap Chart with Color Range",
      },
    },
  },
};
