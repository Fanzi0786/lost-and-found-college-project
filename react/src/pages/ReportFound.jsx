import { useState } from "react";

function ReportFound() {
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
          <h1>Report Found Item</h1>
          <span>Help a student find their lost belongings.</span>
        </div>

        {submitted && (
          <div className="success-message">
            Found item reported successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Item Name</label>
          <input type="text" placeholder="Example: Blue Backpack" required />

          <label>Location Found</label>
          <input type="text" placeholder="Example: Canteen" required />

          <label>Date</label>
          <input type="date" required />

          <label>Description</label>
          <textarea
            placeholder="Describe the item..."
            rows="5"
            required
          ></textarea>

          <button className="primary-btn">Submit Found Item</button>
        </form>
      </div>
    </div>
  );
}

export default ReportFound;
