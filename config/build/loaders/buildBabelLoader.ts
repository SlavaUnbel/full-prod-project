import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx: boolean;
}

export const buildsBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(m?js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',
                isTsx && [
                    babelRemovePropsPlugin(),
                    {
                        props: ['data-test-id'],
                    },
                ],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
