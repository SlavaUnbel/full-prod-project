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
    };

    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    const rules = config.module!.rules as RuleSetRule[];

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = rules!.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules!.push(buildSvgLoader());
    config.module!.rules!.push(buildsCssLoader(true));

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: '',
    }));

    return config;
};
