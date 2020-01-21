import { ButtonService } from 'buttonservice/dist';
import * as React from 'react';

interface AppProps {
  sampleService: any;
  buttonservice: ButtonService;
}

export class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    props.buttonservice.addListener(this.forceRender);
  }

  public forceRender = () => {
    this.forceUpdate();
  };

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

        <span>
          Button has been clicked:{' '}
          {this.props.buttonservice.buttonClicked ? 'yes ' : 'no'}
        </span>
      </div>
    );
  }
}
