import path from 'path';

import buildWebpackConfig from './config/build/buildWebpackConfig';

import { BuildPaths, BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
    const mode = env['MODE'] || 'development';
    const PORT = env['PORT'] || 3000;
    
    const isDev = mode === 'development';
    
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    
    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
};
