const compare = document.getElementById("compare");
const divider = document.getElementById("divider");
const colorLayer = document.getElementById("colorLayer");
const scene = document.getElementById("scene");

compare.addEventListener("input", (event) => {
  const value = event.target.value;
  divider.style.left = `${value}%`;
  colorLayer.style.width = `${value}%`;
});

scene.addEventListener("mousemove", (event) => {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const rect = scene.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  scene.style.transform = `perspective(900px) rotateY(${x * 1.2}deg) rotateX(${y * -1.2}deg)`;
});

scene.addEventListener("mouseleave", () => {
  scene.style.transform = "";
});
