export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    testEnvironment: 'jsdom',
    moduleDirectories: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    roots: [
        '../../',
    ],
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
};
