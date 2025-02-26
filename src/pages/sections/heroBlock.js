import "../../styles.css"
import { Headings } from "./heading";

class HeroBlock {

    headings = new Headings();

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createHTML( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };


    getHTML ( imgFile, sideText ) {
        const mainDiv = this.createHTML("div", ["hero-block","center-div"]);
        const leftImg = this.createHTML("img", ["hero"]);
        const rightDiv = this.createHTML("div", ["hero"]);
        const rightHeading = this.headings.getHTML("Wow sooo good!");
        const rightP = this.createHTML("p", ["hero"]);
        rightDiv.appendChild(rightHeading);
        rightDiv.appendChild(rightP);

        leftImg.src = imgFile;
        rightP.textContent = sideText;

        mainDiv.appendChild(leftImg);
        mainDiv.appendChild(rightDiv);

        return mainDiv;
    }
};

export { HeroBlock };