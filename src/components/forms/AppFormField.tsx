import React from 'react'
import { FormikErrors, useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'
import { TextInputProps } from 'react-native'

export default function AppFormField({ name, icon, ...otherProps }: { name: string, icon?: any } & TextInputProps) {
    const { handleChange, touched, errors, setFieldTouched } = useFormikContext()
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                icon={icon}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
