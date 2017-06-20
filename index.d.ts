import { IonicNativePlugin } from '@ionic-native/core';
export interface VoiceRecognizeResponse {
    /**
     * The status number of the response
     */
    success: boolean;
    /**
     * The data that is in the response. This property usually exists when a promise returned by a request method resolves.
     */
    message?: string;
    /**
     * Error response from the server. This property usually exists when a promise returned by a request method rejects.
     */
    error?: string;
}
/**
 * @name voice-recognize
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { voice-recognize } from 'voice-recognize';
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
export declare class VoiceRecognize extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    trainVoiceModel(): Promise<VoiceRecognizeResponse>;
    recognizeVoiceModel(): Promise<VoiceRecognizeResponse>;
    deleteVoiceModel(): Promise<VoiceRecognizeResponse>;
}
