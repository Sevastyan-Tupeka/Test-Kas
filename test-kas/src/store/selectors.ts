import { useSelector } from "react-redux";
import { RootState } from ".";

const selectorShowSelectModal = (state: RootState) => state.selectModal.isOpen;
export const useSelectShowSelectModal = () =>
  useSelector(selectorShowSelectModal);
