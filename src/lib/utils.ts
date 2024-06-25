import { util } from "replugged";
import {
  fluxDispatcher as FluxDispatcher,
  constants,
  api as APIRequestUtils,
} from "replugged/common";
import { PluginLogger } from "../index";
import Modules from "./requiredModules";

export const leaveHypesquad = async (): Promise<void> => {
  try {
    await APIRequestUtils.HTTP.del({
      url: constants.Endpoints.HYPESQUAD_ONLINE as string,
      oldFormErrors: !0,
    });
    FluxDispatcher.dispatch({
      type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS",
    });
  } catch (err) {
    PluginLogger.error(`Error While leaving Hypesquad: ${err}`);
  }
};

export default { ...util, leaveHypesquad };
