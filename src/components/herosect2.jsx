var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hacknovate 5</title>
          <link rel="stylesheet" href="styles.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
          {/* Navbar */}
          <nav className="navbar">
            <div className="logo">
              <img src="images/logo.png" alt="Hacknovate Logo" />
            </div>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Event</a></li>
              <li><a href="#">Mentor</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#" className="sponsor-btn">Sponsor Us</a></li>
            </ul>
            <div className="right-logo">
              <span>ABESIT</span>
              <p>Group of Institutions</p>
            </div>
          </nav>
          {/* Hero Section */}
          <header className="hero">
            {/* Left Side: Hero Content */}
            <div className="hero-content">
              <img src="images/logo.png" alt="Hacknovate Five Logo" className="hacknovate-logo" />
              <p className="sponsor-text">Powered by <strong>DIAMANTE BLOCKCHAIN</strong></p>
              <p className="organiser-text">Organised by <strong>ABESIT Group of Institutions</strong></p>
              <button className="discord-btn">
                <i className="fab fa-discord" /> Join Discord
              </button>
            </div>
            {/* Right Side: Banner Section */}
            <section className="banner-section" style={{backgroundColor: '#2c252575'}}>
              <div className="banner-text" id="banner-text">
                <h1>HACKING STARTS NOW!!</h1>
                <p id="current-date" />
                <div className="countdown-timer">
                  <p>Event Starts In:</p>
                  <div id="timer">
                    <span id="days" /> Days 
                    <span id="hours" /> Hours 
                    <span id="minutes" /> Min 
                    <span id="seconds" /> Sec
                  </div>
                </div>
              </div>
            </section>
          </header>
          {/* Footer */}
          er class="footer"&gt;
          <p>Follow Us</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-linkedin" /></a>
            <a href="#"><i className="fab fa-discord" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      );
    }
  });