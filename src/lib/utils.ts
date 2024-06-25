import { util } from "replugged";
import {
  api as APIRequestUtils,
  fluxDispatcher as FluxDispatcher,
  constants,
} from "replugged/common";
import { PluginLogger } from "../index";

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
