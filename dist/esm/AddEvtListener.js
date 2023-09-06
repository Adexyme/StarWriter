"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEvtListener = void 0;
class AddEvtListener {
}
exports.AddEvtListener = AddEvtListener;
AddEvtListener.toElemChildren = (containerID, eventType, callbackFn) => {
    const children = document.getElementById(containerID).children;
    for (let i = 0; i < children.length; i++) {
        console.log(children[i]);
        children[i].addEventListener(eventType, callbackFn);
    }
};
AddEvtListener.toElem = (elemID, eventType, callbackFn) => {
    const retElem = document.getElementById(elemID);
    retElem.addEventListener(eventType, callbackFn);
};
//# sourceMappingURL=AddEvtListener.js.map