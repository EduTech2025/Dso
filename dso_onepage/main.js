// ==========================================
// DATA
// ==========================================

const teamData = [
    {
        name: "Harsh Kumar",
        role: "High King",
        image: "/assets/home/harsh.jpeg",
        socials: {
            linkedin: "https://www.linkedin.com/in/harsh-kumar-b6485826b/",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Himanshu Swami",
        role: "Code Wizard",
        image: "/assets/home/himanshu.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/himanshu-swami-02ab7729b",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Karan Negi",
        role: "Digital Sorcerer",
        image: "/assets/home/karan.png",
        socials: {
            linkedin: "https://www.linkedin.com/in/knegi/",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Sanjeev Kumar",
        role:  "Realm Keeper",
        image: "/assets/home/sanjeev.jpeg",
        socials: {
            linkedin: "https://www.linkedin.com/in/sanjeev-kumar-1617a4228/",
            github: "#",
            instagram: "#"
        }
    }
];

const servicesData = {
    "Web Development": [
        {
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
            title: "Frontend Development",
            desc: "Modern, responsive interfaces designed to be fast, clean, and easy to use.",
            points: [
                "Mobile-first responsive layouts",
                "Clean and accessible UI design",
                "Optimized performance and speed",
                "Cross-browser compatibility"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
            title: "Backend Development",
            desc: "Robust backend systems that manage data, security, and business logic.",
            points: [
                "Scalable server architecture",
                "Secure authentication systems",
                "Efficient database management",
                "API-driven backend services"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
            title: "API & Cloud Services",
            desc: "Cloud-ready APIs that connect platforms and services seamlessly.",
            points: [
                "REST & third-party API integration",
                "Cloud deployment & monitoring",
                "High availability infrastructure",
                "Scalable hosting solutions"
            ]
        }
    ],
    "App Development": [
        {
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
            title: "Mobile App Design",
            desc: "User-focused mobile designs that feel intuitive and smooth.",
            points: [
                "Clear user flows",
                "Modern UI patterns",
                "Consistent design language",
                "Optimized for touch interaction"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800",
            title: "Cross-Platform Apps",
            desc: "Single codebase apps that run smoothly on Android and iOS.",
            points: [
                "Faster development cycles",
                "Lower maintenance cost",
                "Near-native performance",
                "Scalable app structure"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
            title: "Application Security",
            desc: "Security-first app development to protect users and data.",
            points: [
                "Encrypted data handling",
                "Secure authentication flows",
                "Protection against vulnerabilities",
                "Regular security testing"
            ]
        }
    ],
    "WordPress": [
        {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
            title: "Custom WordPress Websites",
            desc: "Tailored WordPress websites built for flexibility and speed.",
            points: [
                "Custom themes from scratch",
                "SEO-friendly structure",
                "Easy content management",
                "Scalable site architecture"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
            title: "Plugin Development",
            desc: "Lightweight plugins designed for performance and stability.",
            points: [
                "Custom business logic",
                "Secure coding practices",
                "Clean WordPress integration",
                "Easy updates and maintenance"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800",
            title: "Performance Optimization",
            desc: "Improving speed, SEO, and reliability of WordPress sites.",
            points: [
                "Core Web Vitals improvement",
                "Caching and CDN setup",
                "Database optimization",
                "Security hardening"
            ]
        }
    ],
    "AI Agents": [
        {
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            title: "Automation Agents",
            desc: "AI agents that automate repetitive business tasks.",
            points: [
                "Workflow automation",
                "System integrations",
                "Reduced manual effort",
                "Consistent execution"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
            title: "Decision Support Systems",
            desc: "AI systems that analyze data to support smarter decisions.",
            points: [
                "Real-time analytics",
                "Predictive insights",
                "Custom decision logic",
                "Dashboard integration"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800",
            title: "Learning AI Models",
            desc: "AI models that improve automatically with usage.",
            points: [
                "Model training pipelines",
                "Continuous learning",
                "Data monitoring",
                "Scalable AI infrastructure"
            ]
        }
    ],
    "Shopify": [
        {
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
            title: "Shopify Store Development",
            desc: "Professional Shopify stores built to convert visitors into customers.",
            points: [
                "Custom storefront design",
                "Mobile-first shopping experience",
                "Secure checkout setup",
                "Product management"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
            title: "App & Payment Integration",
            desc: "Seamless integration with apps and payment gateways.",
            points: [
                "Payment gateway setup",
                "Third-party app integration",
                "Custom Shopify apps",
                "Automation workflows"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            title: "Store Optimization",
            desc: "Optimizing Shopify stores for speed and conversion.",
            points: [
                "Performance improvements",
                "UX enhancements",
                "Analytics setup",
                "Conversion tracking"
            ]
        }
    ],
    "CRM": [
        {
            image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800",
            title: "Custom CRM Systems",
            desc: "CRM platforms designed around your business workflow.",
            points: [
                "Lead and customer tracking",
                "Role-based access control",
                "Custom workflows",
                "Tool integrations"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            title: "Workflow Automation",
            desc: "Automated processes that reduce manual work.",
            points: [
                "Sales automation",
                "Support workflows",
                "Trigger-based actions",
                "Efficiency improvements"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
            title: "Reports & Analytics",
            desc: "Clear insights to support data-driven decisions.",
            points: [
                "Custom dashboards",
                "Performance metrics",
                "User activity tracking",
                "Actionable reports"
            ]
        }
    ],
    "System Designs": [
        {
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
            title: "System Architecture",
            desc: "Scalable and stable system foundations for complex applications.",
            points: [
                "High availability design",
                "Load balancing strategies",
                "Modular system structure",
                "Technology planning"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
            title: "Service Orchestration",
            desc: "Managing communication across services and platforms.",
            points: [
                "Microservices coordination",
                "Workflow orchestration",
                "Monitoring and logging",
                "Failure handling"
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
            title: "Security & Reliability",
            desc: "Secure and fault-tolerant system designs.",
            points: [
                "Data encryption",
                "Backup and recovery",
                "Access control",
                "System monitoring"
            ]
        }
    ]
};

const projectsData = [
    {
        image: "/assets/project/gsecurity.png",
        sector: "Web Development",
        status: "Active",
        title: "G Security & Training",
        desc: "A professional business website designed to present security services clearly and build trust with clients.",
        link: "https://gsecurityandtraining.co.uk/"
    },
    {
        image: "/assets/project/aushmika.png",
        sector: "Shopify",
        status: "Active",
        title: "Aushmika Jewellers",
        desc: "A premium Shopify store crafted to showcase jewellery collections with an elegant design and secure purchasing.",
        link: "https://www.aushmikajewels.com/"
    },
    {
        image: "/assets/project/annpurna.png",
        sector: "WordPress",
        status: "Active",
        title: "Annapurna Regency",
        desc: "A hospitality website designed to present hotel services, room details, and booking information in a clean layout.",
        link: "https://hotelannpurnaregency.in/"
    },
    {
        image: "/assets/project/ddassociate.png",
        sector: "Web Development",
        status: "Active",
        title: "DD Associates",
        desc: "A professional business website developed to highlight services, company values, and build trust through modern interface.",
        link: "https://ddassociate.in/"
    },
    {
        image: "/assets/project/tekdat.png",
        sector: "System Design",
        status: "Active",
        title: "TekDat Solutions",
        desc: "A system-focused website created to present technology solutions and enterprise capabilities with clarity.",
        link: "https://systracker.infinityfree.me/"
    },
    {
        image: "/assets/project/urbenstate.png",
        sector: "Web Development",
        status: "Active",
        title: "Urban State Capital",
        desc: "A corporate website created to highlight financial services, company vision, and investor-focused information.",
        link: "https://www.urbanshiftcapitalpvtltd.com/"
    },
     {
        image: "/assets/project/larsa.png",
        sector: "Shopify",
        status: "Active",
        title: "Larsa Organics",
        desc: "A modern Shopify store built to showcase organic products with a smooth shopping experience and clean design.",
        link: "https://laarsaorganic.com/"
    }
];

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderTeam() {
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = teamData.map((member, i) => `
        <div class="team-card group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <!-- Image Container with Overlay Effects -->
            <div class="relative aspect-[4/5] overflow-hidden">
                <img src="${member.image}" 
                     alt="${member.name}" 
                     class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                
                <!-- Animated Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <!-- Shimmer Effect on Hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <!-- Role Badge - Top Right -->
                <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    ${member.role.split(' ')[0]}
                </div>
            </div>

            <!-- Content Section -->
            <div class="relative p-6 -mt-20">
                <!-- Glass Card for Text -->
                <div class="relative bg-slate-800/60 backdrop-blur-xl rounded-xl p-5 border border-white/5 group-hover:bg-slate-800/80 transition-colors duration-500">
                    <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">${member.name}</h3>
                    <p class="text-slate-400 text-sm font-medium mb-4 tracking-wide uppercase">${member.role}</p>
                    
                    <!-- Animated Line -->
                    <div class="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mb-4 group-hover:w-full transition-all duration-500"></div>
                    
                    <!-- Social Links with Enhanced Hover -->
                    <div class="flex gap-3">
                        ${member.socials.linkedin ? `
                            <a href="${member.socials.linkedin}" 
                               target="_blank" 
                               class="group/icon relative w-10 h-10 rounded-lg bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 overflow-hidden transition-all duration-300 hover:border-primary hover:text-white hover:-translate-y-1">
                                <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                                <svg class="relative w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        ` : ''}
                        ${member.socials.github ? `
                            <a href="${member.socials.github}" 
                               target="_blank" 
                               class="group/icon relative w-10 h-10 rounded-lg bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 overflow-hidden transition-all duration-300 hover:border-primary hover:text-white hover:-translate-y-1">
                                <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                                <svg class="relative w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        ` : ''}
                        ${member.socials.twitter ? `
                            <a href="${member.socials.twitter}" 
                               target="_blank" 
                               class="group/icon relative w-10 h-10 rounded-lg bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 overflow-hidden transition-all duration-300 hover:border-primary hover:text-white hover:-translate-y-1">
                                <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                                <svg class="relative w-5 h-5 transition-transform duration-300 group-hover/icon:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <!-- Decorative Corner Accent -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl pointer-events-none"></div>
        </div>
    `).join('');
}

function renderServices(service) {
    const container = document.getElementById('serviceCards');
    const data = servicesData[service];

    container.style.opacity = '0';
    setTimeout(() => {
        container.innerHTML = data.map(item => `
            <div class="group rounded-2xl bg-surface-light border border-slate-700 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div class="aspect-video overflow-hidden">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                </div>
                <div class="p-6">
                    <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">${item.title}</h3>
                    <p class="text-slate-400 text-sm mb-4">${item.desc}</p>
                    <ul class="space-y-2">
                        ${item.points.map(point => `
                            <li class="flex items-center gap-2 text-sm text-slate-500">
                                <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                ${point}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
        container.style.opacity = '1';
    }, 150);
}

function renderProjects() {
    const track = document.getElementById('projectsTrack');
    track.innerHTML = projectsData.map(project => `
        <a href="${project.link}" target="_blank" class="project-card group block rounded-2xl bg-surface-light border border-slate-700 overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div class="aspect-video relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                
            </div>
            <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                    <span class="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">${project.sector}</span>
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        ${project.status}
                    </span>
                
                </div>
                <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-slate-400 text-sm line-clamp-2">${project.desc}</p>
                <div class="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </a>
    `).join('');
}

// ==========================================
// EVENT LISTENERS
// ==========================================

// Mobile Menu
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Service Tabs
document.querySelectorAll('.service-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.service-tab').forEach(t => {
            t.classList.remove('active-tab');
            t.classList.remove('bg-primary', 'border-primary', 'text-white');
            t.classList.add('border-slate-700', 'text-slate-400');
        });
        tab.classList.add('active-tab');
        tab.classList.remove('border-slate-700', 'text-slate-400');
        tab.classList.add('bg-primary', 'border-primary', 'text-white');
        renderServices(tab.dataset.service);
    });
});

// Project Carousel
document.getElementById('projectPrev')?.addEventListener('click', () => {
    document.getElementById('projectsTrack').scrollBy({ left: -400, behavior: 'smooth' });
});

document.getElementById('projectNext')?.addEventListener('click', () => {
    document.getElementById('projectsTrack').scrollBy({ left: 400, behavior: 'smooth' });
});

// Dropdown
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('selectedService').textContent = item.textContent;
        document.getElementById('selectedService').classList.remove('text-slate-400');
        document.getElementById('selectedService').classList.add('text-white');
        document.getElementById('serviceInput').value = item.textContent;
        dropdownMenu.classList.add('hidden');
    });
});

document.addEventListener('click', () => {
    dropdownMenu?.classList.add('hidden');
});

// Terminal
const terminalOverlay = document.getElementById('terminalOverlay');
const terminalBody = document.getElementById('terminalBody');
const terminalInput = document.getElementById('terminalInput');

document.getElementById('openTerminal')?.addEventListener('click', () => {
    terminalOverlay.classList.remove('hidden');
    terminalInput.focus();
});

document.getElementById('closeTerminal')?.addEventListener('click', () => {
    terminalOverlay.classList.add('hidden');
});

document.getElementById('openTerminalMobile')?.addEventListener('click', () => {
    terminalOverlay.classList.remove('hidden');
    terminalInput.focus();
});

function appendToTerminal(text, className = 'text-slate-300') {
    const div = document.createElement('div');
    div.className = className;
    div.textContent = text;
    terminalBody.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function handleCommand(cmd) {
    const command = cmd.toLowerCase().trim();

    switch (command) {
        case 'help':
            return `Available commands:
  help       - Show this help message
  services   - List our services
  projects   - View project count
  contact    - Get contact info
  about      - About De Silent Order
  clear      - Clear terminal`;

        case 'services':
            return `Our Services:
  • Web Development
  • App Development  
  • AI Agents
  • WordPress
  • Shopify
  • CRM
  • System Design`;

        case 'projects':
            return `Total Projects: ${projectsData.length}
Active Deployments: ${projectsData.filter(p => p.status === 'Active').length}`;

        case 'contact':
            return `Contact Information:
  Email: desilentorder@gmail.com
  Location: Sector 4/7, Gurgaon`;

        case 'about':
            return `De Silent Order v2.0
Mission: Build in Silence
Status: Operational
Uptime: 99.9%`;

        case 'clear':
            terminalBody.innerHTML = '';
            return '';

        default:
            return null;
    }
}

terminalInput?.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        const cmd = terminalInput.value;
        appendToTerminal(`$ ${cmd}`, 'text-primary');
        terminalInput.value = '';

        const response = handleCommand(cmd);
        if (response !== null) {
            if (response) appendToTerminal(response);
        } else {
            appendToTerminal('Loading...', 'text-slate-500');
            try {
                const res = await fetch('https://backend-coral-eight-82.vercel.app/ask-gemini', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: cmd })
                });
                const data = await res.json();
                terminalBody.lastChild.remove();
                appendToTerminal(data.reply || 'No response from AI.');
            } catch (err) {
                terminalBody.lastChild.remove();
                appendToTerminal('Error: Unable to connect to AI service.', 'text-red-400');
            }
        }
    }
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="spinner mx-auto"></div>';

    const formData = {
        name: form.querySelector('input[type="text"]').value,
        phone: form.querySelector('input[type="tel"]').value,
        email: form.querySelector('input[type="email"]').value,
        service: document.getElementById('serviceInput').value,
        message: form.querySelector('textarea').value
    };

    try {
        const res = await fetch('https://backend-coral-eight-82.vercel.app/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (data.success) {
            showPopup('success', 'Message Sent', 'Your request has been submitted successfully. We will contact you soon.');
            form.reset();
            document.getElementById('selectedService').textContent = 'Select a service';
            document.getElementById('selectedService').classList.add('text-slate-400');
            document.getElementById('serviceInput').value = '';
        } else {
            showPopup('error', 'Error', 'Failed to send message. Please try again.');
        }
    } catch (err) {
        showPopup('error', 'Error', 'Network error. Please check your connection.');
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
});

// Popup
function showPopup(type, title, message) {
    const overlay = document.getElementById('popupOverlay');
    const content = document.getElementById('popupContent');
    const icon = document.getElementById('popupIcon');
    const titleEl = document.getElementById('popupTitle');
    const messageEl = document.getElementById('popupMessage');

    if (type === 'success') {
        icon.innerHTML = '<svg class="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
        icon.className = 'w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center';
    } else {
        icon.innerHTML = '<svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
        icon.className = 'w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center';
    }

    titleEl.textContent = title;
    messageEl.textContent = message;

    overlay.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    const content = document.getElementById('popupContent');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300);
}

window.closePopup = closePopup;

// Close modal on outside click
document.getElementById('popupOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closePopup();
});

document.getElementById('terminalOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) terminalOverlay.classList.add('hidden');
});

// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderServices('Web Development');
    renderProjects();

    // Set first service tab as active
    const firstTab = document.querySelector('.service-tab');
    if (firstTab) {
        firstTab.classList.add('bg-primary', 'border-primary', 'text-white');
        firstTab.classList.remove('border-slate-700', 'text-slate-400');
    }
});


const cursor = document.getElementById('cursor');
const ring = cursor.querySelector('.cursor-ring');
let x = 0, y = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

function animate() {
    ringX += (x - ringX) * 0.12;
    ringY += (y - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animate);
}
animate();

document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});


// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const suffix = counter.dataset.suffix || '';
                animateCounter(counter, target, suffix);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate counter from 0 to target
function animateCounter(element, target, suffix) {
    const duration = 2000; // 2 seconds
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * (target - start) + start);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    requestAnimationFrame(update);
}

// Observe the stats container
document.addEventListener('DOMContentLoaded', () => {
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        counterObserver.observe(statsContainer);
    }
});