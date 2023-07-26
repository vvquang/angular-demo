import * as Toastify from 'toastify-js'

type ToastType = 'success' | 'error' | 'warring' | 'info'

export interface IToastConfig extends Toastify.Options {
  type: ToastType
}

const useToast = () => {
  const getExtraToastClass = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'notification-success'
      case 'error':
        return 'notification-error'
      case 'warring':
        return 'notification-warring'
      default:
        return 'notification-info'
    }
  }

  const showToast = ({ type, ...config }: IToastConfig) => {
    // close all notification before show new one
    // ...

    Toastify({
      duration: 30000,
      gravity: 'top',
      position: 'right',
      close: true,
      className: getExtraToastClass(type),
      ...config,
    }).showToast()
  }

  return {
    showToast,
  }
}

export default useToast
