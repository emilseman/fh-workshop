const myFeatureServiceDefinition = {
  id: 'button-service',

  dependencies: {
    featureServices: {},
    externals: {},
  },

  optionalDependencies: {
    featureServices: {},
  },

  create(env: any) {
    const service = new BSImpl();
    return {
      '1.0.0': (consumerId: string) => ({
        featureService: service,
      }),
    };
  },
};

export interface ButtonService {
  addListener: (listener: () => void) => void;
  handleButton: () => void;
  buttonClicked: boolean;
  counter: number;
}
class BSImpl implements ButtonService {
  listeners: (() => void)[] = [];
  public addListener(listener: () => void) {
    this.listeners.push(listener);
  }

  public buttonClicked = false;
  public handleButton = () => {
    this.counter = this.counter + 1;
    if (!this.buttonClicked) {
      this.buttonClicked = true;
    }
    this.listeners.forEach(listener => listener());
  };
  public counter = 0;
}

export default myFeatureServiceDefinition;
