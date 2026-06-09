<<<<<<< HEAD
// ==========================================
// CENTRALIZED PROJECT DATABASE (Local Registry)
// ==========================================
const projectDatabase = {
    "mothers-day-gift": {
        title: "Mother's Day Gift",
        image: "..assets/project-previews/mother's-day.webp",
        link: "../mother's-day/index.html",
        description: `
            <p>A gift I coded overnight for Mother's Day, and my very first independent HTML project! It's a cozy, personal 2-page digital letter featuring custom message reveals that open up when clicked.</p>
            <p>Building this from scratch was what officially sparked my love for self-taught web development.</p>
            <p><strong>Skills Learned & Applied:</strong></p>
            <ul>
                <li>CSS Card Layouts: Figuring out how to style clean, responsive containers.</li>
                <li>SVG Integration: Embedding sharp, scalable graphics directly into the HTML code.</li>
                <li>JavaScript Reveals: Using event triggers to create interactive, hidden text elements.</li>
            </ul>
            <p>Fun fact: I ended up coding until 1 AM because I got totally side-tracked helping a friend deal with an emergency cockroach situation in their room. Duty calls :p</p>
        `
    },
    "bust-duty-tool": {
        title: "Student Council Spreadsheet tool",
        video: "https://www.youtube.com/embed/l5QZjyQfzl0",
        image: null,
        link: "https://docs.google.com/spreadsheets/d/1eHZbqs4rGOHwVlzOCvBsbXG7CKLSJ1szHDKxIeOVcco/copy",
        description: `
            <p>While serving on my school's prefectorial board, I realized that manually checking classrooms and tracking them on a neat list was incredibly boring and tedious. I wondered, "Why don't we have a tool for this?"</p>
            <p>So, I spent my Saturday morning coding a spreadsheet tool that automates the boring stuff and makes the whole tracking process seamless for student leaders.</p>
            <p><strong>Core Concepts Developed:</strong></p>
            <ul>
                <li>Design Thinking: Spotting a real-world friction point in school operations and building a system to fix it.</li>
                <li>User Interface (UI): Making data entry fast, intuitive, and clean for busy students.</li>
                <li>Workflow Optimization: Transforming a slow, manual task into a quick digital process.</li>
            </ul>
            <p>Currently working on pitching it to the council to get it officially adopted!</p>
        `
    },
    "To-do": {
        title: "Chatbot To-do list",
        image: "../assets/project-previews/to-do.webp",
        link: "https://to-do-chatbot-irio.vercel.app/",
        description: `
            <p>An unconventional to-do list web app that fights procrastination by giving you dynamic, motivational (and sometimes strictly "locked-in") messages based on your progress.</p>
            <p>I wanted to move past basic static pages and build a functional app to practice my front-end and back-end logic simultaneously.</p>
            <p><strong>Skills Learned & Applied:</strong></p>
            <ul>
                <li>Interactive CSS: Crafting responsive layouts and dynamic visual feedback.</li>
                <li>Python Backend: Structuring basic database storage to manage tasks smoothly.</li>
                <li>JavaScript Timers: Implementing inactivity trackers to prompt the user in real-time.</li>
            </ul>
        `
    },

    "the-red-rails": {
        title: "The Red Rails",
        image: "../assets/project-previews/red-rails.webp",
        link: "https://cherisheverything.pythonanywhere.com/",
        description: `
            <p>A text-based story game built using Python and HTML! This is my longest and biggest project yet, created as my final capstone for the Harvardx CS50 course where we had complete freedom to build whatever we wanted.</p>
            <p>It's fully equipped with dynamic health systems, custom sound effects, and ambient background music to create an immersive experience.</p>
            <p><strong>Technical & Creative Milestones:</strong></p>
            <ul>
                <li>Advanced CSS: Pushing visual presentation limits to create a clean, moody gaming UI.</li>
                <li>Asynchronous JavaScript: Programming custom typewriter text animations for the dialogue.</li>
                <li>Data Handling: Utilizing JSON to store, organize, and branch complex storylines.</li>
            </ul>
            <p>This project was such a fun ride to build! The story isn't even halfway done yet, so I'm definitely going to keep updating and expanding it. ;_;</p>
        `
    },

    "songwriting": {
        title: "Songs (and music) I wrote!",
        image: "",
        link: "../songwriting.html",
        description: `
            <p>I write songs whenever I feel a strong enough emotion. To be honest, I never considered myself a naturally gifted musician—my electric guitar usually just sits in the corner of my room gathering dust, and I was never the "best" singer when performing in local temple bands or my CCA choir.</p>
            <p>But I still think music is a beautiful way to express yourself, so I decided to step out of my comfort zone and give songwriting a real shot ;)</p>
            <p><strong>Creative Concepts Explored:</strong></p>
            <ul>
                <li>Song Structure: Learning the balance of rhythm, verse-chorus pacing, and musical timing.</li>
                <li>Emotional Storytelling: Exploring how shifting tempos and keys can influence a listener’s mood.</li>
                <li>Creative Expression: Finding a healthy, constructive outlet to process stress and frustration.</li>
            </ul>
            <p>It's a great way to let out pent-up thoughts, and by sharing it, I hope it's something other people can listen to and relate to.</p>
        `
    },

    "storywriting": {
        title: "Novels and Short Stories",
        image: "",
        link: "../storywriting.html",
        description: `
            <p>I have always absolutely loved creative writing. Before this, I actually wrote a full novel called <em>'Whispers of a Ghost'</em>. Admittedly, I rushed through parts of it back then because I was eager to put it on a scholarship application, haha! But the experience taught me so much about long-form plotting.</p>
            <p>Now, I'm applying everything I learned into writing a brand new novel project, currently titled <em>"I do."</em></p>
            <p><strong>Literary & Analytical Skills:</strong></p>
            <ul>
                <li>Narrative Structure: Managing pacing, character arcs, and multi-chapter progression.</li>
                <li>Character Building: Digging deep into character psychology to ensure their motives make sense.</li>
                <li>World-Building: Crafting descriptive settings that help drive the core plot forward.</li>
            </ul>
            <p>I also write romance short stories on the side—feel free to check them out whenever you're looking for a quick read!</p>
        `
    },

    "videos": {
        title: "Videos and Filmmaking(?)",
        image: "",
        link: "../videos.html",
        description: `
            <p>I also love making videos! Even though I'm primarily a science/STEM kid, I’ve always had a massive soft spot for creative arts, and video editing lets me combine both sides of my brain.</p>
            <p>Most of my videos reflect on personal experiences and lessons I've learned along the way, using visual storytelling to connect with an audience.</p>
            <p><strong>Video Production Skills:</strong></p>
            <ul>
                <li>Visual Pacing: Learning how to storyboard, frame shots, and sequence clips to tell a cohesive story.</li>
                <li>Post-Production: Editing audio, balancing soundscapes, and keeping the visual rhythm engaging.</li>
                <li>Relatable Content: Structuring personal reflections in a way that feels genuine and accessible to others.</li>
            </ul>
        `
    },

    "I do": {
        title: "''I do''",
        image: "",
        link: "",
        description: `
            <p><strong>WIP: Writing In Progress!</strong></p>
            <p>A disgraced Crown Princess who believes she's cursed and a rival kingdom's commander torn between duty and love find solace in each other, only to be driven apart by the very kingdoms that define them.</p>
            <p>In the end, she sacrifices herself to save her collapsing kingdom, and they become another tragic story of two people who could have been together in another life.</p>
        `
    },

    "Writer's Block": {
        title: "Writer's Block",
        image: "",
        link: "",
        description: `
            <p><strong>Serious Description:</strong></p>
            <p>After a young researcher clashes with an anonymous critic online, she discovers he's her classmate, and their rivalry gradually turns into an unexpected connection as they help each other grow.</p>
            <br>
            <p><strong>Accurate Description:</strong></p>
            <p>An overcaffeinated top student starts a comment-section war with a guy who insults her research paper. Unfortunately, he's smart, annoyingly attractive, and keeps showing up everywhere.</p>
        `
    }
};

// ==========================================
// 1. DYNAMIC THEME-AWARE BORDER SHAPER
// ==========================================
const applyScrapbookBorders = (element) => {
    if (!element) return;

    const isZineMode = document.body.classList.contains('zine-mode');

    if (!isZineMode) {
        if (element.classList.contains('grid-item') || element.classList.contains('dagger-item')) {
            const sharpCut = () => Math.floor(Math.random() * 5);
            element.style.borderRadius = `${sharpCut()}px ${sharpCut()}px ${sharpCut()}px ${sharpCut()}px`;
        } else {
            element.style.borderRadius = `4px`;
        }
        return;
    }

    const primaryLong = () => Math.floor(Math.random() * (240 - 180) + 180);
    const secondaryShort = () => Math.floor(Math.random() * (25 - 8) + 8);

    const tl_x = primaryLong();
    const tl_y = secondaryShort();
    const tr_x = secondaryShort();
    const tr_y = primaryLong();
    const br_x = primaryLong();
    const br_y = secondaryShort();
    const bl_x = secondaryShort();
    const bl_y = primaryLong();

    element.style.borderRadius = `${tl_x}px ${tr_x}px ${br_x}px ${bl_x}px / ${tl_y}px ${tr_y}px ${br_y}px ${bl_y}px`;
};

// ==========================================
// 2. CUSTOM GREETING WEB COMPONENT
// ==========================================
class Greeting extends HTMLElement {
    connectedCallback() {
        const hours = new Date().getHours();
        const greetings = {
            morning: ["Rise and design.", "Good morning!", "Morning! Ready to build?"],
            afternoon: ["Good afternoon.", "Focus mode: On.", "Design never sleeps."],
            evening: ["Burning the midnight oil?", "Good evening.", "Late night logic."],
        };

        const timeOfDay = hours < 12 ? 'morning' : (hours < 18 ? 'afternoon' : 'evening');
        const list = greetings[timeOfDay];
        const finalGreeting = list[Math.floor(Math.random() * list.length)];

        this.innerHTML = `
            <div class="greeting-container whimsy-card">
                <p class="greeting">${finalGreeting}</p>
            </div>`;

        const container = this.querySelector('.greeting-container');
        applyScrapbookBorders(container);
    }
}
if (!customElements.get('custom-greeting')) {
    customElements.define('custom-greeting', Greeting);
}

// ==========================================
// 3. INITIAL STYLE INITIALIZATION LOOP
// ==========================================
const initializeAllComponentStyles = () => {
    const structuralCards = document.querySelectorAll('.whimsy-card, .grid-item, .dagger-item');
    structuralCards.forEach(card => {
        if (!card.closest('custom-greeting')) {
            applyScrapbookBorders(card);
        }
    });
};

window.addEventListener('DOMContentLoaded', initializeAllComponentStyles);

// ==========================================
// 4. DAGGER CURSOR MECHANICS & MATRICES
// ==========================================
const cursor = document.getElementById("sword");

if (cursor) {
    cursor.style.pointerEvents = "none"; // Safe guard: stops cursor from swallowing click events
}

const positionElement = (e) => {
    if (!cursor) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(-45deg) translate(-30px, -13px)`;

    if (!cursor.classList.contains('is-active')) {
        cursor.classList.add('is-active');
    }

    const target = e.target;
    if (!target) return;

    const isZine = document.body.classList.contains('zine-mode');

    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('dropdown-item') || target.classList.contains('nav-link') || target.closest('.close-btn') || target.closest('.swiper-button-prev') || target.closest('.swiper-button-next') || target.closest('.grid-item') || target.closest('.dagger-item') || target.closest('.vinyl-card') || target.closest('.book-item') || target.closest('.poster-wrapper')) {
        cursor.style.setProperty('--cursor-color', 'var(--accent)');
    }
    else if (target.classList.contains('grid-item') || target.closest('.grid-item') || target.closest('.dagger-item')) {
        cursor.style.setProperty('--cursor-color', isZine ? 'var(--secondary)' : 'var(--main)');
    }
    else if (target.classList.contains('greeting-container') || target.classList.contains('article-2-container') || target.closest('.whimsy-card')) {
        cursor.style.setProperty('--cursor-color', 'var(--white)');
    }
    else if (target.classList.contains('article-1-container') || target.closest('.article-1-container')) {
        cursor.style.setProperty('--cursor-color', 'var(--white)');
    }
    else if (target.classList.contains('article-2-container') || target.closest('.article-2-container')) {
        cursor.style.setProperty('--cursor-color', 'var(--white)');
    }
    else {
        cursor.style.setProperty('--cursor-color', 'var(--main)');
    }
};

window.addEventListener('mousemove', positionElement);

// ==========================================
// 5. INTERFACE MODE TOGGLE INTERCEPTOR (WITH MEMORY)
// ==========================================
const themeToggleCheckbox = document.getElementById('theme-toggle');

const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('site-interface-mode');
    const isZine = (savedTheme === 'zine');

    // 1. Synchronize the system body token array layout
    if (isZine) {
        document.body.classList.add('zine-mode');
    } else {
        document.body.classList.remove('zine-mode');
    }

    // 2. FORCE check state synchronization into the DOM element node
    if (themeToggleCheckbox) {
        themeToggleCheckbox.checked = isZine;
    }

    // 3. Recalculate component shapes cleanly
    initializeAllComponentStyles();

    // Explicitly reshuffle the switch border rules too depending on current theme state
    const switchWrapper = document.querySelector('.theme-switch-wrapper');
    if (switchWrapper) {
        applyScrapbookBorders(switchWrapper);
    }
};

// Check browser memory layout loops safely
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySavedTheme);
} else {
    applySavedTheme();
}

// Watch for manual interface clicks
if (themeToggleCheckbox) {
    themeToggleCheckbox.addEventListener('change', () => {
        if (themeToggleCheckbox.checked) {
            document.body.classList.add('zine-mode');
            localStorage.setItem('site-interface-mode', 'zine');
        } else {
            document.body.classList.remove('zine-mode');
            localStorage.setItem('site-interface-mode', 'assassin');
        }

        initializeAllComponentStyles();

        // Dynamic custom layout border reshaping applied instantly on switch wrapper toggle frame
        const switchWrapper = document.querySelector('.theme-switch-wrapper');
        if (switchWrapper) applyScrapbookBorders(switchWrapper);

        const openModalContent = document.querySelector('#popup-modal .modal-content');
        if (openModalContent) applyScrapbookBorders(openModalContent);
    });
}

// ==========================================
// 6. DATA-DRIVEN INTERACTION ROUTER (MODAL SYSTEM)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.grid-item, .dagger-item, .book-item');
    const modalOverlay = document.getElementById('popup-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.querySelector('.close-btn');

    clickableItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Drop out early if clicking an internal link
            if (e.target.closest('a')) return;

            const projectId = item.getAttribute('data-id');
            const data = projectDatabase[projectId];
            if (!data) return;

            if (modalTitle) modalTitle.innerText = data.title;
            if (modalDesc) modalDesc.innerHTML = data.description;

            if (modalImg) {
                if (data.video) {
                    // If a video link is present, turn the image element slot into a responsive video frame embedding player
                    modalImg.outerHTML = `<iframe id="modal-img" src="${data.video}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width:100%; aspect-ratio: 16/9; display:block; margin-bottom:15px; border-radius:4px;"></iframe>`;
                } else if (data.image) {
                    // If it's just a standard image, ensure it renders as an <img> tag cleanly
                    if (modalImg.tagName === 'IFRAME') {
                        modalImg.outerHTML = `<img id="modal-img" src="${data.image}" alt="Project Visual Preview" loading="lazy" style="width:100%; display:block; margin-bottom:15px;">`;
                    } else {
                        modalImg.src = data.image;
                        modalImg.style.display = 'block';
                    }
                } else {
                    modalImg.style.display = 'none';
                }
            }
            if (modalLink) {
                if (data.link) {
                    modalLink.href = data.link;
                    modalLink.style.display = 'inline-block';
                } else {
                    modalLink.style.display = 'none';
                }
            }

            if (modalOverlay) {
                modalOverlay.classList.add('is-open');
                const modalContent = modalOverlay.querySelector('.modal-content');
                if (modalContent) applyScrapbookBorders(modalContent);
            }
        });
    });

    if (closeBtn && modalOverlay) {
        closeBtn.addEventListener('click', () => modalOverlay.classList.remove('is-open'));
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('is-open');
        });
    }
=======
// ==========================================
// CENTRALIZED PROJECT DATABASE (Local Registry)
// ==========================================
const projectDatabase = {
    "mothers-day-gift": {
        title: "Mother's Day Gift",
        image: "assets/project-previews/mother's-day.webp",
        link: "/mother's-day/index.html",
        description: `
            <p>A gift I coded overnight for Mother's Day, and my very first independent HTML project! It's a cozy, personal 2-page digital letter featuring custom message reveals that open up when clicked.</p>
            <p>Building this from scratch was what officially sparked my love for self-taught web development.</p>
            <p><strong>Skills Learned & Applied:</strong></p>
            <ul>
                <li>CSS Card Layouts: Figuring out how to style clean, responsive containers.</li>
                <li>SVG Integration: Embedding sharp, scalable graphics directly into the HTML code.</li>
                <li>JavaScript Reveals: Using event triggers to create interactive, hidden text elements.</li>
            </ul>
            <p>Fun fact: I ended up coding until 1 AM because I got totally side-tracked helping a friend deal with an emergency cockroach situation in their room. Duty calls :p</p>
        `
    },
    "bust-duty-tool": {
        title: "Student Council Spreadsheet tool",
        video: "https://www.youtube.com/embed/l5QZjyQfzl0",
        image: null,
        link: "https://docs.google.com/spreadsheets/d/1eHZbqs4rGOHwVlzOCvBsbXG7CKLSJ1szHDKxIeOVcco/copy",
        description: `
            <p>While serving on my school's prefectorial board, I realized that manually checking classrooms and tracking them on a neat list was incredibly boring and tedious. I wondered, "Why don't we have a tool for this?"</p>
            <p>So, I spent my Saturday morning coding a spreadsheet tool that automates the boring stuff and makes the whole tracking process seamless for student leaders.</p>
            <p><strong>Core Concepts Developed:</strong></p>
            <ul>
                <li>Design Thinking: Spotting a real-world friction point in school operations and building a system to fix it.</li>
                <li>User Interface (UI): Making data entry fast, intuitive, and clean for busy students.</li>
                <li>Workflow Optimization: Transforming a slow, manual task into a quick digital process.</li>
            </ul>
            <p>Currently working on pitching it to the council to get it officially adopted!</p>
        `
    },
    "To-do": {
        title: "Chatbot To-do list",
        image: "assets/project-previews/to-do.webp",
        link: "https://to-do-chatbot-irio.vercel.app/",
        description: `
            <p>An unconventional to-do list web app that fights procrastination by giving you dynamic, motivational (and sometimes strictly "locked-in") messages based on your progress.</p>
            <p>I wanted to move past basic static pages and build a functional app to practice my front-end and back-end logic simultaneously.</p>
            <p><strong>Skills Learned & Applied:</strong></p>
            <ul>
                <li>Interactive CSS: Crafting responsive layouts and dynamic visual feedback.</li>
                <li>Python Backend: Structuring basic database storage to manage tasks smoothly.</li>
                <li>JavaScript Timers: Implementing inactivity trackers to prompt the user in real-time.</li>
            </ul>
        `
    },

    "the-red-rails": {
        title: "The Red Rails",
        image: "assets/project-previews/red-rails.webp",
        link: "https://cherisheverything.pythonanywhere.com/",
        description: `
            <p>A text-based story game built using Python and HTML! This is my longest and biggest project yet, created as my final capstone for the Harvardx CS50 course where we had complete freedom to build whatever we wanted.</p>
            <p>It's fully equipped with dynamic health systems, custom sound effects, and ambient background music to create an immersive experience.</p>
            <p><strong>Technical & Creative Milestones:</strong></p>
            <ul>
                <li>Advanced CSS: Pushing visual presentation limits to create a clean, moody gaming UI.</li>
                <li>Asynchronous JavaScript: Programming custom typewriter text animations for the dialogue.</li>
                <li>Data Handling: Utilizing JSON to store, organize, and branch complex storylines.</li>
            </ul>
            <p>This project was such a fun ride to build! The story isn't even halfway done yet, so I'm definitely going to keep updating and expanding it. ;_;</p>
        `
    },

    "songwriting": {
        title: "Songs (and music) I wrote!",
        image: "",
        link: "../passion-projects-indiv/songwriting.html",
        description: `
            <p>I write songs whenever I feel a strong enough emotion. To be honest, I never considered myself a naturally gifted musician—my electric guitar usually just sits in the corner of my room gathering dust, and I was never the "best" singer when performing in local temple bands or my CCA choir.</p>
            <p>But I still think music is a beautiful way to express yourself, so I decided to step out of my comfort zone and give songwriting a real shot ;)</p>
            <p><strong>Creative Concepts Explored:</strong></p>
            <ul>
                <li>Song Structure: Learning the balance of rhythm, verse-chorus pacing, and musical timing.</li>
                <li>Emotional Storytelling: Exploring how shifting tempos and keys can influence a listener’s mood.</li>
                <li>Creative Expression: Finding a healthy, constructive outlet to process stress and frustration.</li>
            </ul>
            <p>It's a great way to let out pent-up thoughts, and by sharing it, I hope it's something other people can listen to and relate to.</p>
        `
    },

    "storywriting": {
        title: "Novels and Short Stories",
        image: "",
        link: "/passion-projects-indiv/storywriting.html",
        description: `
            <p>I have always absolutely loved creative writing. Before this, I actually wrote a full novel called <em>'Whispers of a Ghost'</em>. Admittedly, I rushed through parts of it back then because I was eager to put it on a scholarship application, haha! But the experience taught me so much about long-form plotting.</p>
            <p>Now, I'm applying everything I learned into writing a brand new novel project, currently titled <em>"I do."</em></p>
            <p><strong>Literary & Analytical Skills:</strong></p>
            <ul>
                <li>Narrative Structure: Managing pacing, character arcs, and multi-chapter progression.</li>
                <li>Character Building: Digging deep into character psychology to ensure their motives make sense.</li>
                <li>World-Building: Crafting descriptive settings that help drive the core plot forward.</li>
            </ul>
            <p>I also write romance short stories on the side—feel free to check them out whenever you're looking for a quick read!</p>
        `
    },

    "videos": {
        title: "Videos and Filmmaking(?)",
        image: "",
        link: "/passion-projects-indiv/videos.html",
        description: `
            <p>I also love making videos! Even though I'm primarily a science/STEM kid, I’ve always had a massive soft spot for creative arts, and video editing lets me combine both sides of my brain.</p>
            <p>Most of my videos reflect on personal experiences and lessons I've learned along the way, using visual storytelling to connect with an audience.</p>
            <p><strong>Video Production Skills:</strong></p>
            <ul>
                <li>Visual Pacing: Learning how to storyboard, frame shots, and sequence clips to tell a cohesive story.</li>
                <li>Post-Production: Editing audio, balancing soundscapes, and keeping the visual rhythm engaging.</li>
                <li>Relatable Content: Structuring personal reflections in a way that feels genuine and accessible to others.</li>
            </ul>
        `
    },

    "I do": {
        title: "''I do''",
        image: "",
        link: "",
        description: `
            <p><strong>WIP: Writing In Progress!</strong></p>
            <p>A disgraced Crown Princess who believes she's cursed and a rival kingdom's commander torn between duty and love find solace in each other, only to be driven apart by the very kingdoms that define them.</p>
            <p>In the end, she sacrifices herself to save her collapsing kingdom, and they become another tragic story of two people who could have been together in another life.</p>
        `
    },

    "Writer's Block": {
        title: "Writer's Block",
        image: "",
        link: "",
        description: `
            <p><strong>Serious Description:</strong></p>
            <p>After a young researcher clashes with an anonymous critic online, she discovers he's her classmate, and their rivalry gradually turns into an unexpected connection as they help each other grow.</p>
            <br>
            <p><strong>Accurate Description:</strong></p>
            <p>An overcaffeinated top student starts a comment-section war with a guy who insults her research paper. Unfortunately, he's smart, annoyingly attractive, and keeps showing up everywhere.</p>
        `
    }
};

// ==========================================
// 1. DYNAMIC THEME-AWARE BORDER SHAPER
// ==========================================
const applyScrapbookBorders = (element) => {
    if (!element) return;

    const isZineMode = document.body.classList.contains('zine-mode');

    if (!isZineMode) {
        if (element.classList.contains('grid-item') || element.classList.contains('dagger-item')) {
            const sharpCut = () => Math.floor(Math.random() * 5);
            element.style.borderRadius = `${sharpCut()}px ${sharpCut()}px ${sharpCut()}px ${sharpCut()}px`;
        } else {
            element.style.borderRadius = `4px`;
        }
        return;
    }

    const primaryLong = () => Math.floor(Math.random() * (240 - 180) + 180);
    const secondaryShort = () => Math.floor(Math.random() * (25 - 8) + 8);

    const tl_x = primaryLong();
    const tl_y = secondaryShort();
    const tr_x = secondaryShort();
    const tr_y = primaryLong();
    const br_x = primaryLong();
    const br_y = secondaryShort();
    const bl_x = secondaryShort();
    const bl_y = primaryLong();

    element.style.borderRadius = `${tl_x}px ${tr_x}px ${br_x}px ${bl_x}px / ${tl_y}px ${tr_y}px ${br_y}px ${bl_y}px`;
};

// ==========================================
// 2. CUSTOM GREETING WEB COMPONENT
// ==========================================
class Greeting extends HTMLElement {
    connectedCallback() {
        const hours = new Date().getHours();
        const greetings = {
            morning: ["Rise and design.", "Good morning!", "Morning! Ready to build?"],
            afternoon: ["Good afternoon.", "Focus mode: On.", "Design never sleeps."],
            evening: ["Burning the midnight oil?", "Good evening.", "Late night logic."],
        };

        const timeOfDay = hours < 12 ? 'morning' : (hours < 18 ? 'afternoon' : 'evening');
        const list = greetings[timeOfDay];
        const finalGreeting = list[Math.floor(Math.random() * list.length)];

        this.innerHTML = `
            <div class="greeting-container whimsy-card">
                <p class="greeting">${finalGreeting}</p>
            </div>`;

        const container = this.querySelector('.greeting-container');
        applyScrapbookBorders(container);
    }
}
if (!customElements.get('custom-greeting')) {
    customElements.define('custom-greeting', Greeting);
}

// ==========================================
// 3. INITIAL STYLE INITIALIZATION LOOP
// ==========================================
const initializeAllComponentStyles = () => {
    const structuralCards = document.querySelectorAll('.whimsy-card, .grid-item, .dagger-item');
    structuralCards.forEach(card => {
        if (!card.closest('custom-greeting')) {
            applyScrapbookBorders(card);
        }
    });
};

window.addEventListener('DOMContentLoaded', initializeAllComponentStyles);

// ==========================================
// 4. DAGGER CURSOR MECHANICS & MATRICES
// ==========================================
const cursor = document.getElementById("sword");

if (cursor) {
    cursor.style.pointerEvents = "none"; // Safe guard: stops cursor from swallowing click events
}

const positionElement = (e) => {
    if (!cursor) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(-45deg) translate(-30px, -13px)`;

    if (!cursor.classList.contains('is-active')) {
        cursor.classList.add('is-active');
    }

    const target = e.target;
    if (!target) return;

    const isZine = document.body.classList.contains('zine-mode');

    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('dropdown-item') || target.classList.contains('nav-link') || target.closest('.close-btn') || target.closest('.swiper-button-prev') || target.closest('.swiper-button-next') || target.closest('.grid-item') || target.closest('.dagger-item') || target.closest('.vinyl-card') || target.closest('.book-item') || target.closest('.poster-wrapper')) {
        cursor.style.setProperty('--cursor-color', 'var(--accent)');
    }
    else if (target.classList.contains('grid-item') || target.closest('.grid-item') || target.closest('.dagger-item')) {
        cursor.style.setProperty('--cursor-color', isZine ? 'var(--secondary)' : 'var(--main)');
    }
    else if (target.classList.contains('greeting-container') || target.classList.contains('article-2-container') || target.closest('.whimsy-card')) {
        cursor.style.setProperty('--cursor-color', 'var(--white)');
    }
    else if (target.classList.contains('article-1-container') || target.closest('.article-1-container')) {
        cursor.style.setProperty('--cursor-color', 'var(--white)');
    }
    else if (target.classList.contains('article-2-container') || target.closest('.article-2-container')) {
        cursor.style.setProperty('--cursor-color', 'var(--white)');
    }
    else {
        cursor.style.setProperty('--cursor-color', 'var(--main)');
    }
};

window.addEventListener('mousemove', positionElement);

// ==========================================
// 5. INTERFACE MODE TOGGLE INTERCEPTOR (WITH MEMORY)
// ==========================================
const themeToggleCheckbox = document.getElementById('theme-toggle');

const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('site-interface-mode');
    const isZine = (savedTheme === 'zine');

    // 1. Synchronize the system body token array layout
    if (isZine) {
        document.body.classList.add('zine-mode');
    } else {
        document.body.classList.remove('zine-mode');
    }

    // 2. FORCE check state synchronization into the DOM element node
    if (themeToggleCheckbox) {
        themeToggleCheckbox.checked = isZine;
    }

    // 3. Recalculate component shapes cleanly
    initializeAllComponentStyles();

    // Explicitly reshuffle the switch border rules too depending on current theme state
    const switchWrapper = document.querySelector('.theme-switch-wrapper');
    if (switchWrapper) {
        applyScrapbookBorders(switchWrapper);
    }
};

// Check browser memory layout loops safely
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySavedTheme);
} else {
    applySavedTheme();
}

// Watch for manual interface clicks
if (themeToggleCheckbox) {
    themeToggleCheckbox.addEventListener('change', () => {
        if (themeToggleCheckbox.checked) {
            document.body.classList.add('zine-mode');
            localStorage.setItem('site-interface-mode', 'zine');
        } else {
            document.body.classList.remove('zine-mode');
            localStorage.setItem('site-interface-mode', 'assassin');
        }

        initializeAllComponentStyles();

        // Dynamic custom layout border reshaping applied instantly on switch wrapper toggle frame
        const switchWrapper = document.querySelector('.theme-switch-wrapper');
        if (switchWrapper) applyScrapbookBorders(switchWrapper);

        const openModalContent = document.querySelector('#popup-modal .modal-content');
        if (openModalContent) applyScrapbookBorders(openModalContent);
    });
}

// ==========================================
// 6. DATA-DRIVEN INTERACTION ROUTER (MODAL SYSTEM)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.grid-item, .dagger-item, .book-item');
    const modalOverlay = document.getElementById('popup-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.querySelector('.close-btn');

    clickableItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Drop out early if clicking an internal link
            if (e.target.closest('a')) return;

            const projectId = item.getAttribute('data-id');
            const data = projectDatabase[projectId];
            if (!data) return;

            if (modalTitle) modalTitle.innerText = data.title;
            if (modalDesc) modalDesc.innerHTML = data.description;

            if (modalImg) {
                if (data.video) {
                    // If a video link is present, turn the image element slot into a responsive video frame embedding player
                    modalImg.outerHTML = `<iframe id="modal-img" src="${data.video}" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width:100%; aspect-ratio: 16/9; display:block; margin-bottom:15px; border-radius:4px;"></iframe>`;
                } else if (data.image) {
                    // If it's just a standard image, ensure it renders as an <img> tag cleanly
                    if (modalImg.tagName === 'IFRAME') {
                        modalImg.outerHTML = `<img id="modal-img" src="${data.image}" alt="Project Visual Preview" loading="lazy" style="width:100%; display:block; margin-bottom:15px;">`;
                    } else {
                        modalImg.src = data.image;
                        modalImg.style.display = 'block';
                    }
                } else {
                    modalImg.style.display = 'none';
                }
            }
            if (modalLink) {
                if (data.link) {
                    modalLink.href = data.link;
                    modalLink.style.display = 'inline-block';
                } else {
                    modalLink.style.display = 'none';
                }
            }

            if (modalOverlay) {
                modalOverlay.classList.add('is-open');
                const modalContent = modalOverlay.querySelector('.modal-content');
                if (modalContent) applyScrapbookBorders(modalContent);
            }
        });
    });

    if (closeBtn && modalOverlay) {
        closeBtn.addEventListener('click', () => modalOverlay.classList.remove('is-open'));
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('is-open');
        });
    }
>>>>>>> 1e7be9eab5f0dec91e54297a3be4395db9661b54
});