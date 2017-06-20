var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name voice-recognize
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { voice-recognize } from '@ionic-native/voice-recognize';
 *
 *
 * constructor(private voice-recognize: voice-recognize) { }
 *
 * ...
 *
 *
 * this.voice-recognize.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var VoiceRecognize = (function (_super) {
    __extends(VoiceRecognize, _super);
    function VoiceRecognize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    VoiceRecognize.prototype.trainVoiceModel = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    VoiceRecognize.prototype.recognizeVoiceModel = function () {
        return;
    };
    VoiceRecognize.prototype.deleteVoiceModel = function () {
        return;
    };
    return VoiceRecognize;
}(IonicNativePlugin));
VoiceRecognize.decorators = [
    { type: Injectable },
];
/** @nocollapse */
VoiceRecognize.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VoiceRecognize.prototype, "trainVoiceModel", null);
VoiceRecognize = __decorate([
    Plugin({
        pluginName: 'VoiceRecognize',
        plugin: 'cordova-plugin-voicerecognize',
        pluginRef: 'VoiceRecognize',
        repo: 'https://github.com/gaoqh/cordova-voiceRecognize',
        platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
    })
], VoiceRecognize);
export { VoiceRecognize };
//# sourceMappingURL=index.js.map