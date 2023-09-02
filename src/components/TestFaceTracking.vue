<script setup lang="ts">
import { onMounted } from "vue";
//import * as tf from "@tensorflow/tfjs";
import { createDetector, SupportedModels, MediaPipeFaceMeshMediaPipeModelConfig } from "@tensorflow-models/face-landmarks-detection";

onMounted(async () => {
  const model = SupportedModels.MediaPipeFaceMesh;
  const detector_config: MediaPipeFaceMeshMediaPipeModelConfig = {
    runtime: "mediapipe",
    refineLandmarks: true,
    solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",
  };

  try {
    let detector = await createDetector(model, detector_config);
    console.log(detector);
  } catch(error) {
    console.error("Error creating face detector. ", error);
  }

  //const video = document.getElementById("facetrackvideo");

  // @ts-ignore
  //const faces = detector.estimateFaces({ input: video });
  //const canvas = document.getElementById("facetrackcanvas");
});
</script>

<template>
  <canvas id="facetrackcanvas"></canvas>
  <video id="facetrackvideo"></video>
</template>

<style scoped>
#facetrackcanvas,
#facetrackvideo {
  position: absolute;

  top: 0;
  left: 0;
}
</style>