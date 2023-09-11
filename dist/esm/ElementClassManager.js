"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementClassManager = void 0;
class ElementClassManager {
}
exports.ElementClassManager = ElementClassManager;
ElementClassManager.addClass = (selector, classNames) => {
    const retElems = document.querySelectorAll(selector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
        retElem.classList.add(...classNames);
    });
};
//# sourceMappingURL=ElementClassManager.js.map