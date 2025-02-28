function callUs() {

    window.open("tel:+918433569122","_blank")
}

function whatsappUs() {

        <!-- Event snippet for Whatsapp Button Clicked conversion page
    In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
    <script>
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-16461513419/ch44CIeqi6QaEMuFu6k9',
          'value': 1.0,
          'currency': 'INR',
          'event_callback': callback
      });
      return false;
    }
    </script>


    window.open("https://wa.me/918433569122/?text=मला%20अधिक%20माहिती%20हवी%20आहे.","_blank");
}
// Function to be called when the section is visible
function onSectionVisible(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            animateMetrix(); // Call your function
            observer.unobserve(entry.target); // Optional: Stop observing after first trigger
        }
    });
}

// Target section
const section = document.querySelector("#metrix-section");

// Create an Intersection Observer
const observer = new IntersectionObserver(onSectionVisible, {
    root: null, // Use viewport
    threshold: 0.5 // Trigger when 50% of the section is visible
});

// Start observing the section
observer.observe(section);


// Number Counter Animation
function animateCounter(id, target) {
    gsap.to(id, { innerText: target, duration: 2, snap: { innerText: 1 } });


    // document.getElementById(id).innerText=
}
function animateMetrix(){
    animateCounter("#clients-counter1", 5000);
    animateCounter("#clients-counter2", 98);
    animateCounter("#clients-counter3", 100);
}
// youtube iframe
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".youtube-wrapper").forEach(wrapper => {
        wrapper.addEventListener("click", function () {
            if (this.querySelector("iframe")) return; 

            const videoUrl = this.getAttribute("data-video") + "?autoplay=1";
            const iframe = document.createElement("iframe");
            iframe.setAttribute("src", videoUrl);
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
            iframe.setAttribute("allowfullscreen", "true");
            iframe.classList.add("w-full", "h-64");

            this.innerHTML = ""; // Remove the thumbnail + play button
            this.appendChild(iframe); // Insert video
        });
    });
});
