export type BuildMode = 'production' | 'development';

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
    MODE: BuildMode;
    PORT: number;
    API_URL: string;
}
