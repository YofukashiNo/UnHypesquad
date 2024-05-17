import { React } from "replugged/common";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import HypesquadSelector from "../Components/HypesquadSelector";
import Types from "../types";
export default async () => {
  const HypesquadModal = await Modules.HypesquadModalPromise;
  PluginInjector.after(
    HypesquadModal.prototype,
    "render",
    (_args, res, instance: Types.HypesquadModalInstance) => {
      if (!instance.state.hasSubmittedHouse) {
        res.props.children = (
          <HypesquadSelector
            setSelectedHouse={(house: string) => {
              instance.getSelectedHouseID = () => house;
            }}
            onClose={instance.props.onClose}
            submitHouse={instance.handleSubmitButtonClick}
          />
        );
      }
      return res;
    },
  );
};
