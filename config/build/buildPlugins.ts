import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types/config';

export default function buildPlugins(paths: BuildOptions['paths']): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
    ];
};
