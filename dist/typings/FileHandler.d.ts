import { HtmlHandler } from "./HtmlHandler";
export declare class FileHandler {
    static HtmlHandler: HtmlHandler;
    static fileWriteableStream: FileSystemWritableFileStream;
    static getFileWriteableStream: () => Promise<FileSystemWritableFileStream>;
    static createNewFile: () => Promise<void>;
    static saveFile: () => Promise<void>;
}
