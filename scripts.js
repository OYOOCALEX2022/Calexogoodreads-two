<script>
  // Function to handle navigation link clicks
  function handleNavLinkClick(linkId) {
    const sections = {
      "home": "home-section",
      "books": "books-section",
      "about": "about-section",
      "contact": "contact-section"
    };

    const targetSection = document.getElementById(sections[linkId]);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    }
  }
</script>
