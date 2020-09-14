const videoElement = document.getElementById('video');
const btn = document.getElementById('button');

// video Media selection on prompt 
async function videoMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
       //Error
    }
}
btn.addEventListener('click', async () =>{
 // button disabled
btn.disabled = true;
// Start picture in picture
await videoElement.requestPictureInPicture();
// button enabled
btn.disabled = false;
});
// On load
videoMediaStream();