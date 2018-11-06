import { Color } from "tns-core-modules/color";
import { TNSFancyAlertButton } from "./common";
import {
  IFancyAlertSupportedTypes,
  IFancyAlertTextOptions,
  IFancyAlertShowAnimationTypes,
  IFancyAlertHideAnimationTypes,
  IFancyAlertBackgroundTypes
} from "./";

export * from "./common";

export class TNSFancyAlert {
  public static SUPPORTED_TYPES: IFancyAlertSupportedTypes = {
    SUCCESS: "Success",
    ERROR: "Error",
    NOTICE: "Notice",
    WARNING: "Warning",
    INFO: "Info",
    EDIT: "Edit",
    WAITING: "Waiting",
    QUESTION: "Question"
  };

  //Dismiss on tap outside (Default is NO)
  public static shouldDismissOnTapOutside: boolean = false;

  // font handling
  public static textDisplayOptions: IFancyAlertTextOptions;

  //Hide animation type (Default is FadeOut)
  public static hideAnimationType: IFancyAlertHideAnimationTypes;

  public static HIDE_ANIMATION_TYPES: IFancyAlertHideAnimationTypes = {
    FadeOut: SCLAlertViewHideAnimation.FadeOut,
    SlideOutToBottom: SCLAlertViewHideAnimation.SlideOutToBottom,
    SlideOutToTop: SCLAlertViewHideAnimation.SlideOutToTop,
    SlideOutToLeft: SCLAlertViewHideAnimation.SlideOutToLeft,
    SlideOutToRight: SCLAlertViewHideAnimation.SlideOutToRight,
    SlideOutToCenter: SCLAlertViewHideAnimation.SlideOutToCenter,
    SlideOutFromCenter: SCLAlertViewHideAnimation.SlideOutFromCenter
  };

  //Show animation type (Default is SlideInFromTop)
  public static showAnimationType: IFancyAlertShowAnimationTypes;

  public static SHOW_ANIMATION_TYPES: IFancyAlertShowAnimationTypes = {
    FadeIn: SCLAlertViewShowAnimation.FadeIn,
    SlideInFromBottom: SCLAlertViewShowAnimation.SlideInFromBottom,
    SlideInFromTop: SCLAlertViewShowAnimation.SlideInFromTop,
    SlideInFromLeft: SCLAlertViewShowAnimation.SlideInFromLeft,
    SlideInFromRight: SCLAlertViewShowAnimation.SlideInFromRight,
    SlideInFromCenter: SCLAlertViewShowAnimation.SlideInFromCenter,
    SlideInToCenter: SCLAlertViewShowAnimation.SlideInToCenter
  };

  //Set background type (Default is Shadow)
  public static backgroundType: IFancyAlertBackgroundTypes;

  public static BACKGROUND_TYPES: IFancyAlertBackgroundTypes = {
    Shadow: SCLAlertViewBackground.Shadow,
    Blur: SCLAlertViewBackground.Blur,
    Transparent: SCLAlertViewBackground.Transparent
  };

  //Overwrite SCLAlertView (Buttons, top circle and borders) colors
  public static customViewColor: string;

  //Set custom tint color for icon image.
  public static iconTintColor: string;

  // set custom title color
  public static titleColor: string;

  // set custom body text color
  public static bodyTextColor: string;

  //Override top circle tint color with background color
  public static tintTopCircle: boolean = true;

  //Set custom corner radius for SCLAlertView
  public static cornerRadius: number;

  //Overwrite SCLAlertView background color
  public static backgroundViewColor: string;

  //Make the top circle icon larger
  public static useLargerIcon: boolean = false;

  //Using sound
  public static soundURL: string;

  public static showSuccess(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.SUCCESS,
        title || "Success!",
        subTitle,
        closeBtnTitle,
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showError(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.ERROR,
        title || "Error!",
        subTitle,
        closeBtnTitle,
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showNotice(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.NOTICE,
        title || "Notice",
        subTitle,
        closeBtnTitle,
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showWarning(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.WARNING,
        title || "Warning!",
        subTitle,
        closeBtnTitle,
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showInfo(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.INFO,
        title || "Info",
        subTitle,
        closeBtnTitle,
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showEdit(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.EDIT,
        title || "Edit",
        subTitle,
        closeBtnTitle,
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showWaiting(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.WAITING,
        title || "Waiting...",
        subTitle,
        closeBtnTitle,
        duration || 5,
        width
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showQuestion(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    return new Promise((resolve, reject) => {
      TNSFancyAlert.show(
        TNSFancyAlert.SUPPORTED_TYPES.QUESTION,
        title || "Waiting...",
        subTitle,
        closeBtnTitle || "Dismiss",
        duration,
        width,
        buttons
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showCustomButtonTimer(
    buttonIndex: number,
    reverse?: boolean,
    imageName?: string,
    color?: string,
    title?: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      buttonIndex = buttonIndex || 0;
      reverse = reverse || false;
      title = title || "Title";
      alert.addTimerToButtonIndexReverse(buttonIndex, reverse);
      TNSFancyAlert.showCustom(
        alert,
        imageName,
        color,
        title,
        subTitle,
        closeBtnTitle || "Dismiss",
        duration || 5
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showCustomImage(
    imageName: string,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      let image = UIImage.imageNamed(imageName);
      alert.showCustomColorTitleSubTitleCloseButtonTitleDuration(
        image,
        new Color(color).ios,
        title,
        subTitle,
        closeBtnTitle || "Ok",
        duration || 0
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static showCustomButtons(
    buttons: Array<TNSFancyAlertButton>,
    image: any,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      for (let btn of buttons) {
        const slcBtn = alert.addButtonActionBlock(btn.label, () => {
          btn.action();
        });
        if (btn.applyStyle) {
          btn.applyStyle(slcBtn);
        }
      }
      TNSFancyAlert.showCustom(
        alert,
        image,
        color,
        title,
        subTitle,
        null,
        duration
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  public static applyTextDisplayOptions(alert: SCLAlertView) {
    if (TNSFancyAlert.textDisplayOptions) {
      const systemFont = UIFont.systemFontOfSize(12);
      // get default font family name
      let fontFamily = systemFont.familyName;
      // default size
      let fontSize = 14;

      // custom font sizes
      const titleSize = TNSFancyAlert.textDisplayOptions.titleSize || fontSize;
      const bodySize = TNSFancyAlert.textDisplayOptions.bodySize || fontSize;
      const buttonSize =
        TNSFancyAlert.textDisplayOptions.buttonSize || fontSize;

      // if one font is specified on any option just use that for all
      if (TNSFancyAlert.textDisplayOptions.applyFontToAll) {
        if (TNSFancyAlert.textDisplayOptions.titleFont) {
          fontFamily = TNSFancyAlert.textDisplayOptions.titleFont;
        } else if (TNSFancyAlert.textDisplayOptions.bodyFont) {
          fontFamily = TNSFancyAlert.textDisplayOptions.bodyFont;
        } else if (TNSFancyAlert.textDisplayOptions.buttonFont) {
          fontFamily = TNSFancyAlert.textDisplayOptions.buttonFont;
        }
      }

      alert.setTitleFontFamilyWithSize(fontFamily, titleSize);
      alert.setBodyTextFontFamilyWithSize(fontFamily, bodySize);
      alert.setButtonsTextFontFamilyWithSize(fontFamily, buttonSize);
    }
  }

  public static showCustomTextAttributes(
    attributionBlock: (p1: string) => NSAttributedString,
    button: TNSFancyAlertButton,
    image: any,
    color: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      alert.attributedFormatBlock = attributionBlock;
      alert.addButtonActionBlock(button.label, () => {
        button.action();
        resolve();
      });
      TNSFancyAlert.showCustom(
        alert,
        image,
        color,
        title,
        subTitle,
        null,
        duration
      );
    });
  }

  public static showTextField(
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
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      var textField = alert.addTextField(placeholder);
      if (initialValue) textField.text = initialValue;
      alert.addButtonActionBlock(button.label, () => {
        textField.resignFirstResponder();
        button.action(textField.text);
        resolve();
      });
      TNSFancyAlert.showCustom(
        alert,
        image,
        color,
        title,
        subTitle,
        null,
        duration
      );
    });
  }

  public static showSwitch(
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
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      var switchView = alert.addSwitchViewWithLabel(switchLabel);
      switchView.tintColor = new Color(switchColor).ios;

      alert.addButtonActionBlock(button.label, () => {
        button.action(switchView.selected);
        resolve();
      });
      TNSFancyAlert.showCustom(
        alert,
        image,
        color,
        title,
        subTitle,
        null,
        duration
      );
    });
  }

  public static showCustomView(
    customView: any,
    image?: any,
    color?: string,
    title?: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number
  ) {
    return new Promise((resolve, reject) => {
      let alert = TNSFancyAlert.createAlert(width);
      TNSFancyAlert.applyTextDisplayOptions(alert);

      alert.addCustomView(customView);
      TNSFancyAlert.showCustom(
        alert,
        image,
        color,
        title,
        subTitle,
        closeBtnTitle,
        duration
      );
      // TODO: find way to resolve only after button is tapped
      // right now just resolve after its shown
      resolve();
    });
  }

  /**
   * Base Method
   **/
  public static show(
    type: string,
    title: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number,
    width?: number,
    buttons?: Array<TNSFancyAlertButton>
  ) {
    let alert = TNSFancyAlert.createAlert(width);
    TNSFancyAlert.applyTextDisplayOptions(alert);

    // add custom buttons
    if (buttons) {
      for (let btn of buttons) {
        alert.addButtonActionBlock(btn.label, () => {
          btn.action();
        });
      }
    }

    // apply options to instance
    TNSFancyAlert.applyOptions(alert);

    if (typeof closeBtnTitle === "undefined") closeBtnTitle = "Ok";
    alert[`show${type}SubTitleCloseButtonTitleDuration`](
      title,
      subTitle,
      closeBtnTitle,
      duration || 0
    );
  }

  public static showCustom(
    alert: any,
    image: any,
    color: string,
    title?: string,
    subTitle?: string,
    closeBtnTitle?: string,
    duration?: number
  ) {
    // apply options to instance
    TNSFancyAlert.applyOptions(alert);

    if (typeof image === "undefined") image = "nativescript.png";
    if (typeof color === "undefined") color = "#2B33FF";
    if (typeof closeBtnTitle === "undefined") closeBtnTitle = "Ok";

    if (typeof image === "string") {
      image = UIImage.imageNamed(image);
    }

    alert.showCustomColorTitleSubTitleCloseButtonTitleDuration(
      image,
      new Color(color).ios,
      title,
      subTitle,
      closeBtnTitle,
      duration || 0
    );
  }

  /**
   * Alert Options
   */
  public static applyOptions(alert: any) {
    alert.shouldDismissOnTapOutside = TNSFancyAlert.shouldDismissOnTapOutside;

    if (TNSFancyAlert.hideAnimationType)
      alert.hideAnimationType = TNSFancyAlert.hideAnimationType;

    if (TNSFancyAlert.showAnimationType)
      alert.showAnimationType = TNSFancyAlert.showAnimationType;

    if (TNSFancyAlert.backgroundType)
      alert.backgroundType = TNSFancyAlert.backgroundType;

    if (TNSFancyAlert.customViewColor)
      alert.customViewColor = new Color(TNSFancyAlert.customViewColor).ios;

    if (TNSFancyAlert.iconTintColor)
      alert.iconTintColor = new Color(TNSFancyAlert.iconTintColor).ios;

    if (TNSFancyAlert.titleColor)
      alert.labelTitle.textColor = new Color(TNSFancyAlert.titleColor).ios;

    if (TNSFancyAlert.bodyTextColor)
      alert.viewText.textColor = new Color(TNSFancyAlert.bodyTextColor).ios;

    alert.tintTopCircle = TNSFancyAlert.tintTopCircle;

    if (TNSFancyAlert.cornerRadius)
      alert.cornerRadius = TNSFancyAlert.cornerRadius;

    if (TNSFancyAlert.backgroundViewColor)
      alert.backgroundViewColor = new Color(
        TNSFancyAlert.backgroundViewColor
      ).ios;

    alert.useLargerIcon = TNSFancyAlert.useLargerIcon;

    if (TNSFancyAlert.soundURL)
      alert.soundURL = NSURL.fileURLWithPath(
        `${NSBundle.mainBundle.resourcePath}/${TNSFancyAlert.soundURL}`
      );
  }

  /**
   * Alert Creator
   **/
  public static createAlert(width?: number) {
    if (width) {
      return SCLAlertView.alloc().initWithNewWindowWidth(width);
    } else {
      return SCLAlertView.alloc().initWithNewWindow();
    }
  }
}
