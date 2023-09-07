export class ElementClassManager {
  public static addClass = (selector: string, classNames: string[]): void => {
    const retElems = document.querySelectorAll(selector);
    console.log(retElems); // NodeList[3]
    retElems.forEach((retElem) => {
      retElem.classList.add(...classNames);
    });
  };
}
