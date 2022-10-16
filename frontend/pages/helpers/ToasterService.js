import { Toast } from "primereact/toast";
import React, { useContext, useRef } from "react";

const ToastContext = React.createContext(null);

const ToastProvider = ({children}) => {
    const toast = useRef(null);

    const showSuccess = msg => {
        toast.current.show({
            severity: 'success',
            summary: 'Success',
            detail: msg,
            life: 3000
        });
    }

    const showError = msg => {
        toast.current.show({
            severity: 'error',
            summary: 'Error',
            detail: msg,
            life: 3000
        });
    }

    return (
        <ToastContext.Provider value={{showSuccess, showError}}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext);
export default ToastProvider;