const demoDiv = document.querySelector("div");
demoDiv.className = "warning";

const activeDiv = document.querySelector(".active");
activeDiv.classList.add("hidden");
activeDiv.classList.remove("hidden");
activeDiv.classList.toggle("hidden");
activeDiv.classList.replace("active", "warning");
