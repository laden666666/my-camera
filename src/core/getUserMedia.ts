import 'webrtc-adapter'

export type MediaConfig = {

}

function createConstraints(config: MediaConfig): any{
    return {

    }
}

/**
 * @file 对获取UserMedia封装
 */
function getUserMedia(config: MediaConfig){
    navigator.mediaDevices.getUserMedia(createConstraints(config)).
    then((stream: MediaStream)=>{
        stream.
    })
}