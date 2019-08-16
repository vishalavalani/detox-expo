const { execSync } = require("child_process");
const { existsSync, mkdirSync } = require("fs");

const SCREENSHOT_DIR = "/screenshots";

const SCREENSHOT_OPTIONS = {
  timeout: 1000,
  killSignal: "SIGKILL"
};

const takeScreenshot = () => {
  if (!existsSync(SCREENSHOT_DIR)) mkdirSync(SCREENSHOT_DIR);
  const screenshotFilename = `${SCREENSHOT_DIR}/screenshot-${String(new Date().getTime())}.png`;
  execSync(`xcrun simctl io booted screenshot ${screenshotFilename}`, SCREENSHOT_OPTIONS);
};

module.exports = { takeScreenshot };
