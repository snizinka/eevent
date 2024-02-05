import React, { useState } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../navigation/TabNavigation';
import { TextInput } from '../components/TextInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addEvent } from '../features/events/eventsSlice';
import { Button } from '../components/Button';

type Props = NativeStackScreenProps<RootTabParamList, 'Tickets'>

const eventValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    date: yup.string().required('Date is required'),
    image: yup.string().required('Image is required'),
})


function AddEventScreen({ navigation }: Props): React.JSX.Element {
    const dispatch = useDispatch<AppDispatch>()
    const [id, setId] = useState<number>(2)

    return (
        <Formik
            initialValues={{ name: '', date: '', image: '' }}
            validationSchema={eventValidationSchema}
            onSubmit={({name, date, image}) => {
                dispatch(addEvent({id: id, name, date, image }))
                setId(prev => prev + 1)
                navigation.navigate('Home')
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <View style={{ display: 'flex', flexDirection: 'column', rowGap: 10, marginTop: 10 }}>
                        <View>
                            <TextInput
                                name="name"
                                onChangeText={handleChange('name')}
                                value={values.name}
                                placeholder="Event name"
                            />
                          {errors.name && touched.name && (
                            <Text>{String(errors.name)}</Text>
                          )}
                        </View>

                        <View>
                            <TextInput
                                name="date"
                                onChangeText={handleChange('date')}
                                value={values.date}
                                placeholder="Event date"
                            />
                          {errors.date && touched.date && (
                            <Text>{String(errors.date)}</Text>
                          )}
                        </View>

                        <View>
                            <TextInput
                                name="image"
                                onChangeText={handleChange('image')}
                                value={values.image}
                                placeholder="Event image"
                            />
                          {errors.image && touched.image && (
                            <Text>{String(errors.image)}</Text>
                          )}
                        </View>
                        <Button style={{containerStyles: {alignSelf: 'center', paddingHorizontal: 10}}} onPress={handleSubmit}>Add an Event</Button>
                    </View>
                </View>
            )}
        </Formik>
    )
}

export default AddEventScreen;
