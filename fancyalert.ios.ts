import {Color} from 'color';
import {TNSFancyAlertButton} from './common';

export * from './common';

declare var SCLAlertView: any, UIImage: any, UIView: any, CGRectMake: any, SlideOutToBottom: any, NSBundle: any, NSURL: any, UITextFieldViewModeWhileEditing: any, UITextField: any, UITextBorderStyleRoundedRect: any, UIReturnKeyDone: any, SCLAlertViewHideAnimation: any, SCLAlertViewShowAnimation: any, SCLAlertViewBackground: any;

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

export class TNSFancyAlert {

  public static SUPPORTED_TYPES: SUPPORTED_TYPESI = {
    SUCCESS: 'Success',
    ERROR: 'Error',
    NOTICE: 'Notice',
    WARNING: 'Warning',
    INFO: 'Info',
    EDIT: 'Edit',
    WAITING: 'Waiting',
    QUESTION: 'Question'
  };

  //Dismiss on tap outside (Default is NO)
  public static shouldDismissOnTapOutside: boolean = false;

  //Hide animation type (Default is FadeOut)
  public static hideAnimationType: HIDE_ANIMATION_TYPESI;

  public static HIDE_ANIMATION_TYPES: HIDE_ANIMATION_TYPESI = {
    FadeOut: SCLAlertViewHideAnimation.FadeOut,
    SlideOutToBottom: SCLAlertViewHideAnimation.SlideOutToBottom,
    SlideOutToTop: SCLAlertViewHideAnimation.SlideOutToTop,
    SlideOutToLeft: SCLAlertViewHideAnimation.SlideOutToLeft,
    SlideOutToRight: SCLAlertViewHideAnimation.SlideOutToRight,
    SlideOutToCenter: SCLAlertViewHideAnimation.SlideOutToCenter,
    SlideOutFromCenter: SCLAlertViewHideAnimation.SlideOutFromCenter
  };

  //Show animation type (Default is SlideInFromTop)
  public static showAnimationType: SHOW_ANIMATION_TYPESI;

  public static SHOW_ANIMATION_TYPES: SHOW_ANIMATION_TYPESI = {
    FadeIn: SCLAlertViewShowAnimation.FadeIn,
    SlideInFromBottom: SCLAlertViewShowAnimation.SlideInFromBottom,
    SlideInFromTop: SCLAlertViewShowAnimation.SlideInFromTop,
    SlideInFromLeft: SCLAlertViewShowAnimation.SlideInFromLeft,
    SlideInFromRight: SCLAlertViewShowAnimation.SlideInFromRight,
    SlideInFromCenter: SCLAlertViewShowAnimation.SlideInFromCenter,
    SlideInToCenter: SCLAlertViewShowAnimation.SlideInToCenter
  };
  
  //Set background type (Default is Shadow)
  public static backgroundType: BACKGROUND_TYPESI;

  public static BACKGROUND_TYPES: BACKGROUND_TYPESI = {
    Shadow: SCLAlertViewBackground.Shadow,
    Blur: SCLAlertViewBackground.Blur,
    Transparent: SCLAlertViewBackground.Transparent
  }

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

  public static showSuccess(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.SUCCESS, (title || 'Success!'), subTitle, closeBtnTitle, duration, width);
  }

  public static showError(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.ERROR, (title || 'Error!'), subTitle, closeBtnTitle, duration, width);
  }

  public static showNotice(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.NOTICE, (title || 'Notice'), subTitle, closeBtnTitle, duration, width);
  }

  public static showWarning(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.WARNING, (title || 'Warning!'), subTitle, closeBtnTitle, duration, width);
  }

  public static showInfo(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.INFO, (title || 'Info'), subTitle, closeBtnTitle, duration, width);
  }

  public static showEdit(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.EDIT, (title || 'Edit'), subTitle, closeBtnTitle, duration, width);
  }

  public static showWaiting(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.WAITING, (title || 'Waiting...'), subTitle, closeBtnTitle, (duration || 5), width);
  }

  public static showQuestion(title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    TNSFancyAlert.show(TNSFancyAlert.SUPPORTED_TYPES.QUESTION, (title || 'Waiting...'), subTitle, (closeBtnTitle || 'Dismiss'), duration, width);
  }

  public static showCustomButtonTimer(buttonIndex: number, reverse?: boolean, imageName?: string, color?: string, title?: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    buttonIndex = buttonIndex || 0;
    reverse = reverse || false;
    title = title || 'Title';
    alert.addTimerToButtonIndexReverse(buttonIndex, reverse);
    TNSFancyAlert.showCustom(alert, imageName, color, title, subTitle, (closeBtnTitle || 'Dismiss'), (duration || 5));
  }

  public static showCustomImage(imageName: string, color: string, title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    let image = UIImage.imageNamed(imageName);
    alert.showCustomColorTitleSubTitleCloseButtonTitleDuration(image, new Color(color).ios, title, subTitle, (closeBtnTitle || 'Ok'), (duration || 0));
  }

  public static showCustomButtons(buttons: Array<TNSFancyAlertButton>, image: any, color: string, title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    for (let btn of buttons) {
      alert.addButtonActionBlock(btn.label, () => {
        btn.action();
      });
    }
    TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
  }

  public static showCustomTextAttributes(attributionBlock: Function, button: TNSFancyAlertButton, image: any, color: string, title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    alert.attributedFormatBlock = attributionBlock;
    alert.addButtonActionBlock(button.label, () => {
      button.action();
    });
    TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
  }

  public static showTextField(placeholder: string, initialValue: string, button: TNSFancyAlertButton, image: any, color: string, title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    var textField = alert.addTextField(placeholder);
    if (initialValue)
      textField.text = initialValue;
    alert.addButtonActionBlock(button.label, () => {
      textField.resignFirstResponder();
      button.action(textField.text);
    });
    TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
  }

  public static showSwitch(switchLabel: string, switchColor: string, button: TNSFancyAlertButton, image: any, color: string, title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    var switchView = alert.addSwitchViewWithLabel(switchLabel);
    switchView.tintColor = new Color(switchColor).ios;

    alert.addButtonActionBlock(button.label, () => {
      button.action(switchView.selected);
    });
    TNSFancyAlert.showCustom(alert, image, color, title, subTitle, null, duration);
  }

  public static showCustomView(customView: any, image?: any, color?: string, title?: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);
    alert.addCustomView(customView);
    TNSFancyAlert.showCustom(alert, image, color, title, subTitle, closeBtnTitle, duration);
  }

  /**
   * Base Method
   **/
  public static show(type: string, title: string, subTitle?: string, closeBtnTitle?: string, duration?: number, width?: number) {
    let alert = TNSFancyAlert.createAlert(width);

    // apply options to instance   
    TNSFancyAlert.applyOptions(alert);
    
    if (typeof closeBtnTitle === 'undefined')
      closeBtnTitle = 'Ok';
    alert[`show${type}SubTitleCloseButtonTitleDuration`](title, subTitle, closeBtnTitle, (duration || 0));
  }

  public static showCustom(alert: any, image: any, color: string, title?: string, subTitle?: string, closeBtnTitle?: string, duration?: number) {
    
    // apply options to instance
    TNSFancyAlert.applyOptions(alert);

    if (typeof image === 'undefined')
      image = 'nativescript.png';
    if (typeof color === 'undefined')
      color = '#2B33FF';
    if (typeof closeBtnTitle === 'undefined')
      closeBtnTitle = 'Ok';
    
    if (typeof image === 'string') {
      image = UIImage.imageNamed(image);
    } 
      
    alert.showCustomColorTitleSubTitleCloseButtonTitleDuration(image, new Color(color).ios, title, subTitle, closeBtnTitle, (duration || 0));
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
      alert.backgroundViewColor = new Color(TNSFancyAlert.backgroundViewColor).ios;

    alert.useLargerIcon = TNSFancyAlert.useLargerIcon;

    if (TNSFancyAlert.soundURL)
      alert.soundURL = NSURL.fileURLWithPath(`${NSBundle.mainBundle().resourcePath}/${TNSFancyAlert.soundURL}`);
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