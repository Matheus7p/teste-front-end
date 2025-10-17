import '@testing-library/jest-dom'

global.console = {
  ...console,
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}

if (!AbortSignal.timeout) {
  AbortSignal.timeout = jest.fn();
}