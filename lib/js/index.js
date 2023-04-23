/*
This file is responsible for the bootstrapping of the panel with the user
actions defined in `src/js`. You can add actions to `ACTIONS` in `js` files
under `src/js` and they will be added to the panel when it is reloaded.
*/
var ACTIONS = {}
var CS_INTERFACE = {}

/*
Initializes the panel.
*/
function initializePanel() {
  CS_INTERFACE = new CSInterface()
  loadJSX()
  showActions()
}

/*
Loads all JSX files in the jsx directory without recursion.
*/
function loadJSX() {
  var extensionPath = CS_INTERFACE.getSystemPath(SystemPath.EXTENSION)
  var jsxDir = extensionPath + "/src/jsx"

  CS_INTERFACE.evalScript("$._loader.evalFiles('" + jsxDir + "')")
}

/*
Populate the actions container with a list of clickable actions based on those
defined in ACTIONS.
*/
function showActions() {
  var container = document.getElementById("actions")
  for (var key in ACTIONS) {
    var button = document.createElement("button")
    button.innerText = key
    button.addEventListener("click", ACTIONS[key])
    container.appendChild(button)
  }
}
