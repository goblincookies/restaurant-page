import "../../styles.css"
import { SectionTitle } from "./sectionTitle";
import { InfoText } from "./infoText";

class InfoBlock {
    sectionTitle = new SectionTitle();
    infoText = new InfoText();

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createHTML( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };


    getHTML ( infoTitle, infoBody ) {
        const mainDiv = this.createHTML("div", ["info-block","center-div"]);
        const secTitle = this.sectionTitle.getHTML( infoTitle[0], infoTitle[1] );
        const textDiv = this.createHTML("div", ["info-text"]);

        for (const text of infoBody) {
            textDiv.appendChild( this.infoText.getHTML( text ) );
        };

        mainDiv.appendChild(secTitle);
        mainDiv.appendChild(textDiv);

        return mainDiv;
    }
};

export { InfoBlock };