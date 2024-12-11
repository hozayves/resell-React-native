import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from '../AppTextInput'
import { TextInputProps } from 'react-native'
import ErrorMessage from './ErrorMessage'
import AppPickerInput from '../AppPickerInput'
import { Items } from '@/constants/data'

export default function AppFormPicker({
    name,
    icon,
    numberOfColumns = 1,
    PickerItemComponent,
    selectedItem,
    onSelectedItem,
    items,
    ...otherProps
}: { name: string, icon?: any, numberOfColumns?: number, items: any, PickerItemComponent?: any, selectedItem?: string, onSelectedItem?: () => void } & TextInputProps) {
    const { handleChange, touched, errors, setFieldTouched, setFieldValue, values } = useFormikContext()
    return (
        <>
            <AppPickerInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                icon={icon}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
                items={Items}
                onSelectedItem={(item: string) => setFieldValue(name, item)}
                selectedItem={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
