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
const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual key
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

const conversationHistory = [
  { role: "system", content: "Your Name is AVA. You are a helpful, bubbly AI daily assistant. You are here to answer your users questions and help them with what they need to the best of your abilities." }
];

async function getBotResponse(userMessage) {
  conversationHistory.push({ role: "user", content: userMessage });

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
      "HTTP-Referer": window.location.href,
      "X-Title": "My Chatbot"
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: conversationHistory,
      temperature: 0.7
    })
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  const botMessage = data.choices[0].message.content;
  conversationHistory.push({ role: "assistant", content: botMessage });

  return botMessage;
}

// adds a new message to the UI

function addMessage(text, sender) {
  const messages = document.getElementById("chatMessages");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// typing indicator displayer

function addTypingIndicator() {
  const messages = document.getElementById("chatMessages");
  const typing = document.createElement("div");
  typing.className = "message bot typing";
  typing.id = "typingIndicator";
  typing.textContent = "Ava is thinking...";
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
}

// gets rid of typing indicator 
function removeTypingIndicator() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
}

//called to send a message by user
async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  input.disabled = true;

  addTypingIndicator();

  try {
    const reply = await getBotResponse(text);
    removeTypingIndicator();
    addMessage(reply, "bot");
  } catch (error) {
    removeTypingIndicator();
    addMessage(`Error: ${error.message}`, "bot");
    console.error("Error:", error);
  } finally {
    input.disabled = false;
    input.focus();
  }
}

//checks if user pressed enter key while typing
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});
//#endregion


//$region WebGi
import * as THREE from "/node_modules/three";

const viewer = new CoreViewerApp({
  canvas: document.getElementById("webgi-canvas")
});

viewer
  .initialize({
    caching: true,
    ground: false,
    bloom: true,
    enableDrop: false
  })
  .then((viewer) => {
    /// Set the quality based on display
    viewer.renderManager.displayCanvasScaling = window.devicePixelRatio;

    const loadingScreen = viewer.getPlugin(LoadingScreenPlugin);

    loadingScreen.loadingTextHeader = "Loading Custom 3D Experience";
    loadingScreen.showFileNames = false;
    // Set Environment Map
    viewer.setEnvironmentMap('/WebsiteAssets/3DScene/pav_studio_03_4k.exr');
    // Load a model
    const model = "/WebsiteAssets/3DScene/Gayva.glb"

    // Set BG Color
    viewer.scene.background = new THREE.Color('#708090');
    // Set Cam Position
    viewer.scene.activeCamera.position = new Vector3(0, 4, 20);
    viewer.scene.activeCamera.target = new Vector3(0, 4, 0);

    viewer.load(model);
    console.log(viewer);
  });


const avatarTextures = [
  "/WebsiteAssets/3DScene/Textures/Ava.png",
  "/WebsiteAssets/3DScene/Textures/Gaia.png",
  "/WebsiteAssets/3DScene/Textures/Zelda.png"
]

function ChangeAssistant(n) {

  const object = viewer.scene.modelRoot;

  let avatar = null;
  let loader = null;
  let texture = null;

  object.traverse((child) => {
    if (child.material === undefined) { return; }

    if (child.material.name === "lambert11") {
      console.log("=== MESH ===");
      console.log("Mesh name:", child.name);
      console.log("Material:", child.material);
      console.log("Material type:", child.material?.type);
      console.log("Material name:", child.material?.name);
      avatar = child;
      return;
    }
  })

  loader = new THREE.TextureLoader();
  texture = loader.load(avatarTextures[n]);

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  viewer.scene.setDirty?.();
  avatar.material.map = texture;
  console.log(avatar.material);

  viewer.setDirty();
}

function ChangeColor(n) {

  const object = viewer.scene.modelRoot;

  let loader = null;
  let topTexture = null;
  let bottomTexture = null;
  let legTexture = null;

  loader = new THREE.TextureLoader();
  topTexture = loader.load(`WebsiteAssets/3DScene/Textures/Top_Color${n + 1}.png`);
  bottomTexture = loader.load(`WebsiteAssets/3DScene/Textures/Bottom_Color${n + 1}.png`);
  legTexture = loader.load(`WebsiteAssets/3DScene/Textures/legs_Color${n + 1}.png`);



  object.traverse((child) => {
    if (child.material === undefined) { return; }

    if (child.material.name === "lambert7") {
      topTexture.flipY = false;
      topTexture.colorSpace = THREE.SRGBColorSpace;
      topTexture.needsUpdate = true;

      viewer.scene.setDirty?.();
      child.material.map = topTexture;
    }

    if (child.material.name === "lambert8") {
      bottomTexture.flipY = false;
      bottomTexture.colorSpace = THREE.SRGBColorSpace;
      bottomTexture.needsUpdate = true;

      viewer.scene.setDirty?.();
      child.material.map = bottomTexture;
    }

    if (child.material.name === "lambert10") {
      legTexture.flipY = false;
      legTexture.colorSpace = THREE.SRGBColorSpace;
      legTexture.needsUpdate = true;

      viewer.scene.setDirty?.();
      child.material.map = legTexture;
    }

  })
  viewer.setDirty();
}
//#endregion

//#region GSAP Animations
import { gsap } from "gsap/dist/gsap";

const features = document.getElementById("features-and-details");
console.log(features);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // check against viewport height
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // check against viewport width
  );
}

function featuresAndDetailCheck() {
  if (isElementInViewport(features)) {
    console.log("Condition met!");
    gsap.to(".features-and-details .text", { duration: 0.5, y: 0 });
  }

  setTimeout(featuresAndDetailCheck, 50);
}

featuresAndDetailCheck();

//#endregion

window.changeSlide = changeSlide;
window.ChangeAssistant = ChangeAssistant;
window.sendMessage = sendMessage;
window.ChangeColor = ChangeColor;