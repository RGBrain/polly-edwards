/*------------------------------------*\
    MODULE IMPORTS
\*------------------------------------*/
import Rellax from "rellax";

/*------------------------------------*\
    EXAMPLE
\*------------------------------------*/
class RellaxModule {
    constructor(passedElement) {
        let self = this;

        self.elem = passedElement;
    }

    init() {
        let self = this;
        var rellax = new Rellax('.rellax');
    }
}

export default RellaxModule;
