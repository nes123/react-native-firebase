/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { ReactNativeFirebase } from '@react-native-firebase/app';

/**
 * Firebase Appcheck package for React Native.
 *
 * #### Example 1
 *
 * Access the firebase export from the `appcheck` package:
 *
 * ```js
 * import { firebase } from '@react-native-firebase/appcheck';
 *
 * // firebase.appcheck().X
 * ```
 *
 * #### Example 2
 *
 * Using the default export from the `appcheck` package:
 *
 * ```js
 * import appcheck from '@react-native-firebase/appcheck';
 *
 * // appcheck().X
 * ```
 *
 * #### Example 3
 *
 * Using the default export from the `app` package:
 *
 * ```js
 * import firebase from '@react-native-firebase/app';
 * import '@react-native-firebase/appcheck';
 *
 * // firebase.appcheck().X
 * ```
 *
 * @firebase appcheck
 */
export namespace Appcheck {
  import FirebaseModule = ReactNativeFirebase.FirebaseModule;

  export interface Statics {
    // firebase.appcheck.* static props go here
  }

  /**
   * // TODO CHOOSE THIS ---------------------------------------
   *
   * The Firebase Appcheck service interface.
   *
   * > This module is available for the default app only.
   *
   * #### Example
   *
   * Get the Appcheck service for the default app:
   *
   * ```js
   * const defaultAppAppcheck = firebase.appcheck();
   * ```
   *
   * // TODO OR THIS -------------------------------------------
   *
   * The Firebase Appcheck service is available for the default app or a given app.
   *
   * #### Example 1
   *
   * Get the appcheck instance for the **default app**:
   *
   * ```js
   * const appcheckForDefaultApp = firebase.appcheck();
   * ```
   *
   * #### Example 2
   *
   * Get the appcheck instance for a **secondary app**:
   *˚
   * ```js
   * const otherApp = firebase.app('otherApp');
   * const appcheckForOtherApp = firebase.appcheck(otherApp);
   * ```
   *
   */
  export class Module extends FirebaseModule {
    // firebase.appcheck().* methods & props go here
  }
}

declare const defaultExport: ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  Appcheck.Module,
  Appcheck.Statics
>;

export const firebase: ReactNativeFirebase.Module & {
  auth: typeof defaultExport;
  app(name?: string): ReactNativeFirebase.FirebaseApp & { appcheck(): Appcheck.Module };
};

export default defaultExport;

/**
 * Attach namespace to `firebase.` and `FirebaseApp.`.
 */
declare module '@react-native-firebase/app' {
  namespace ReactNativeFirebase {
    import FirebaseModuleWithStaticsAndApp = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp;
    interface Module {
      appcheck: FirebaseModuleWithStaticsAndApp<Appcheck.Module, Appcheck.Statics>;
    }
    interface FirebaseApp {
      appcheck(): Appcheck.Module;
    }
  }
}
