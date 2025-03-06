import { Helper } from "./a_helper";
import { Headings } from "./c_heading";

class HeroMenu {
    helper = new Helper();
    headings = new Headings();

    getHTML ( assets ) {
        // assets :
        // [    [ 'img.file', 'title' ],
        //      [ 'img.file', 'title' ],
        //      [ 'img.file', 'title' ],
        // ]


        // <!-- MENU HERO -->

        // <div class="container center wide content display">

        //     <div class="center-h-b menu-hero">

        //         <div class="listing">
        //             <img src="./assets/images/cupcake1.png" alt="" class="menu-img-s">
        //             <h3 class="info">Big Bang</h3>
        //             <p class="info"> Now natural saw passage offices you minuter. At by</p>
        //         </div>

        //         <div class="listing">
        //             <img src="./assets/images/cupcake3.png" alt="" class="menu-img-m">
        //             <h3 class="info">Big Bang</h3>
        //             <p class="info"> Now natural saw passage offices you minuter. At by</p>
        //         </div>

        //         <div class="listing">
        //             <img src="./assets/images/cupcake2.png" alt="" class="menu-img-s">
        //             <h3 class="info">Big Bang</h3>
        //             <p class="info"> Now natural saw passage offices you minuter. At by</p>
        //         </div>
        //     </div>

        //     <div class="blue round height-1 shift-down wide">
        //         <div class="checker-2 height-4 round-top border-bottom-down"></div>
        //     </div>

        // </div>


        const mainDiv = this.helper.createElement("div", ["container","center", "wide", "content", "display"]);
        const contDiv = this.helper.createElement("div", ["center-h-b", "menu-hero"]);
        let i = 0;
        for (const el of assets ) {
            // el = [ 'img.file', 'title' ]
            const listingDiv = this.helper.createElement("div", ["listing"]);
            const menuImg = this.helper.createElement("img", ["menu-img-s"]);
            menuImg.src = el[0]
            const infoH3 = this.helper.createElement("h3", ["info"]);
            const infoP = this.helper.createElement("p", ["info"]);
            infoH3.textContent = el[1];
            infoP.textContent = el[2];
            if (i == 1) {
                menuImg.classList.remove("menu-img-s");
                menuImg.classList.add("menu-img-m");

            };

            listingDiv.appendChild(menuImg);
            listingDiv.appendChild(infoH3);
            listingDiv.appendChild(infoP);
            contDiv.appendChild(listingDiv);
            i++;
        };
        
        const blueDiv = this.helper.createElement("div", ["blue", "round", "height-1", "shift-down", "wide"]);
        const checkerDiv = this.helper.createElement("div", ["checker-2", "height-4", "round-top", "border-bottom-down"]);
        blueDiv.appendChild(checkerDiv);
        
        mainDiv.appendChild(contDiv);
        mainDiv.appendChild(blueDiv);

        return mainDiv;
    }
};

export { HeroMenu };