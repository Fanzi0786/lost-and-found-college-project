function LostItems() {
  const items = [
    {
      name: "Black Wallet",
      location: "Central Library",
      date: "12 September 2026",
      description: "Black leather wallet with student cards.",
  
    },
    {
      name: "Blue Backpack",
      location: "Academic Block",
      date: "11 September 2026",
      description: "Blue backpack containing notebooks.",
    
    },
    {
      name: "College ID Card",
      location: "Canteen",
      date: "10 September 2026",
      studentId: "BC202411",
      description: "Invertis University student ID card.",
    },
  ];

  const handleViewDetails = (item) => {
    alert(
      `LOST ITEM DETAILS\n\n` +
        `Item: ${item.name}\n` +
        `Location: ${item.location}\n` +
        `Date: ${item.date}\n` +
        `Student ID: ${item.studentId}\n` +
        `Description: ${item.description}`,
    );
  };

  return (
    <div className="items-page">
      <div className="page-heading">
        <p>INVERTIS UNIVERSITY</p>
        <h1>Lost Items</h1>
        <span>Browse items reported lost on campus.</span>
      </div>

      <div className="items-grid">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-content">
              <span className="item-status">LOST</span>

              <h3>{item.name}</h3>

              <p>
                <strong>Location:</strong> {item.location}
              </p>

              <p>
                <strong>Date:</strong> {item.date}
              </p>

              <p>
                <strong>Student ID:</strong> {item.studentId}
              </p>

              <p>{item.description}</p>

              <button
                className="card-btn"
                onClick={() => handleViewDetails(item)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LostItems;
