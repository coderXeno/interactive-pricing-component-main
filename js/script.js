let slider = document.querySelector("#slider");
let price = document.querySelector(".number.price");
let views = document.querySelector(".first.views");
let pageviews = ["1 0 K", "5 0 K", "1 0 0 K", "5 0 0 K", "1 M"];
let money = [8, 12, 16, 24, 36];
views.innerHTML = `${pageviews[slider.value]} &nbsp; P A G E V I E W S`;
price.innerHTML = `$${money[slider.value]}`;
slider.oninput = function () {
	views.innerHTML = `$ ${pageviews[this.value]} &nbsp; P A G E V I E W S`;
	price.innerHTML = `$${money[slider.value]}`;
	document.body.style.touchAction = "none";
};
slider.addEventListener("touchstart", function () {
	document.body.style.touchAction = "none";
});
slider.addEventListener("touchend", () => {
	document.body.style.touchAction = "auto";
});
// let inter = null;
// const setNumber = () => {
// 	inter = setInterval(() => {
// 		document.querySelector(".number").innerHTML =
// 			"$" + Number(slider.value).toFixed(2);
// 	}, 100);
// };
// slider.addEventListener("change", setNumber);
// slider.addEventListener("mouseleave", () => {
// 	clearInterval(inter);
// });

// setNumber();
