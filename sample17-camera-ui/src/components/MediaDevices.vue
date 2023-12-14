<template>
    <div>
        <ul>
            利用可能なデバイス
            <li v-for="device in devices" :key="device.deviceId">
                label: {{ device.label }} 
                kind: {{ device.kind }}
            </li>
        </ul>
        <button @click="capturePhoto">カメラを起動する</button>
        <video ref="video" autoplay></video>
        <button @click="takePhoto">写真を撮る</button>
        <img v-if="photo" :src="photo" alt="Captured Photo">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MediaDevices',
    data() {
        return {
            devices: [] as MediaDeviceInfo[],
            photo: null as string | null
        };
    },
    mounted() {
        this.getMediaDevices();
    },
    methods: {
        async getMediaDevices() {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                // this.devices = devices.filter(device => device.kind === 'videoinput');
                this.devices = devices;
                console.log('Media devices:', this.devices);

                if (this.devices.length === 0) {
                    alert('No available devices');
                }
            } catch (error) {
                console.error('Error getting media devices:', error);
            }
        },
        capturePhoto() {
            const videoElement = this.$refs.video as HTMLVideoElement;
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    videoElement.srcObject = stream;
                })
                .catch(error => {
                    console.error('Error accessing camera:', error);
                });
        },
        takePhoto(){
            console.log('takePhoto');
            const videoElement = this.$refs.video as HTMLVideoElement;
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext('2d');
            context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            this.photo = canvas.toDataURL('image/png');
            console.log(this.photo);
            //canvas.toDataURL()でbase64形式の画像データを取得できる
            //"data:image/png;base64,iVBORw0KGg.."data:image/png;base64,iVBORw0KGg..."
        }
    }
});
</script>
        
