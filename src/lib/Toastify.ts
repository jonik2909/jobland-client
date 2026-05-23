import { toast, Bounce } from 'react-toastify';

export const successToast = async (msg: string, timer: number = 2000) => {
    toast.success(msg, {
        position: "top-center",
        autoClose: timer,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
    });
};

export const errorToast = async (err: any, timer: number = 3000) => {
    const msg = err?.response?.data?.message || err?.message || String(err);
    toast.error(msg, {
        position: "top-center",
        autoClose: timer,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
    });
};

export const infoToast = async (msg: string, timer: number = 2000) => {
    toast.info(msg, {
        position: "top-center",
        autoClose: timer,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
    });
};
