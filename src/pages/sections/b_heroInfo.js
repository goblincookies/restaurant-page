import { Helper } from "./a_helper";
import { Headings } from "./c_heading";

class HeroInfo {
    helper = new Helper();
    headings = new Headings();

    getHTML ( assets ) {
        // assets :
        // [    'img.file',
        //      'HEADING TITLE',
        //      'INFO COPY'
        //      'STYLED TEXT'
        //      'BOLDED TEXT'
        // ]

        // <!-- HERO FIND US -->

        // <div class="container center center-h">

        //     <div class="hero center-v display">
        //         <div class="circle pad-s item-border">
        //             <img src="./assets/images/illustration@2x.png" alt="" class=" circle cover">
        //         </div>
        //     </div>

        //     <div class="stack hero">

        //         <div class="headings">
        //             <h2 class="heading"> HEADING TITLE </h2>
        //         </div>

        //         <p class="hero"> INFO COPY </p>
        //         <h2 class="section-text"> STYLED TEXT </h2>
        //         <p class="section-text"> BOLDED TEXT </p>
        //     </div>
        // </div>


        const mainDiv = this.helper.createElement("div", ["container","center", "center-h"]);
        const leftDiv = this.helper.createElement("div", ["circle", "pad-s", "item-border"]);
        const leftImg = this.helper.createElement("img", ["circle", "cover"])
        leftImg.src = assets[0];
        leftDiv.appendChild(leftImg);

        const rightDiv = this.helper.createElement("div", ["stack", "hero"]);
        const infoP = this.helper.createElement("p", ["hero"] );
        const infoH2 = this.helper.createElement("h2", ["section-text"] );
        const infoBoldP = this.helper.createElement("p", ["section-text"] );

        infoP.textContent = assets[2];
        infoH2.textContent = assets[3];
        infoBoldP.textContent = assets[4];

        rightDiv.appendChild( this.headings.getHTML( assets[1] ) );
        rightDiv.appendChild( infoP );
        rightDiv.appendChild( infoH2 );
        rightDiv.appendChild( infoBoldP );

        mainDiv.appendChild( leftDiv );
        mainDiv.appendChild( rightDiv );

        return mainDiv;
    }
};

export { HeroInfo };