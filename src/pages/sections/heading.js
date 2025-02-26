import "../../styles.css"

class Headings {

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createHTML( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };


    getHTML ( text ) {
        const headingH2 = this.createHTML("h2", ["heading"]);
        headingH2.textContent = text;
        return headingH2;
    };
};

export { Headings };