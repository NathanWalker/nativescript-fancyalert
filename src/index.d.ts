import { TNSFancyAlertButton } from "./common";
export * from "./common";
export interface IFancyAlertSupportedTypes {
  SUCCESS: string;
  ERROR: string;
  NOTICE: string;
  WARNING: string;
  INFO: string;
  EDIT: string;
  WAITING: string;
  QUESTION: string;
}
export interface IFancyAlertHideAnimationTypes {
  FadeOut: any;
  SlideOutToBottom: any;
  SlideOutToTop: any;
  SlideOutToLeft: any;
  SlideOutToRight: any;
  SlideOutToCenter: any;
  SlideOutFromCenter: any;
}
export interface IFancyAlertShowAnimationTypes {
  FadeIn: any;
  SlideInFromBottom: any;
  SlideInFromTop: any;
  SlideInFromLeft: any;
  SlideInFromRight: any;
  SlideInFromCenter: any;
  SlideInToCenter: any;
}
export interface IFancyAlertBackgroundTypes {
  Shadow: any;
  Blur: any;
  Transparent: any;
}
export interface IFancyAlertTextOptions {
  titleFont?: string;
  titleSize?: number;
  bodyFont?: string;
  bodySize?: number;
  buttonFont?: string;
  buttonSize?: number;
  // if font is set on any option just use that font for all text settings
  applyFontToAll?: boolean;
}
export declare class TNSFancyAlertButton {
  label: string;
  action: (arg?: any) => void;
  // this will give you the SLCButton (child of UIButton) instance that you can style however you'd like
  applyStyle: (btn: any) => void;
  constructor(model?: any) {}
}
export declare class TNSFancyAlert {
  static SUPPORTED_TYPES: IFancyAlertSupportedTypes;
  static shouldDismissOnTapOutside: boolean;
  static hideAnimationType: IFancyAlertHideAnimationTypes;
  static HIDE_ANIMATION_TYPES: IFancyAlertHideAnimationTypes;
  static showAnimationType: IFancyAlertShowAnimationTypes;
  static SHOW_ANIMATION_TYPES: IFancyAlertShowAnimationTypes;
  static backgroundType: IFancyAlertBackgroundTypes;
  static BACKGROUND_TYPES: IFancyAlertBackgroundTypes;
  static textDisplayOptions: IFancyAlertTextOptions;
  static customViewColor: string;
  static iconTintColor: string;
  static titleColor: string;
  static bodyTextColor: string;
  static tintTopCircle: boolean;
  static cornerRadius: number;
  static backgroundViewColor: string;
  static useLargerIcon: boolean;
  static soundURL: string;
  static showSuccess(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showError(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showNotice(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showWarning(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showInfo(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showEdit(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showWaiting(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showQuestion(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): Promise<{}>;
  static showCustomButtonTimer(
    buttonIndex: number,
    reverse?: boolean,
    imageName?: string,
    color?: string,
    title?: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showCustomImage(
    imageName: string,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showCustomButtons(
    buttons: Array<TNSFancyAlertButton>,
    image: any,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showCustomTextAttributes(
    attributionBlock: Function,
    button: TNSFancyAlertButton,
    image: any,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showTextField(
    placeholder: string,
    initialValue: string,
    button: TNSFancyAlertButton,
    image: any,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showSwitch(
    switchLabel: string,
    switchColor: string,
    button: TNSFancyAlertButton,
    image: any,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static showCustomView(
    customView: any,
    image?: any,
    color?: string,
    title?: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ): Promise<{}>;
  static show(
    type: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ): void;
  static showCustom(
    alert: any,
    image: any,
    color: string,
    title?: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number
  ): void;
  static applyOptions(alert: any): void;
  static createAlert(width?: number): any;
  // Android only
  static showColorDialog(
    title: string,
    subTitle: string,
    okBtnTitle?: string,
    cancelBtnTitle?: string,
    backgroundColor?: string,
    titleTextColor?: string,
    contextTextColor?: string,
    contentImage?: any
  ): Promise<any>;
}
