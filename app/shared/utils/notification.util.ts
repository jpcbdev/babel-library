import Toastify from 'toastify-js';

export class Notification {

    static showSuccess(message: string) {
        Toastify({
            text: message,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "green",
            },
            onClick: function () { }
            // @ts-ignore
        }).showToast();
    }

    static showError(message: string) {
        Toastify({
            text: message,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "red",
            },
            onClick: function () { }
            // @ts-ignore
        }).showToast();
    }

}