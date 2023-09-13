export class ElementClassManager {
  public static addClass = (
    classSelector: string,
    classNames: string[]
  ): void => {
    const retElems = document.querySelectorAll(classSelector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
      retElem.classList.add(...classNames);
    });
  };

  public static addAClass = (
    parentSelector: string,
    className: string
  ): void => {
    const retElems = document.querySelectorAll(parentSelector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
      retElem.classList.add(className);
    });
  };

  public static addAClass4Groups = (
    parentSelectorArray: string[],
    className: string
  ): void => {
    parentSelectorArray.forEach((parent) => {
      ElementClassManager.addAClass(parent, className);
    });
  };

  public static removeAClass = (
    parentSelector: string,
    className: string
  ): void => {
    const retElems = document.querySelectorAll(parentSelector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
      retElem.classList.remove(className);
    });
  };

  public static removeAClass4Groups = (
    parentSelectorArray: string[],
    className: string
  ): void => {
    parentSelectorArray.forEach((parent) => {
      ElementClassManager.removeAClass(parent, className);
    });
  };

  public static disableElements = (parentSelector: string): void => {
    const parentElement = document.querySelector(parentSelector) as HTMLElement;
    const children: HTMLCollection = parentElement.children;

    // Iterate over each element and disable it
    for (let i = 0; i < children.length; i++) {
      const child: HTMLElement = children[i] as HTMLElement;
      // Apply the disabled attribute
      child.setAttribute("disabled", "true");

      // Adjust the styling or event handling as needed
      child.style.opacity = "0.5"; // Example: reduce opacity
      //child.removeEventListener('click', handleClick); // Example: remove click event listener
    }
  };

  public static disableElements4Groups = (
    parentSelectorArray: string[]
  ): void => {
    parentSelectorArray.forEach((parent) => {
      ElementClassManager.disableElements(parent);
    });
  };

  public static enableElements = (parentSelector: string): void => {
    const parentElement = document.querySelector(parentSelector) as HTMLElement;

    const children: HTMLCollection = parentElement.children;

    // Iterate over each element and enable it
    for (let i = 0; i < children.length; i++) {
      const child: HTMLElement = children[i] as HTMLElement;
      // Remove the disabled attribute
      child.removeAttribute("disabled");

      // Adjust the styling or event handling as needed
      child.style.opacity = "1"; // Restore normal opacity
      //element.addEventListener('click', handleClick); // Add back the click event listener if needed
    }
  };

  public static enableElements4Groups = (
    parentSelectorArray: string[]
  ): void => {
    parentSelectorArray.forEach((parent) => {
      ElementClassManager.enableElements(parent);
    });
  };
}
