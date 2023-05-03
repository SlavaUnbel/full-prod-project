import { WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export default function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const { paths: { html }, isDev } = options

    return [
        new HTMLWebpackPlugin({ template: html }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ];
};
