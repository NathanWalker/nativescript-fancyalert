export class TNSFancyAlertButton {
  public label: string;
  public action: Function;

  constructor(model?: any) {
    if (model) {
      this.label = model.label;
      this.action = model.action;
    }
  }
}