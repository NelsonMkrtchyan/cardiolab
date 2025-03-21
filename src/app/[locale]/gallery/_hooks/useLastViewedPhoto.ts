import { createGlobalState } from "react-hooks-global-state";

const initialState = { photoToScrollTo: null };
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const { useGlobalState } = createGlobalState(initialState);

export const useLastViewedPhoto = () => {
  return useGlobalState("photoToScrollTo");
};
