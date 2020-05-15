document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.pussel').forEach(image => {
        image.onclick = () => {
                const id = image.dataset.id;
                const img = image.dataset.image;
                if (img == "map") {
                    image.src = "/static/img/loy/loy" + id + ".jpg"
                    image.dataset.image = "loy"
                } else {
                    image.src = "/static/img/loy/map" + id + ".jpg"
                    image.dataset.image = "map"
                }
            };
        });
    });