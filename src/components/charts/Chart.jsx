import MonthlyIncomeChart from "./chart-list/MonthlyIncomeChart";
import TotalStockColumnChart from "./chart-list/TotalStockChart";
import './chart.css'

export const Chart = () => {
  return (
    <>
      <div className="chart_list">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="chart_box">
              <MonthlyIncomeChart />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chart_box">
              <TotalStockColumnChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
