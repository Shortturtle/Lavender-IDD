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
    loadingScreen.loadingTextHeader = "Loading Custom 3D Experience";
    loadingScreen.showFileNames = false;

    // Load a model
    const model =
      "https://demo-assets.pixotronics.com/pixo/gltf/earringScene2.glb";
    viewer.load(model);
    console.log(viewer);
  });
