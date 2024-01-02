/*------------------------------------*\
    MODULES
\*------------------------------------*/

import RellaxModule from './modules/rellax';

/*------------------------------------*
    APP
\*------------------------------------*/
const app = {

    init() {
        this.noJs();
        this.alwaysLoad();
        this.nodelistPolyfill();
        this.bind();
    },

    bind() {

        // Load any items that need modules
        let modulePlaceHolders = [...document.querySelectorAll('[data-module]')];

        // No modules so bail
        if (!modulePlaceHolders.length) {
            return;
        }

        modulePlaceHolders.map((item) => {

            // Attempt to load any modules
            let modules = item.getAttribute('data-module');

            if (!modules.length) {
                return false;
            }

            // Split the modules into an array
            modules = modules.trim().split(',');

            // Loop and bind to relevant modules
            modules.map((module) => {

                switch (module.trim()) {
                    case 'rellax':
                        let rellaxInstance = new RellaxModule(item);
                        rellaxInstance.init();
                        break;
                    
                }
            });
        });
    },

    alwaysLoad() {

    },

    noJs() {
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
    },

    nodelistPolyfill() {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }
};

// Launch
app.init();
