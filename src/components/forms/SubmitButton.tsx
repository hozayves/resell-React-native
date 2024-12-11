import React from 'react'
import { useFormikContext } from 'formik'

import Button from '../button'

export default function SubmitButton({ text }: { text: string }) {
    const { handleSubmit } = useFormikContext()

    return (
        <Button text={text} onPress={handleSubmit} />
    )
}
