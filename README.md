# 🌐 Chrome Extension for Text Translation

> **Instantly translate selected text in your browser with the power of AI**

A lightweight Chrome extension that leverages the Hugging Face API to provide seamless text translation directly in your browser. Select any text, choose your target language, and get instant translations without leaving your current page.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?style=flat-square&logo=google-chrome)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-API-orange?style=flat-square&logo=huggingface)

---

## ✨ Features

- 🚀 **Instant Translation** - Select text and translate it in seconds
- 🎨 **Clean UI** - Simple and intuitive popup interface
- 🔄 **Replace or Copy** - Choose to replace selected text or copy translation
- ⚡ **Fast & Lightweight** - Powered by Hugging Face's translation models
- 🔐 **Privacy-Focused** - No data stored, translations happen on-demand
- 🎯 **Context Menu Integration** - Right-click to translate

---



### Load Unpacked (Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/aradhana2222/Translate.git
   cd Translate
   ```

2. **Get your Hugging Face API Key**
   - Visit [Hugging Face](https://huggingface.co/)
   - Sign up / Log in
   - Go to Settings → Access Tokens
   - Create a new token
   - Copy your API key

3. **Configure the extension**
   - Open `background.js` or your config file
   - Add your Hugging Face API key:
   ```javascript
   const API_KEY = 'YOUR_HUGGING_FACE_API_KEY';
   ```

4. **Load in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode** (toggle in top right)
   - Click **Load unpacked**
   - Select the `Translate` folder
   - The extension is now installed! 🎉

---

## 🎯 Usage

### Quick Translation
1. **Select text** on any webpage
2. **Click the extension icon** in your toolbar
3. **Choose target language** from the dropdown
4. **Click "Translate"** button
5. **View translation** and optionally replace the selected text

### Context Menu (If implemented)
1. **Select text** on any webpage
2. **Right-click** on the selected text
3. **Choose "Translate to..."** from the context menu
4. **Select your language**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **JavaScript (ES6+)** | Core extension logic |
| **Chrome Extensions API** | Browser integration |
| **Hugging Face API** | AI-powered translation |
| **HTML/CSS** | Popup interface |
| **Content Scripts** | Text selection & manipulation |

---

## 📁 Project Structure

```
Translate/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup UI
├── popup.js              # Popup logic
├── content.js            # Content script for text selection
├── background.js         # Background service worker
├── styles.css            # Styling for popup
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md            # This file
```

---

## 🌍 Supported Languages

The extension supports translation between languages including:

- 🇪🇸 Spanish
- 🇫🇷 French
  
---

## ⚙️ Configuration

### manifest.json Overview

```json
{
  "manifest_version": 3,
  "name": "Text Translation Extension",
  "version": "1.0.0",
  "permissions": [
    "activeTab",
    "storage",
    "contextMenus"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icons/icon48.png"
  }
}
```

### API Configuration

You can customize the translation model and settings in your config:

```javascript
const CONFIG = {
  API_URL: 'https://api-inference.huggingface.co/models/facebook/mbart-large-50-many-to-many-mmt',
  API_KEY: 'YOUR_API_KEY',
  MAX_LENGTH: 500,
  TIMEOUT: 10000
};
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Ideas for Contribution
- 🌍 Add more language pairs
- 🔊 Add text-to-speech for translations
- 📝 Add translation history
- 🎯 Improve accuracy with better models
- 📱 Add keyboard shortcuts

---

## 🐛 Known Issues

- Large text blocks (>500 words) may take longer to translate
- API rate limits may apply depending on usage
- Some websites with strict CSP may block the extension

**Found a bug?** Please [open an issue](https://github.com/aradhana2222/Translate/issues)

---

## 📝 Roadmap

- [ ] Add offline translation support
- [ ] Implement translation history
- [ ] Add text-to-speech functionality
- [ ] Create options page for settings
- [ ] Add keyboard shortcuts
- [ ] Support for translating entire webpages
- [ ] Add multiple translation engine support
- [ ] Create Firefox extension version

---

## 👩‍💻 Author

**Aradhana Mishra**

- GitHub: [@aradhana2222](https://github.com/aradhana2222)
- LinkedIn: [Aradhana Mishra](https://www.linkedin.com/in/isaradhana/)
- Email: mishraaradhana2222@gmail.com

---

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing the translation API
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)

---

## ⭐ Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the code

---

## 📞 Contact

Have questions or suggestions? Feel free to reach out!

- **Email**: mishraaradhana2222@gmail.com
- **LinkedIn**: [linkedin.com/in/isaradhana](https://www.linkedin.com/in/isaradhana/)
- **Issues**: [GitHub Issues](https://github.com/aradhana2222/Translate/issues)

---

<div align="center">

**Made with ❤️ by Aradhana Mishra**

If this project helped you, consider giving it a ⭐!

</div>
