import "./styles.css"
import { OurStory } from "./pages/a_ourStory";
import { TheMenu } from "./pages/a_theMenu";
import { FindUs } from "./pages/a_findUs";


const page = {
    UNKNOWN: 0,
    OURSTORY: 1,
    THEMENU: 2,
    FINDUS: 3,
}

const ourStory = new OurStory();
const theMenu = new TheMenu();
const findUs = new FindUs();

// SET UP FIRST PAGE
const content = document.getElementById("content");
let currentPage = page.OURSTORY;
content.appendChild( ourStory.getPage() );



document.getElementById("story").addEventListener("click", switchPage );
document.getElementById("menu").addEventListener("click", switchPage );
document.getElementById("find").addEventListener("click", switchPage );


function switchPage( e ) {
    console.log("registered click")
    
    let newPage = page.UNKNOWN;
    
    console.log(`logging current ${currentPage} and new ${newPage}` )

    if (e.currentTarget.id == "story" ) { newPage = page.OURSTORY };
    if (e.currentTarget.id == "menu" ) { newPage = page.THEMENU };
    if (e.currentTarget.id == "find" ) { newPage = page.FINDUS };
    
    console.log(`logging current ${currentPage} and new ${newPage}` )
    
    if (currentPage != newPage) {
        console.log(`switching from ${currentPage} to ${newPage}` )
        currentPage = newPage;
        content.textContent = "";
        switch ( newPage ) {
            case page.OURSTORY:
                content.appendChild( ourStory.getPage() );
                break;

            case page.THEMENU:
                content.appendChild( theMenu.getPage() );
                break;

            case page.FINDUS:
                content.appendChild( findUs.getPage() );
                break;

            default:
                console.log("error trying to find this page..")
                break;
        };
    };
};


 
