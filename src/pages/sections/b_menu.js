import { Helper } from "./a_helper";


class Menu {
    helper = new Helper();

    getHTML( sectionTitle, menuAssets ) {

        // sectionTitle = [ "UPPER TEXT", "LOWER TEXT" ]
        // menu Assets = [
        //  [ file, title, text ],
        //  [ file, title, text ],
        //  [ file, title, text ],
        //  ...
        // ]
        
        // <!-- MENU -->


        // <div class="container content wide center">
        //     <div class="round box-yellow chrome shadow pad-m">
        //         <div class="border round-2">

    //                 <!-- SECTION TITLE -->
    //                 
//                     <div class="section shift center">
//                         <p class="section-text">Every Night</p>
//                         <h2 class="section-text">Observations</h2>
//                     </div>
        //                 

        //             <div class="center-h menu-grid">

        //                 <!-- LISTING -->

        //                 <div class="listing">
        //                     <div class="circle item-border">
        //                         <img src="./assets/images/bonfire.jpg" alt="" class="circle cover">
        //                     </div>
        //                     <h3 class="info">Big Bang</h3>
        //                     <p class="info"> Now natural saw passage offices you minuter. At by</p>
        //                 </div>

        //                 <div class="listing">
        //                     <div class="circle item-border">
        //                         <img src="./assets/images/green.jpg" alt="" class="circle cover">
                                
        //                     </div>
        //                     <h3 class="info">Big Bang</h3>
        //                     <p class="info">busy ever. Elinor her his secu far twenty eat object. </p>

        //                 </div>

        //                 <div class="listing">
        //                     <div class="circle item-border">
        //                         <img src="./assets/images/retro.webp" alt="" class="circle cover">
        //                     </div>
        //                     <h3 class="info">Big Bang</h3>
        //                     <p class="info">enjoyed by between. The servants securing material</p>

        //                 </div>

        //                 <div class="listing">
        //                     <div class="circle item-border">
        //                         <img src="./assets/images/glow.webp" alt="" class="circle cover">
        //                     </div>
        //                     <h3 class="info">Big Bang</h3>
        //                 </div>
        //         </div>
        //     </div>

        // </div>

        const mainDiv = this.helper.createElement("div", ["container","content", "wide", "center"]);
        const divBox = this.helper.createElement("div", ["round", "box-yellow", "chrome", "shadow", "pad-m"])
        const borderDiv = this.helper.createElement("div", ["border", "round-2"]);
        
        const sectDiv = this.helper.createElement("div", ["section", "shift", "center"])
        const sectP = this.helper.createElement("p", ["section-text"]);
        const sectH2 = this.helper.createElement("h2", ["section-text"]);
        sectP.textContent = sectionTitle[0];
        sectH2.textContent = sectionTitle[1];
        sectDiv.appendChild(sectP);
        sectDiv.appendChild(sectH2);

        borderDiv.appendChild(sectDiv);

        const menuDiv = this.helper.createElement("div", ["center-h", "menu-grid"]);

        for (const listing of menuAssets ) {
            //  [ file, title, text ],
            const listingDiv = this.helper.createElement("div", ["listing"]);
            const circleDiv = this.helper.createElement("div", ["circle", "item-border"]);
            const circleImg = this.helper.createElement("img", ["circle", "cover"]);
            const infoH3 = this.helper.createElement("h3", ["info"]);
            const infoP = this.helper.createElement("p", ["info"]);

            circleImg.src = listing[0];
            infoH3.textContent = listing[1];
            infoP.textContent = listing[2];

            circleDiv.appendChild( circleImg );
            listingDiv.appendChild( circleDiv );
            listingDiv.appendChild( infoH3 );
            listingDiv.appendChild( infoP );
            menuDiv.appendChild( listingDiv );
        };

        
        borderDiv.appendChild(menuDiv);
        
        divBox.appendChild(borderDiv);
        mainDiv.appendChild( divBox );

        return mainDiv;
    };
};

export { Menu };