import "../../styles.css"

class InfoText {

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createHTML( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };


    getHTML ( infoText ) {

        const mainDiv = this.createHTML("div", ["info"]);
        
        const infoTitle = this.createHTML( "h3", ["info"]);
        const infoBody = this.createHTML( "p", ["info"]);

        infoTitle.textContent = infoText[0];
        infoBody.textContent = infoText[1];

        mainDiv.appendChild(infoTitle);
        mainDiv.appendChild(infoBody);

        return mainDiv;
    };
};

export { InfoText };