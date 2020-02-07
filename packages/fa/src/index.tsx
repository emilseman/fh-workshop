import * as React from 'react';
import { App } from './App';

export default {
  dependencies: {
    externals: {
      react: '^16.0.0',
    },
    featureServices: {},
  },
  optionalDependencies: {
    featureServices: { 'button-service': '^1.0.0' },
  },

  create(env: any) {
    const buttonService = env.featureServices['button-service'] as any;

    return {
      render() {
        return <App buttonService={buttonService} />;
      },
    };
  },
};
