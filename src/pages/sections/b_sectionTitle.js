import { Helper } from "./a_helper";

class SectionTitle {
    helper = new Helper();

    getHTML ( topText, bottomText ) {
        const mainDiv = this.helper.createElement("div", ["center-div"]);
        const topP = this.helper.createElement("p", ["section-text"]);
        const botH2 = this.helper.createElement("h2", ["section-text"]);
    
        topP.textContent = topText;
        botH2.textContent = bottomText;

        mainDiv.appendChild(topP);
        mainDiv.appendChild(botH2);

        return mainDiv;
    }
};

export { SectionTitle };