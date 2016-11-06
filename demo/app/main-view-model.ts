import * as app from 'application';
import { Observable } from 'data/observable';
import { Color } from 'color';
import { isIOS, isAndroid } from 'platform';
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';

declare var NSMutableAttributedString: any, NSForegroundColorAttributeName: any, NSCaseInsensitiveSearch: any, NSUnderlineStyleSingle: any, UIView: any, CGRectMake: any, SCLAlertViewShowAnimation: any, SCLAlertViewHideAnimation: any, SCLAlertViewBackground: any, NSString: any, NSUnderlineStyleAttributeName: any;

export class HelloWorldModel extends Observable {

  constructor() {
    super();
    // TNSFancyAlert.hideAnimationType = TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom;
  }

  public showSuccess() {
    TNSFancyAlert.showSuccess('Success!', 'Fancy alerts are nice.', 'Yes they are!');
  }

  public showSuccessCustomEffects() {
    TNSFancyAlert.showAnimationType = TNSFancyAlert.SHOW_ANIMATION_TYPES.SlideInFromLeft;
    TNSFancyAlert.hideAnimationType = TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToRight;
    TNSFancyAlert.backgroundType = TNSFancyAlert.BACKGROUND_TYPES.Blur;
    TNSFancyAlert.soundURL = 'bell.mp3';
    TNSFancyAlert.showSuccess('Sound?', 'You can use sound and customize many aspects like animation in/out, color, background style and much more.', 'Amazing!');
    this.reset();
  }

  public showSuccessDelay() {
    TNSFancyAlert.showSuccess('Success!', 'Fancy alerts are nice. This will disappear in 5 seconds.', 'Close Now!', 5);
  }

  public showError() {
    TNSFancyAlert.showError('Error!', 'At least it looks good :)', 'Yeah it does.');
  }

  public showNotice() {
    TNSFancyAlert.showNotice('Notice', `You've been officially notified that NativeScript is awesome.`, 'Yeah it is!');
  }

  public showWarning() {
    TNSFancyAlert.showWarning('Warning', `#nowebview here.`, 'Ok, Got It!');
  }

  public showInfo() {
    if (isIOS) {
      TNSFancyAlert.showAnimationType = SCLAlertViewShowAnimation.SlideInFromBottom;
      TNSFancyAlert.hideAnimationType = SCLAlertViewHideAnimation.SlideOutToRight;
    }
    TNSFancyAlert.showInfo('Info', `You can integrate any CocoaPod or Android library with NativeScript.`, 'Sweet!');
    if (isIOS) {
      this.reset();
    }
  }

  public showEdit() {
    TNSFancyAlert.showEdit('Edit', `We could edit something but won't right now.`, 'Sounds Good');
  }

  public showWaiting() {
    TNSFancyAlert.showWaiting('Waiting...', `It's like waiting for a WebView to render ;)`, 'Uh yeah it is.');
  }

  public showQuestion() {
    TNSFancyAlert.showQuestion('Question', `Do you like developing with NativeScript?`, 'Well yes I do!');
  }

  public showCustomImage() {
    TNSFancyAlert.showCustomImage('nativescript.png', '#2B33FF', 'Custom Image', `Using your own images is sure nice.`, 'Yes!');
  }

  public showCustomButtonTimer() {
    TNSFancyAlert.showCustomButtonTimer(0, true, undefined, undefined, 'Mission Impossible', `This will self-destruct in 5 seconds.`, 'Ok');
  }

  public showCustomButtons() {
    let buttons = [
      new TNSFancyAlertButton({ label: 'One', action: () => { console.log('One'); } }),
      new TNSFancyAlertButton({ label: 'Two', action: () => { console.log('Two'); } }),
      new TNSFancyAlertButton({ label: 'Three', action: () => { console.log('Three'); } }),
      new TNSFancyAlertButton({ label: 'Four', action: () => { console.log('Four'); } }),
      new TNSFancyAlertButton({ label: 'Really? More?', action: () => { console.log('more'); } })
    ];
    TNSFancyAlert.showCustomButtons(buttons, undefined, undefined, 'Got Buttons?', `Add as many as you'd like.`, 'Ok');
  }

  public showCustomWidth() {
    TNSFancyAlert.showSuccess('Success!', 'This uses a custom width of 300.', `Oh that's nice.`, 0, 300);
  }

  public customText() {
    let textAttribution = (value: any) => {
      let nsString = NSString.alloc().initWithString(value);
      let subTitle = NSMutableAttributedString.alloc().initWithString(value);

      let redRange = nsString.rangeOfStringOptions("Yep", NSCaseInsensitiveSearch);
      subTitle.addAttributeValueRange(NSForegroundColorAttributeName, new Color('#BC1224').ios, redRange);

      let greenRange = nsString.rangeOfStringOptions("that can be done", NSCaseInsensitiveSearch);
      subTitle.addAttributeValueRange(NSForegroundColorAttributeName, new Color('#528100').ios, greenRange);

      let underline = nsString.rangeOfStringOptions("too!", NSCaseInsensitiveSearch);
      subTitle.addAttributeValueRange(NSUnderlineStyleAttributeName, NSUnderlineStyleSingle, underline);

      return subTitle;
    };
    TNSFancyAlert.showCustomTextAttributes(textAttribution, new TNSFancyAlertButton({ label: 'Wow, ok.', action: (value: any) => { console.log(`Clicked ok.`); } }), undefined, undefined, 'Custom text color?', `Yep, that can be done too!`, null);
  }

  public showTextField() {
    TNSFancyAlert.showTextField('Enter your name', '', new TNSFancyAlertButton({ label: 'Save', action: (value: any) => { console.log(`User entered ${value}`); } }), undefined, undefined, 'User Input?', `Yeah, sure we can.`, 'Ok, lots of options.');
  }

  public showSwitch() {
    TNSFancyAlert.showSwitch(`Don't show again`, '#58B136', new TNSFancyAlertButton({ label: 'Save', action: (isSelected: boolean) => { console.log(`Don't show again was selected: ${isSelected}`); } }), 'switch.png', '#B3714F', 'Need a switch?', `It can be useful.`, 'Got it.');
  }

  public showCustomView() {
    let customView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 215, 80));
    customView.backgroundColor = new Color('#FE00FC').ios;
    TNSFancyAlert.showCustomView(customView, undefined, undefined, 'Add any view?', `Just pass in a any UIView.`, 'Nice!');
  }

  private reset() {
    setTimeout(() => {
      TNSFancyAlert.showAnimationType = undefined;
      TNSFancyAlert.hideAnimationType = TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom;
      TNSFancyAlert.backgroundType = undefined;
      TNSFancyAlert.soundURL = undefined;
    }, 1000);
  }
}