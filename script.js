// add .active class to active tab
let ids = ["tab1", "tab2", "tab3", "tab4"];
let activeId;

for (var i = 0; i < 4; i++) {

    let element = document.getElementById(ids[i]);

    element.addEventListener("click", function() {

        activeId = element.id;
        element.classList.add("active");

        for (let j = 0; j < 4; j++) {
            if (ids[j] != activeId) {
                document.getElementById(ids[j]).classList.remove("active");
            }
        }

        //change text in card:
        if (element.id == "tab1") {
            document.getElementById("p1").innerHTML = "Hi! I'm Taylor, and I'm a developer with a background in physics and electrical engineering.";
            document.getElementById("p2").innerHTML = "I love building software and am especially interested in animations and 3d on the web.";
            document.getElementById("p3").innerHTML = "Scroll down to check out some of my projects.";
        } else if (element.id == "tab2") {
            document.getElementById("p1").innerHTML = "Langauges: HTML,  CSS,  Javascript,  Python3,  C#,  Java, VB.Net";
            document.getElementById("p2").innerHTML = "Frameworks and Libraries: React.js, Three.js, Socket.io ";
            document.getElementById("p3").innerHTML = "Other Tools and Technologies: Git, Github, Node.js, Express, SQL";

        } else if (element.id == "tab3") {
            document.getElementById("p1").innerHTML = "Jan 2021- Present: RF Test Engineer @ Cobham Advanced Electronic Solutions in San Jose, CA";
            document.getElementById("p2").innerHTML = "Jan 2020 - Dec 2020: Test Engineer @ Anritsu in Morgan Hill, CA";
            document.getElementById("p3").innerHTML = "Summer 2019: EE Intern at L3Harris  in Torrance, CA.";
        } else if (element.id == "tab4") {
            document.getElementById("p1").innerHTML = "Jan 2021 - Sept 2022: Bachelor of Science in Computer Science @ Oregon State University";
            document.getElementById("p2").innerHTML = "Sept 2015 - Dec 2019: Bachelor of Science in Physics @ California Polytechnic State University, San Luis Obispo";
            document.getElementById("p3").innerHTML = ".";
        }



    });
}