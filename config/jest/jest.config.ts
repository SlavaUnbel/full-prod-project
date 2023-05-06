import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
    },
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    testEnvironment: 'jsdom',
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts',
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};
