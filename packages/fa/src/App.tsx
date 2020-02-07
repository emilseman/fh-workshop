import { ButtonService } from 'button-service/dist';
import * as React from 'react';

interface AppProps {
  buttonService: ButtonService;
}

export class App extends React.Component<AppProps> {
  public render(): React.ReactNode {
    const buttonService: ButtonService = this.props.buttonService;

    return (
      <div>
        <span>Whatever</span>
        <button onClick={buttonService.handleButton}>Call</button>
      </div>
    );
  }
}
