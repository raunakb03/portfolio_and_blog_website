import { toast } from "react-toastify"

const showToastSuccessMessage = (message) => {
    toast.success(message), {
        position: toast.POSITION.TOP_RIGHT,
    }
}

const showToastDangerMessage = (message) => {
    toast.error(message), {
        position: toast.POSITION.TOP_RIGHT,
    }
}

export {
    showToastDangerMessage,
    showToastSuccessMessage
}