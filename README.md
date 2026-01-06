# Text Translator Chrome Extension

A Chrome extension for real-time text translation across multiple languages using the Hugging Face API. It allows users to easily translate selected text directly in the browser, with a customizable language selection.

## Features

- **Real-time Translation**: Translate selected text instantly on any webpage.
- **Multiple Language Support**: Supports translations into various languages (e.g., Spanish, French, etc.).
- **Customizable Language Selection**: Choose the desired target language through a popup interface.
- **Hugging Face API Integration**: Uses Hugging Face’s Helsinki-NLP models for high-quality translations.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click on **Load unpacked** and select the folder where you saved this repository.
5. The extension should now be installed and active.

## Usage

1. Highlight any text on a webpage.
2. Right-click and select **Translate Selected Text** from the context menu.
3. The text will be instantly replaced with its translation in the chosen language.

## Customizing the Language

1. Click on the extension icon in the toolbar.
2. Choose your preferred language from the dropdown menu.
3. Click **Save** to set the selected language.

## API Integration

This extension uses the Hugging Face API to perform translations. The translation is handled by the Helsinki-NLP models, specifically `opus-mt` models.
# Translate
