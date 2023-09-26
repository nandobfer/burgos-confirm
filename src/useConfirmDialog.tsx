import { useContext } from "react"
import { ConfirmDialogContext } from "./confirmDialogContext"

interface OpenConfirmDialog {
    title: string
    content: string
    onConfirm: () => void
    hideCancel?: boolean
    button?: string
}

export const useConfirmDialog = () => {
    const confirmDialogContext = useContext(ConfirmDialogContext)

    const confirm = (options: OpenConfirmDialog) => {
        confirmDialogContext.setTitle(options.title)
        confirmDialogContext.setContent(options.content)
        confirmDialogContext.setButton(options.button || "Confirmar")
        confirmDialogContext.setOpen(true)
        confirmDialogContext.setHideCancel(options.hideCancel)
        confirmDialogContext.setOnConfirm(() => options.onConfirm)
    }

    return { confirm, ...confirmDialogContext, onConfirm: confirmDialogContext.onConfirm }
}
