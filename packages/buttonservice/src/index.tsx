const myFeatureServiceDefinition = {
  id: 'buttonservice',

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
}
class BSImpl implements ButtonService {
  listeners: (() => void)[] = [];
  public addListener(listener: () => void) {
    this.listeners.push(listener);
  }

  public buttonClicked = false;
  public handleButton = () => {
    if (!this.buttonClicked) {
      this.buttonClicked = true;
    }
    this.listeners.forEach(listener => listener());
  };
}

export default myFeatureServiceDefinition;
