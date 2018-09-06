declare class SCLALertViewButtonBuilder extends SCLAlertViewBuilder__WithFluent {
  static alloc(): SCLALertViewButtonBuilder; // inherited from NSObject

  static new(): SCLALertViewButtonBuilder; // inherited from NSObject

  readonly actionBlock: (p1: () => void) => SCLALertViewButtonBuilder;

  readonly button: SCLButton;

  readonly selector: (p1: string) => SCLALertViewButtonBuilder;

  readonly target: (p1: any) => SCLALertViewButtonBuilder;

  readonly title: (p1: string) => SCLALertViewButtonBuilder;

  readonly validationBlock: (p1: () => boolean) => SCLALertViewButtonBuilder;
}

declare class SCLALertViewTextFieldBuilder extends SCLAlertViewBuilder__WithFluent {
  static alloc(): SCLALertViewTextFieldBuilder; // inherited from NSObject

  static new(): SCLALertViewTextFieldBuilder; // inherited from NSObject

  readonly textField: SCLTextView;

  readonly title: (p1: string) => SCLALertViewTextFieldBuilder;
}

declare const enum SCLActionType {
  None = 0,

  Selector = 1,

  Block = 2
}

declare class SCLAlertView extends UIViewController {
  static alloc(): SCLAlertView; // inherited from NSObject

  static new(): SCLAlertView; // inherited from NSObject

  activityIndicatorView: UIActivityIndicatorView;

  attributedFormatBlock: (p1: string) => NSAttributedString;

  backgroundType: SCLAlertViewBackground;

  backgroundViewColor: UIColor;

  buttonFormatBlock: () => NSDictionary<any, any>;

  circleIconHeight: number;

  completeButtonFormatBlock: () => NSDictionary<any, any>;

  cornerRadius: number;

  customViewColor: UIColor;

  extensionBounds: CGRect;

  forceHideBlock: () => void;

  hideAnimationType: SCLAlertViewHideAnimation;

  horizontalButtons: boolean;

  iconTintColor: UIColor;

  labelTitle: UILabel;

  shouldDismissOnTapOutside: boolean;

  showAnimationType: SCLAlertViewShowAnimation;

  soundURL: NSURL;

  statusBarHidden: boolean;

  statusBarStyle: UIStatusBarStyle;

  tintTopCircle: boolean;

  useLargerIcon: boolean;

  viewText: UITextView;

  constructor(o: { newWindow: void });

  constructor(o: { newWindowWidth: number });

  addButtonActionBlock(title: string, action: () => void): SCLButton;

  addButtonTargetSelector(
    title: string,
    target: any,
    selector: string
  ): SCLButton;

  addButtonValidationBlockActionBlock(
    title: string,
    validationBlock: () => boolean,
    action: () => void
  ): SCLButton;

  addCustomTextField(textField: UITextField): void;

  addCustomView(customView: UIView): UIView;

  addSwitchViewWithLabel(label: string): SCLSwitchView;

  addTextField(title: string): SCLTextView;

  addTimerToButtonIndexReverse(buttonIndex: number, reverse: boolean): void;

  alertDismissAnimationIsCompleted(
    dismissAnimationCompletionBlock: () => void
  ): void;

  alertIsDismissed(dismissBlock: () => void): void;

  alertShowAnimationIsCompleted(showAnimationCompletionBlock: () => void): void;

  hideView(): void;

  initWithNewWindow(): this;

  initWithNewWindowWidth(windowWidth: number): this;

  isVisible(): boolean;

  removeTopCircle(): void;

  setBodyTextFontFamilyWithSize(bodyTextFontFamily: string, size: number): void;

  setButtonsTextFontFamilyWithSize(
    buttonsFontFamily: string,
    size: number
  ): void;

  setTitleFontFamilyWithSize(titleFontFamily: string, size: number): void;

  showCustomColorTitleSubTitleCloseButtonTitleDuration(
    image: UIImage,
    color: UIColor,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showCustomImageColorTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    image: UIImage,
    color: UIColor,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showEditSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showEditTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showErrorSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showErrorTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showInfoSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showInfoTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showNoticeSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showNoticeTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showQuestionSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showQuestionTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showSuccessSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showSuccessTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showTitleSubTitleStyleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    style: SCLAlertViewStyle,
    closeButtonTitle: string,
    duration: number
  ): void;

  showTitleTitleSubTitleStyleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    style: SCLAlertViewStyle,
    closeButtonTitle: string,
    duration: number
  ): void;

  showWaitingSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showWaitingTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showWarningSubTitleCloseButtonTitleDuration(
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;

  showWarningTitleSubTitleCloseButtonTitleDuration(
    vc: UIViewController,
    title: string,
    subTitle: string,
    closeButtonTitle: string,
    duration: number
  ): void;
}

declare const enum SCLAlertViewBackground {
  Shadow = 0,

  Blur = 1,

  Transparent = 2
}

declare class SCLAlertViewBuilder extends SCLAlertViewBuilder__WithFluent {
  static alloc(): SCLAlertViewBuilder; // inherited from NSObject

  static new(): SCLAlertViewBuilder; // inherited from NSObject

  activityIndicatorView: (p1: UIActivityIndicatorView) => SCLAlertViewBuilder;

  addButtonWithActionBlock: (p1: string, p2: () => void) => SCLAlertViewBuilder;

  addButtonWithBuilder: (p1: SCLALertViewButtonBuilder) => SCLAlertViewBuilder;

  addButtonWithTarget: (p1: string, p2: any, p3: string) => SCLAlertViewBuilder;

  addButtonWithValidationBlock: (
    p1: string,
    p2: () => boolean,
    p3: () => void
  ) => SCLAlertViewBuilder;

  addCustomTextField: (p1: UITextField) => SCLAlertViewBuilder;

  addCustomView: (p1: UIView) => SCLAlertViewBuilder;

  addSwitchViewWithLabelTitle: (p1: string) => SCLAlertViewBuilder;

  addTextField: (p1: string) => SCLAlertViewBuilder;

  addTextFieldWithBuilder: (
    p1: SCLALertViewTextFieldBuilder
  ) => SCLAlertViewBuilder;

  addTimerToButtonIndex: (p1: number, p2: boolean) => SCLAlertViewBuilder;

  alertDismissAnimationIsCompleted: (p1: () => void) => SCLAlertViewBuilder;

  alertIsDismissed: (p1: () => void) => SCLAlertViewBuilder;

  alertShowAnimationIsCompleted: (p1: () => void) => SCLAlertViewBuilder;

  readonly alertView: SCLAlertView;

  attributedFormatBlock: (
    p1: (p1: string) => NSAttributedString
  ) => SCLAlertViewBuilder;

  backgroundType: (p1: SCLAlertViewBackground) => SCLAlertViewBuilder;

  backgroundViewColor: (p1: UIColor) => SCLAlertViewBuilder;

  buttonFormatBlock: (p1: () => NSDictionary<any, any>) => SCLAlertViewBuilder;

  circleIconHeight: (p1: number) => SCLAlertViewBuilder;

  completeButtonFormatBlock: (
    p1: () => NSDictionary<any, any>
  ) => SCLAlertViewBuilder;

  cornerRadius: (p1: number) => SCLAlertViewBuilder;

  customViewColor: (p1: UIColor) => SCLAlertViewBuilder;

  extensionBounds: (p1: CGRect) => SCLAlertViewBuilder;

  forceHideBlock: (p1: () => void) => SCLAlertViewBuilder;

  hideAnimationType: (p1: SCLAlertViewHideAnimation) => SCLAlertViewBuilder;

  iconTintColor: (p1: UIColor) => SCLAlertViewBuilder;

  labelTitle: (p1: UILabel) => SCLAlertViewBuilder;

  removeTopCircle: () => SCLAlertViewBuilder;

  setBodyTextFontFamily: (p1: string, p2: number) => SCLAlertViewBuilder;

  setButtonsTextFontFamily: (p1: string, p2: number) => SCLAlertViewBuilder;

  setTitleFontFamily: (p1: string, p2: number) => SCLAlertViewBuilder;

  shouldDismissOnTapOutside: (p1: boolean) => SCLAlertViewBuilder;

  showAnimationType: (p1: SCLAlertViewShowAnimation) => SCLAlertViewBuilder;

  soundURL: (p1: NSURL) => SCLAlertViewBuilder;

  statusBarHidden: (p1: boolean) => SCLAlertViewBuilder;

  statusBarStyle: (p1: UIStatusBarStyle) => SCLAlertViewBuilder;

  tintTopCircle: (p1: boolean) => SCLAlertViewBuilder;

  useLargerIcon: (p1: boolean) => SCLAlertViewBuilder;

  viewText: (p1: UITextView) => SCLAlertViewBuilder;

  constructor(o: { newWindow: void });

  constructor(o: { newWindowWidth: number });

  initWithNewWindow(): this;

  initWithNewWindowWidth(width: number): this;
}

declare class SCLAlertViewBuilder__WithFluent extends NSObject
  implements SCLItemsBuilder__Protocol__Fluent {
  static alloc(): SCLAlertViewBuilder__WithFluent; // inherited from NSObject

  static new(): SCLAlertViewBuilder__WithFluent; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setupFluent(): void;
}

declare const enum SCLAlertViewHideAnimation {
  FadeOut = 0,

  SlideOutToBottom = 1,

  SlideOutToTop = 2,

  SlideOutToLeft = 3,

  SlideOutToRight = 4,

  SlideOutToCenter = 5,

  SlideOutFromCenter = 6,

  SimplyDisappear = 7
}

declare class SCLAlertViewResponder extends NSObject {
  static alloc(): SCLAlertViewResponder; // inherited from NSObject

  static new(): SCLAlertViewResponder; // inherited from NSObject

  constructor();

  close(): void;

  init(alertview: SCLAlertView): this;
}

declare const enum SCLAlertViewShowAnimation {
  FadeIn = 0,

  SlideInFromBottom = 1,

  SlideInFromTop = 2,

  SlideInFromLeft = 3,

  SlideInFromRight = 4,

  SlideInFromCenter = 5,

  SlideInToCenter = 6,

  SimplyAppear = 7
}

declare class SCLAlertViewShowBuilder extends SCLAlertViewBuilder__WithFluent {
  static alloc(): SCLAlertViewShowBuilder; // inherited from NSObject

  static new(): SCLAlertViewShowBuilder; // inherited from NSObject

  readonly closeButtonTitle: (p1: string) => SCLAlertViewShowBuilder;

  readonly color: (p1: UIColor) => SCLAlertViewShowBuilder;

  readonly completeText: (p1: string) => SCLAlertViewShowBuilder;

  readonly duration: (p1: number) => SCLAlertViewShowBuilder;

  readonly image: (p1: UIImage) => SCLAlertViewShowBuilder;

  readonly parameterCloseButtonTitle: string;

  readonly parameterColor: UIColor;

  readonly parameterCompleteText: string;

  readonly parameterDuration: number;

  readonly parameterImage: UIImage;

  readonly parameterStyle: SCLAlertViewStyle;

  readonly parameterSubTitle: string;

  readonly parameterTitle: string;

  readonly parameterViewController: UIViewController;

  readonly show: (p1: SCLAlertView, p2: UIViewController) => void;

  readonly style: (p1: SCLAlertViewStyle) => SCLAlertViewShowBuilder;

  readonly subTitle: (p1: string) => SCLAlertViewShowBuilder;

  readonly title: (p1: string) => SCLAlertViewShowBuilder;

  readonly viewController: (p1: UIViewController) => SCLAlertViewShowBuilder;

  showAlertView(alertView: SCLAlertView): void;

  showAlertViewOnViewController(
    alertView: SCLAlertView,
    controller: UIViewController
  ): void;
}

declare const enum SCLAlertViewStyle {
  Success = 0,

  Error = 1,

  Notice = 2,

  Warning = 3,

  Info = 4,

  Edit = 5,

  Waiting = 6,

  Question = 7,

  Custom = 8
}

declare class SCLAlertViewStyleKit extends NSObject {
  static alloc(): SCLAlertViewStyleKit; // inherited from NSObject

  static drawCheckmark(): void;

  static drawCross(): void;

  static drawEdit(): void;

  static drawInfo(): void;

  static drawNotice(): void;

  static drawQuestion(): void;

  static drawWarning(): void;

  static imageOfCheckmark(): UIImage;

  static imageOfCross(): UIImage;

  static imageOfEdit(): UIImage;

  static imageOfInfo(): UIImage;

  static imageOfNotice(): UIImage;

  static imageOfQuestion(): UIImage;

  static imageOfWarning(): UIImage;

  static new(): SCLAlertViewStyleKit; // inherited from NSObject
}

declare var SCLAlertView_Objective_CVersionNumber: number;

declare var SCLAlertView_Objective_CVersionString: interop.Reference<number>;

declare class SCLButton extends UIButton {
  static alloc(): SCLButton; // inherited from NSObject

  static appearance(): SCLButton; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): SCLButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): SCLButton; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject>
  ): SCLButton; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SCLButton; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject>
  ): SCLButton; // inherited from UIAppearance

  static buttonWithType(buttonType: UIButtonType): SCLButton; // inherited from UIButton

  static new(): SCLButton; // inherited from NSObject

  actionBlock: () => void;

  actionType: SCLActionType;

  buttonFormatBlock: () => NSDictionary<any, any>;

  completeButtonFormatBlock: () => NSDictionary<any, any>;

  defaultBackgroundColor: UIColor;

  selector: string;

  target: any;

  timer: SCLTimerDisplay;

  validationBlock: () => boolean;

  constructor(o: { windowWidth: number });

  adjustWidthWithWindowWidthNumberOfButtons(
    windowWidth: number,
    numberOfButtons: number
  ): void;

  initWithWindowWidth(windowWidth: number): this;

  parseConfig(buttonConfig: NSDictionary<any, any>): void;
}

interface SCLItemsBuilder__Protocol__Fluent extends NSObjectProtocol {
  setupFluent(): void;
}
declare var SCLItemsBuilder__Protocol__Fluent: {
  prototype: SCLItemsBuilder__Protocol__Fluent;
};

declare class SCLSwitchView extends UIView {
  static alloc(): SCLSwitchView; // inherited from NSObject

  static appearance(): SCLSwitchView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): SCLSwitchView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): SCLSwitchView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject>
  ): SCLSwitchView; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): SCLSwitchView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject>
  ): SCLSwitchView; // inherited from UIAppearance

  static new(): SCLSwitchView; // inherited from NSObject

  labelColor: UIColor;

  labelFont: UIFont;

  labelText: string;

  selected: boolean;
}

declare class SCLTextView extends UITextField {
  static alloc(): SCLTextView; // inherited from NSObject

  static appearance(): SCLTextView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): SCLTextView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): SCLTextView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject>
  ): SCLTextView; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): SCLTextView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject>
  ): SCLTextView; // inherited from UIAppearance

  static new(): SCLTextView; // inherited from NSObject
}

declare class SCLTimerDisplay extends UIView {
  static alloc(): SCLTimerDisplay; // inherited from NSObject

  static appearance(): SCLTimerDisplay; // inherited from UIAppearance

  static appearanceForTraitCollection(
    trait: UITraitCollection
  ): SCLTimerDisplay; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): SCLTimerDisplay; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject>
  ): SCLTimerDisplay; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): SCLTimerDisplay; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject>
  ): SCLTimerDisplay; // inherited from UIAppearance

  static new(): SCLTimerDisplay; // inherited from NSObject

  buttonIndex: number;

  color: UIColor;

  currentAngle: number;

  reverse: boolean;

  constructor(o: { origin: CGPoint; radius: number });

  constructor(o: { origin: CGPoint; radius: number; lineWidth: number });

  cancelTimer(): void;

  initWithOriginRadius(origin: CGPoint, r: number): this;

  initWithOriginRadiusLineWidth(
    origin: CGPoint,
    r: number,
    width: number
  ): this;

  startTimerWithTimeLimitCompleted(tl: number, completed: () => void): void;

  stopTimer(): void;

  updateFrame(size: CGSize): void;
}
