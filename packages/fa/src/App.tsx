import { ButtonService } from 'buttonservice/dist';
import * as React from 'react';

interface AppProps {
  buttonservice: ButtonService;
}

export class App extends React.Component<AppProps> {
  public render(): React.ReactNode {
    const buttonservice = this.props.buttonservice || {
      handleButton: () => {},
    };

    return (
      <div>
        <span>Whatever</span>
        <button onClick={buttonservice.handleButton}>Call</button>
      </div>
    );
  }
}
