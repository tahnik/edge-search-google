/**
 * Called once the extension has been created
 */
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/**
 * Create the context menu
 */
browser.contextMenus.create({
  id: "search-with-google",
  title: "Search with Google",
  contexts: ["selection"],
}, onCreated);

/**
 * Handle the click event on the menu
 */
browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "search-with-google":
      browser.tabs.create({
        url: `https://www.google.com/search?q=${encodeURIComponent(info.selectionText)}`
      });
      break;
  }
});