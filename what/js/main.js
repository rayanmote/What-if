// main.js - Shared JavaScript functions

// Check if user is logged in and redirect if needed
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('whatif-currentUser') || 'null');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Pages that require authentication
    const protectedPages = ['dashboard.html', 'admin-panel.html'];
    
    if (protectedPages.includes(currentPage) && !currentUser) {
        window.location.href = 'index.html';
        return false;
    }
    
    // Check admin access for admin panel
    if (currentPage === 'admin-panel.html' && currentUser && !currentUser.isAdmin) {
        window.location.href = 'student-dashboard.html';
        return false;
    }
    
    return currentUser;
}

// Initialize sample data if not exists
function initializeSampleData() {
    // Check if questions exist in localStorage
    if (!localStorage.getItem('whatif-questions')) {
        const sampleQuestions = [
            { id: 1, text: "What if humans could photosynthesize like plants?", category: "science", status: "published", date: "2023-10-15", userId: 2 },
            { id: 2, text: "What if the internet had never been invented?", category: "technology", status: "published", date: "2023-10-14", userId: 3 },
            { id: 3, text: "What if the Roman Empire never fell?", category: "history", status: "published", date: "2023-10-13", userId: 4 },
            { id: 4, text: "What if we could read each other's thoughts?", category: "philosophy", status: "pending", date: "2023-10-16", userId: 2 },
            { id: 5, text: "What if movies could be experienced through virtual reality?", category: "entertainment", status: "published", date: "2023-10-12", userId: 3 },
            { id: 6, text: "What if everyone had a universal basic income?", category: "society", status: "published", date: "2023-10-11", userId: 4 },
            { id: 7, text: "What if all plastic disappeared overnight?", category: "environment", status: "pending", date: "2023-10-16", userId: 2 },
            { id: 8, text: "What if aging could be completely reversed?", category: "health", status: "published", date: "2023-10-10", userId: 3 }
        ];
        localStorage.setItem('whatif-questions', JSON.stringify(sampleQuestions));
    }
    
    // Check if students exist in localStorage
    if (!localStorage.getItem('whatif-students')) {
        const sampleStudents = [
            { id: 1, username: "admin", email: "admin@whatif.com", password: "admin123", isAdmin: true, questions: 5, joined: "2023-09-01" },
            { id: 2, username: "student1", email: "student1@school.com", password: "student123", isAdmin: false, questions: 3, joined: "2023-09-15" },
            { id: 3, username: "student2", email: "student2@school.com", password: "student123", isAdmin: false, questions: 2, joined: "2023-09-20" },
            { id: 4, username: "student3", email: "student3@school.com", password: "student123", isAdmin: false, questions: 1, joined: "2023-10-01" }
        ];
        localStorage.setItem('whatif-students', JSON.stringify(sampleStudents));
    }
}

// Logout function
function logout() {
    localStorage.removeItem('whatif-currentUser');
    window.location.href = 'index.html';
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
    
    // Add logout event listener if logout button exists
    const logoutBtn = document.getElementById('logout-btn') || document.getElementById('admin-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});