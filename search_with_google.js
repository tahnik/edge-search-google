function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.contextMenus.create({
  id: "search-with-google",
  title: "Search with Google",
  contexts: ["selection"],
}, onCreated);

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "search-with-google":
      title = info.selectionText.substring(0, 15);
      browser.tabs.create({
        url: `https://www.google.com/search?q=${encodeURIComponent(info.selectionText)}`
      });
      break;
  }
});