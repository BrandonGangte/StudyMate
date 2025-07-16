/**
 * StudyMate Router - JavaScript-based routing system
 * Handles navigation between different pages/views
 */

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    /**
     * Initialize the router
     */
    init() {
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
        
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const hash = e.target.getAttribute('href');
                this.navigate(hash);
            }
        });
    }

    /**
     * Register a route
     */
    register(path, component) {
        this.routes[path] = component;
    }

    /**
     * Navigate to a route
     */
    navigate(path) {
        window.location.hash = path;
    }

    /**
     * Handle route changes
     */
    async handleRoute() {
        const hash = window.location.hash || '#home';
        const route = hash.substring(1); // Remove the #
        
        // Update active navigation
        this.updateActiveNav(hash);
        
        // Load the component
        if (this.routes[route]) {
            this.currentRoute = route;
            await this.loadComponent(route);
        } else {
            // Default to home if route not found
            this.navigate('#home');
        }
    }

    /**
     * Load a component
     */
    async loadComponent(route) {
        const app = document.getElementById('app');
        
        // Add loading state
        app.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
        
        try {
            // Get the component
            const component = this.routes[route];
            
            // Simulate loading delay for better UX
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Render the component
            if (typeof component === 'function') {
                app.innerHTML = await component();
            } else {
                app.innerHTML = component;
            }
            
            // Initialize any component-specific functionality
            this.initializeComponent(route);
            
        } catch (error) {
            console.error('Error loading component:', error);
            app.innerHTML = '<div class="error-message">Error loading page. Please try again.</div>';
        }
    }

    /**
     * Initialize component-specific functionality
     */
    initializeComponent(route) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Initialize animations
        const animatedElements = document.querySelectorAll('.fade-in');
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
        
        // Component-specific initialization
        switch (route) {
            case 'study-notes':
                this.initStudyNotes();
                break;
            case 'lectures':
                this.initLectures();
                break;
            case 'hot-questions':
                this.initHotQuestions();
                break;
            case 'schedule':
                this.initSchedule();
                break;
            case 'practicals':
                this.initPracticals();
                break;
            case 'subjects':
                this.initSubjects();
                break;
        }
    }

    /**
     * Update active navigation
     */
    updateActiveNav(hash) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Component-specific initialization methods
     */
    initStudyNotes() {
        // Initialize study notes functionality
        console.log('Study Notes page initialized');
    }

    initLectures() {
        // Initialize lectures functionality
        console.log('Lectures page initialized');
    }

    initHotQuestions() {
        // Initialize hot questions functionality
        console.log('Hot Questions page initialized');
    }

    initSchedule() {
        // Initialize schedule functionality
        console.log('Schedule page initialized');
    }

    initPracticals() {
        // Initialize practicals functionality
        console.log('Practicals page initialized');
    }

    initSubjects() {
        // Initialize subjects functionality
        console.log('Subjects page initialized');
    }

    /**
     * Get current route
     */
    getCurrentRoute() {
        return this.currentRoute;
    }

    /**
     * Check if route exists
     */
    routeExists(route) {
        return this.routes.hasOwnProperty(route);
    }
}

// Create global router instance
window.router = new Router();