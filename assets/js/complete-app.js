/**
 * StudyMate Complete App - Comprehensive Features Integration
 * Connects ALL content from Features folder to main page
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

// ===================================
// PAGE COMPONENTS - ALL FEATURES CONNECTED
// ===================================

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
                            even outside the classroom with new routes of learning. Access comprehensive resources for 
                            Computer Science, Agriculture Engineering, Electrical Engineering, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="features-section py-5">
            <div class="container">
                <h2 class="section-title text-center mb-5 fade-in">Start Learning - All Departments</h2>
                
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card fade-in">
                            <div class="feature-image">
                                <img src="./assets/Images2/Notes.jpg" alt="Study Notes" class="img-fluid">
                            </div>
                            <div class="feature-content">
                                <h3>Study Notes</h3>
                                <p>Access comprehensive study materials for Computer Science, Agriculture, Electrical, Civil, and Mechanical Engineering.</p>
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
                                <p>Watch educational videos and lectures from CSE, Agriculture Engineering, and Electrical Engineering departments.</p>
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
                                <p>Get answers to GATE syllabus, interview questions, and solved papers for all engineering branches.</p>
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
                                <p>Access daily schedules, weekly timetables, and study planners to manage your time effectively.</p>
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
                                <p>Access engineering handbooks, lab manuals for Mechanical, Civil, and Electrical Engineering.</p>
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
                                <p>Explore textbooks including Java, Engineering Mathematics, Physics, Chemistry, and Electronics.</p>
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
                        <h1 class="page-title fade-in">Study Notes - All Departments</h1>
                        <p class="page-description fade-in">Access comprehensive study materials and notes for all engineering subjects</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <!-- General Study Notes Hub -->
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <div class="feature-card fade-in">
                            <div class="feature-content">
                                <h3><i class="fas fa-graduation-cap"></i> General Study Notes Hub</h3>
                                <p>Access general study notes organized by department</p>
                                <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
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
                                <div class="resource-preview">
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
                                        <span class="topic-tag">Memory Organization</span>
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
                                <div class="resource-preview">
                                    <h5>Available Topics:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">Soil Mechanics</span>
                                        <span class="topic-tag">Water Irrigation</span>
                                        <span class="topic-tag">Conservation Structures</span>
                                        <span class="topic-tag">Thermodynamics</span>
                                        <span class="topic-tag">Flood Routing</span>
                                        <span class="topic-tag">Soil & Water Conservation</span>
                                        <span class="topic-tag">Mean Areal Precipitation</span>
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
                                <div class="resource-preview">
                                    <h5>Available Topics:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">Electric Potential</span>
                                        <span class="topic-tag">Electrostatics</span>
                                        <span class="topic-tag">Resistors</span>
                                        <span class="topic-tag">Semiconductors</span>
                                        <span class="topic-tag">Op-Amp Circuits</span>
                                        <span class="topic-tag">Circuit Analysis</span>
                                        <span class="topic-tag">SI Units</span>
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
                                <div class="resource-preview">
                                    <p class="text-muted">Additional civil engineering resources and materials available</p>
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
                                <div class="resource-preview">
                                    <p class="text-muted">Programming tutorials, algorithm explanations, software development videos, and computer science fundamentals</p>
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
                                <div class="resource-preview">
                                    <p class="text-muted">Agricultural technology videos, irrigation systems, farming techniques, and sustainable agriculture practices</p>
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
                                <div class="resource-preview">
                                    <p class="text-muted">Circuit analysis videos, electronics fundamentals, power systems, and electrical engineering concepts</p>
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
                        <p class="page-description fade-in">Get answers to GATE syllabus, interview questions, and solved papers</p>
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
                                    <a href="./Features/Computer Sc Eng/Hot Questions/CSE - Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        CSE Hot Questions
                                    </a>
                                </div>
                                <div class="resource-preview">
                                    <h5>Available Resources:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">GATE Syllabus</span>
                                        <span class="topic-tag">Interview Questions</span>
                                        <span class="topic-tag">Solved Papers</span>
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
                                    <a href="./Features/Agriculture Eng/Hot Questions/AE - Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        AE Hot Questions
                                    </a>
                                </div>
                                <div class="resource-preview">
                                    <h5>Available Resources:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">GATE-2018 Syllabus</span>
                                        <span class="topic-tag">Interview Questions</span>
                                        <span class="topic-tag">Solved Papers</span>
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
                                    <a href="./Features/Electrical Engineering/Hot questions/Electrical - Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        EE Hot Questions
                                    </a>
                                </div>
                                <div class="resource-preview">
                                    <h5>Available Resources:</h5>
                                    <div class="topic-tags">
                                        <span class="topic-tag">GATE Syllabus</span>
                                        <span class="topic-tag">Basic EE Interview Q&A</span>
                                        <span class="topic-tag">Solved Papers</span>
                                    </div>
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
                        <p class="page-description fade-in">Manage your time better with comprehensive scheduling tools</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <!-- Main Schedule Hub -->
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <div class="schedule-card fade-in">
                            <h3><i class="fas fa-calendar-alt"></i> Schedule Management Hub</h3>
                            <p>Access comprehensive scheduling tools and time management resources for effective study planning.</p>
                            <a href="./Features/Schedule look up/Schedule Lookup.html" class="btn btn-primary" target="_blank">Access Schedule Tools</a>
                        </div>
                    </div>
                </div>

                <!-- Schedule Resources -->
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-calendar-week"></i> Weekly Schedules</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Schedule look up/college weekly study time table.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-table"></i>
                                        College Weekly Timetable
                                    </a>
                                    <a href="./Features/Schedule look up/weekly-schedule.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-calendar"></i>
                                        Weekly Schedule Planner
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-calendar-day"></i> Daily Schedules</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Schedule look up/Daily Schedule.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-clock"></i>
                                        Daily Schedule Template
                                    </a>
                                    <a href="./Features/Schedule look up/free study time table.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-user-clock"></i>
                                        Free Study Timetable
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-file-pdf"></i> Study Templates</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Schedule look up/study time table.png" class="department-link" target="_blank">
                                        <i class="fas fa-table"></i>
                                        Study Timetable
                                    </a>
                                    <a href="./Features/Schedule look up/Weekly-study-timetable.pdf" class="department-link" target="_blank">
                                        <i class="fas fa-file-pdf"></i>
                                        Weekly Study PDF
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

const PracticalsPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Practicals</h1>
                        <p class="page-description fade-in">Access hands-on practical exercises and laboratory work</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <!-- Main Practicals Hub -->
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <div class="practical-card fade-in">
                            <div class="practical-header">
                                <h3><i class="fas fa-flask"></i> Engineering Practicals Hub</h3>
                                <span class="practical-level">All Levels</span>
                            </div>
                            <p>Access comprehensive practical manuals and laboratory exercises for all engineering disciplines.</p>
                            <div class="practical-footer">
                                <span class="practical-duration">⏱️ Self-paced Learning</span>
                                <a href="./Features/Practicles/Practicles.html" class="btn btn-primary" target="_blank">Access Practicals Hub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Engineering Handbooks -->
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-building"></i> Civil Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Practicles/Civil Engineering Handbook.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        Civil Engineering Handbook
                                    </a>
                                    <a href="./Features/Practicles/Buliding & Const Handbk.png" class="department-link" target="_blank">
                                        <i class="fas fa-hammer"></i>
                                        Building & Construction Handbook
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
                                    <a href="./Features/Practicles/Handbook of EE.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        Handbook of Electrical Engineering
                                    </a>
                                    <a href="./Features/Practicles/T & P Electrical.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-tools"></i>
                                        Theory & Practice - Electrical
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-cogs"></i> Mechanical Engineering</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Practicles/Lab Manual ME.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        Mechanical Engineering Lab Manual
                                    </a>
                                </div>
                                <div class="resource-preview">
                                    <p class="text-muted">Complete laboratory manual for mechanical engineering practical sessions and experiments</p>
                                </div>
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
                        <p class="page-description fade-in">Explore various subjects and find resources tailored to your needs</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <!-- Main Subjects Hub -->
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <div class="subject-card fade-in">
                            <div class="subject-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Subjects Hub</h3>
                            <p>Access comprehensive subject resources and reference materials for all engineering disciplines</p>
                            <a href="./Features/Subjects/Subjects.html" class="btn btn-outline-primary" target="_blank">Browse All Subjects</a>
                        </div>
                    </div>
                </div>

                <!-- Subject Resources -->
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-laptop-code"></i> Programming & Computer Science</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Subjects/Java The Complete Reference.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-coffee"></i>
                                        Java: The Complete Reference
                                    </a>
                                </div>
                                <div class="resource-preview">
                                    <p class="text-muted">Comprehensive guide to Java programming language and its applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-calculator"></i> Mathematics & Physics</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Subjects/Engineering Mathematics by JOHN BIRD.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-square-root-alt"></i>
                                        Engineering Mathematics
                                    </a>
                                    <a href="./Features/Subjects/Engineering Physics.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-atom"></i>
                                        Engineering Physics
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-flask"></i> Chemistry & Electronics</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Subjects/Engg-Chemistry.jpg" class="department-link" target="_blank">
                                        <i class="fas fa-vial"></i>
                                        Engineering Chemistry
                                    </a>
                                    <a href="./Features/Subjects/Principles of Electronics written by V K Mehta & Rohit Mehta.jpeg" class="department-link" target="_blank">
                                        <i class="fas fa-microchip"></i>
                                        Principles of Electronics
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-bolt"></i> Electronics & Electrical</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Subjects/ECE-EEE-Basics-E-Book_NRR.PNG" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        ECE-EEE Basics E-Book
                                    </a>
                                </div>
                                <div class="resource-preview">
                                    <p class="text-muted">Fundamental concepts for Electronics and Electrical Engineering students</p>
                                </div>
                            </div>
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
                        <p class="page-description fade-in">Learn more about our mission and comprehensive educational resources</p>
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
                            <p>Gather comprehensive learning materials from various engineering disciplines including Computer Science, Agriculture Engineering, Electrical Engineering, Civil Engineering, and Mechanical Engineering.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/calendar.png" alt="Time Management">
                            </div>
                            <h3>Manage Time Better</h3>
                            <p>Organize your study schedule efficiently with our comprehensive scheduling tools, daily planners, weekly timetables, and study management resources.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/letter.png" alt="Course Choices">
                            </div>
                            <h3>Course Choices</h3>
                            <p>Explore different engineering courses and subjects including study notes, practical manuals, GATE preparation materials, and interview questions for all major engineering branches.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/stack.png" alt="Explore Concepts">
                            </div>
                            <h3>Explore Concepts Differently</h3>
                            <p>Discover innovative ways to understand complex engineering concepts through interactive learning methods, video lectures, practical exercises, and comprehensive reference materials.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Additional Information -->
                <div class="row mt-5">
                    <div class="col-12 text-center">
                        <div class="feature-card fade-in">
                            <div class="feature-content">
                                <h3>Complete Engineering Resource Hub</h3>
                                <p>StudyMate provides access to study materials for Computer Science Engineering, Agriculture Engineering, Electrical Engineering, Civil Engineering, and Mechanical Engineering. Our platform includes study notes, video lectures, hot questions with GATE syllabus and interview preparation, practical manuals, laboratory exercises, engineering handbooks, and comprehensive subject resources including textbooks for Mathematics, Physics, Chemistry, Programming, and Electronics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// ===================================
// APP INITIALIZATION
// ===================================

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
        console.log('StudyMate SPA with ALL Features connected successfully!');
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