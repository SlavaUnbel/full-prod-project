import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from '../types/config';

export const buildsCssLoader = ({ isDev }: BuildOptions) => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
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
        'sass-loader',
    ],
});
