import "./styles.css"
import { OurStory } from "./pages/ourStory";
import { TheMenu } from "./pages/theMenu";

const content = document.getElementById("content");

const ourStory = new OurStory();
const theMenu = new TheMenu();

// let ourStoryPage = ourStory.getPage();

// document.getElementById("story").addEventListener("click", ourStory);
// function ourStory() {
//     console.log("check it out!")
// }


content.appendChild( theMenu.getPage() );
