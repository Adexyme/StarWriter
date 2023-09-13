import { ElementClassManager } from "./ElementClassManager";
import { HtmlHandler } from "./HtmlHandler";
import { UtilityCls } from "./UtilityCls";
export class FileHandler {
  public static HtmlHandler: HtmlHandler;
  public static fileHandle: FileSystemFileHandle = null;
  public static getFileHandle =
    async function (): Promise<FileSystemFileHandle> {
      const options = {
        types: [
          {
            description: "Test files",
            accept: {
              "text/html": [".html"],
            },
          },
        ],
      };

      const handle = await window.showSaveFilePicker(options);
      return handle;
    };
  public static createNewFile = async function () {
    ElementClassManager.disableElements4Groups([
      UtilityCls.menuContainer,
      UtilityCls.tagBtnContainer,
    ]);
    /*ElementClassManager.addAClass4Groups(
      [UtilityCls.spinnerContainer],
      "visible"
    );
    //ElementClassManager.removeAClass4Groups(
      [UtilityCls.spinnerContainer],
      "invisible"
    );*/
    if (FileHandler.fileHandle !== null) {
      const writable = await FileHandler.fileHandle.createWritable();
      const mkdOutput = FileHandler.HtmlHandler.getMarkdown();
      await writable.write(mkdOutput);
      //close the stream for the old file
      await writable.close();
      FileHandler.fileHandle = null;
      FileHandler.HtmlHandler.setMarkdown("");
      FileHandler.HtmlHandler.setMarkdownOutput("");
    }

    ElementClassManager.enableElements4Groups([
      UtilityCls.menuContainer,
      UtilityCls.tagBtnContainer,
    ]);
    /*ElementClassManager.addAClass4Groups(
      [UtilityCls.spinnerContainer],
      "invisible"
    );*/
    /*ElementClassManager.removeAClass4Groups(
      [UtilityCls.spinnerContainer],
      "visible"
    );*/
  };

  public static saveFile = async function () {
    if (FileHandler.fileHandle === null) {
      FileHandler.fileHandle = await FileHandler.getFileHandle();
    }

    const writable = await FileHandler.fileHandle.createWritable();
    const mkdOutput = FileHandler.HtmlHandler.getMarkdown();
    await writable.write(mkdOutput);
    //close the stream for the old file
    await writable.close();

    //await FileHandler.fileWriteableStream.close();

    //return handle;
  };
}
