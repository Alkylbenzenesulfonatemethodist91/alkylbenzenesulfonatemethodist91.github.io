const profile = {
  name: "曹豪洋",
  focus: "Deep RL, planning, motion control, and VLA",
  location: "UCAS / State Key Lab of Computer Science",
  status: "haoyangc2001@163.com",
  rotatingCards: [
    {
      title: "Deep RL",
      summary: "PPO, DDPG, TD3, SAC, hierarchical policies, and safety-aware decision planning."
    },
    {
      title: "Robot Learning",
      summary: "RL-based decision planning and motion control for manipulation and embodied systems."
    },
    {
      title: "VLA",
      summary: "Vision-language-action model foundations including ViT, CLIP, Transformer, OpenVLA, and Pi-style policies."
    },
    {
      title: "AI Coding",
      summary: "Reusable LLM and Agent engineering workflows built around RAG, MCP, Skills, and automation harnesses."
    }
  ],
  projects: [
    {
      title: "Robotics and Motion Planning",
      description:
        "Robot-facing projects covering manipulation, cuRobo demos, SDK driver work, and level-constrained planning.",
      tags: ["Robotics", "Manipulation", "Planning"],
      repos: [
        ["tashan_Manipulation", "https://github.com/haoyangc2001/tashan_Manipulation"],
        ["curoboV2_demo", "https://github.com/haoyangc2001/curoboV2_demo"],
        ["SR5_SDK_Driver", "https://github.com/haoyangc2001/SR5_SDK_Driver"],
        ["levelConstrainedPlanning", "https://github.com/haoyangc2001/levelConstrainedPlanning"]
      ]
    },
    {
      title: "Hierarchical Reach-Avoid RL",
      description:
        "A focused cluster around Go2 hierarchical reinforcement learning, reach-avoid objectives, min-cost variants, constrained PPO, and reward shaping.",
      tags: ["Reinforcement Learning", "Go2", "Safety"],
      repos: [
        ["Go2HierarchicalReachAvoidRL", "https://github.com/haoyangc2001/Go2HierarchicalReachAvoidRL"],
        ["Go2HierarchicalMiniCostReachAvoid", "https://github.com/haoyangc2001/Go2HierarchicalMiniCostReachAvoid"],
        ["Go2HierarchicalConstrainedPPORL", "https://github.com/haoyangc2001/Go2HierarchicalConstrainedPPORL"],
        ["Go2HierarchicalRewardShapingRL", "https://github.com/haoyangc2001/Go2HierarchicalRewardShapingRL"]
      ]
    },
    {
      title: "Optimization and Decision Systems",
      description:
        "Planning and optimization repositories that suggest work on route planning, two-stage optimization, and production-style decision algorithms.",
      tags: ["Optimization", "Routing", "Planning"],
      repos: [
        ["AGCTwoStageOptimization", "https://github.com/haoyangc2001/AGCTwoStageOptimization"],
        ["PSS-OptCut", "https://github.com/haoyangc2001/PSS-OptCut"],
        ["WeatherVehicleRoutePlan_RL", "https://github.com/haoyangc2001/WeatherVehicleRoutePlan_RL"],
        ["HDMCRA", "https://github.com/haoyangc2001/HDMCRA"]
      ]
    },
    {
      title: "AI, Timing, and Perception",
      description:
        "Supporting projects around algorithm evolution, core timing, applied AI, and generated-image detection.",
      tags: ["AI", "Computer Vision", "Tools"],
      repos: [
        ["openEvolveCX", "https://github.com/haoyangc2001/openEvolveCX"],
        ["FAIA", "https://github.com/haoyangc2001/FAIA"],
        ["coretiming", "https://github.com/haoyangc2001/coretiming"],
        ["EfficientNet_FPN_generateImageDetection", "https://github.com/haoyangc2001/EfficientNet_FPN_generateImageDetection"]
      ]
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
      title: "All Repositories",
      description: "Complete public repository list, including the latest updates.",
      href: "https://github.com/haoyangc2001?tab=repositories",
      label: "Browse repos"
    },
    {
      title: "Personal Website Source",
      description: "Source code for this GitHub Pages homepage.",
      href: "https://github.com/haoyangc2001/haoyangc2001.github.io",
      label: "View source"
    },
    {
      title: "Email",
      description: "Academic and collaboration contact.",
      href: "mailto:haoyangc2001@163.com",
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
  const repoLinks = project.repos
    .map(
      ([name, href]) => `
        <a class="repo-link" href="${href}" target="_blank" rel="noreferrer">
          <span>${name}</span>
          <span aria-hidden="true">open</span>
        </a>
      `
    )
    .join("");

  article.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-meta">
      ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <div class="repo-list">${repoLinks}</div>
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
