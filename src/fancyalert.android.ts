import * as app from "tns-core-modules/application";

export * from "./common";

declare var cn: any;

export enum SUPPORTED_TYPESI {
  INFO = 0,
  HELP = 1,
  WRONG = 2,
  SUCCESS = 3,
  WARNING = 4
}

export class TNSFancyAlert {
  public static shouldDismissOnTapOutside: boolean = false;

  public static showSuccess(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const alert = new cn.refactor.lib.colordialog.PromptDialog(
        app.android.currentContext
      );
      alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
      alert.setDialogType(SUPPORTED_TYPESI.SUCCESS);
      alert.setTitleText(title || "Success!");
      alert.setContentText(subTitle || "");
      alert.setAnimationEnable(true);
      alert.setPositiveListener(
        closeBtnTitle || "Ok",
        new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
          onClick: dialog => {
            dialog.dismiss();
            resolve();
          }
        })
      );
      alert.show();
    });
  }

  public static showError(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const alert = new cn.refactor.lib.colordialog.PromptDialog(
        app.android.currentContext
      );
      alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
      alert.setDialogType(SUPPORTED_TYPESI.WRONG);
      alert.setTitleText(title || "Error!");
      alert.setContentText(subTitle || "");
      alert.setAnimationEnable(true);
      alert.setPositiveListener(
        closeBtnTitle || "Ok",
        new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
          onClick: dialog => {
            dialog.dismiss();
            resolve();
          }
        })
      );
      alert.show();
    });
  }

  public static showNotice(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const alert = new cn.refactor.lib.colordialog.PromptDialog(
        app.android.currentContext
      );
      alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
      alert.setDialogType(SUPPORTED_TYPESI.HELP);
      alert.setTitleText(title || "Notice");
      alert.setContentText(subTitle || "");
      alert.setAnimationEnable(true);
      alert.setPositiveListener(
        closeBtnTitle || "Ok",
        new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
          onClick: dialog => {
            dialog.dismiss();
            resolve();
          }
        })
      );
      alert.show();
    });
  }

  public static showWarning(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const alert = new cn.refactor.lib.colordialog.PromptDialog(
        app.android.currentContext
      );
      alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
      alert.setDialogType(SUPPORTED_TYPESI.WARNING);
      alert.setTitleText(title || "Warning!");
      alert.setContentText(subTitle || "");
      alert.setAnimationEnable(true);
      alert.setPositiveListener(
        closeBtnTitle || "Ok",
        new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
          onClick: dialog => {
            dialog.dismiss();
            resolve();
          }
        })
      );
      alert.show();
    });
  }

  public static showInfo(
    title: string,
    subTitle?: string,
    closeBtnTitle?: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const alert = new cn.refactor.lib.colordialog.PromptDialog(
        app.android.currentContext
      );
      alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
      alert.setDialogType(SUPPORTED_TYPESI.INFO); /// Info
      alert.setTitleText(title || "Info");
      alert.setContentText(subTitle || "");
      alert.setAnimationEnable(true);
      alert.setPositiveListener(
        closeBtnTitle || "Ok",
        new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
          onClick: dialog => {
            dialog.dismiss();
            resolve();
          }
        })
      );
      alert.show();
    });
  }
}
