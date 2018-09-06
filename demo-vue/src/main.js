import * as app from "tns-core-modules/application"

import Vue from 'nativescript-vue'
import { isIOS, isAndroid } from 'tns-core-modules/platform'
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert'

const Page = {
  template: `
  <Frame>
    <Page @loaded="onLoaded">
      <ActionBar title="Fancy Alerts Demo" />
      <StackLayout>
        <Button text="Alert Success" @tap="showSuccess" />
      </StackLayout>
    </Page>
  </Frame>
  `,

  data() {
    return {
    }
  },

  methods: {
    showSuccess () {
      TNSFancyAlert.showSuccess(
        'Success!',
        'Fancy alerts are nice.',
        'Yes they are!',
      ).then(() => {
        console.log('shown')
      }).catch((error) => {
        console.error(error)
      })
    },
    onLoaded () {
      if (isIOS) {
        TNSFancyAlert.hideAnimationType = TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom
      }
    },
  },
}

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false

new Vue({
  render: h => h(Page)
}).$start({
  getRootView (vm) {
    return vm.$el.nativeView; // frame
  },
})
