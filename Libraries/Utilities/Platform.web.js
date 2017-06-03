/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Platform
 * @flow
 */

"use strict";

const NativeModules = require("NativeModules");

const Platform = {
  OS: "web",
  get ForceTouchAvailable() {
    const constants = NativeModules.PlatformConstants;
    return constants ? !!constants.forceTouchAvailable : false;
  },
  select: (obj: Object) => ("web" in obj ? obj.web : obj.default),
};

module.exports = Platform;