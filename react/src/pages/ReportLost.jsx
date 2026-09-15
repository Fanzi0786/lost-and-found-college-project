import { useState } from "react";

function ReportLost() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    e.target.reset();
  };

  return (
    <div className="form-page">
      <div className="form-box">
        <div className="page-heading">
          <p>INVERTIS UNIVERSITY</p>
          <h1>Report Lost Item</h1>
          <span>Provide details about the item you lost.</span>
        </div>

        {submitted && (
          <div className="success-message">
            Lost item reported successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Item Name</label>
          <input type="text" placeholder="Example: Black Wallet" required />

          <label>Location Lost</label>
          <input type="text" placeholder="Example: Central Library" required />

          <label>Date</label>
          <input type="date" required />

          <label>Description</label>
          <textarea
            placeholder="Describe the item..."
            rows="5"
            required
          ></textarea>

          <button className="primary-btn">Submit Lost Item</button>
        </form>
      </div>
    </div>
  );
}

export default ReportLost;
