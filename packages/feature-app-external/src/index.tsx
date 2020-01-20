import * as React from 'react';
import { App } from './App';

export default {
    dependencies: {
        externals: {
            react: '^16.12.0',
        },
        featureServices: {},
    },

    create() {
        return {
            render() {
                return <App />;
            },
        };
    },
};
