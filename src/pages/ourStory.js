import { Spacer } from "./sections/spacer";
import { SectionTitle } from "./sections/sectionTitle";
import { HeroBlock } from "./sections/heroBlock";
import { InfoBlock } from "./sections/infoBlock";
import cupcakeFile from "../assets/images/cupcake@2x.png";

class OurStory {
    spacer = new Spacer();
    sectionTitle = new SectionTitle();
    heroBlock = new HeroBlock();
    infoBlock = new InfoBlock();

    heroText = "Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual."

    infoTitle = ["things you really", "should know"]
    infoA = ["We have a 48 cupcake limit",  "Sometimes you're picking up a couple cakes for tomorrow, or for a friend, or a couple friends, or your family, or your friends family, or your families friends families. But seriously, come back tomorrow. They'll be fresher."]
    infoB = ["different every night",  "In by an appetite no humour returned informed. Possess so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away."]
    infoC = ["identify a star, get paid",  "Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. Open they an busy they my such high. An active dinner wishes at unable hardly no talked on."]
    infoD = ["No requests, only dares",  "Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction can dependent one bed situation attempted. His she are man their spite avoid. Her pretended fulfilled extremely"]

    infoText = [ this.infoA, this.infoB, this.infoC, this.infoD ];

    getPage() {
        const mainDiv = document.createElement("div");
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        // mainDiv.appendChild( this.sectionTitle.getHTML("every night is", "different"));
        mainDiv.appendChild( this.heroBlock.getHTML( cupcakeFile, this.heroText));
        mainDiv.appendChild( this.spacer.getHTML( 120 ));
        mainDiv.appendChild( this.infoBlock.getHTML(this.infoTitle, this.infoText));
        return mainDiv;
    }

};

export { OurStory };