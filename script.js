const projects = [
    {
        name: "Vehicle Diary",
        description: "A mobile application for tracking vehicle maintenance and expenses built with Swift",
        language: "Swift",
        stars: 2,
        issues: 12,
        url: "https://github.com/cool-element-com/vehicle-diary",
        icon: "car"
    },
    {
        name: "Solar MC",
        description: "Solar energy monitoring and management system",
        language: null,
        stars: 1,
        issues: 0,
        url: "https://github.com/cool-element-com/solar-mc",
        icon: "solar"
    },
    {
        name: "MMO-1",
        description: "Multiplayer online game development project",
        language: null,
        stars: 0,
        issues: 7,
        url: "https://github.com/cool-element-com/mmo-1",
        icon: "game"
    },
    {
        name: "Better",
        description: "Development tools and utilities for improved workflow",
        language: null,
        stars: 0,
        issues: 0,
        url: "https://github.com/cool-element-com/better",
        icon: "tools"
    }
];

function getBlueprintIcon(iconType) {
    const icons = {
        car: `<svg class="blueprint-icon" viewBox="0 0 100 100">
            <rect x="15" y="45" width="70" height="30" rx="5"/>
            <rect x="25" y="35" width="50" height="15" rx="3"/>
            <circle cx="30" cy="75" r="8"/>
            <circle cx="70" cy="75" r="8"/>
            <rect x="20" y="50" width="15" height="8" rx="2"/>
            <rect x="65" y="50" width="15" height="8" rx="2"/>
            <line x1="15" y1="60" x2="85" y2="60"/>
            <line x1="35" y1="35" x2="65" y2="35"/>
        </svg>`,
        solar: `<svg class="blueprint-icon" viewBox="0 0 100 100">
            <rect x="20" y="30" width="60" height="40" rx="3"/>
            <line x1="30" y1="30" x2="30" y2="70"/>
            <line x1="40" y1="30" x2="40" y2="70"/>
            <line x1="50" y1="30" x2="50" y2="70"/>
            <line x1="60" y1="30" x2="60" y2="70"/>
            <line x1="70" y1="30" x2="70" y2="70"/>
            <line x1="20" y1="40" x2="80" y2="40"/>
            <line x1="20" y1="50" x2="80" y2="50"/>
            <line x1="20" y1="60" x2="80" y2="60"/>
            <circle cx="50" cy="15" r="6"/>
            <line x1="50" y1="5" x2="50" y2="8"/>
            <line x1="65" y1="15" x2="62" y2="15"/>
            <line x1="35" y1="15" x2="38" y2="15"/>
        </svg>`,
        game: `<svg class="blueprint-icon" viewBox="0 0 100 100">
            <rect x="25" y="35" width="50" height="30" rx="8"/>
            <circle cx="40" cy="45" r="4"/>
            <circle cx="60" cy="45" r="4"/>
            <rect x="35" y="55" width="8" height="3" rx="1"/>
            <rect x="55" y="55" width="8" height="3" rx="1"/>
            <line x1="30" y1="25" x2="30" y2="35"/>
            <line x1="35" y1="25" x2="35" y2="35"/>
            <line x1="65" y1="25" x2="65" y2="35"/>
            <line x1="70" y1="25" x2="70" y2="35"/>
            <rect x="20" y="70" width="60" height="15" rx="3"/>
        </svg>`,
        tools: `<svg class="blueprint-icon" viewBox="0 0 100 100">
            <path d="M25 20 L25 80 M35 20 L35 80"/>
            <rect x="20" y="30" width="20" height="15" rx="2"/>
            <rect x="20" y="55" width="20" height="15" rx="2"/>
            <circle cx="65" cy="35" r="12"/>
            <path d="M55 45 L75 25 M55 25 L75 45"/>
            <rect x="55" y="65" width="30" height="8" rx="2"/>
            <circle cx="60" cy="75" r="3"/>
            <circle cx="80" cy="75" r="3"/>
        </svg>`,
        web: `<svg class="blueprint-icon" viewBox="0 0 100 100">
            <rect x="15" y="25" width="70" height="50" rx="3"/>
            <rect x="15" y="25" width="70" height="12" rx="3"/>
            <circle cx="25" cy="31" r="2"/>
            <circle cx="33" cy="31" r="2"/>
            <circle cx="41" cy="31" r="2"/>
            <line x1="25" y1="45" x2="75" y2="45"/>
            <line x1="25" y1="55" x2="65" y2="55"/>
            <line x1="25" y1="65" x2="55" y2="65"/>
            <rect x="65" y="50" width="15" height="20" rx="2"/>
        </svg>`
    };
    return icons[iconType] || icons.tools;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <a href="${project.url}" target="_blank" class="project-link">
                <div class="project-thumb">
                    ${getBlueprintIcon(project.icon)}
                </div>
                <div class="project-title">${project.name}</div>
                <div class="project-description">${project.description}</div>
                <div class="project-meta">
                    ${project.language ? `<span class="language-tag">${project.language}</span>` : ''}
                    <span>⭐ ${project.stars}</span>
                    <span>🔧 ${project.issues} issues</span>
                </div>
            </a>
        `;
        
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);