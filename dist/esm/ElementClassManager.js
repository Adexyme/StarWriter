"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementClassManager = void 0;
class ElementClassManager {
}
exports.ElementClassManager = ElementClassManager;
ElementClassManager.addClass = (classSelector, classNames) => {
    const retElems = document.querySelectorAll(classSelector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
        retElem.classList.add(...classNames);
    });
};
ElementClassManager.addClass2ManyElems = (objArr) => {
    for (let i = 0; i < objArr.length; i++) {
        const classSelector = objArr[i].classSelector;
        const retElems = document.querySelectorAll(classSelector);
        console.log(retElems); // NodeList[3]
        retElems.forEach((retElem) => {
            retElem.classList.add(...objArr[i].classNames);
        });
    }
};
ElementClassManager.addAClass = (parentSelector, className) => {
    const retElems = document.querySelectorAll(parentSelector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
        retElem.classList.add(className);
    });
};
ElementClassManager.addAClass4Groups = (parentSelectorArray, className) => {
    parentSelectorArray.forEach((parent) => {
        ElementClassManager.addAClass(parent, className);
    });
};
ElementClassManager.removeAClass = (parentSelector, className) => {
    const retElems = document.querySelectorAll(parentSelector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
        retElem.classList.remove(className);
    });
};
ElementClassManager.removeAClass4Groups = (parentSelectorArray, className) => {
    parentSelectorArray.forEach((parent) => {
        ElementClassManager.removeAClass(parent, className);
    });
};
ElementClassManager.disableElements = (parentSelector) => {
    const parentElement = document.querySelector(parentSelector);
    const children = parentElement.children;
    // Iterate over each element and disable it
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // Apply the disabled attribute
        child.setAttribute("disabled", "true");
        // Adjust the styling or event handling as needed
        child.style.opacity = "0.5"; // Example: reduce opacity
        //child.removeEventListener('click', handleClick); // Example: remove click event listener
    }
};
ElementClassManager.disableElements4Groups = (parentSelectorArray) => {
    parentSelectorArray.forEach((parent) => {
        ElementClassManager.disableElements(parent);
    });
};
ElementClassManager.enableElements = (parentSelector) => {
    const parentElement = document.querySelector(parentSelector);
    const children = parentElement.children;
    // Iterate over each element and enable it
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // Remove the disabled attribute
        child.removeAttribute("disabled");
        // Adjust the styling or event handling as needed
        child.style.opacity = "1"; // Restore normal opacity
        //element.addEventListener('click', handleClick); // Add back the click event listener if needed
    }
};
ElementClassManager.enableElements4Groups = (parentSelectorArray) => {
    parentSelectorArray.forEach((parent) => {
        ElementClassManager.enableElements(parent);
    });
};
//# sourceMappingURL=ElementClassManager.js.map