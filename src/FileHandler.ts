import { HtmlHandler } from "./HtmlHandler";
export class FileHandler {
  public static HtmlHandler: HtmlHandler;
  public static fileWriteableStream: FileSystemWritableFileStream = null;
  public static getFileWriteableStream =
    async function (): Promise<FileSystemWritableFileStream> {
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
      const writable = await handle.createWritable();
      return writable;
    };
  public static createNewFile = async function () {
    if (FileHandler.fileWriteableStream !== null) {
      //close the stream for the old file
      await FileHandler.fileWriteableStream.close();
      //clear out the markdown input and output for new file
      FileHandler.HtmlHandler.setMarkdown("");
      FileHandler.HtmlHandler.setMarkdownOutput("");
    }
  };
  public static saveFile = async function () {
    if (FileHandler.fileWriteableStream === null) {
      FileHandler.fileWriteableStream =
        await FileHandler.getFileWriteableStream();
    }

    await FileHandler.fileWriteableStream.write(
      FileHandler.HtmlHandler.getMarkdown()
    );
    //await FileHandler.fileWriteableStream.close();

    //return handle;
  };
}
