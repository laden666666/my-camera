export declare type GetMediaConfig = {
    facingMode?: "user" | "environment";
    dateMode?: 'stream' | 'data';
    width?: number;
    height?: number;
    onGetMedia?: (data: MediaStream) => {};
    onGetBlob?: (data: Blob) => {};
};
