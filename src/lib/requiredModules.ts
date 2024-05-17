import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.HypeSquadStore ??= await webpack.waitForProps<Types.HypeSquadStore>("getHouseMembership");
  Modules.APIRequestUtils ??= await webpack.waitForProps<Types.APIRequestUtils>(
    "getAPIBaseURL",
    "HTTP",
  );
  Modules.HypesquadDialog ??= webpack.waitForModule<Types.DefaultTypes.AnyFunction>(
    webpack.filters.bySource(".Messages.HYPESQUAD_JOIN"),
  );
  Modules.HypesquadModalPromise ??= webpack.waitForModule<Types.DefaultTypes.AnyFunction>(
    webpack.filters.bySource("default.joinHypeSquadOnline"),
  );
};

export default Modules;
