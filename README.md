# my-camera
一个基于webrtc的照相机及摄像机。同时也可以做直播系统的视频数据采集端。
直播模式的原理：利用webrtc获取vp9(vp8)编码的webm格式的视频流，使用MediaRecord对象将视频流转为blob文件，再用websocket将blob文件传到服务器上。
直播模式调式
```
npm install
npm run dev
```
修改build/index.html，将websocket地址改为php的walkman地址
