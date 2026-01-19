import Chart from "react-apexcharts";

const TotalStockColumnChart = () => {
  const series = [
    {
      name: "Stock",
      data: [600, 450, 300, 400, 500],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 6,
      },
    },
    colors: ["rgba(143, 12, 0, 1)"], // 👈 column color
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Bullet", "Basmati", "Jasmine", "Sona Masuri", "Bamboo"],
      labels: { rotate: -45 },
    },
    yaxis: {
      title: { text: "Selling Quantity" },
      labels: {
        style: {
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 600, // 👈 font weight
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} bags`,
      },
    },
  };

  return (
    <div className="">
      <h5>Highest Selling Brands</h5>
      <Chart options={options} series={series} type="bar" height={320} />
    </div>
  );
};

export default TotalStockColumnChart;
