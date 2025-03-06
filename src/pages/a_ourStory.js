import { Spacer } from "./sections/b_spacer";
import { HeroDisplay } from "./sections/b_heroDisplay";
import { SectionTitle } from "./sections/b_sectionTitle";
import { InfoBlock } from "./sections/b_infoBlock";
import { Gallery } from "./sections/b_gallery";

import filecupcake1 from "../assets/images/cupcake4c.png";
import illustration from "../assets/images/illustration.png";
import ordering from "../assets/images/ordering.jpg";
import cookie from "../assets/images/cookie.jpg";
import bag from "../assets/images/bag.jpg";
import cups from "../assets/images/cups.jpg";
import truck from "../assets/images/truck.jpg";
import store from "../assets/images/store.jpg";
import spooky from "../assets/images/spooky.jpg";
import orange from "../assets/images/orange.jpg";
import candle from "../assets/images/candle.jpg";
import snow from "../assets/images/snow.jpg";
import strawberry from "../assets/images/strawberry.jpg";
import mocha from "../assets/images/mocha.jpg";
import green from "../assets/images/green.jpg";
import holiday from "../assets/images/holiday.jpg";


class OurStory {
    spacer = new Spacer();
    heroDisplay = new HeroDisplay();
    sectionTitle = new SectionTitle();
    infoBlock = new InfoBlock();
    gallery = new Gallery();

    imgAssets = [ 
        cups,
        orange,
        snow,
        mocha,
        green,
        cookie,
        // ordering,
        // truck,
        // store,
        spooky,
        candle,
        // bag, 
        strawberry,
        // holiday
    ];

    heroTitle = "Wow, so good!"
    heroCopy = "Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post."

    heroText = [this.heroTitle, this.heroCopy];

    // infoTitle = ["things you really", "should know"]
    
    infoA = ["We have a 48 cupcake limit",  "Sometimes you're picking up a couple cakes for tomorrow, or for a friend, or a couple friends, or your family, or your friends family, or your families friends families. But seriously, come back tomorrow. They'll be fresher."]
    infoB = ["different every night",  "In by an appetite no humour returned informed. Possess so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away."]
    infoC = ["identify a star, get paid",  "Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. Open they an busy they my such high. An active dinner wishes at unable hardly no talked on."]
    infoD = ["No requests, only dares",  "Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction can dependent one bed situation attempted. His she are man their spite avoid. Her pretended fulfilled extremely"]

    infoText = [ this.infoA, this.infoB, this.infoC, this.infoD ];

    getPage() {
        const mainDiv = document.createElement("div");
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.heroDisplay.getHTML( filecupcake1, this.heroText));
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.sectionTitle.getHTML("every night is", "different"));
        mainDiv.appendChild( this.infoBlock.getHTML( this.infoText ));
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.gallery.getHTML( this.imgAssets ));
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        
        return mainDiv;
    }

};

export { OurStory };