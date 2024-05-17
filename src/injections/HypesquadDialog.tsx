import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import Types from "../types";
export default async () => {
  const HypesquadDialog = await Modules.HypesquadDialog;
  PluginInjector.after(HypesquadDialog.prototype, "render", (_args, res: Types.ReactTree) => {
    const button = Utils.findInReactTree(res, (c: Types.ReactTree) =>
      c?.props?.className?.includes("membershipDialogSwitchHousesAction"),
    ) as Types.ReactTree;
    if (!button) return res;
    button.props.children = "Bribe!";
    return res;
  });
};
