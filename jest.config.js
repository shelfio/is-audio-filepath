/** @type {import('jest').Config} */
export default {
    collectCoverageFrom: ['src/**/*.ts', '!src/**/schema.ts', '!src/**/types.ts'],
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
    reporters: ['default', 'jest-junit'],
    transform: {
      '\\.[jt]sx?$': [
        'babel-jest',
        {
          configFile: '@shelf/babel-config/backend',
        },
      ],
    },
    testEnvironment: 'node',
  };