import { HtmlHandler } from "./HtmlHandler";
export declare class FileHandler {
    static HtmlHandler: HtmlHandler;
    static fileHandle: FileSystemFileHandle;
    static getFileHandle: () => Promise<FileSystemFileHandle>;
    static createNewFile: () => Promise<void>;
    static saveFile: () => Promise<void>;
}
