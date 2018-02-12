import { GetMediaConfig } from './GetMediaConfig';
export declare class GetMedia {
    private constraints;
    private createConstraints(config);
    private config;
    constructor(config?: GetMediaConfig);
    startGetMedia(): Promise<void>;
}
