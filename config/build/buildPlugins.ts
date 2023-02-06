import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export default function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const { paths: { html } } = options

    return [
        new HTMLWebpackPlugin({ template: html }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];
};
