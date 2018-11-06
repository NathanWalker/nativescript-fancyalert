export class TNSFancyAlertButton {
  public label: string;
  public action: Function;
  public applyStyle: (btn: any) => void;

  constructor(model?: any) {
    if (model) {
      this.label = model.label;
      this.action = model.action;
      this.applyStyle = model.applyStyle;
    }
  }
}
