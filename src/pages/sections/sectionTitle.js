import "../../styles.css"

class SectionTitle {

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createHTML( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };


    getHTML ( topText, bottomText ) {
        const mainDiv = this.createHTML("div", ["center-div"]);
        const topP = this.createHTML("p", ["section-text"]);
        const botH2 = this.createHTML("h2", ["section-text"]);
    
        topP.textContent = topText;
        botH2.textContent = bottomText;

        mainDiv.appendChild(topP);
        mainDiv.appendChild(botH2);

        return mainDiv;
    }
};

export { SectionTitle };