document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById("main-nav");

    if (navContainer) {
        navContainer.innerHTML = `
            <ul class="nav-links">
                <li><a href="index.html">Master Saint Germain</a></li>
                <li><a href="alchemy.html">Alchemy From Within™</a></li>
                <li><a href="moneymastery.html">Money Mastery From Within™</a></li>
                <li><a href="spiritualalchemy.html">Spiritual Alchemy</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
		        <li><a href="tibetan.html">Tibetan Classes</a></li>


            </ul>
        `;
    }
});