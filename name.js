(function init() {
    window.onload = function() {
        const nameInputBox = document.getElementById("nameInputBox");
        const nameRating = document.getElementById("nameRating");
        document.getElementById("nameInputBox").addEventListener("input", () => {
            nameRating.innerHTML = `I give your name a ${rateName(nameInputBox.value)}/10.`;
        });
    }   

    function rateName(name) {
        name = name.split(" ")[0].toLowerCase();

        switch (name) {
            case "tom":
                return 11;
            case "irina":
                return 10;
            default:
                sum = 0;
                for (let i = 0; i < name.length; i++) {
                    sum += name.charCodeAt(i);
                }
                return sum % 10;
        }
    }
})();