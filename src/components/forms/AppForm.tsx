import { Formik } from 'formik'
import React from 'react'

type AppFormProps = {
    initialValues: { email: string, password: string },
    onSubmit: (values: any) => void,
    validationSchema: any,
    children: React.ReactNode
}

export default function AppForm({ initialValues, onSubmit, validationSchema, children }: AppFormProps) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
