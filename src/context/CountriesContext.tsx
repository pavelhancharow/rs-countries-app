import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from 'react';
import { LoadingStatuses } from '../enums';
import { FetchResponse, TypeCountries } from '../models';
import { countriesService } from '../services';

interface CountriesContextState {
  data: FetchResponse<TypeCountries>;
  error: string | null;
  status: LoadingStatuses;
}

const initialState: CountriesContextState = {
  data: { countries: [] },
  status: LoadingStatuses.Idle,
  error: null,
};

type DispatchActionType = {
  type: LoadingStatuses;
  payload?: string | FetchResponse<TypeCountries>;
};

const CountriesContext = createContext<CountriesContextState>({
  ...initialState,
});

const CountriesDispatchContext = createContext<Dispatch<DispatchActionType>>(
  () => {}
);

function CountriesContextProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch({ type: LoadingStatuses.Pending });

    const result = countriesService.getCountries(signal);

    result
      .then((response) => {
        dispatch({
          type: LoadingStatuses.Fulfilled,
          payload: response,
        });
      })
      .catch((e: Error) => {
        if (signal.aborted) {
          console.info(e?.message);
        } else {
          dispatch({
            type: LoadingStatuses.Rejected,
            payload: e.message,
          });
        }
      });

    return () => {
      controller.abort({
        message:
          '\x1B[34mAbortController:\x1B[30m Fetching data has been aborted',
      });
    };
  }, []);

  return (
    <CountriesContext.Provider value={state}>
      <CountriesDispatchContext.Provider value={dispatch}>
        {props.children}
      </CountriesDispatchContext.Provider>
    </CountriesContext.Provider>
  );
}

const reducer = (
  state: CountriesContextState,
  action: DispatchActionType
): CountriesContextState => {
  switch (action.type) {
    case LoadingStatuses.Pending:
      return {
        ...state,
        status: LoadingStatuses.Pending,
      };
    case LoadingStatuses.Fulfilled:
      return {
        status: LoadingStatuses.Fulfilled,
        error: null,
        data: action.payload as FetchResponse<TypeCountries>,
      };
    case LoadingStatuses.Rejected:
      return {
        data: { ...initialState.data },
        status: LoadingStatuses.Rejected,
        error: action.payload as string,
      };
    default:
      return {
        data: { ...initialState.data },
        status: LoadingStatuses.Idle,
        error: null,
      };
  }
};

export default CountriesContextProvider;

export { CountriesContext, CountriesDispatchContext };
