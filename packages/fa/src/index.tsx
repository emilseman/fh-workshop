import * as React from 'react';
import { App } from './App';

export default {
  dependencies: {
    externals: {
      react: '^16.0.0',
    },
    featureServices: { buttonservice: '^1.0.0' },
  },

  create(env: any) {
    const buttonservice = env.featureServices['buttonservice'] as any;

    return {
      render() {
        return <App buttonservice={buttonservice} />;
      },
    };
  },
};
