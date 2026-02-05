const btn = document.querySelector("#btn");
const body = document.body;

btn.addEventListener('click', () => {
    if (body.classList.contains("bg-success")) {
        body.classList.remove("bg-success");
        body.classList.add("bg-danger");
    } else {
        body.classList.remove("bg-danger");
        body.classList.add("bg-success");
    }
});

 