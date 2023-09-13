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
const ElementClassManager_1 = require("./ElementClassManager");
const UtilityCls_1 = require("./UtilityCls");
class FileHandler {
}
exports.FileHandler = FileHandler;
FileHandler.fileHandle = null;
FileHandler.getFileHandle = function () {
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
        return handle;
    });
};
FileHandler.createNewFile = function () {
    return __awaiter(this, void 0, void 0, function* () {
        ElementClassManager_1.ElementClassManager.disableElements4Groups([
            UtilityCls_1.UtilityCls.menuContainer,
            UtilityCls_1.UtilityCls.tagBtnContainer,
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
            const writable = yield FileHandler.fileHandle.createWritable();
            const mkdOutput = FileHandler.HtmlHandler.getMarkdown();
            yield writable.write(mkdOutput);
            //close the stream for the old file
            yield writable.close();
            FileHandler.fileHandle = null;
            FileHandler.HtmlHandler.setMarkdown("");
            FileHandler.HtmlHandler.setMarkdownOutput("");
        }
        ElementClassManager_1.ElementClassManager.enableElements4Groups([
            UtilityCls_1.UtilityCls.menuContainer,
            UtilityCls_1.UtilityCls.tagBtnContainer,
        ]);
        /*ElementClassManager.addAClass4Groups(
          [UtilityCls.spinnerContainer],
          "invisible"
        );*/
        /*ElementClassManager.removeAClass4Groups(
          [UtilityCls.spinnerContainer],
          "visible"
        );*/
    });
};
FileHandler.saveFile = function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (FileHandler.fileHandle === null) {
            FileHandler.fileHandle = yield FileHandler.getFileHandle();
        }
        const writable = yield FileHandler.fileHandle.createWritable();
        const mkdOutput = FileHandler.HtmlHandler.getMarkdown();
        yield writable.write(mkdOutput);
        //close the stream for the old file
        yield writable.close();
        //await FileHandler.fileWriteableStream.close();
        //return handle;
    });
};
//# sourceMappingURL=FileHandler.js.map