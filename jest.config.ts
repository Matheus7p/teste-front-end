import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});


const config = {
  testEnvironment: 'jsdom',
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    'src/**',
    '!src/**/layout.tsx',
    '!src/**/*.type.ts',
    '!src/**/**.contract.ts',
    '!src/**/**.response.ts',
    '!src/**/**.enum.ts'
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  },

};

export default createJestConfig(config);