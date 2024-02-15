

// if (location.reload()) {

//   window.location.href = "lodingScreen.html";
// }






document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const boxContainer = document.querySelector(".box-container");
  const projectDetails = document.getElementById("project-details");

  const names = ["AYUSH PATEL", "Web Developer"];

  let currentIndex = 0;

  function updateName() {
    nameElement.textContent = names[currentIndex];
    currentIndex = (currentIndex + 1) % names.length;
  }

  setInterval(updateName, 1000); // Change name every 1 second (1000 milliseconds = 1 second)




  boxContainer.addEventListener("click", function (event) {
  const clickedBox = event.target.closest(".box");

  if (clickedBox) {
    const projectType = clickedBox.getAttribute("data-project");
    showProjectDetails(projectType);
  }
});

boxContainer.addEventListener("mouseleave", function () {
  // Hide project details when mouse is moved away from the box
  projectDetails.style.display = "none";
});


  function showProjectDetails(projectType) {
    projectDetails.style.display = "block";
    let detailsContent = "";
    switch (projectType) {
      case "JavaScript":
        detailsContent = `<strong><u>Stone, Paper & Scissors Game:</u></strong> <br>
                    <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                    Dive into the classic excitement of Stone, Paper & Scissors with this engaging web-based game! Crafted with a
                    blend of HTML, CSS, and JavaScript, this interactive experience brings the timeless hand game to your
                    fingertips, allowing you to test your wits against the computer.
                </p> <br>

                <strong><u>Bubble POP Game:</u></strong> <br>
                    <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                    Bubble Pop is an engaging and interactive browser game built with JavaScript. The objective of the game is to pop bubbles before they reach the top of the screen.
                </p><br>

                <strong><u>Weather App:</u></strong> <br>
                    <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                    A Weather App created using JavaScript is a web application that allows users to check the current weather conditions for a specific location. This application typically leverages APIs (Application Programming Interfaces) to fetch real-time weather data and displays it in a user-friendly manner.
                </p><br>
                `;
        break;
      case "HTMLCSS":
        detailsContent = `
                 <strong><u>School Dashboard :</u></strong> <br>
                    <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                    The School Dashboard is a modern and user-friendly web interface designed to provide a comprehensive overview of key information and features related to the school environment
                </p> <br>

                <strong><u>Netflix Clone  :</u></strong> <br>
                    <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                    A web page designed to replicate the Netflix user interface using HTML and CSS. The clone features a similar layout, including a navigation bar, hero section, and grid-based display of movie or TV show thumbnails. The design aims to capture the essence of the Netflix streaming platform, with attention to detail in styling and responsiveness for a seamless user experience.
                </p> <br>

                <strong><u>Amazon Clone :</u></strong> <br>
                    <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
                    The Amazon Clone is a web application that replicates the look and feel of the Amazon website. It is built using HTML and CSS to create a user interface that closely resembles the original Amazon site. The application typically includes features such as product listings, a search bar, navigation menus, and product details pages.
                </p> <br>

                    `;
        break;
      case "Java":
        detailsContent =
          `
          <strong><u>Hotel Reservation System :</u></strong> <br>
          <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
          Our Reservation System streamlines the process of managing guest accommodations. It allows for the creation,
viewing, editing, and deletion of reservations, providing a comprehensive solution for hotel management.
      </p> <br>
      `;
        break;
      case "Kotlin":
        detailsContent = `
        <strong><u>Medicine Donation :</u></strong> <br>
        <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
        Our online medicine donation application, built using Android Kotlin, aims to revolutionize the way people
donate and access essential medicines. With this user-friendly and secure platform, individuals can easily
donate their unused or surplus medications to those in need.

    </p> <br>

    <strong><u>Note Reminder  :</u></strong> <br>
        <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">
        Our Simple Note Reminder application, built using Kotlin, is designed to help users stay organized and never
miss important tasks or appointments. With its intuitive user interface and powerful features, the app provides
a convenient and reliable way to manage and set reminders for notes, tasks, and events.


    </p> <br>
    `;
        break;
      default:
        detailsContent = "No details available.";
    }

    projectDetails.innerHTML = detailsContent;
  }
});





document.addEventListener('DOMContentLoaded', function () {
  const githubIcon = document.getElementById('github');
  const linkedinIcon = document.getElementById('linkedin');
  const instagramIcon = document.getElementById('instagram');

  githubIcon.addEventListener('click', function () {
      window.open('https://github.com/Ayush1350', '_blank');
  });

  linkedinIcon.addEventListener('click', function () {
      window.open('https://www.linkedin.com//in//ayush1350', '_blank');
  });

  instagramIcon.addEventListener('click', function () {
      window.open('https://www.instagram.com/swag_of_patel/', '_blank');
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Get references to the loading container and other content
  var loadingContainer = document.getElementById("loading-container");
  var hiddenDiv = document.querySelector(".hidden-div");

  // Show loading container and apply styles to body
  document.body.classList.add("loading-container-body");
  loadingContainer.style.display = "block";

  // After 3 seconds, hide loading container, show other content, and remove body styles
  setTimeout(function () {
    loadingContainer.style.display = "none";
    hiddenDiv.classList.remove("hidden-div");
    document.body.classList.remove("loading-container-body");
  }, 3000);
});


function loadPage(value) {
  window.location.href = `../LodingScreen/lodingScreen.html?value=${value}`;
}






