(function() {
  /**
   * Tabs
   */
  var tabs = ["#about", "#practice", "#fees", "#contact"];
  var currentTab = "#about";

  function openTab(tabName) {
    // Is this a valid hash?
    if (tabs.indexOf(tabName) < 0) {
      tabName = tabs[0];
    }
    // Hide current tab
    document.querySelector(currentTab + "-tab").classList.remove("active");
    document
      .querySelector(currentTab + "-content")
      .classList.add("visuallyhidden");

    // Activate new tab
    document.querySelector(tabName + "-tab").classList.add("active");
    document
      .querySelector(tabName + "-content")
      .classList.remove("visuallyhidden");
    currentTab = tabName;

    // Fire analytics event
    if (window.gtag) {
      var trackingUrl = tabName.replace("#", "/");
      gtag("config", "GA_MEASUREMENT_ID", { page_path: trackingUrl });
    }
  }

  // Listen for hash changes
  window.addEventListener(
    "hashchange",
    function hashChangeHandler(e) {
      e.preventDefault();
      if (location.hash) {
        openTab(location.hash);
      }
    },
    false
  );

  // Activate tab if it's hash is provided initially
  var initialHash = location.hash;
  if (initialHash) {
    openTab(initialHash);
  }

  // JS is enabled! Set a class on the body to enable our 'hidden' class
  document.body.className = "js-enabled";
})();
