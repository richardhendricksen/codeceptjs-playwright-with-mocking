/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type PlaywrightHelper = import('./helpers/playwright.helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.Playwright, PlaywrightHelper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
