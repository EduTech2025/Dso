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
    
    grid.innerHTML = teamData.map((member) => `
        <div class="group relative rounded-lg md:rounded-xl overflow-hidden bg-slate-800/40 border border-white/10 hover:border-primary/30 transition-all duration-300">
            
            <!-- Compact Image -->
            <div class="relative aspect-square overflow-hidden">
                <img src="${member.image}" 
                     alt="${member.name}" 
                     class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                
                <!-- Role Badge - Always visible, compact -->
                <div class="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-[9px] font-semibold">
                    ${member.role.split(' ')[0]}
                </div>
            </div>

            <!-- Compact Content Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                <div class="bg-slate-900/90 backdrop-blur-sm rounded-md p-2 border border-white/5">
                    
                    <!-- Name -->
                    <h3 class="text-xs md:text-sm font-bold text-white leading-tight truncate group-hover:text-primary transition-colors">${member.name}</h3>
                    
                    <!-- Role -->
                    <p class="text-[9px] md:text-[10px] text-slate-400 font-medium tracking-wide uppercase truncate mb-1.5">${member.role}</p>
                    
                    <!-- Social Links - Compact -->
                    <div class="flex gap-2">
                        ${renderSocialLinkCompact(member.socials.linkedin, 'linkedin')}
                        ${renderSocialLinkCompact(member.socials.github, 'github')}
                        ${renderSocialLinkCompact(member.socials.twitter, 'twitter')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Helper function for social links
function renderSocialLinkCompact(url, type) {
    if (!url) return '';
    
    const icons = {
        linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
        github: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>',
        twitter: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'
    };
    
    return `
        <a href="${url}" target="_blank" 
           class="w-10 h-10 md:w-10 md:h-10 rounded-lg bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-white hover:bg-primary/20 transition-all duration-200 hover:scale-110">
            <svg class="w-5 h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                ${icons[type]}
            </svg>
        </a>
    `;
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
    initProjectsModal(projectsData);

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



// Project Model

// Modal Management
const modal = document.getElementById('projectsModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContent = document.getElementById('modalContent');
const openModalBtn = document.getElementById('openProjectsModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const searchInput = document.getElementById('projectSearch');
const modalGrid = document.getElementById('modalProjectsGrid');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');

let allProjects = []; // Will hold your projects data

// Initialize modal with projects data
function initProjectsModal(projectsData) {
    allProjects = projectsData;
    renderModalProjects(allProjects);
}

// Render projects in modal grid
function renderModalProjects(projects) {
    if (projects.length === 0) {
        modalGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        noResults.classList.add('flex');
        resultsCount.textContent = 'No projects found';
        return;
    }
    
    noResults.classList.add('hidden');
    noResults.classList.remove('flex');
    resultsCount.textContent = `Showing ${projects.length} project${projects.length !== 1 ? 's' : ''}`;
    
    modalGrid.innerHTML = projects.map(project => `
        <a href="${project.link}" target="_blank" class="group block rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden hover:border-primary/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            <div class="aspect-video relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-5">
                <div class="flex items-center gap-2 mb-3 flex-wrap">
                    <span class="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">${project.sector}</span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        ${project.status}
                    </span>
                </div>
                <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">${project.title}</h3>
                <p class="text-slate-400 text-sm line-clamp-2 mb-4">${project.desc}</p>
                
                <div class="flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <span class="text-xs text-slate-500 font-mono">2025-2026</span>
                    <div class="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        View
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

// Search functionality
function filterProjects(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    if (!lowerQuery) {
        renderModalProjects(allProjects);
        return;
    }
    
    const filtered = allProjects.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) ||
        project.desc.toLowerCase().includes(lowerQuery) ||
        project.sector.toLowerCase().includes(lowerQuery) ||
        project.status.toLowerCase().includes(lowerQuery)
    );
    
    renderModalProjects(filtered);
}

// Modal Controls
function openModal() {
    modal.classList.remove('hidden');
    // Trigger animation
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
    searchInput.focus();
}

function closeModal() {
    modalBackdrop.classList.add('opacity-0');
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        searchInput.value = '';
        filterProjects('');
        document.body.style.overflow = '';
    }, 300);
}

// Event Listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Search input with debounce
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        filterProjects(e.target.value);
    }, 150);
});

// header hero section
// header hero section
const codeSnippet = `const awakenTheGiant = async () => {
  const mind = new InfinitePotential();
  await mind.discipline();
  
  return {
    vision: 'crystal',
    hustle: 'relentless',
    legacy: 'eternal'
  };
};

// In silence we build
// In shadows we rise
awakenTheGiant().then(giant => {
  console.log('🔥 Unstoppable');
  console.log('💎 Diamonds from pressure');
  console.log('👑 Crown yourself');
});`;

// Color map for different parts
const colorMap = [
    { start: 0, end: 5, color: '#c586c0' },      // const
    { start: 6, end: 19, color: '#dcdcaa' },     // awakenTheGiant
    { start: 20, end: 24, color: '#c586c0' },    // async
    { start: 32, end: 37, color: '#c586c0' },    // const
    { start: 38, end: 42, color: '#9cdcfe' },    // mind
    { start: 46, end: 63, color: '#4ec9b0' },    // InfinitePotential
    { start: 81, end: 86, color: '#c586c0' },    // await
    { start: 87, end: 91, color: '#9cdcfe' },    // mind
    { start: 92, end: 102, color: '#dcdcaa' },   // discipline
    { start: 121, end: 127, color: '#9cdcfe' },  // vision
    { start: 137, end: 144, color: '#9cdcfe' },  // hustle
    { start: 156, end: 162, color: '#9cdcfe' },  // legacy
    { start: 188, end: 212, color: '#6a9955' },  // // In silence we build
    { start: 213, end: 236, color: '#6a9955' },  // // In shadows we rise
    { start: 237, end: 250, color: '#dcdcaa' },  // awakenTheGiant
    { start: 258, end: 262, color: '#dcdcaa' },  // then
    { start: 263, end: 268, color: '#9cdcfe' },  // giant
    { start: 282, end: 289, color: '#dcdcaa' },  // console
    { start: 290, end: 293, color: '#dcdcaa' },  // log
    { start: 295, end: 309, color: '#ce9178' },  // '🔥 Unstoppable'
    { start: 324, end: 331, color: '#dcdcaa' },  // console
    { start: 332, end: 335, color: '#dcdcaa' },  // log
    { start: 337, end: 361, color: '#ce9178' },  // '💎 Diamonds...'
    { start: 376, end: 383, color: '#dcdcaa' },  // console
    { start: 384, end: 387, color: '#dcdcaa' },  // log
    { start: 389, end: 405, color: '#ce9178' },  // '👑 Crown...'
];

function getCharColor(index) {
    for (let rule of colorMap) {
        if (index >= rule.start && index < rule.end) {
            return rule.color;
        }
    }
    return '#d4d4d4'; // default white/gray
}

let codeIndex = 0;
const codeElement = document.getElementById('typewriter-code');

function typeCode() {
    if (codeIndex < codeSnippet.length) {
        const char = codeSnippet.charAt(codeIndex);
        const color = getCharColor(codeIndex);
        
        // Create span with color for each character
        const span = document.createElement('span');
        span.style.color = color;
        span.textContent = char;
        
        codeElement.appendChild(span);
        codeIndex++;
        
        // Random typing speed
        const delay = Math.random() * 30 + 20;
        setTimeout(typeCode, delay);
    } else {
        // Pause then restart
        setTimeout(() => {
            codeElement.innerHTML = '';
            codeIndex = 0;
            typeCode();
        }, 4000);
    }
}

// Start
setTimeout(typeCode, 500);


// home page video popup 

// First Visit Video Popup Logic
const VIDEO_SHOWN_KEY = 'deSilentOrderVideoShown';
const SESSION_KEY = 'deSilentOrderSession';

function showVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    const videoPopupContent = document.getElementById('videoPopupContent');
    const video = document.getElementById('introVideo');
    
    videoPopup.classList.remove('hidden');
    videoPopup.classList.add('flex');
    
    // Animate in
    setTimeout(() => {
        videoPopupContent.classList.remove('scale-95', 'opacity-0');
        videoPopupContent.classList.add('scale-100', 'opacity-100');
        video.play().catch(e => console.log('Autoplay prevented:', e));
    }, 100);
}

function closeVideoPopup() {
    const videoPopup = document.getElementById('videoPopup');
    const videoPopupContent = document.getElementById('videoPopupContent');
    const video = document.getElementById('introVideo');
    
    video.pause();
    
    videoPopupContent.classList.remove('scale-100', 'opacity-100');
    videoPopupContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        videoPopup.classList.add('hidden');
        videoPopup.classList.remove('flex');
    }, 300);
}

function checkAndShowVideo() {
    const currentSession = sessionStorage.getItem(SESSION_KEY);
    const videoShownInSession = sessionStorage.getItem(VIDEO_SHOWN_KEY);
    
    // Check if this is a new session (user closed tab and came back)
    const isNewSession = !currentSession;
    
    if (isNewSession && !videoShownInSession) {
        // New session, show video
        setTimeout(showVideoPopup, 1000); // 1 second delay after page load
        sessionStorage.setItem(SESSION_KEY, 'active');
        sessionStorage.setItem(VIDEO_SHOWN_KEY, 'true');
    } else if (!currentSession) {
        // Returning user but same session storage persists (rare case)
        sessionStorage.setItem(SESSION_KEY, 'active');
    }
}

// Initialize video popup check
document.addEventListener('DOMContentLoaded', checkAndShowVideo);

// Close on backdrop click
document.getElementById('videoPopup')?.addEventListener('click', (e) => {
    if (e.target.id === 'videoPopup') {
        closeVideoPopup();
    }
});

// Close on video end
document.getElementById('introVideo')?.addEventListener('ended', closeVideoPopup);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const videoPopup = document.getElementById('videoPopup');
        if (!videoPopup?.classList.contains('hidden')) {
            closeVideoPopup();
        }
    }
});



// Video Section 
// Video Analytics Section Logic - Responsive Version
let growthChart;
let isVideoPlaying = false;
let isMuted = false;

function initVideoAnalytics() {
    initCounters();
    initGrowthChart();
    setupVideoControls();
}

function setupVideoControls() {
    const video = document.getElementById('analyticsVideo');
    const overlay = document.getElementById('playOverlay');
    
    if (!video || !overlay) return;
    
    // Handle native controls interaction
    video.addEventListener('play', () => {
        isVideoPlaying = true;
        overlay.classList.add('opacity-0', 'pointer-events-none');
        updatePlayButton();
    });
    
    video.addEventListener('pause', () => {
        isVideoPlaying = false;
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        updatePlayButton();
    });
    
    // Mobile touch optimization
    video.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            toggleVideo();
        }
    });
}

function updatePlayButton() {
    const overlay = document.getElementById('playOverlay');
    const btn = overlay.querySelector('svg');
    if (isVideoPlaying) {
        btn.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    } else {
        btn.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
}

function toggleVideo() {
    const video = document.getElementById('analyticsVideo');
    if (!video) return;
    
    if (isVideoPlaying) {
        video.pause();
    } else {
        // Try autoplay with sound first, fallback to muted
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                video.muted = true;
                isMuted = true;
                updateVolumeIcon();
                video.play();
            });
        }
    }
}

function toggleMute() {
    const video = document.getElementById('analyticsVideo');
    if (!video) return;
    
    isMuted = !isMuted;
    video.muted = isMuted;
    updateVolumeIcon();
}

function updateVolumeIcon() {
    const icon = document.getElementById('volumeIcon');
    if (!icon) return;
    
    if (isMuted) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>';
    }
}

function toggleFullscreen() {
    const video = document.getElementById('analyticsVideo');
    if (!video) return;
    
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

// Animated Counters
function initCounters() {
    const counters = [
        { id: 'clientCounter', target: 47, suffix: '', duration: 2000 },
        { id: 'engagementCounter', target: 94, suffix: '%', duration: 2500 },
        { id: 'deliveryCounter', target: 156, suffix: '', duration: 2200 },
        { id: 'satisfactionCounter', target: 4.9, suffix: '', duration: 2000, decimals: 1 }
    ];

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => animateCounter(counter));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const section = document.getElementById('videoAnalytics');
    if (section) observer.observe(section);
}

function animateCounter({ id, target, suffix, duration, decimals = 0 }) {
    const element = document.getElementById(id);
    if (!element) return;
    
    let start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (target - start) * easeOutQuart;
        
        element.textContent = (decimals > 0 ? current.toFixed(decimals) : Math.floor(current)) + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    requestAnimationFrame(update);
}

// Growth Chart with Responsive Options
function initGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const textColor = 'rgba(255, 255, 255, 0.6)';
    const gridColor = 'rgba(255, 255, 255, 0.05)';

    const chartConfig = {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'New Clients',
                    data: [12, 19, 15, 25, 22, 30, 35, 42, 38, 45, 52, 47],
                    borderColor: 'rgba(52, 211, 153, 0.8)',
                    backgroundColor: 'rgba(52, 211, 153, 0.1)',
                    borderWidth: isMobile ? 1.5 : 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(52, 211, 153, 1)',
                    pointBorderColor: 'rgba(0, 0, 0, 0.8)',
                    pointBorderWidth: 2,
                    pointRadius: isMobile ? 2 : 4,
                    pointHoverRadius: isMobile ? 4 : 6
                },
                {
                    label: 'Retention',
                    data: [8, 12, 18, 20, 24, 28, 32, 36, 40, 44, 48, 50],
                    borderColor: 'rgba(96, 165, 250, 0.8)',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    borderWidth: isMobile ? 1.5 : 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(96, 165, 250, 1)',
                    pointBorderColor: 'rgba(0, 0, 0, 0.8)',
                    pointBorderWidth: 2,
                    pointRadius: isMobile ? 2 : 3,
                    pointHoverRadius: isMobile ? 4 : 5
                },
                {
                    label: 'Referrals',
                    data: [5, 8, 12, 15, 18, 22, 26, 30, 28, 35, 40, 38],
                    borderColor: 'rgba(192, 132, 252, 0.8)',
                    backgroundColor: 'rgba(192, 132, 252, 0.1)',
                    borderWidth: isMobile ? 1.5 : 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(192, 132, 252, 1)',
                    pointBorderColor: 'rgba(0, 0, 0, 0.8)',
                    pointBorderWidth: 2,
                    pointRadius: isMobile ? 2 : 3,
                    pointHoverRadius: isMobile ? 4 : 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: 'rgba(255, 255, 255, 0.9)',
                    bodyColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: isMobile ? 8 : 12,
                    displayColors: true,
                    usePointStyle: true,
                    titleFont: {
                        size: isMobile ? 11 : 13,
                        family: "'Space Grotesk', sans-serif"
                    },
                    bodyFont: {
                        size: isMobile ? 10 : 12,
                        family: "'Space Grotesk', sans-serif"
                    },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + ' clients';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor,
                        drawBorder: false,
                        tickLength: 0
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            size: isMobile ? 9 : 11,
                            family: "'Space Grotesk', sans-serif"
                        },
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: isMobile ? 6 : 12
                    }
                },
                y: {
                    grid: {
                        color: gridColor,
                        drawBorder: false
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            size: isMobile ? 9 : 11,
                            family: "'Space Grotesk', sans-serif"
                        },
                        padding: isMobile ? 4 : 8,
                        callback: function(value) {
                            return value;
                        }
                    },
                    beginAtZero: true
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };

    growthChart = new Chart(ctx, chartConfig);

    // Handle resize
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth < 768;
        if (growthChart) {
            growthChart.options.scales.x.ticks.font.size = newIsMobile ? 9 : 11;
            growthChart.options.scales.y.ticks.font.size = newIsMobile ? 9 : 11;
            growthChart.options.scales.x.ticks.maxTicksLimit = newIsMobile ? 6 : 12;
            growthChart.data.datasets.forEach(dataset => {
                dataset.borderWidth = newIsMobile ? 1.5 : 2;
                dataset.pointRadius = newIsMobile ? 2 : (dataset.label === 'New Clients' ? 4 : 3);
                dataset.pointHoverRadius = newIsMobile ? 4 : (dataset.label === 'New Clients' ? 6 : 5);
            });
            growthChart.update('none');
        }
    });

    // Animate chart on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                growthChart.update();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(ctx);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initVideoAnalytics);