import { Helper } from "./a_helper"

class Gallery {
    helper = new Helper();

    getHTML( images ) {
        // images = [
        //      img.file,
        //      img.file,
        //      img.file,
        //      ...
        // ]

        // <!-- IMG BLOCK -->

        // <ul class="gallery">
        //     <li><img src="./assets/images/ordering.jpg" alt=""></li>
        //     <li><img src="./assets/images/cookie.jpg" alt=""></li>
        //     <li><img src="./assets/images/bag.jpg" alt=""></li>

        //     <li> ... </li>
        //     ...
        //     ...

        // </ul>


        const mainUl = this.helper.createElement("ul", ["gallery", "deubg"] );

        images.forEach( img => {
            const blankLi = this.helper.createElement("li", []);
            const galleryImg = this.helper.createElement("img", []);
            galleryImg.src = img;
            blankLi.appendChild( galleryImg );
            mainUl.appendChild( blankLi );
        });

        return mainUl;
    }
}

export { Gallery }