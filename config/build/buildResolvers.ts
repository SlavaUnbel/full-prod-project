import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export default function buildResolvers(options: BuildOptions): ResolveOptions {
    const { paths: { src } } = options;

    return {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
    };
}
