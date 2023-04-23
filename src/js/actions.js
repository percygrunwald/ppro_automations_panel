/*
This file contains the "front end" commands that are used to populate the list
of buttons in the panel: each element of `ACTIONS` will get its own button,
with the text of the button equal to the function name and the onclick event
of the button calling the function.
*/
ACTIONS = {
  logDebugInfo: logDebugInfo,
  fillGapsWithLastFrame: fillGapsWithLastFrame
}

/*
Fill gaps between clips on the first video track with the last frame of the
earlier clip.
*/
function fillGapsWithLastFrame() {
  _callFn("$._PPROFunctions.fillGapsWithLastFrame", [])
}

/*
Log debug info to the event log.
*/
function logDebugInfo() {
  _callFn("$._PPROFunctions.logDebugInfo", [])
}

/*
Calls an ExtendScript (back end) function.

@param {String} fn The name of the function
@param {Array<String>} args The string args to the function
*/
function _callFn(fn, args, noLog) {
  noLog = typeof(noLog) == "undefined" ? false : true
  var fnStr = fn + "()"

  if (args.length > 0) {
    var argsStr = args.join("','")
    fnStr = fn + "('" + argsStr + "')"
  }

  if (noLog) {
    CS_INTERFACE.evalScript(fnStr)
  } else {
    _logMsgToEvents("Calling " + fnStr + "...")
    CS_INTERFACE.evalScript(fnStr, _logFnOutput(fnStr))
  }
}

/*
Generates a callback to write the result of a function to the event log.

@param {String} fnStr The string representing the function and its args

@return {Function<String>} A callback function that accepts the return value of
  the called function as its first arg
*/
function _logFnOutput(fnStr) {
  return function(fnOutput) {
    msg = fnStr + " => " + fnOutput
    _logMsgToEvents(msg)
  }
}

/*
Log a message to events.

@param {String} msg The message to write
@param {String} level The log level ("info", "warning", "error"), defaults to
  "info"
*/
function _logMsgToEvents(msg, level) {
  level = typeof(level) == "undefined" ? "info" : level

  _callFn("$._PPROFunctions.logMsgToEvents", [msg, level], true)
}
