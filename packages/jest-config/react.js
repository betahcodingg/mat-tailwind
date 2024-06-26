module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.lint.json' }],
  },
  setupFilesAfterEnv: ['@betahcoding/jest-config/jest.setup.ts'],
};
