import {createFeatureHub, FeatureHub} from '@feature-hub/core';
import {defineExternals, loadAmdModule} from '@feature-hub/module-loader-amd';
import {FeatureAppLoader, FeatureHubContextProvider} from '@feature-hub/react';
import * as React from 'react';
import * as styled from 'styled-components';

export class FeatureHubComponent extends React.Component {
    private featureHub: FeatureHub;

    constructor(props: any) {
        super(props);

        defineExternals({react: React, 'styled-components': styled});
        this.featureHub = createFeatureHub(
            'hub:integrator',
            {
                featureServiceDefinitions: [
                ],
                moduleLoader: loadAmdModule, // loadCommonJsModule for server side rendering
                providedExternals: {react: '16.8.6', 'styled-components': '3.4.5'}
            }
        );
    }

    public render() {
        return (
            <FeatureHubContextProvider value={this.featureHub}>
                <span>React is working now</span>
            </FeatureHubContextProvider>
        );
    }
}
