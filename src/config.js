const os = require("os");
const path = require("path");

function getEditor() {
  const editor = process.env.VISUAL || process.env.EDITOR;

  if (!editor) {
    const isWindows = process.platform === "win32";
    throw new Error(
      isWindows
        ? "Editor not set. Run: set EDITOR=<your-editor>"
        : "Editor not set. Run: export EDITOR=<your-editor>"
    );
  }

  return editor;
}

module.exports = { getEditor };
