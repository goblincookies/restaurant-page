import "../../styles.css"
import { Headings } from "./heading";

class HeroMenu {

    headings = new Headings();

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createHTML( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };


    getHTML ( assets ) {
        // ['img', 'title'],['img', 'title'],['img', 'title'],

        const mainDiv = this.createHTML("div", ["hero-container","center-div"]);
        const contDiv = this.createHTML("div", ["hero-menu-content"]);

        for (const el of assets ) {
            const assetDiv = this.createHTML("div", ["menu-hero-item"]);
            const menuImg = this.createHTML("img", ["hero"]);
            menuImg.src = el[0];

            const menuTitle = this.createHTML( "h3", ["menu"]);
            menuTitle.textContent = el[1];
            assetDiv.appendChild( menuImg );
            assetDiv.appendChild( menuTitle );
            contDiv.appendChild(assetDiv);
        };

        mainDiv.appendChild(contDiv);

        const outline = this.createHTML("div", ["outline"]);
        mainDiv.appendChild(outline)

        return mainDiv;
    }
};

export { HeroMenu };