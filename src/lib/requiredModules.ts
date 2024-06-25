import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.HypeSquadStore ??= await webpack
    .waitForProps<Types.HypeSquadStore>(["getHouseMembership"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find HypeSquadStore Module");
    });

  Modules.HypesquadDialog ??= webpack.waitForModule<Types.DefaultTypes.AnyFunction>(
    webpack.filters.bySource(".Messages.HYPESQUAD_JOIN"),
  );
  Modules.HypesquadModalPromise ??= webpack.waitForModule<Types.DefaultTypes.AnyFunction>(
    webpack.filters.bySource(".joinHypeSquadOnline"),
  );
};

export default Modules;
