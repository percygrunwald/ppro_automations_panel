/*
These are the back end functions that execute in the ExtendScript environment.
The functions here are called from the front end via `CS_INTERFACE.evalScript`.
*/
$._PPROFunctions = {
  fillGapsWithLastFrame: fillGapsWithLastFrame,
  logDebugInfo: logDebugInfo,
  logMsgToEvents: logMsgToEvents
}

/*
Fill gaps between clips on the first video track with the last frame of the
earlier clip.
*/
function fillGapsWithLastFrame() {
  logMsgToEvents("Filling gaps with last frame...")

  return true
}

/*
Logs some debugging info about the Premiere Pro environment to the event log.
*/
function logDebugInfo() {
  logMsgToEvents("Hello, World!")

  return true
}

/*
Writes a message to the event log.

@param {String} msg The message to log
@param {String} level The level of the log ("info", "warning", "error"),
  defaults to "info"
*/
function logMsgToEvents(msg, level) {
  level = typeof(level) == "undefined" ? "info" : level

  app.setSDKEventMessage(msg, level)
}
