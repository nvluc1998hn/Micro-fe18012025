import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
module.exports = withModuleFederation(config).then((fn) =>
    fn({
        output: {
            publicPath: "auto",
            assetModuleFilename: 'assets/[name].[hash][ext][query]',
        },
        optimization: {
            runtimeChunk: false,
        },
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset',
                },
            ],
        },
    })
);