import { Spacer } from "./sections/spacer";
import { SectionTitle } from "./sections/sectionTitle";
import { HeroMenu } from "./sections/heroMenu";
import cakeA  from "../assets/images/cupcake@2x.png";
import cakeB  from "../assets/images/cupcake@2x.png";
import cakeC  from "../assets/images/cupcake@2x.png";



class TheMenu {
    spacer = new Spacer();
    sectionTitle = new SectionTitle();
    heroMenu = new HeroMenu();

    heroAssets = [
        [cakeA, "Big Bang"],
        [cakeB, "Super Nova"],
        [cakeC, "Asteroid"]
    ]
    getPage() {
        const mainDiv = document.createElement("div");
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.sectionTitle.getHTML( "everynight", "observations" ));
        mainDiv.appendChild( this.heroMenu.getHTML( this.heroAssets ));
        return mainDiv;
    }

};

export { TheMenu };