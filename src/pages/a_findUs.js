import { Spacer } from "./sections/b_spacer";
import { SectionTitle } from "./sections/b_sectionTitle";
import { HeroInfo } from "./sections/b_heroInfo";
import { Gallery } from "./sections/b_gallery";

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


class FindUs {
    spacer = new Spacer();
    sectionTitle = new SectionTitle();
    heroInfo = new HeroInfo();
    gallery = new Gallery();

    imgAssets = [ 
        ordering,
        cookie,
        bag, 
        cups,
        // truck,
        store,
        spooky,
        orange,
        candle,
        snow,
        strawberry,
        mocha,
        green,
        // holiday
    ];

    heroText = [
        illustration,
        "We're Open!",
        "Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post.",
        "12th & Park",
        "8pm - 4am"
    ]

    getPage() {
            const mainDiv = document.createElement("div");            
            mainDiv.appendChild( this.spacer.getHTML( 120 ) );
            mainDiv.appendChild( this.sectionTitle.getHTML( "hello", "we're open!" ) );
            mainDiv.appendChild( this.spacer.getHTML( 120 ) );
            mainDiv.appendChild( this.heroInfo.getHTML( this.heroText ) );
            mainDiv.appendChild( this.spacer.getHTML( 120 ) );
            mainDiv.appendChild( this.gallery.getHTML( this.imgAssets ) );
            mainDiv.appendChild( this.spacer.getHTML( 120 ) );

            return mainDiv;
    };
    
};

export { FindUs };