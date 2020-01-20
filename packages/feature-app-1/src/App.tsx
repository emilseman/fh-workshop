import * as React from 'react';

interface AppProps {
  sampleService: any;
}

export class App extends React.Component<AppProps> {
  public render(): React.ReactNode {
    const { serviceStore } = this.props.sampleService || {
      serviceStore: undefined,
    };

    return (
      <div>
        <span>This is feature App no. 1 </span>
        <span>
          {serviceStore
            ? `Sample service was found, service was setup by: ${serviceStore.setupBy}`
            : 'Sample service was not provided'}
        </span>
      </div>
    );
  }
}
