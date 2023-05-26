# Confirm dialog
#### A hook, context and component for rendering @mui/material dialog globally with variable title, text content, button name and on confirm callback

### Preparation

wrap your app in <ConfirmDialogProvider>  <ConfirmDialogProvider/> and place the <ConfirmDialog /> component:

```jsx
<ConfirmDialogProvider>
    <App />
    <ConfirmDialog />
<ConfirmDialogProvider/>
```

### Usage

Use the useConfirmDialog hook to retrieve the method and call it passing the title, content and onConfirm as an object:

```jsx
import { useConfirmDialog } from 'burgos-confirm'

export const App = () => {
    const { confirm } = useConfirmDialog()

    const handleClick = () => {
        confirm({
            title: 'Confirmation',
            content: 'Are you sure you want to delete this object?',
            onConfirm: () => console.log(' object deleted')
        })
    }
}
```