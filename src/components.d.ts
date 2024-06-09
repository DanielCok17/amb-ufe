/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AmbAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface AmbAmbulanceWlEditor {
        "entryId": string;
    }
    interface AmbAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
    interface AmbDeleteAllergyRecord {
        "allergyId": string;
    }
    interface AmbMedRecordsAccess {
        "patientId": string;
    }
    interface AmbMedicalApp {
        "basePath": string;
    }
    interface AmbRecordVaccination {
    }
    interface AmbUpdateLabResults {
        "recordId": string;
    }
}
export interface AmbAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAmbAmbulanceWlEditorElement;
}
export interface AmbAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAmbAmbulanceWlListElement;
}
declare global {
    interface HTMLAmbAmbulanceWlAppElement extends Components.AmbAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLAmbAmbulanceWlAppElement: {
        prototype: HTMLAmbAmbulanceWlAppElement;
        new (): HTMLAmbAmbulanceWlAppElement;
    };
    interface HTMLAmbAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLAmbAmbulanceWlEditorElement extends Components.AmbAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAmbAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLAmbAmbulanceWlEditorElement, ev: AmbAmbulanceWlEditorCustomEvent<HTMLAmbAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAmbAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLAmbAmbulanceWlEditorElement, ev: AmbAmbulanceWlEditorCustomEvent<HTMLAmbAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAmbAmbulanceWlEditorElement: {
        prototype: HTMLAmbAmbulanceWlEditorElement;
        new (): HTMLAmbAmbulanceWlEditorElement;
    };
    interface HTMLAmbAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLAmbAmbulanceWlListElement extends Components.AmbAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAmbAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLAmbAmbulanceWlListElement, ev: AmbAmbulanceWlListCustomEvent<HTMLAmbAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAmbAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLAmbAmbulanceWlListElement, ev: AmbAmbulanceWlListCustomEvent<HTMLAmbAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAmbAmbulanceWlListElement: {
        prototype: HTMLAmbAmbulanceWlListElement;
        new (): HTMLAmbAmbulanceWlListElement;
    };
    interface HTMLAmbDeleteAllergyRecordElement extends Components.AmbDeleteAllergyRecord, HTMLStencilElement {
    }
    var HTMLAmbDeleteAllergyRecordElement: {
        prototype: HTMLAmbDeleteAllergyRecordElement;
        new (): HTMLAmbDeleteAllergyRecordElement;
    };
    interface HTMLAmbMedRecordsAccessElement extends Components.AmbMedRecordsAccess, HTMLStencilElement {
    }
    var HTMLAmbMedRecordsAccessElement: {
        prototype: HTMLAmbMedRecordsAccessElement;
        new (): HTMLAmbMedRecordsAccessElement;
    };
    interface HTMLAmbMedicalAppElement extends Components.AmbMedicalApp, HTMLStencilElement {
    }
    var HTMLAmbMedicalAppElement: {
        prototype: HTMLAmbMedicalAppElement;
        new (): HTMLAmbMedicalAppElement;
    };
    interface HTMLAmbRecordVaccinationElement extends Components.AmbRecordVaccination, HTMLStencilElement {
    }
    var HTMLAmbRecordVaccinationElement: {
        prototype: HTMLAmbRecordVaccinationElement;
        new (): HTMLAmbRecordVaccinationElement;
    };
    interface HTMLAmbUpdateLabResultsElement extends Components.AmbUpdateLabResults, HTMLStencilElement {
    }
    var HTMLAmbUpdateLabResultsElement: {
        prototype: HTMLAmbUpdateLabResultsElement;
        new (): HTMLAmbUpdateLabResultsElement;
    };
    interface HTMLElementTagNameMap {
        "amb-ambulance-wl-app": HTMLAmbAmbulanceWlAppElement;
        "amb-ambulance-wl-editor": HTMLAmbAmbulanceWlEditorElement;
        "amb-ambulance-wl-list": HTMLAmbAmbulanceWlListElement;
        "amb-delete-allergy-record": HTMLAmbDeleteAllergyRecordElement;
        "amb-med-records-access": HTMLAmbMedRecordsAccessElement;
        "amb-medical-app": HTMLAmbMedicalAppElement;
        "amb-record-vaccination": HTMLAmbRecordVaccinationElement;
        "amb-update-lab-results": HTMLAmbUpdateLabResultsElement;
    }
}
declare namespace LocalJSX {
    interface AmbAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface AmbAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: AmbAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface AmbAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: AmbAmbulanceWlListCustomEvent<string>) => void;
    }
    interface AmbDeleteAllergyRecord {
        "allergyId"?: string;
    }
    interface AmbMedRecordsAccess {
        "patientId"?: string;
    }
    interface AmbMedicalApp {
        "basePath"?: string;
    }
    interface AmbRecordVaccination {
    }
    interface AmbUpdateLabResults {
        "recordId"?: string;
    }
    interface IntrinsicElements {
        "amb-ambulance-wl-app": AmbAmbulanceWlApp;
        "amb-ambulance-wl-editor": AmbAmbulanceWlEditor;
        "amb-ambulance-wl-list": AmbAmbulanceWlList;
        "amb-delete-allergy-record": AmbDeleteAllergyRecord;
        "amb-med-records-access": AmbMedRecordsAccess;
        "amb-medical-app": AmbMedicalApp;
        "amb-record-vaccination": AmbRecordVaccination;
        "amb-update-lab-results": AmbUpdateLabResults;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "amb-ambulance-wl-app": LocalJSX.AmbAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLAmbAmbulanceWlAppElement>;
            "amb-ambulance-wl-editor": LocalJSX.AmbAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLAmbAmbulanceWlEditorElement>;
            "amb-ambulance-wl-list": LocalJSX.AmbAmbulanceWlList & JSXBase.HTMLAttributes<HTMLAmbAmbulanceWlListElement>;
            "amb-delete-allergy-record": LocalJSX.AmbDeleteAllergyRecord & JSXBase.HTMLAttributes<HTMLAmbDeleteAllergyRecordElement>;
            "amb-med-records-access": LocalJSX.AmbMedRecordsAccess & JSXBase.HTMLAttributes<HTMLAmbMedRecordsAccessElement>;
            "amb-medical-app": LocalJSX.AmbMedicalApp & JSXBase.HTMLAttributes<HTMLAmbMedicalAppElement>;
            "amb-record-vaccination": LocalJSX.AmbRecordVaccination & JSXBase.HTMLAttributes<HTMLAmbRecordVaccinationElement>;
            "amb-update-lab-results": LocalJSX.AmbUpdateLabResults & JSXBase.HTMLAttributes<HTMLAmbUpdateLabResultsElement>;
        }
    }
}
