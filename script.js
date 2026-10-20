const projects = [
  {
    title: "HireFlow Placement Portal",
    description: "A web-based role-based placement portal built for IIT Madras MAD-I featuring admin approvals, company drive management, student applications, resume uploads, and status tracking.",
    technologies: ["Python", "Flask", "Jinja2", "Bootstrap 5", "SQLite", "Flask-SQLAlchemy"],
    github: "https://github.com/afreensumai64/",
    demo: "https://example.com/",
    image: "HireFlow Portal"
  },
  {
    title: "Handwritten Digit Recognition",
    description: "A deep learning project that recognizes handwritten digits (0–9) using a Convolutional Neural Network (CNN) trained on the MNIST dataset with 99%+ accuracy and a Streamlit web interface.",
    technologies: ["Python", "TensorFlow/Keras", "NumPy", "Pandas", "Streamlit"],
    github: "https://github.com/afreensumai64/Handwritten-Digit-Recognition",
    demo: "https://example.com/",
    image: "Digit Recognition"
  },
  {
    title: "Car Price Prediction",
    description: "Created a machine learning model to estimate vehicle prices based on features such as brand, model, fuel type, and vehicle specifications.",
    technologies: ["Python", "XGBoost", "Pandas", "Numpy"],
    github: "https://github.com/afreensumai64/Car-Price-Prediction",
    demo: "https://example.com/",
    image: "Car Price Prediction"
  }
];

const projectsList = document.getElementById('projectsList');
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__link');
const contactForm = document.getElementById('contactForm');

// Render project cards from the projects array
function renderProjects() {
  projectsList.innerHTML = projects.map(project => {
    const techList = project.technologies.map(tech => `<li>${tech}</li>`).join('');
    return `
      <article class="project-card card">
        <div class="project__content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul class="project__tech">${techList}</ul>
          <div class="project__links">
            <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
            <a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
        <div class="project__media">${project.image}</div>
      </article>
    `;
  }).join('');
}


function toggleMobileMenu() {
  nav.classList.toggle('open');
}

function closeMobileMenu() {
  nav.classList.remove('open');
}

function highlightActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const scrollPosition = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);
    if (link) {
      if (scrollPosition >= top && scrollPosition < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

function handleContactSubmit(event) {
  event.preventDefault();
  alert('Thank you! Your message has been submitted. Replace this stub with a backend service when ready.');
  contactForm.reset();
}

window.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  highlightActiveNav();
});

window.addEventListener('scroll', highlightActiveNav);

mobileToggle.addEventListener('click', toggleMobileMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

contactForm.addEventListener('submit', handleContactSubmit);