import "./stackcard.css";

export const StackCard = () => {
  const stackData = [
    { id: 1, title: "Total Income", count: 112000, icon: "fi fi-tr-coins" },
    { id: 2, title: "Monthly Income", count: 22000, icon: "fi fi-tr-send-money" },
    { id: 3, title: "Total Vendor", count: 20, icon: "fi fi-tr-seller" },
    { id: 4, title: "Total Customers", count: 16, icon: "fi fi-tr-user-bag" },
  ];

  return (
    <div className="stack_details">
      <div className="row gy-4">
        {stackData.map((item) => (
          <div className="col-lg-3 col-6" key={item.id}>
            <div className="stack_card">
              <div className="d-flex justify-content-between gap-2">
                <div className="content">
                  <p className="stack_text">{item.title}</p>
                  <h5 className="stack_title">{item.count}</h5>
                </div>
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
