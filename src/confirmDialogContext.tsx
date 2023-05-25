import { Dispatch, SetStateAction, createContext, useState } from "react"
import React, { useEffect } from "react"

export interface ConfirmDialog {
    open: boolean
    setOpen: (open: boolean) => void
    button: React.ReactNode
    setButton: (button: string) => void
    // setButton: Dispatch<React.SetStateAction<React.JSX.Element>>
    title: string
    setTitle: (title: string) => void
    content: string
    setContent: (title: string) => void
    onConfirm: () => void
    setOnConfirm: Dispatch<SetStateAction<any>>
}

interface ConfirmDialogProviderProps {
    children: React.ReactNode
}

export const ConfirmDialogContext = createContext<ConfirmDialog>({} as ConfirmDialog)

export const ConfirmDialogProvider: React.FC<ConfirmDialogProviderProps> = ({ children }) => {
    const [onConfirm, setOnConfirm] = useState(() => () => alert("initial"))
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [button, setButton] = useState("")

    useEffect(() => {
        console.log({ open })
    }, [open])

    return (
        <ConfirmDialogContext.Provider
            value={{ open, setOpen, title, setTitle, content, setContent, onConfirm, setOnConfirm, button, setButton }}
        >
            {children}
        </ConfirmDialogContext.Provider>
    )
}
