import { Spacer } from "./sections/b_spacer";
import { SectionTitle } from "./sections/b_sectionTitle";
import { HeroMenu } from "./sections/b_heroMenu";
import { Menu } from "./sections/b_menu";

import filecupcake1 from "../assets/images/cupcake1c.png";
import filecupcake2 from "../assets/images/cupcake2c.png";
import filecupcake3 from "../assets/images/cupcake3c.png";
// import filecupcake3c from "../assets/images/cupcake3c.png";


import menuFile1 from "../assets/images/bonfire.jpg";
import menuFile2 from "../assets/images/candle.jpg";
import menuFile3 from "../assets/images/cookie.jpg";
import menuFile4 from "../assets/images/cups.jpg";
import menuFile5 from "../assets/images/snow.jpg";
import menuFile6 from "../assets/images/green.jpg";
import menuFile7 from "../assets/images/strawberry.jpg";
import menuFile8 from "../assets/images/mocha.jpg";
import menuFile9 from "../assets/images/orange.jpg";



class TheMenu {
    spacer = new Spacer();
    sectionTitle = new SectionTitle();
    heroMenu = new HeroMenu();
    menu = new Menu();

    menuTitleA = "past"
    menuTitleB = "creations"
    menuText = [this.menuTitleA, this.menuTitleB];

    heroAssets = [
        [filecupcake1, "Big Bang", "so crunchy!"],
        [filecupcake2, "Super Nova", "the best explosion!!"],
        [filecupcake3, "Asteroid", "sweet and gooey"]
    ];
    menuAssets = [
        [menuFile1, "Big Bang", "so crunchy!"],
        [menuFile2, "Super Nova", "the best explosion!!"],
        [menuFile3, "Asteroid", "sweet and gooey"],
        [menuFile4, "Big Bang", "so crunchy!"],
        [menuFile5, "Super Nova", "the best explosion!!"],
        [menuFile6, "Asteroid", "sweet and gooey"],
        [menuFile7, "Big Bang", "so crunchy!"],
        [menuFile8, "Super Nova", "the best explosion!!"],
        [menuFile9, "Asteroid", "sweet and gooey"],
    ];

    getPage() {
        const mainDiv = document.createElement("div");
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.sectionTitle.getHTML( "everynight", "observations" ));
        mainDiv.appendChild( this.heroMenu.getHTML( this.heroAssets ));
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.menu.getHTML( this.menuText,  this.menuAssets ));
        mainDiv.appendChild( this.spacer.getHTML( 120 ));

        return mainDiv;
    };
};

export { TheMenu };