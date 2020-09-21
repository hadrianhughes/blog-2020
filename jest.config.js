module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts', '!src/**/styles.tsx', '!src/**/styles.ts', '!src/**/index.ts']
}
