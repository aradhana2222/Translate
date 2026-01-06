

const HUGGING_FACE_API_URL = "https://router.huggingface.co/hf-inference/models/Helsinki-NLP/opus-mt-en-{lang}";
const ACCESS_TOKEN = "ADD your ACCESS_TOKEN";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translate",
    title: "Translate Selected Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translate") {
    chrome.storage.sync.get("language", ({ language }) => {
      const modelUrl = HUGGING_FACE_API_URL.replace("{lang}", language || "es");

      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: () => window.getSelection().toString()
        },
        async (result) => {
          const textToTranslate = result[0]?.result;
          if (textToTranslate) {
            const response = await fetch(modelUrl, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    inputs: textToTranslate,
    options: { wait_for_model: true }
  })
});

const data = await response.json();

let translatedText = "Translation failed";

if (Array.isArray(data) && data[0]?.translation_text) {
  translatedText = data[0].translation_text;
} else if (data?.error) {
  translatedText = `Error: ${data.error}`;
  console.error("HF Error:", data);
}


            // Inject the translated text back into the page
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              function: (translatedText) => {
                const selection = window.getSelection();
                if (selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  range.deleteContents();
                  range.insertNode(document.createTextNode(translatedText));
                }
              },
              args: [translatedText]
            });
          } else {
            alert("No text selected.");
          }
        }
      );
    });
  }
});
