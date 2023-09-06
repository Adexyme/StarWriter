export class AddEvtListener {
  public static toElemChildren = (
    containerID: string,
    eventType: string,
    callbackFn: EventListener
  ) => {
    const children = document.getElementById(containerID).children;

    for (let i = 0; i < children.length; i++) {
      console.log(children[i]);

      children[i].addEventListener(eventType, callbackFn);
    }
  };

  public static toElem = (
    elemID: string,
    eventType: string,
    callbackFn: EventListener
  ) => {
    const retElem = document.getElementById(elemID);
    retElem.addEventListener(eventType, callbackFn);
  };
}
