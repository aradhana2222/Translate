document.getElementById('save').addEventListener('click', () => {
  const selectedLanguage = document.getElementById('language').value;
  chrome.storage.sync.set({ language: selectedLanguage }, () => {
    alert('Language saved!');
  });
});
