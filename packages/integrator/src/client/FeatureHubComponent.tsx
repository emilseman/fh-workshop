import { createFeatureHub, FeatureHub } from '@feature-hub/core';
import { defineExternals, loadAmdModule } from '@feature-hub/module-loader-amd';
import {
  FeatureAppLoader,
  FeatureHubContextProvider,
} from '@feature-hub/react';
import * as React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: 1px solid #0705a8;
  padding: 10px;

  display: grid;
  grid-template-areas:
    'top top top top'
    'main main main right'
    'fa1 fa2 fa3 right';
  grid-gap: 20px;
`;

const StyledMain = styled.div`
  grid-area: main;
`;

const StyledFaContainer1 = styled.div`
  grid-area: top;
  outline: 1px solid #0ab735;
`;

const StyledFaContainer2 = styled.div`
  grid-area: fa3;
  outline: 1px solid #0ab735;
`;

export class FeatureHubComponent extends React.Component {
  private featureHub: FeatureHub;

  constructor(props: any) {
    super(props);

    defineExternals({ react: React, 'styled-components': styled });
    this.featureHub = createFeatureHub('hub:integrator', {
      featureServiceDefinitions: [],
      moduleLoader: loadAmdModule, // loadCommonJsModule for server side rendering
      providedExternals: { react: '16.12.0', 'styled-components': '5.0.0' },
    });
  }

  public render() {
    return (
      <StyledWrapper>
        <FeatureHubContextProvider value={this.featureHub}>
          <StyledMain>React is working now</StyledMain>
          <StyledFaContainer1>
            <FeatureAppLoader featureAppId="id-fa-1" src="/public/fa1.js" />
          </StyledFaContainer1>
          <StyledFaContainer2>
            <FeatureAppLoader featureAppId="id-fa-2" src="/public/fa1.js" />
          </StyledFaContainer2>
        </FeatureHubContextProvider>
      </StyledWrapper>
    );
  }
}
