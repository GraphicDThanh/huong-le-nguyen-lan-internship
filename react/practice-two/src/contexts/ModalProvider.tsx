import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface State {
  itemModal: boolean;
  notificationModal: boolean;
}

interface Context extends State {
  showHideItemModal: () => void;
  showHideNotificationModal: () => void;
}

const initState = {
  itemModal: false,
  notificationModal: false,
};

const ModalContext = createContext<Context>(initState as Context);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [itemModal, setItemModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  const showHideItemModal = useCallback(() => {
    setItemModal((prev) => !prev);
  }, []);

  const showHideNotificationModal = useCallback(() => {
    setNotificationModal((prev) => {
      return !prev;
    });
  }, []);

  const value = useMemo(
    () => ({
      itemModal,
      notificationModal,
      showHideItemModal,
      showHideNotificationModal,
    }),
    [itemModal, notificationModal, showHideItemModal, showHideNotificationModal],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };
