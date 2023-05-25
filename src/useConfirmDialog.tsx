import { useContext } from "react"
import { ConfirmDialogContext } from "./confirmDialogContext"

interface OpenConfirmDialog {
    title: string
    content: string
    onConfirm: () => void
}

export const useConfirmDialog = () => {
    const confirmDialogContext = useContext(ConfirmDialogContext)

    const confirm = (options: OpenConfirmDialog) => {
        confirmDialogContext.setTitle(options.title)
        confirmDialogContext.setContent(options.content)
        confirmDialogContext.setOpen(true)
        confirmDialogContext.setOnConfirm(() => options.onConfirm)
    }

    return { confirm, ...confirmDialogContext, onConfirm: confirmDialogContext.onConfirm }
}
