import { Helper } from "./a_helper";
import { Headings } from "./c_heading";

class HeroDisplay {

    helper = new Helper();
    headings = new Headings();


    // <!-- HERO BLOCK -->

    // <div class="container center center-h">
        
    //     <div class="hero center-v display">
    //         <img src="./assets/images/cupcake4.png" alt="" class="hero">
    //         <div class="checker shift-up height-1"></div>
    //     </div>
        
    //     <div class="stack hero">
            
    //         <div class="headings">
    //             <h2 class="heading">Wow, So Sweet!</h2>
    //         </div>

    //         <p class="hero"> Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post.</p>

    //     </div>
    // </div>



    getHTML ( imgFile, sideText ) {
        // sideText = [ "TITLE", "COPY COPY COPY COPY" ]
        const mainDiv = this.helper.createElement("div", ["container","center", "center-h"]);

        const leftDiv = this.helper.createElement("div", ["hero", "center-v", "display"]);
        const leftImg = this.helper.createElement("img", ["hero"]);
        leftImg.src = imgFile;
        const checkerDiv = this.helper.createElement("div", ["checker", "shift-up", "height-1"])

        leftDiv.appendChild(leftImg);
        leftDiv.appendChild(checkerDiv);
        
        
        const rightDiv = this.helper.createElement("div", ["stack", "hero"]);
        rightDiv.appendChild( this.headings.getHTML(sideText[0]));
        const heroP = this.helper.createElement("p", ["hero"])
        heroP.textContent = sideText[1];
        rightDiv.appendChild(heroP);

        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(rightDiv);
        
        return mainDiv;
    }
};

export { HeroDisplay };