window.addEventListener("load", function() {
    const currentPath = window.location.pathname; 

    const navLinks = document.querySelectorAll(".navbar a"); 

    for (const link of navLinks) {
        const linkPath = link.getAttribute("href"); 

        if (linkPath && currentPath.includes(linkPath)) {
            link.classList.add("is-active");
            console.log("Added 'active' class to:", link); 
            break; 
        }
    }
});