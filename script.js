const profile = {
  name: "曹豪洋",
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

const projectGrid = document.getElementById("project-grid");
const linkGrid = document.getElementById("link-grid");

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
