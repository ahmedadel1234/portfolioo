
    document.onreadystatechange = function() {
        if (document.readyState !== "complete") {
            document.querySelector(
            "body").style.visibility = "hidden";
            document.querySelector(
            "body").style.height = "100vh";
            document.querySelector(
            "body").style.overflowY = "hidden";
            document.querySelector(
            "#loader").style.visibility = "visible";
        } else {
            document.querySelector(
            "#loader").style.display = "none";
             document.querySelector(
            "body").style.height = "100%";
            document.querySelector(
                "body").style.overflowY = "scroll";
            document.querySelector(
            "body").style.visibility = "visible";
        }
    };
