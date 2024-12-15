import React, { useState } from 'react'
import * as Yup from 'yup'

import Screen from '@/components/Screen'
import { AppForm, AppFormField, SubmitButton } from '@/components/forms'
import AppPickerInput from '@/components/AppPickerInput'
import AppFormPicker from '@/components/forms/AppFormPicker'
import { Items } from '@/constants/data'
import CategoryPickerItem from '@/components/CategoryPickerItem'
import FormImagePicker from '@/components/forms/FormImagePicker'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title").min(1).max(255),
    price: Yup.number().required().label("Price").positive().min(1).max(10000),
    category: Yup.object().required().label("Category"),
    description: Yup.string().required().label("Description").nullable(),
    images: Yup.array().min(1, "Select at least one image.")
})

export default function ListingEditScreen() {
    return (
        <Screen>
            <AppForm
                initialValues={{ title: '', price: '', category: null, description: '', images: [] }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    placeholder='Title'
                    autoCapitalize='characters'
                    autoComplete='cc-name'
                    name='title'
                    autoCorrect={true}
                    textContentType='givenName'
                    maxLength={255}
                />
                <AppFormField
                    placeholder='Price'
                    name='price'
                    autoCapitalize='none'
                    autoComplete='off'
                    autoCorrect={false}
                    textContentType='none'
                    keyboardType='numeric'
                    maxLength={8}
                />
                <AppFormPicker
                    placeholder='Category'
                    name="category"
                    items={Items}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                />
                <AppFormField
                    placeholder='Description'
                    name='description'
                    autoCapitalize='characters'
                    autoComplete='off'
                    autoCorrect={false}
                    textContentType='none'
                    multiline={true}
                    numberOfLines={3}
                />
                <SubmitButton text='post' />
            </AppForm>
        </Screen>
    )
}
