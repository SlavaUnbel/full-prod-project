import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export default function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]',
                    },
                },  
            },
            "sass-loader",
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ]
            },
        }
    }
    
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
};
