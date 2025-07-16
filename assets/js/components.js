/**
 * StudyMate Components - JavaScript page components
 * Each function returns HTML content for different pages
 */

// Home Page Component
const HomePage = () => {
    return `
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-overlay"></div>
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h1 class="hero-title fade-in">
                            The first step toward success is taken when you refuse to be a captive of the environment
                            <span class="highlight">FIND YOURSELF</span>
                        </h1>
                        <a href="#study" class="btn btn-primary btn-lg mt-4 fade-in">Get Started</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Welcome Section -->
        <section class="welcome-section py-5">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-8">
                        <h2 class="section-title fade-in">Welcome to StudyMate</h2>
                        <p class="section-description fade-in">
                            The platform that focuses on learners everywhere. Students and lecturers will have a room 
                            even outside the classroom with new routes of learning. Freedom to collect and collaborate 
                            in studies to change the way of learning and understanding.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Overview -->
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

// Study Notes Page Component
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
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="department-card fade-in">
                            <div class="department-header">
                                <h3><i class="fas fa-laptop-code"></i> Computer Science</h3>
                            </div>
                            <div class="department-content">
                                <div class="department-links">
                                    <a href="./Features/Computer Sc Eng/Study Notes/Study Notes.html" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        Study Notes
                                    </a>
                                    <a href="./Features/Computer Sc Eng/Hot Questions/Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        Hot Questions
                                    </a>
                                    <a href="./Features/Computer Sc Eng/Lectures & Videos/Lectures & Videos.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        Lectures & Videos
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
                                    <a href="./Features/Agriculture Eng/Study Notes/AE -  Study Notes.html" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        Study Notes
                                    </a>
                                    <a href="./Features/Agriculture Eng/Hot Questions/Hot Questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        Hot Questions
                                    </a>
                                    <a href="./Features/Agriculture Eng/Lectures & Videos/Lectures & Videos.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        Lectures & Videos
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
                                    <a href="./Features/Electrical Engineering/Study Notes/Study Notes.html" class="department-link" target="_blank">
                                        <i class="fas fa-book"></i>
                                        Study Notes
                                    </a>
                                    <a href="./Features/Electrical Engineering/Hot questions/Hot questions.html" class="department-link" target="_blank">
                                        <i class="fas fa-question-circle"></i>
                                        Hot Questions
                                    </a>
                                    <a href="./Features/Electrical Engineering/Videos & lectures/Videos & lectures.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        Videos & Lectures
                                    </a>
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
                                        Browse Resources
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

// Lectures Page Component
const LecturesPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Lectures and Videos</h1>
                        <p class="page-description fade-in">Watch recorded lectures and educational videos anytime, anywhere</p>
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
                                    <a href="./Features/Computer Sc Eng/Lectures & Videos/Lectures & Videos.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        Lectures & Videos
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
                                    <a href="./Features/Agriculture Eng/Lectures & Videos/Lectures & Videos.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        Lectures & Videos
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
                                    <a href="./Features/Electrical Engineering/Videos & lectures/Videos & lectures.html" class="department-link" target="_blank">
                                        <i class="fas fa-play-circle"></i>
                                        Videos & Lectures
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Sample Video Player -->
                <div class="row mt-5">
                    <div class="col-lg-8 mx-auto">
                        <div class="video-player-container fade-in">
                            <h3 class="text-center mb-4">Sample Educational Video</h3>
                            <div class="video-player" id="sampleVideoPlayer">
                                <video id="sampleVideo" poster="./assets/Images2/Lectures.jpg">
                                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                                    <p>Your browser doesn't support HTML5 video. Here is a <a href="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">link to the video</a> instead.</p>
                                </video>
                                <div class="video-controls">
                                    <button class="video-play-btn" id="playPauseBtn">
                                        <i class="fas fa-play"></i>
                                    </button>
                                    <div class="video-progress" id="videoProgress">
                                        <div class="video-progress-bar" id="progressBar"></div>
                                    </div>
                                    <span class="video-time" id="videoTime">0:00 / 0:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// Hot Questions Page Component
const HotQuestionsPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Hot Questions</h1>
                        <p class="page-description fade-in">Get answers to frequently asked questions and trending topics</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="content-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="question-card fade-in">
                            <div class="question-header">
                                <h3>How to prepare for programming interviews?</h3>
                                <span class="question-badge">Trending</span>
                            </div>
                            <p>Practice coding problems, understand data structures, and review system design concepts.</p>
                            <div class="question-footer">
                                <span class="question-votes">👍 45</span>
                                <span class="question-answers">💬 12 answers</span>
                            </div>
                        </div>
                        
                        <div class="question-card fade-in">
                            <div class="question-header">
                                <h3>Best resources for learning web development?</h3>
                                <span class="question-badge">Popular</span>
                            </div>
                            <p>Comprehensive guide to modern web development tools, frameworks, and best practices.</p>
                            <div class="question-footer">
                                <span class="question-votes">👍 38</span>
                                <span class="question-answers">💬 8 answers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// Schedule Page Component
const SchedulePage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">Schedule Lookup</h1>
                        <p class="page-description fade-in">Manage your time better with our comprehensive scheduling tools</p>
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
                            <p>Access comprehensive scheduling tools and time management resources.</p>
                            <a href="./Features/Schedule look up/Schedule Lookup.html" class="btn btn-primary" target="_blank">Access Schedule Tools</a>
                        </div>
                    </div>
                </div>

                <!-- Schedule Resources Grid -->
                <div class="resource-grid">
                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Schedule look up/college weekly study time table.jpg" alt="College Weekly Timetable">
                            <div class="resource-overlay">
                                <a href="./Features/Schedule look up/college weekly study time table.jpg" class="btn" target="_blank">View Schedule</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>College Weekly Study Timetable</h4>
                            <p>Structured weekly schedule template for college students.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-calendar-week"></i> Weekly Schedule</span>
                                <span><i class="fas fa-graduation-cap"></i> College</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Schedule look up/Daily Schedule.jpg" alt="Daily Schedule">
                            <div class="resource-overlay">
                                <a href="./Features/Schedule look up/Daily Schedule.jpg" class="btn" target="_blank">View Schedule</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Daily Schedule Template</h4>
                            <p>Organize your daily activities and study sessions effectively.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-calendar-day"></i> Daily Schedule</span>
                                <span><i class="fas fa-clock"></i> Time Management</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Schedule look up/free study time table.jpg" alt="Free Study Timetable">
                            <div class="resource-overlay">
                                <a href="./Features/Schedule look up/free study time table.jpg" class="btn" target="_blank">View Schedule</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Free Study Timetable</h4>
                            <p>Flexible study schedule for self-paced learning.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-user-clock"></i> Self-Study</span>
                                <span><i class="fas fa-calendar"></i> Flexible</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Schedule look up/weekly-schedule.jpg" alt="Weekly Schedule">
                            <div class="resource-overlay">
                                <a href="./Features/Schedule look up/weekly-schedule.jpg" class="btn" target="_blank">View Schedule</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Weekly Schedule Planner</h4>
                            <p>Comprehensive weekly planning template for students.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-calendar-week"></i> Weekly Planner</span>
                                <span><i class="fas fa-tasks"></i> Organization</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Schedule look up/study time table.png" alt="Study Timetable">
                            <div class="resource-overlay">
                                <a href="./Features/Schedule look up/study time table.png" class="btn" target="_blank">View Schedule</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Study Timetable Template</h4>
                            <p>Structured approach to organizing study sessions and subjects.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-book-open"></i> Study Schedule</span>
                                <span><i class="fas fa-table"></i> Template</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sample Today's Schedule -->
                <div class="row mt-5">
                    <div class="col-lg-8 mx-auto">
                        <div class="schedule-card fade-in">
                            <h3>Today's Schedule</h3>
                            <div class="schedule-item">
                                <div class="schedule-time">9:00 AM</div>
                                <div class="schedule-content">
                                    <h4>Mathematics Lecture</h4>
                                    <p>Room 101 - Calculus and Differential Equations</p>
                                </div>
                            </div>
                            <div class="schedule-item">
                                <div class="schedule-time">11:00 AM</div>
                                <div class="schedule-content">
                                    <h4>Programming Lab</h4>
                                    <p>Computer Lab - JavaScript Fundamentals</p>
                                </div>
                            </div>
                            <div class="schedule-item">
                                <div class="schedule-time">2:00 PM</div>
                                <div class="schedule-content">
                                    <h4>Study Group</h4>
                                    <p>Library - Data Structures Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// Practicals Page Component
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
                <!-- Main Practicals Page -->
                <div class="row mb-5">
                    <div class="col-12 text-center">
                        <div class="practical-card fade-in">
                            <div class="practical-header">
                                <h3><i class="fas fa-flask"></i> Engineering Practicals Hub</h3>
                                <span class="practical-level">All Levels</span>
                            </div>
                            <p>Access comprehensive practical manuals and laboratory exercises for all engineering disciplines.</p>
                            <div class="practical-footer">
                                <span class="practical-duration">⏱️ Self-paced</span>
                                <a href="./Features/Practicles/Practicles.html" class="btn btn-primary" target="_blank">Access Practicals</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Resource Grid -->
                <div class="resource-grid">
                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Practicles/Civil Engineering Handbook.jpg" alt="Civil Engineering Handbook">
                            <div class="resource-overlay">
                                <a href="./Features/Practicles/Civil Engineering Handbook.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Civil Engineering Handbook</h4>
                            <p>Comprehensive guide for civil engineering practical work and construction methods.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-building"></i> Civil Engineering</span>
                                <span><i class="fas fa-file-pdf"></i> Handbook</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Practicles/Handbook of EE.jpg" alt="Electrical Engineering Handbook">
                            <div class="resource-overlay">
                                <a href="./Features/Practicles/Handbook of EE.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Electrical Engineering Handbook</h4>
                            <p>Essential reference for electrical engineering laboratory experiments and projects.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-bolt"></i> Electrical Engineering</span>
                                <span><i class="fas fa-file-pdf"></i> Handbook</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Practicles/Lab Manual ME.jpg" alt="Mechanical Engineering Lab Manual">
                            <div class="resource-overlay">
                                <a href="./Features/Practicles/Lab Manual ME.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Mechanical Engineering Lab Manual</h4>
                            <p>Complete laboratory manual for mechanical engineering practical sessions.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-cogs"></i> Mechanical Engineering</span>
                                <span><i class="fas fa-file-alt"></i> Lab Manual</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Practicles/T & P Electrical.jpg" alt="Theory & Practice Electrical">
                            <div class="resource-overlay">
                                <a href="./Features/Practicles/T & P Electrical.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Theory & Practice - Electrical</h4>
                            <p>Theoretical concepts combined with practical applications in electrical engineering.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-bolt"></i> Electrical Engineering</span>
                                <span><i class="fas fa-book"></i> Theory & Practice</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// Subjects Page Component
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
                            <p>Access comprehensive subject resources and reference materials</p>
                            <a href="./Features/Subjects/Subjects.html" class="btn btn-outline-primary" target="_blank">Browse All Subjects</a>
                        </div>
                    </div>
                </div>

                <!-- Subject Resources Grid -->
                <div class="resource-grid">
                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Subjects/Java The Complete Reference.jpg" alt="Java Complete Reference">
                            <div class="resource-overlay">
                                <a href="./Features/Subjects/Java The Complete Reference.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Java: The Complete Reference</h4>
                            <p>Comprehensive guide to Java programming language and its applications.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-laptop-code"></i> Programming</span>
                                <span><i class="fas fa-book"></i> Reference Book</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Subjects/Engineering Mathematics by JOHN BIRD.jpg" alt="Engineering Mathematics">
                            <div class="resource-overlay">
                                <a href="./Features/Subjects/Engineering Mathematics by JOHN BIRD.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Engineering Mathematics</h4>
                            <p>Essential mathematics concepts for engineering students by John Bird.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-calculator"></i> Mathematics</span>
                                <span><i class="fas fa-book"></i> Textbook</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Subjects/Engineering Physics.jpg" alt="Engineering Physics">
                            <div class="resource-overlay">
                                <a href="./Features/Subjects/Engineering Physics.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Engineering Physics</h4>
                            <p>Fundamental physics principles applied to engineering problems.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-atom"></i> Physics</span>
                                <span><i class="fas fa-book"></i> Textbook</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Subjects/Engg-Chemistry.jpg" alt="Engineering Chemistry">
                            <div class="resource-overlay">
                                <a href="./Features/Subjects/Engg-Chemistry.jpg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Engineering Chemistry</h4>
                            <p>Chemistry concepts and applications in engineering fields.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-flask"></i> Chemistry</span>
                                <span><i class="fas fa-book"></i> Textbook</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Subjects/Principles of Electronics written by V K Mehta & Rohit Mehta.jpeg" alt="Principles of Electronics">
                            <div class="resource-overlay">
                                <a href="./Features/Subjects/Principles of Electronics written by V K Mehta & Rohit Mehta.jpeg" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>Principles of Electronics</h4>
                            <p>Comprehensive electronics principles by V K Mehta & Rohit Mehta.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-microchip"></i> Electronics</span>
                                <span><i class="fas fa-book"></i> Reference Book</span>
                            </div>
                        </div>
                    </div>

                    <div class="resource-card fade-in">
                        <div class="resource-image">
                            <img src="./Features/Subjects/ECE-EEE-Basics-E-Book_NRR.PNG" alt="ECE-EEE Basics">
                            <div class="resource-overlay">
                                <a href="./Features/Subjects/ECE-EEE-Basics-E-Book_NRR.PNG" class="btn" target="_blank">View Resource</a>
                            </div>
                        </div>
                        <div class="resource-content">
                            <h4>ECE-EEE Basics E-Book</h4>
                            <p>Fundamental concepts for Electronics and Electrical Engineering students.</p>
                            <div class="resource-meta">
                                <span><i class="fas fa-bolt"></i> ECE/EEE</span>
                                <span><i class="fas fa-file-pdf"></i> E-Book</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="subject-card fade-in">
                            <div class="subject-icon">
                                <i class="fas fa-calculator"></i>
                            </div>
                            <h3>Mathematics</h3>
                            <p>Calculus, algebra, statistics</p>
                            <a href="#" class="btn btn-outline-primary">Explore</a>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="subject-card fade-in">
                            <div class="subject-icon">
                                <i class="fas fa-flask"></i>
                            </div>
                            <h3>Science</h3>
                            <p>Physics, chemistry, biology</p>
                            <a href="#" class="btn btn-outline-primary">Explore</a>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="subject-card fade-in">
                            <div class="subject-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <h3>Engineering</h3>
                            <p>Mechanical, electrical, civil</p>
                            <a href="#" class="btn btn-outline-primary">Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

// About Page Component
const AboutPage = () => {
    return `
        <section class="page-header py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title fade-in">About StudyMate</h1>
                        <p class="page-description fade-in">Learn more about our mission and vision</p>
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
                            <p>Gather comprehensive learning materials from various sources and build your knowledge base effectively.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/calendar.png" alt="Time Management">
                            </div>
                            <h3>Manage Time Better</h3>
                            <p>Organize your study schedule efficiently and make the most of your learning time with our planning tools.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/letter.png" alt="Course Choices">
                            </div>
                            <h3>Course Choices</h3>
                            <p>Explore different courses and subjects to find the perfect learning path that matches your interests and goals.</p>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="about-item fade-in">
                            <div class="about-icon">
                                <img src="./assets/Logos/stack.png" alt="Explore Concepts">
                            </div>
                            <h3>Explore Concepts Differently</h3>
                            <p>Discover innovative ways to understand complex concepts through interactive learning methods and visual aids.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};