import { types } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import type util from "replugged/util";

export namespace Types {
  export import DefaultTypes = types;
  export type UtilTree = util.Tree;
  export type ReactTree = util.Tree & React.ReactElement;
  export interface HypeSquadStore extends Store {
    getHouseMembership: () => string | null;
  }
  export interface HypesquadModalInstance extends DefaultTypes.ObjectExports {
    context: unknown;
    handleKeyDown: DefaultTypes.AnyFunction;
    handleNextQuestionButtonClick: DefaultTypes.AnyFunction;
    handleQuestionSelect: DefaultTypes.AnyFunction;
    handleSubmitButtonClick: DefaultTypes.AnyFunction;
    props: {
      onClose: DefaultTypes.AnyFunction;
      transitionState: number;
    };
    refs: unknown;
    state: {
      currentStep: number;
      hasSubmittedHouse: boolean;
      hasUnknownError: boolean;
      isRequestPending: boolean;
      questions: Array<{ promt: string; options: Array<{ copy: string; house: string }> }>;
      responses: Array<{ promt: string; options: Array<{ copy: string; house: string }> }>;
      selectedHouse: null;
    };
    getSelectedHouseID: DefaultTypes.AnyFunction;
    render: DefaultTypes.AnyFunction;
    renderContent: DefaultTypes.AnyFunction;
    renderHeaderCopy: DefaultTypes.AnyFunction;
    renderNewsletterWarning: DefaultTypes.AnyFunction;
    renderPrimaryAction: DefaultTypes.AnyFunction;
    renderQuizResult: DefaultTypes.AnyFunction;
    renderSecondaryAction: DefaultTypes.AnyFunction;
    renderUnknownErrorMessage: DefaultTypes.AnyFunction;
  }

  export interface Modules {
    loadModules?: () => Promise<void>;
    HypeSquadStore?: HypeSquadStore;
    HypesquadDialog?: Promise<DefaultTypes.AnyFunction>;
    HypesquadModalPromise?: Promise<DefaultTypes.AnyFunction>;
  }
}
export default Types;
