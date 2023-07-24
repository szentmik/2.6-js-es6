/*
	You are to use arrow functions for this task.

	Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

	Hint:
	- Look for interval setting functions.
	- You should use DOM Manipulation to update the style of <div> element.

	Code Challenge:
	- Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/


const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];


const square = document.querySelector("div");
const checkbox = document.querySelector("#checkbox");

const colorChange = () => {
	let x = 0;

	setInterval(() => {
		// console.log(colours[x].color);
		
		if (checkbox.checked) {
			// console.log("checked");
			x = x;
		} else {
			x++;
		}
		
		if (x === colours.length) {
			x = 0;
		}
		square.style.backgroundColor = colours[x].color;
	}, 1000);
};

colorChange();