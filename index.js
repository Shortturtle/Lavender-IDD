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
const API_KEY = "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"; // Replace with your actual key
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
  typing.textContent = "Bot is typing...";
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
import * as THREE from "three";

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
    // Set Environment Map
    viewer.setEnvironmentMap('/WebsiteAssets/3DScene/cabin_4k.exr');
    // Load a model
    const model = "/WebsiteAssets/3DScene/Gayva.glb"

    // Set Cam Position
    viewer.scene.activeCamera.position = new Vector3(0, 4, 20);
    viewer.scene.activeCamera.target = new Vector3(0, 4, 0);

    viewer.load(model);
    console.log(viewer);
  });

let assistantIndex = 0;
const assistantButtons = document.querySelectorAll('.assistant-select-button');

function TestLog() {
  const object = viewer.scene.modelRoot;

  console.log(object);

  object.traverse((child) => {
    console.log(child.material);
    if (child.material === undefined) {
      return;
    }
  })
}

function ButtonSelect(buttonList, n) {
  buttonList.forEach(button => {
    button.classList.remove('selected');
  });

  buttonList[n].classList.add("selected");
}

function ChangeAssistant(n) {
  //if (n == assistantIndex) { return; }

  const object = viewer.scene.modelRoot;

  let avatar = null;

  object.traverse((child) => {
    if (child.material === undefined) { return; }

    if (child.material.name === "lambert11") {
      console.log("=== MESH ===");
      console.log("Mesh name:", child.name);
      console.log("Material:", child.material);
      console.log("Material type:", child.material?.type);
      console.log("Material name:", child.material?.name);
      avatar = child;
      console.log(avatar);
      return;
    }
  })

  switch (n) {
    case 1:
      console.log("one");
      const importer = viewer.getManager().importer;
      const textureResult = importer.importSinglePath("/WebsiteAssets/3DScene/Textures/Zelda.png");
      const texture = textureResult.userData?.texture ?? textureResult;

      texture.flipY = false;
      texture.needsUpdate = true;


      // viewer.scene.setDirty?.();
      // const newMat = avatar.material.clone();
      // newMat.map = texture;
      // console.log(newMat);
      // console.log(newMat.map);
      // avatar.material = newMat;
      // console.log(avatar.material);
      // avatar.material.needsUpdate = true;
      // viewer.setDirty();

      avatar.material
  }
}
//#endregion