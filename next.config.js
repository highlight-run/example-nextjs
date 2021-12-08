const withTM = require("next-transpile-modules")(["@highlight-run/react"]);

module.exports = withTM({
  reactStrictMode: true,
});
