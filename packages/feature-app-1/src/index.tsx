import * as React from 'react';
import { App } from './App';

export default {
  dependencies: {
    externals: {
      react: '^16.12.0',
    },
    featureServices: {
      'button-service': '^1.0.0',
    },
  },
  optionalDependencies: {
    featureServices: {
      'sample-service': '^1.0.0',
    },
  },

  create(env: any) {
    console.log(env);

    const sampleService = env.featureServices['sample-service'];
    const buttonService = env.featureServices['button-service'];

    return {
      render() {
        return (
          <App sampleService={sampleService} buttonService={buttonService} />
        );
      },
    };
  },
};
