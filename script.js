/* Reset & fonts */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Fixed Background: beige → tan */
.fixed-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #f5f2e7, #d8cbb7);
    z-index: -1;
}

/* Navigation bar: elegant, transparent, right-aligned */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 15px 30px;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.navbar ul {
    display: flex;
    list-style: none;
}

.navbar li {
    margin-left: 25px;
}

.navbar a {
    text-decoration: none;
    color: #013220;
    font-weight: 600;
    font-size: 1rem;
    transition: 0.3s;
}

.navbar a:hover {
    color: #4caf50;
}

/* General section styling */
.section {
    padding: 80px 40px;
    max-width: 900px;
    margin: 40px auto;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.05);
    line-height: 1.6;
}

/* Alternating section backgrounds */
.hero-section { 
    background-color: rgba(1,50,32,0.9); 
    color: #fdf6e3; 
    position: relative;
    height: 60vh;
    display: flex;
    align-items: flex-end;
    padding-bottom: 60px;
    border-radius: 15px;
}

.hero-text {
    max-width: 800px;
    margin-left: 20px;
    margin-right: 20px;
}

.hero-text h1 {
    font-size: 3rem;
    color: #fdf6e3;
    line-height: 1.2;
}

.hero-text h3 {
    font-size: 1.3rem;
    margin-top: 15px;
}

.tagline {
    margin-top: 20px;
    font-style: italic;
}

/* Alternate section colors */
.about-section { background-color: rgba(224, 245, 224, 0.85); color: #013220; }
.skills-section { background-color: rgba(255, 255, 255, 0.9); color: #013220; }
.experience-section { background-color: rgba(1, 50, 32, 0.85); color: #fdf6e3; }
.education-section { background-color: rgba(207, 244, 207, 0.85); color: #013220; }
.contact-section { background-color: rgba(255, 255, 255, 0.9); color: #013220; }

/* Section headings */
.section h2 {
    font-size: 2em;
    margin-bottom: 20px;
    color: inherit;
    border-bottom: 3px solid #4caf50;
    display: inline-block;
    padding-bottom: 5px;
}

/* Job experience */
.job {
    margin-bottom: 30px;
}

/* Lists */
ul {
    margin-left: 20px;
}

/* Links */
a { color: inherit; }
a:hover { text-decoration: underline; }

/* Footer & Rocket */
.footer {
    position: relative;
    width: 100%;
    height: 200px;
}

.rocket-container {
    position: relative;
    width: 100%;
    height: 150px;
    margin-top: 50px;
}

.rocket {
    width: 50px;
    height: 100px;
    background: #013220;
    clip-path: polygon(50% 0%, 70% 20%, 70% 100%, 30% 100%, 30% 20%);
    box-shadow: 0 0 10px #4caf50;
    transition: transform 0.05s linear;
    position: absolute;
    bottom: 0;
    z-index: 200;
}

/* Bullets */
.bullet {
    position: absolute;
    width: 6px;
    height: 12px;
    background: #4caf50;
    border-radius: 3px;
    z-index: 200;
}
