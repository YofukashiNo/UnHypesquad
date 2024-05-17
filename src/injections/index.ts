import Modules from "../lib/requiredModules";
import injectHypesquadDialog from "./HypesquadDialog";
import injectHypesquadModal from "./HypesquadModal";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  void injectHypesquadDialog();
  void injectHypesquadModal();
};

export default { applyInjections };
