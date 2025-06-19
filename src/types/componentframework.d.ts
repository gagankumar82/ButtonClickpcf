declare namespace ComponentFramework {
  interface Dictionary {
    [key: string]: any;
  }

  interface Context<TInputs> {}

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
