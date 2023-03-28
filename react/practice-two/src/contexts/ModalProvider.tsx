import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

interface State {
  itemModal: boolean;
  notificationModal: boolean;
  errorsModal: {
    status: boolean;
    message: string;
  };
}

interface Context extends State {
  showHideItemModal: () => void;
  showHideNotificationModal: () => void;
  showHideErrorsModal: (message?: string) => void;
}

const initState = {
  itemModal: false,
  notificationModal: false,
  errorsModal: {
    status: false,
    message: 'errors',
  },
};

const ModalContext = createContext<Context>(initState as Context);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [itemModal, setItemModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [errorsModal, setErrorsModal] = useState({ status: false, message: '' });

  /**
   * @description function show hide item modal
   */
  const showHideItemModal = useCallback(() => {
    setItemModal((prev) => !prev);
  }, []);

  /**
   * @description function show hide notification modal
   */
  const showHideNotificationModal = useCallback(() => {
    setNotificationModal((prev) => {
      return !prev;
    });
  }, []);

  /**
   * @description function set state to show hide
   * message if have any errors
   *
   * @param {String} message is message errors
   */
  const showHideErrorsModal = useCallback((message?: string) => {
    setErrorsModal({
      status: message ? true : false,
      message: message || '',
    });
  }, []);

  const value = useMemo(
    () => ({
      itemModal,
      errorsModal,
      notificationModal,
      showHideItemModal,
      showHideNotificationModal,
      showHideErrorsModal,
    }),
    [
      itemModal,
      errorsModal,
      notificationModal,
      showHideItemModal,
      showHideNotificationModal,
      showHideErrorsModal,
    ],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };
