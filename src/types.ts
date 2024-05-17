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
  export interface HTTPAttachment {
    file: string | Blob | Buffer;
    filename: string;
    name: string;
  }

  export interface HTTPField {
    name: string;
    value: string;
  }

  export declare class Backoff {
    public constructor(min?: number, max?: number | null, jitter?: boolean);

    private _callback?: () => void;
    private _current: number;
    private _fails: number;
    private _timeoutId?: number;

    public jitter: boolean;
    public max: number;
    public min: number;

    public get current(): number;
    public get fails(): number;
    public get pending(): boolean;

    public cancel: () => void;
    public fail: (callback?: () => void) => number;
    public succeed: () => void;
  }

  export declare class V6OrEarlierAPIError {
    public constructor(error: Record<string, unknown> | null, code: number, message?: string);

    public code: number;
    public error: Error;
    public fields: Record<string, unknown>;
    public message: string;
    public retryAfter: number | undefined;
    public status: number;

    public getFieldMessage: (field: string) => unknown;
  }

  export declare class APIError {
    public constructor(error: Record<string, unknown> | null, code: number, message?: string);

    public captchaFields: Record<string, unknown>;
    public code: number;
    public errors:
      | Record<string, { _errors: Array<{ code: string; message: string }> }>
      | undefined;
    public message: string;
    public retryAfter: number | undefined;
    public status: number;

    public getAnyErrorMessage: () => string | { fieldName: string | null; error: string };
    public getAnyErrorMessageAndField: () => { fieldName: string | null; error: string } | null;
    public getFieldErrors: (
      field: string | string[],
    ) => Array<{ code: string; message: string }> | undefined;
    public getFirstFieldErrorMessage: (field: string | string[]) => string | null;
    public hasFieldErrors: () => boolean;
  }
  export interface HTTPRequest {
    url: string;
    attachments?: HTTPAttachment[];
    backoff?: Backoff;
    binary?: boolean;
    body?: Record<string, unknown>;
    context?: Record<string, unknown>;
    fields?: HTTPField[];
    headers?: Record<string, string>;
    oldFormErrors?: boolean;
    query?: string | Record<string, string>;
    reason?: string;
    retried?: number;
    retries?: number;
    signal?: AbortSignal;
    timeout?: number;
    interceptResponse?: (
      response: Response,
      retry: (
        headers?: Record<string, string>,
        interceptResponse?: HTTPRequest["interceptResponse"],
      ) => void,
      reject: (reason: Error) => void,
    ) => void;
    onRequestCreated?: (request: Request) => void;
    onRequestProgress?: (progress: ProgressEvent) => void;
  }

  export interface HTTPResponse<T = Record<string, unknown>> {
    body: T;
    headers: Record<string, string>;
    ok: boolean;
    status: number;
    text: string;
  }
  export interface APIRequestUtils {
    HTTP: Record<
      "get" | "patch" | "post" | "put" | "del",
      <T = Record<string, unknown>>(
        req: string | HTTPRequest,
        callback?: (response: HTTPResponse) => void,
      ) => Promise<HTTPResponse<T>>
    >;
    getAPIBaseURL: (version?: boolean) => string;
    V6OrEarlierAPIError: typeof V6OrEarlierAPIError;
    V8APIError: typeof APIError;
  }
  export interface Modules {
    loadModules?: () => Promise<void>;
    HypeSquadStore?: HypeSquadStore;
    APIRequestUtils?: APIRequestUtils;
    HypesquadDialog?: Promise<DefaultTypes.AnyFunction>;
    HypesquadModalPromise?: Promise<DefaultTypes.AnyFunction>;
  }
}
export default Types;
