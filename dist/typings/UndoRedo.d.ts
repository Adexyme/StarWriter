export declare class UndoRedojs {
    cooldown: number;
    private stack;
    private currentIndex;
    private cooldownState;
    constructor(cooldown: number);
    record(data: any, force: any): void;
    undo(readOnly: any): string;
    redo(readOnly: any): string;
    current(data: any): string;
}
