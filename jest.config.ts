module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporterts: ["json", "lcov", "text"],
	testPathIgnorePatterns: ["/node_modules", "/dist"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};
