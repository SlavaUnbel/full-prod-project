import { Configuration } from 'webpack';
import buildDevServer from './buildDevServer';

import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';

import { BuildOptions } from './types/config';

export default function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(paths),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    }
}