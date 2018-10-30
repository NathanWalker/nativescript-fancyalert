import { TNSFancyAlertButton } from "./common";
export * from "./common";
export interface SUPPORTED_TYPESI {
  SUCCESS: string;
  ERROR: string;
  NOTICE: string;
  WARNING: string;
  INFO: string;
  EDIT: string;
  WAITING: string;
  QUESTION: string;
}
export interface HIDE_ANIMATION_TYPESI {
  FadeOut: any;
  SlideOutToBottom: any;
  SlideOutToTop: any;
  SlideOutToLeft: any;
  SlideOutToRight: any;
  SlideOutToCenter: any;
  SlideOutFromCenter: any;
}
export interface SHOW_ANIMATION_TYPESI {
  FadeIn: any;
  SlideInFromBottom: any;
  SlideInFromTop: any;
  SlideInFromLeft: any;
  SlideInFromRight: any;
  SlideInFromCenter: any;
  SlideInToCenter: any;
}
export interface BACKGROUND_TYPESI {
  Shadow: any;
  Blur: any;
  Transparent: any;
}
export declare class TNSFancyAlertButton {
  label: string;
  action: (arg?: any) => void;
  constructor(model?: any) {}
}
export declare class TNSFancyAlert {
  static SUPPORTED_TYPES: SUPPORTED_TYPESI;
  static shouldDismissOnTapOutside: boolean;
  static hideAnimationType: HIDE_ANIMATION_TYPESI;
  static HIDE_ANIMATION_TYPES: HIDE_ANIMATION_TYPESI;
  static showAnimationType: SHOW_ANIMATION_TYPESI;
  static SHOW_ANIMATION_TYPES: SHOW_ANIMATION_TYPESI;
  static backgroundType: BACKGROUND_TYPESI;
  static BACKGROUND_TYPES: BACKGROUND_TYPESI;
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
}
