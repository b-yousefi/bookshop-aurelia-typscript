import { Aurelia } from "aurelia-framework";
import * as environment from "../config/environment.json";
import { PLATFORM } from "aurelia-pal";
import "bootstrap";
import "font-awesome/css/font-awesome.css";

import { initialState } from "./store/state";
import { LogLevel, PerformanceMeasurement } from "aurelia-store";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"));

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.use.plugin(PLATFORM.moduleName("aurelia-store"), {
    initialState,
    measurePerformance: PerformanceMeasurement.All,
    logDispatchedActions: true,
    logDefinitions: {
      dispatchedActions: LogLevel.debug,
    },
  });

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
