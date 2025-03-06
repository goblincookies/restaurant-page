class Helper {

    // HELPER TO CREATE AN ELEMENT AND ASSIGN AN ARRAY OF CLASSES
    createElement ( type, classes) {
        let element = document.createElement( type );
        for(const el of classes) {
            element.classList.add( el);
        };
        return element;
    };
}
export { Helper }