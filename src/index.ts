import { Injector, Logger } from "replugged";
import "./style.css";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("UnHypesquad", "#b380ff");
import Injections from "./injections/index";

export const start = (): void => {
  void Injections.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
