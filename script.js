const projects = [
  {
    title: "Orbit IQ",
    description: "Developed a machine learning system to predict potential space debris collisions and support safer satellite operations through data-driven risk analysis.",
    technologies: ["Python", "Scikit-learn", "FastAPI", "Next.js", "TypeScript"],
    github: "https://github.com/",
    demo: "https://example.com/",
    image: "Orbit IQ"
  },
  {
    title: "Parkinson's Gait & Tremor Analysis",
    description: "Built an AI-powered healthcare analytics project that uses computer vision and machine learning to analyze gait patterns and tremors for Parkinson's disease assessment.",
    technologies: ["Python","Scikit-learn", "OpenCV", "Mediapipe", "Streamlit"],
    github: "https://github.com/afreensumai64/Parkinson-Gait-and-Tremor-Analysis-System",
    demo: "https://example.com/",
    image: "Parkinson's Analysis"
  },
  {
    title: "Car Price Prediction",
    description: "Created a machine learning model to estimate vehicle prices based on features such as brand, model, fuel type, and vehicle specifications.",
    technologies: ["Python", "XGBoost", "Pandas", "Numpys"],
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

// Add new project objects inside the projects array above.
// Add new certification cards in index.html inside the certifications section.
// Add new experience timeline items in index.html inside the experience section.
