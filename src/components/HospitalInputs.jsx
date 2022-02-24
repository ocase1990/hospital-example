import React, { useState } from "react";
import { Box, TextInput, Button, Form, FormField } from "grommet";
import styled from "styled-components";


const HospitalInputs = ({ onSubmit, hospital, indexOfHospital, setShow }) => {
    // this is repetetive however this removes the react uncontroled -> controlled error
    const initialValue = hospital ? { ...hospital } : { name: '', location: '', capacity: '', url: '' }
    const [value, setValue] = useState(initialValue);
    const inputs = {
        name: 'Hospital Name',
        location: 'Location',
        capacity: 'Capacity',
        url: 'Picture Url'
    }
    return (
        <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => { onSubmit(value, indexOfHospital) }}
        >
            {Object.entries(inputs).map(([key, input]) => {
                return (
                    <FormField key={key} name={key} htmlFor={key} label={input} >
                        <TextInput id={key} name={key} placeholder={input} />
                    </FormField>
                )

            })}
            <Box direction="row" gap="medium">
                <SubmitButton type="submit" primary label="Submit" />

                {hospital ? <ResetButton onClick={() => setShow(false)} type='reset' label='Cancel' /> : <ResetButton type="reset" label="Reset" />}
            </Box>
        </Form>



    )
}

export default HospitalInputs;

const SubmitButton = styled(Button)`
width: 100px;
background-color: #A393BF;
padding: 5px;
margin: 5px;
font-weight: 600;
`
const ResetButton = styled(Button)`
width: 100px;
background-color: #453750;
padding 5px;
margin: 5px;
color: #A393BF;
font-weight: 600;
`
const CancelButton = styled(Button)`
    background-color:
`