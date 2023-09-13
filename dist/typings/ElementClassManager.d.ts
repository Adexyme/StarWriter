export declare class ElementClassManager {
    static addClass: (classSelector: string, classNames: string[]) => void;
    static addAClass: (parentSelector: string, className: string) => void;
    static addAClass4Groups: (parentSelectorArray: string[], className: string) => void;
    static removeAClass: (parentSelector: string, className: string) => void;
    static removeAClass4Groups: (parentSelectorArray: string[], className: string) => void;
    static disableElements: (parentSelector: string) => void;
    static disableElements4Groups: (parentSelectorArray: string[]) => void;
    static enableElements: (parentSelector: string) => void;
    static enableElements4Groups: (parentSelectorArray: string[]) => void;
}
