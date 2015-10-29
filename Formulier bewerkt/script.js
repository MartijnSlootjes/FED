var projectKnop = document.getElementById("showProject");
        var stageKnop = document.getElementById("showStage");
        var projectChecked = document.getElementById("project");
        var stageChecked = document.getElementById("stage");

        // 1. Klik op "knop voor project"
        projectKnop.onclick = function() {
            // Roep functie displayProject
            displayProject();
        }

        // 1. Klik op "Voor stage"
        stageKnop.onclick = function() {
            // Roep functie displayProject
            displayStage();
        }

        function displayProject(){
            // Verander display none Projectformulier naar display block
            projectChecked.style.display = 'block';
            // Verberg stage formulier
            stageChecked.style.display = "none";
        }

        function displayStage() {
            // Verander display none Stageformulier naar display block
            stageChecked.style.display = "block";
            // Verberg project formulier
            projectChecked.style.display = "none";
        }