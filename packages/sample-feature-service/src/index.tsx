import {
  FeatureServiceBinder,
  FeatureServiceProviderDefinition,
  SharedFeatureService,
} from '@feature-hub/core';
import * as React from 'react';

export interface SampleServiceV1 {
  serviceStore: {
    setupBy?: string;
  };
}

export interface SharedSampleService extends SharedFeatureService {
  readonly '1.0.0': FeatureServiceBinder<SampleServiceV1>;
}

export function defineSampleService(
  config?: any,
): FeatureServiceProviderDefinition<SharedSampleService> {
  return {
    id: 'sample-service',
    create: (env: any) => {
      const srv: SampleServiceV1 = { serviceStore: {} };

      return {
        '1.0.0': (consumerId: string) => ({
          featureService: srv,
        }),
      };
    },
  };
}
