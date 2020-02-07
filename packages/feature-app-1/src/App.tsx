import { ButtonService } from 'button-service/dist';
import * as React from 'react';

interface AppProps {
  sampleService: any;
  buttonService: ButtonService;
}

interface AppState {
  buttonClicked: boolean;
  counter: number;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      buttonClicked: this.props.buttonService.buttonClicked,
      counter: 0,
    };
    props.buttonService.addListener(this.updateState.bind(this));
  }

  public updateState() {
    this.setState({
      buttonClicked: this.props.buttonService.buttonClicked,
      counter: this.props.buttonService.counter,
    });
  }

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
          Button has been clicked: {this.state.buttonClicked ? 'yes, ' : 'no, '}
          {this.state.buttonClicked && this.state.counter}
        </span>
      </div>
    );
  }
}
