function FoundItems() {
  const items = [
    {
      name: "Wireless Earbuds",
      location: "Canteen",
      date: "12 September 2026",
      description: "White wireless earbuds in a charging case.",
    },
    {
      name: "Black Notebook",
      location: "Classroom 204",
      date: "11 September 2026",
      description: "Black notebook with handwritten notes.",
    },
    {
      name: "Water Bottle",
      location: "Sports Ground",
      date: "10 September 2026",
      description: "Blue stainless steel water bottle.",
    },
  ];

  return (
    <div className="items-page">
      <div className="page-heading">
        <p>INVERTIS UNIVERSITY</p>
        <h1>Found Items</h1>
        <span>Browse items reported found on campus.</span>
      </div>

      <div className="items-grid">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-content">
              <span className="found-status">FOUND</span>

              <h3>{item.name}</h3>

              <p>
                <strong>Location:</strong> {item.location}
              </p>

              <p>
                <strong>Date:</strong> {item.date}
              </p>

              <p>{item.description}</p>

              <button className="card-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundItems;
