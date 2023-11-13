document.addEventListener("DOMContentLoaded", function() {
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    const item4 = document.querySelector(".item4");

    item1.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a raça do cavalo Quarto de Milha, uma das raças mais famosas de cavalo no Brasil", this);
    });

    item1.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    item2.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a raça do cavalo Paint Horse, o famoso cavalo pintado", this);
    });

    item2.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    item3.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a raça do cavalo Appaloosa, o dálmata dos cavalos, com sua pelagem exótica", this);
    });

    item3.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    item4.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a raça do cavalo BH, o Brasileiro de Hipismo especializado em seus grandes saltos", this);
    });

    item4.addEventListener("mouseout", function() {
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
