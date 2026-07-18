const profile = {
  name: "Haoyang Chen",
  focus: "AI systems and engineering",
  location: "Shanghai / UTC+8",
  status: "Available for interesting collaborations",
  rotatingCards: [
    {
      title: "Engineer",
      summary: "Building practical tools with strong visual presence and clear interaction."
    },
    {
      title: "Research-minded",
      summary: "Exploring applied AI, software systems, and product-grade implementation."
    },
    {
      title: "Builder",
      summary: "Turning complex technical work into polished demos, readable interfaces, and useful experiences."
    }
  ],
  projects: [
    {
      title: "GitHub Profile",
      description:
        "Use this card to route visitors to your main GitHub profile, pinned repositories, or contribution graph.",
      href: "https://github.com/haoyangc2001",
      tags: ["GitHub", "Profile", "Open Source"]
    },
    {
      title: "Featured Project",
      description:
        "Replace this with a real repository, demo site, or case study. Keep the description short and concrete.",
      href: "https://github.com/haoyangc2001?tab=repositories",
      tags: ["Repo", "Demo", "Case Study"]
    },
    {
      title: "Writing or Notes",
      description:
        "If you publish posts, lab notes, or technical essays, give them a direct entry point here.",
      href: "https://github.com/haoyangc2001",
      tags: ["Writing", "Notes", "Ideas"]
    },
    {
      title: "Contact Channel",
      description:
        "Use one clean path for people who want to collaborate, hire, or continue a technical conversation.",
      href: "mailto:your-email@example.com",
      tags: ["Email", "Contact", "Collab"]
    }
  ],
  links: [
    {
      title: "GitHub",
      description: "Primary code and repository history.",
      href: "https://github.com/haoyangc2001",
      label: "Open profile"
    },
    {
      title: "LinkedIn",
      description: "Replace with your public professional profile.",
      href: "https://www.linkedin.com/",
      label: "Open LinkedIn"
    },
    {
      title: "Resume",
      description: "Point this to a PDF or another public page.",
      href: "#",
      label: "Add resume link"
    },
    {
      title: "Email",
      description: "Best direct path for serious outreach.",
      href: "mailto:your-email@example.com",
      label: "Send email"
    }
  ]
};

const focusLine = document.getElementById("focus-line");
const locationLine = document.getElementById("location-line");
const statusLine = document.getElementById("status-line");
const rotatingTitle = document.getElementById("rotating-title");
const rotatingSummary = document.getElementById("rotating-summary");
const projectGrid = document.getElementById("project-grid");
const linkGrid = document.getElementById("link-grid");

focusLine.textContent = profile.focus;
locationLine.textContent = profile.location;
statusLine.textContent = profile.status;

profile.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card";
  article.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-meta">
      ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <a class="project-link" href="${project.href}" target="_blank" rel="noreferrer">
      Visit destination
    </a>
  `;
  projectGrid.appendChild(article);
});

profile.links.forEach((link) => {
  const article = document.createElement("article");
  article.className = "link-card";
  article.innerHTML = `
    <h3>${link.title}</h3>
    <p>${link.description}</p>
    <a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>
  `;
  linkGrid.appendChild(article);
});

let cardIndex = 0;

function rotateCard() {
  cardIndex = (cardIndex + 1) % profile.rotatingCards.length;
  const item = profile.rotatingCards[cardIndex];
  rotatingTitle.textContent = item.title;
  rotatingSummary.textContent = item.summary;
}

setInterval(rotateCard, 2600);

const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const starCount = Math.min(140, Math.floor(window.innerWidth / 10));
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.4 + 0.2,
    speed: Math.random() * 0.18 + 0.04,
    alpha: Math.random() * 0.6 + 0.2
  }));
}

function drawStars() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    context.beginPath();
    context.fillStyle = `rgba(170, 224, 255, ${star.alpha})`;
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fill();

    star.y += star.speed;
    if (star.y > canvas.height + 10) {
      star.y = -10;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawStars();
