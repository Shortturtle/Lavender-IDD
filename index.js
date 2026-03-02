//#region Image Slideshow

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Handle wrapping around the image array
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Display the current slide
  slides[slideIndex].classList.add('active');
}

// Function called
function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

// Initial call to display the first image
showSlides();

//#endregion

//#region AI Chatbot

//#endregion


//$region WebGi
import{ GroundPlugin } from "webgi";

const viewer = new CoreViewerApp({
  canvas: document.getElementById("webgi-canvas")
});

viewer
  .initialize({
    caching: true,
    ground: true,
    bloom: true,
    enableDrop: false
  })
  .then((viewer) => {
    /// Set the quality based on display
    viewer.renderManager.displayCanvasScaling = window.devicePixelRatio;

    const loadingScreen = viewer.getPlugin(LoadingScreenPlugin);
    const groundPlugin = viewer.getPluginP(GroundPlugin);
    loadingScreen.loadingTextHeader = "Loading Custom 3D Experience";
    loadingScreen.showFileNames = false;
    // Set Environment Map
    viewer.setEnvironmentMap('/WebsiteAssets/3DScene/cabin_4k.exr')
    // Load a model
    const model = "/WebsiteAssets/3DScene/Gayva.glb";
    // Set Cam Position
    viewer.scene.activeCamera.position = new Vector3(0, 2, 10);
    viewer.scene.activeCamera.target = new Vector3(0, 2, 0);
    // Ground plugin
    groundPlugin.autoAdjustTransform = true;
    groundPlugin.intensity = 1;
    groundPlugin.radius = 5;

    viewer.load(model);
    console.log(viewer);
  });
  //#endregion