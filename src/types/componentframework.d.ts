declare namespace ComponentFramework {
  interface Dictionary {
    [key: string]: any;
  }

  interface Property<T> {
    raw: T;
  }

  interface Context<TInputs> {
    parameters: { [P in keyof TInputs]: Property<TInputs[P]> };
  }

  interface StandardControl<IInputs, IOutputs> {
    init(
      context: Context<IInputs>,
      notifyOutputChanged: () => void,
      state: Dictionary,
      container: HTMLDivElement
    ): void;
    updateView(context: Context<IInputs>): void;
    getOutputs?(): IOutputs;
    destroy?(): void;
  }
}
