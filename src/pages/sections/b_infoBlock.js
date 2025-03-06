import { Helper } from "./a_helper";
// import { InfoText } from "./infoText";


class InfoBlock {
    helper = new Helper();

    getHTML ( infoCopy ) {
        // info Copy"
        // [  ["TITLE 1", "COPY COPY COPY" ],
        //    ["TITLE 2", "COPY COPY COPY" ],
        //    ["TITLE 3", "COPY COPY COPY" ],
        //    ["TITLE 4", "COPY COPY COPY" ],
        // ]


        // <!-- INFO BLOCK -->

        // <div class="container center">
        // 
        //     <div class="round box-yellow chrome shadow">
        //         <ul class="center-h pad-m">
        // 
        //             <li class="info">
        //                 <h3 class="info"> TITLE </h3>
        //                 <p class="info"> COPY COPY COPY</p>
        //             </li>
        //             <li class="info">
        //                 <h3 class="info"> TITLE </h3>
        //                 <p class="info"> COPY COPY COPY</p>
        //             </li>
        //             <li class="info">
        //                 <h3 class="info"> TITLE </h3>
        //                 <p class="info"> COPY COPY COPY</p>
        //             </li>
        //             <li class="info">
        //                 <h3 class="info"> TITLE </h3>
        //                 <p class="info"> COPY COPY COPY</p>
        //             </li>
        //         </ul>
        // 
        //         <div class="checker-2 height-2 round-bottom border-top-brown"></div>
        //     </div>
        // </div>

        const mainDiv = this.helper.createElement("div", ["container","center"]);
        const boxDiv = this.helper.createElement("div", ["round", "box-yellow", "chrome", "shadow"]);
        const mainUl = this.helper.createElement("ul", ["center-h", "pad-m"]);
        
        for (const text of infoCopy) {
            const infoLi = this.helper.createElement("li", ["info"]);
            const infoH3 = this.helper.createElement("h3", ["info"]);
            const infoP = this.helper.createElement("p", ["info"]);
            infoH3.textContent = text[0];
            infoP.textContent = text[1];

            infoLi.appendChild( infoH3 );
            infoLi.appendChild( infoP );
            mainUl.appendChild(infoLi);
        };
            
        boxDiv.appendChild(mainUl);
        mainDiv.appendChild(boxDiv);

        return mainDiv;
    }
};

export { InfoBlock };