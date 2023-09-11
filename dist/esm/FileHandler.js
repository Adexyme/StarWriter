"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler = void 0;
class FileHandler {
}
exports.FileHandler = FileHandler;
FileHandler.fileWriteableStream = null;
FileHandler.getFileWriteableStream = function () {
    return __awaiter(this, void 0, void 0, function* () {
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
        const handle = yield window.showSaveFilePicker(options);
        const writable = yield handle.createWritable();
        return writable;
    });
};
FileHandler.createNewFile = function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (FileHandler.fileWriteableStream !== null) {
            //close the stream for the old file
            yield FileHandler.fileWriteableStream.close();
            //clear out the markdown input and output for new file
            FileHandler.HtmlHandler.setMarkdown("");
            FileHandler.HtmlHandler.setMarkdownOutput("");
        }
    });
};
FileHandler.saveFile = function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (FileHandler.fileWriteableStream === null) {
            FileHandler.fileWriteableStream =
                yield FileHandler.getFileWriteableStream();
        }
        yield FileHandler.fileWriteableStream.write(FileHandler.HtmlHandler.getMarkdown());
        //await FileHandler.fileWriteableStream.close();
        //return handle;
    });
};
//# sourceMappingURL=FileHandler.js.map