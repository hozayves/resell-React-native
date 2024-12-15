import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const FormImagePicker = ({ name }) => {
    const { errors, values, touched, setFieldValue } = useFormikContext()
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
    }
    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter(image => image !== uri));
    }
    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
export default FormImagePicker
