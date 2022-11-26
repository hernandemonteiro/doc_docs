module.exports = {
  projects: [
    {
      displayName: "dom",
      testEnvironment: "jsdom",
      testMatch: ["./__tests__/**/*.test.jsx"],
      transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
      },
      transformIgnorePatterns: ["/node_modules/"],
      moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        "^.+\\.module\\.(css|less|scss|sass)$": "identity-obj-proxy",
      },
    },
    {
      displayName: "node",
      testEnvironment: "node",
      testMatch: ["./__tests__/**/*.test.js"],
    },
  ],
  verbose: true,
};
