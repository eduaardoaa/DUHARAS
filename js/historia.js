document.addEventListener("DOMContentLoaded", function() {
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    const item4 = document.querySelector(".item4");

    item1.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Tudo sobre o cavalo na Independencia do Brasil", this);
    });

    item1.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    
    function showText(text, item) {
        const textContainer = document.createElement("div");
        textContainer.classList.add("hover-text");
        textContainer.innerHTML = text;
        item.appendChild(textContainer);
    }

    function hideText() {
        const textContainer = document.querySelector(".hover-text");
        if (textContainer) {
            textContainer.remove();
        }
    }
});