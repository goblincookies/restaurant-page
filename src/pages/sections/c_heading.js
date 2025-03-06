import { Helper } from "./a_helper";

class Headings {
    helper = new Helper();

    getHTML ( text ) {
        const headingH2 = this.helper.createElement("h2", ["heading"]);
        headingH2.textContent = text;
        return headingH2;
    };
};

export { Headings };