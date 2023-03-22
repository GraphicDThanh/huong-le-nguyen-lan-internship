import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface State {
  itemModal: boolean;
  confirmModal: boolean;
}

interface Context extends State {
  showHideItemModal: () => void;
  showHideConfirmModal: () => void;
}

const initState = {
  itemModal: false,
  confirmModal: false,
  showHideItemModal: () => {
    // set state
  },
  showHideConfirmModal: () => {
    // set state
  },
};

const ModalContext = createContext<Context>(initState);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [itemModal, setItemModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const showHideItemModal = useCallback(() => {
    setItemModal((prev) => !prev);
  }, []);

  const showHideConfirmModal = useCallback(() => {
    setConfirmModal((prev) => {
      return !prev;
    });
  }, []);

  const value = useMemo(
    () => ({
      itemModal,
      confirmModal,
      showHideItemModal,
      showHideConfirmModal,
    }),
    [itemModal, confirmModal, showHideItemModal, showHideConfirmModal],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };
