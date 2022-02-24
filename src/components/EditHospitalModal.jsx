import React from "react";
import { Box, Layer } from "grommet";
import styled from "styled-components";
import HospitalInputs from "./HospitalInputs";


const EditHospitalModal = ({ setShow, hospital, updateHospital, indexOfHospital }) => {
    const submitService = (hospital, index) => {
        updateHospital(hospital, index)
        setShow(false)
    }
    return (
        <StyledLayer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
        >
            <UpdateBox>
                <h3>Update: {hospital.name}</h3>
            </UpdateBox>
            <HospitalInputs
                hospital={hospital}
                onSubmit={submitService}
                indexOfHospital={indexOfHospital}
                setShow={setShow} />
        </StyledLayer>
    )
}

export default EditHospitalModal;

const UpdateBox = styled(Box)`
    width: 70vw;
`
const StyledLayer = styled(Layer)`
padding: 10px;
`
