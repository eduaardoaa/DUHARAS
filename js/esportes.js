document.addEventListener("DOMContentLoaded", function() {
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    const item4 = document.querySelector(".item4");

    item1.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a vaquejada, esse esporte que é uma tradição do nordeste, se espalhando por todas as regioes do Brasil e que vem crescendo cada vez mais", this);
    });

    item1.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    item2.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a Hipismo, esse esporte olimpico, conhecido mundialmente", this);
    });

    item2.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    item3.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre a Corrida de cavalo, esporte de alto valor, que exige de cavalos velozes", this);
    });

    item3.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
        this.style.transition = "transform 0.3s";
        hideText();
    });

    item4.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s";
        showText("Aqui você vai encontrar tudo sobre o Team Penning, esporte que lida alem do cavalo com a participação do gado", this);
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