import {GetMediaConfig} from './GetMediaConfig'

var MediaRecorder = window['MediaRecorder']

export class GetMedia{
    private constraints: MediaStreamConstraints

    private createConstraints(config: GetMediaConfig): MediaStreamConstraints {
        return {
            audio: true,
            video: {
                width: { min: 480,},
                height: { min: 360, },
                facingMode: config.facingMode || 'user',
            }
        }
    }

    private config: GetMediaConfig

    constructor(config: GetMediaConfig = {}){
        this.config = config
        this.constraints = this.createConstraints(config)
    }

    async startGetMedia(){
        let stream: MediaStream = await navigator.mediaDevices.getUserMedia(this.constraints)
            
        //如果浏览器支持vp9，优先返回vp9。否则返回vp8。如果都不支持，直接抛出异常
        var options = { mimeType: 'video/webm;codecs=vp9' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            options = { mimeType: 'video/webm;codecs=vp8' };
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                options = { mimeType: 'video/webm' };
                if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                    throw new Error('Your browser does not support VP8 and VP9 encoding')
                }
            }
        }
                
    
        let mediaRecorder: any = null
        try {
            mediaRecorder = new MediaRecorder(stream, options);
        } catch (e) {
            throw new Error('Exception while creating MediaRecorder: '
                + e + '. mimeType: ' + options.mimeType);
        }
        mediaRecorder.ondataavailable = (event)=>{
            if (event.data && event.data.size > 0) {
                console.log(event.data)
            }
        };
        mediaRecorder.start(10); // collect 10ms of data
    }
}
