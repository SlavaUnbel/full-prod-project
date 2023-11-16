import { RuleSetRule } from 'webpack';

import { buildsBabelLoader } from './loaders/buildBabelLoader';
import { buildsCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export default function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const cssLoader = buildsCssLoader(options);

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const codeBabelLoader = buildsBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildsBabelLoader({ ...options, isTsx: true });

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
