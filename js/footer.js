// Centralized footer component
// The year will automatically update to the current year
(function() {
    function insertFooter() {
        if (document.body) {
            const currentYear = new Date().getFullYear();
            const footer = document.createElement('footer');
            footer.innerHTML = `<p>&copy; ${currentYear} Wells for Boys. All rights reserved.</p>`;
            document.body.appendChild(footer);
        }
    }
    
    // If DOM is already loaded, insert immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertFooter);
    } else {
        insertFooter();
    }
})();

