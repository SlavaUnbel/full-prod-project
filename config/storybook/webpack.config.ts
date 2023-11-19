import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { buildsCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    const rules = config.module!.rules as RuleSetRule[];

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = rules!.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules!.push(buildSvgLoader());
    config.module!.rules!.push(buildsCssLoader({
        isDev: true,
        mode: 'development',
        paths: {
            entry: '', src: '', html: '', build: '', locales: '', buildLocales: '',
        },
        port: 3000,
        apiUrl: '',
        project: 'storybook',
    }));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
