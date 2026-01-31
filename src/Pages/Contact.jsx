const Contact = () => {
  return (
    <div className="container">
      <div className="center">
        <div className="form">
          <form class="form-container">
            <h2 class="form-title">Contact Us</h2>

            <div class="form-group">
              <label class="form-label">Name</label>
              <br />
              <input
                type="text"
                class="form-input"
                placeholder="Enter your name"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Email</label>
              <br />
              <input
                type="email"
                class="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Message</label>
              <br />
              <textarea
                class="form-textarea"
                placeholder="Write your message"
              ></textarea>
            </div>

            <div class="form-button">
                <button type="submit">
                    Submit
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
