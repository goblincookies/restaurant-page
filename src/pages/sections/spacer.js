import "../../styles.css"

class Spacer {

    getHTML = function ( height ) {
        console.log(`height at: ${height}` );
        const spcr = document.createElement("div");
        spcr.classList.add("spacer");
        spcr.style.height = height + "px";

        return spcr;
    }
};

export { Spacer };