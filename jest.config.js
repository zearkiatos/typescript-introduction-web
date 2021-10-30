module.exports = {
    name: "typescript-introduction-web",
    verbose: false,
    testMatch: ["**/*.test.ts"],
    preset: "ts-jest",
    testEnvironment:"node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        lines: 100,
        functions: 100,
      },
    },
  };