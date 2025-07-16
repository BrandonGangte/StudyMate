/**
 * StudyMate App - Main application initialization
 */

// Simple Router Class
class SimpleRouter {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
        
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const hash = e.target.getAttribute('href');
                this.navigate(hash);
            }
        });
    }

    register(path, component) {
        this.routes[path] = component;
    }

    navigate(path) {
        window.location.hash = path;
    }

    async handleRoute() {
        const hash = window.location.hash || '#home';
        const route = hash.substring(1);
        
        this.updateActiveNav(hash);
        
        if (this.routes[route]) {
            this.currentRoute = route;
            await this.loadComponent(route);
        } else {
            this.navigate('#home');
        }
    }

    async loadComponent(route) {
        const app = document.getElementById('app');
        
        app.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
        
        try {
            const component = this.routes[route];
            
            setTimeout(() => {
                if (typeof component === 'function') {
                    app.innerHTML = component();
                } else {
                    app.innerHTML = component;
                }
                
                this.initializeComponent(route);
            }, 300);
            
        } catch (error) {
            console.error('Error loading component:', error);
            app.innerHTML = '<div class="error-message">Error loading page. Please try again.</div>';
        }
    }

    initializeComponent(route) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const animatedElements = document.querySelectorAll('.fade-in');
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
    }

    updateActiveNav(hash) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }
}

// Page Components
const HomePage = () => {
    return `
        <section class="hero-section">
            <div class="hero-overlay"></div>
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h1 class="hero-title fade-in">
                            The first step toward success is taken when you refuse to be a captive of the environment
                            <span class="highlight">FIND YOURSELF</span>
                        </h1>
                        <a href="#study-notes" class="btn btn-primary btn-lg mt-4 fade-in">Get Started</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="welcome-section py-5">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="section-title fade-in">Welcome to StudyMate</h2>
                        <p class="section-description fade-in">
                            The platform that focuses on learners everywhere. Students and lecturers will have a room 
                            even outside the classroom with new routes of learning.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="features-section py-5">
            <div class="container">
                <h2 class="section-title text-center mb-5 fade-in">Start Learning</h2>
                
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/Notes.jpg" alt="Study Notes" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Study Notes</h3>
                                <p>Access comprehensive study materials and notes for all subjects.</p>
                                <a href="#study-notes" class="btn btn-outline-primary">Learn More →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/Lectures.jpg" alt="Lectures and Videos" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Lectures and Videos</h3>
                                <p>Watch recorded lectures and educational videos anytime, anywhere.</p>
                                <a href="#lectures" class="btn btn-outline-primary">Learn More →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/Hot%20question.jpg" alt="Hot Questions" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Hot Questions</h3>
                                <p>Get answers to frequently asked questions and trending topics.</p>
                                <a href="#hot-questions" class="btn btn-outline-primary">Learn More →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/time%20management.jpg" alt="Schedule Lookup" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Schedule Lookup</h3>
                                <p>Manage your time better with our comprehensive scheduling tools.</p>
                                <a href="#schedule" class="btn btn-outline-primary">Learn More →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/LabPrac.jpg" alt="Practicals" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Practicals</h3>
                                <p>Access hands-on practical exercises and laboratory work.</p>
                                <a href="#practicals" class="btn btn-outline-primary">Learn More →</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/Subjects.jpg" alt="Subjects" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Subjects</h3>
                                <p>Explore various subjects and find resources tailored to your needs.</p>
                                <a href="#subjects" class="btn btn-outline-primary">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const StudyNotesPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Study Notes</h1>
                        <p class="page-description fade-in">Access comprehensive study materials and notes for all subjects</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <!-- Main Study Notes Hub -->
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <div class="feature-card fade-in">
                            <div class="feature-content">
                                <h3><i class="fas fa-graduation-cap"></i> General Study Notes Hub</h3>
                                <p>Access general study notes organized by department</p>
                                <div class="d-flex justify-content-center gap-3 flex-wrap">
                                    <a href="./Features/Study Notes/Computer Sc/Study Notes.html" class="btn btn-outline-primary" target="_blank">Computer Science</a>
                                    <a href="./Features/Study Notes/Agriculture/Study Notes.html" class="btn btn-outline-primary" target="_blank">Agriculture</a>
                                    <a href="./Features/Study Notes/Civil/Study Notes.html" class="btn btn-outline-primary" target="_blank">Civil</a>
                                    <a href="./Features/Study Notes/Electronic/Study Notes.html" class="btn btn-outline-primary" target="_blank">Electronics</a>
                                    <a href="./Features/Study Notes/Mechanical/Study Notes.html" class="btn btn-outline-primary" target="_blank">Mechanical</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Department-Specific Study Notes -->
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-laptop-code"></i> Computer Science Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Computer Sc Eng/Study Notes/CSE -  Study Notes.html" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        CSE Study Notes
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <h5>Available Topics:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">Algorithms</span>
                                        <span class="topic-tag">Data Structures</span>
                                        <span class="topic-tag">Java Programming</span>
                                        <span class="topic-tag">Python</span>
                                        <span class="topic-tag">C++</span>
                                        <span class="topic-tag">Operating Systems</span>
                                        <span class="topic-tag">Computer Networks</span>
                                        <span class="topic-tag">HTML</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-seedling"></i> Agriculture Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Agriculture Eng/Study Notes/AE -  Study Notes.html" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        AE Study Notes
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <h5>Available Topics:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">Soil Mechanics</span>
                                        <span class="topic-tag">Water Irrigation</span>
                                        <span class="topic-tag">Conservation Structures</span>
                                        <span class="topic-tag">Thermodynamics</span>
                                        <span class="topic-tag">Flood Routing</span>
                                        <span class="topic-tag">Soil & Water Conservation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-bolt"></i> Electrical Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Electrical Engineering/Study Notes/Electrical - Study Notes.html" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        EE Study Notes
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <h5>Available Topics:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">Electric Potential</span>
                                        <span class="topic-tag">Electrostatics</span>
                                        <span class="topic-tag">Resistors</span>
                                        <span class="topic-tag">Semiconductors</span>
                                        <span class="topic-tag">Op-Amp Circuits</span>
                                        <span class="topic-tag">Circuit Analysis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-building"></i> Civil Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Civil Engineering/" class="department-link" target="_blank">
                                        <i class="fas fa-folder"></i>
                                        Browse Civil Resources
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <p class="text-muted">Additional resources available in the Civil Engineering folder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const LecturesPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Lectures and Videos</h1>
                        <p class="page-description fade-in">Watch recorded lectures and educational videos from all departments</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-laptop-code"></i> Computer Science Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Computer Sc Eng/Lectures & Videos/CSE - Lectures n Vids.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        CSE Lectures & Videos
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <p class="text-muted">Programming tutorials, algorithm explanations, and software development videos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-seedling"></i> Agriculture Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Agriculture Eng/Lectures & Videos/AE - Lectures n Vids.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        AE Lectures & Videos
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <p class="text-muted">Agricultural technology, irrigation systems, and farming technique videos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-bolt"></i> Electrical Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Electrical Engineering/Videos & lectures/Electrical - Lectures and Videos.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        EE Videos & Lectures
                                    </a>
                                </div>
                                <div class="resource-preview mt-3">
                                    <p class="text-muted">Circuit analysis, electronics fundamentals, and power systems videos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const HotQuestionsPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Hot Questions</h1>
                        <p class="page-description fade-in">Get answers to frequently asked questions</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-laptop-code"></i> Computer Science</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Computer Sc Eng/Hot Questions/Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        Hot Questions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-seedling"></i> Agriculture Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Agriculture Eng/Hot Questions/Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        Hot Questions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-bolt"></i> Electrical Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Electrical Engineering/Hot questions/Hot questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        Hot Questions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const SchedulePage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Schedule Lookup</h1>
                        <p class="page-description fade-in">Manage your time better</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="schedule-card fade-in">
                            <h3><i class="fas fa-calendar-alt"></i> Schedule Management Hub</h3>
                            <p>Access comprehensive scheduling tools and time management resources.</p>
                            <a href="./Features/Schedule look up/Schedule Lookup.html" class="btn btn-primary" target="_blank">Access Schedule Tools</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const PracticalsPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Practicals</h1>
                        <p class="page-description fade-in">Access hands-on practical exercises</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="practical-card fade-in">
                            <div class="practical-header">
                                <h3><i class="fas fa-flask"></i> Engineering Practicals Hub</h3>
                                <span class="practical-level">All Levels</span>
                            </div>
                            <p>Access comprehensive practical manuals and laboratory exercises.</p>
                            <div class="practical-footer">
                                <span class="practical-duration">⏱️ Self-paced</span>
                                <a href="./Features/Practicles/Practicles.html" class="btn btn-primary" target="_blank">Access Practicals</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const SubjectsPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Subjects</h1>
                        <p class="page-description fade-in">Explore various subjects and resources</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="subject-card fade-in">
                            <div class="subject-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Subjects Hub</h3>
                            <p>Access comprehensive subject resources and reference materials</p>
                            <a href="./Features/Subjects/Subjects.html" class="btn btn-outline-primary" target="_blank">Browse All Subjects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const AboutPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">About StudyMate</h1>
                        <p class="page-description fade-in">Learn more about our mission</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/books-stack-of-three.png" alt="Knowledge">
                            </div>
                            <h3>Collect The Knowledge</h3>
                            <p>Gather comprehensive learning materials from various sources.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/calendar.png" alt="Time Management">
                            </div>
                            <h3>Manage Time Better</h3>
                            <p>Organize your study schedule efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// Initialize App
class StudyMateApp {
    constructor() {
        this.router = new SimpleRouter();
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.registerRoutes();
        this.initializeNavbar();
        console.log('StudyMate SPA initialized successfully!');
    }

    registerRoutes() {
        this.router.register('home', HomePage);
        this.router.register('study', HomePage);
        this.router.register('study-notes', StudyNotesPage);
        this.router.register('lectures', LecturesPage);
        this.router.register('hot-questions', HotQuestionsPage);
        this.router.register('schedule', SchedulePage);
        this.router.register('practicals', PracticalsPage);
        this.router.register('subjects', SubjectsPage);
        this.router.register('about', AboutPage);
        this.router.register('contact', AboutPage);
    }

    initializeNavbar() {
        const navbar = document.getElementById('mainNav');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }
}

// Initialize the application
const app = new StudyMateApp();