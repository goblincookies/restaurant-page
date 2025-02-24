import "./styles.css"
import { testLink } from "./testLink.js"


let link = new testLink();

link.shout();

console.log("hello");

document.getElementById("story").addEventListener("click", ourStory);


function ourStory() {
    console.log("check it out!")
}