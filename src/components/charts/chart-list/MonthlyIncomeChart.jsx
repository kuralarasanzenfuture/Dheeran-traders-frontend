import Chart from "react-apexcharts";

const MonthlyIncomeChart = () => {
  const series = [
    {
      name: "Income",
      data: [45000, 52000, 48000, 61000, 70000, 68000, 75000, 82000, 79000, 88000, 92000, 98000],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      labels: {
        formatter: (val) => `₹${val.toLocaleString()}`,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `₹${val.toLocaleString()}`,
      },
    },
    colors: ["#d4483b"], // 👈 column color
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
  };

  return (
    <div>
      <h6 className="mb-3 fw-semibold text-dark">Monthly Income</h6>

      <Chart options={options} series={series} type="area" height={320} />
    </div>
  );
};

export default MonthlyIncomeChart;
