import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([PLATFORM.moduleName("./pagination/pagination")]);
  config.globalResources([PLATFORM.moduleName("./books/books")]);
  config.globalResources([PLATFORM.moduleName("./filter-panel/filter-panel")]);
}
