import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class GetWellDetailsControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container!: HTMLDivElement;

    constructor() {}

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this._container = container;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        while (this._container.firstChild) {
            this._container.removeChild(this._container.firstChild);
        }

        const button = document.createElement("button");
        button.innerText = "Get Well Details";
        button.addEventListener("click", () => {
            try {
                const fn = (window as any).getwelldata;
                if (typeof fn === "function") {
                    const wellApi = context.parameters.rpc_wellapi.raw;
                    const wellNumber = context.parameters.rpc_wellnumber.raw;
                    fn(wellApi, wellNumber);
                } else {
                    console.error("getwelldata function is not defined");
                }
            } catch (e) {
                console.error("Error executing getwelldata", e);
            }
        });
        this._container.appendChild(button);
    }

    public getOutputs(): IOutputs {
        return {} as IOutputs;
    }

    public destroy(): void {
        while (this._container.firstChild) {
            this._container.removeChild(this._container.firstChild);
        }
    }
}
