/*
This file has functions that are responsible for loading the `jsx` files in
`src/jsx` dynamically when the panel is loaded/refreshed with the reload link.
For changes to this file to be reloaded, the panel needs to be closed and then
reopened from the `Window > Extensions` menu.

All custom user functions for ExtendScript functions should go in files in
`src/jsx`.
*/
if (typeof ($) == "undefined") {
  $ = {}
}

$._loader = {
  evalFile: evalFile,
  evalFiles: evalFiles
}

function evalFiles(jsxDir) {
  var jsxFolder = {}

  try {
    jsxFolder = new Folder(jsxDir)
  } catch (e) {
    alert("evalFiles: " + e)
    return
  }

  if (jsxFolder.exists) {
    var jsxFiles = []
    jsxFiles = jsxFolder.getFiles("*.jsx")

    for (i = 0; i < jsxFiles.length; i++) {
      var jsxFile = jsxFiles[i]
      evalFile(jsxFile)
    }
  }
}

function evalFile(file) {
  try {
    $.evalFile(file)
  } catch (e) {
    alert("evalFile: " + e)
  }
}
