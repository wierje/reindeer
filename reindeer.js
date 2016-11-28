var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var coloredReindeer = [];

for (var i = 0; i < reindeer.length; i++) {
    coloredReindeer.push(colors[i] + " " + reindeer[i]);
    console.log(coloredReindeer[i]);
    document.getElementById("coloredReindeer").innerText = coloredReindeer[i];
}