import React, { useState } from "react";
import { Close } from 'grommet-icons';
import { Box, Image, Text, Button } from "grommet";
import styled from "styled-components";
import EditHospitalModal from "./EditHospitalModal";


const List = ({ hospitals, removeHospital, updateHospital }) => {
    const [show, setShow] = useState(false)
    const [indexOfHospital, setIndexOfHospital] = useState()
    const editHospitalModalService = (index) => {
        setIndexOfHospital(index)
        setShow(true)
    }
    return (
        <>
            {hospitals.map((hospital, index) => {
                return (
                    <div key={hospital.name}>
                        <ActionsBox>
                            <EditButton onClick={() => editHospitalModalService(index)}> Edit </EditButton>
                            <RemoveButton onClick={() => removeHospital(index)}><Close size='small' /> Remove </RemoveButton>
                        </ActionsBox>


                        <HospitalCard >
                            <ImageBox>
                                <HospitalImage src={hospital.url} />
                            </ImageBox>
                            <TextBox>
                                <u>
                                    <li>
                                        <TitleText>{hospital.name}</TitleText>
                                    </li>

                                </u>

                                <SubheadingText> {hospital.location}</SubheadingText>
                                <SubheadingText>{hospital.capacity} beds</SubheadingText>

                            </TextBox>

                        </HospitalCard>

                    </div>
                )
            })}
            {show &&
                <EditHospitalModal
                    hospital={hospitals[indexOfHospital]}
                    setShow={setShow}
                    updateHospital={updateHospital}
                    indexOfHospital={indexOfHospital}
                />
            }

        </>
    )
}

export default List;

const ActionsBox = styled(Box)`
    justify-content: space-between;
    flex-direction: row;
    margin-left: 10px;
`
const EditButton = styled(Button)`
    color: #453750;
    font-weight: 600;
    margin-left: 10px;
`

const RemoveButton = styled(Button)`
    color: red;
    font-weight: 600;
    margin-right: 10px
`

const HospitalCard = styled(Box)`
    margin-bottom: 10px;
    background: linear-gradient(#0C0910, #453750);
    border: 3px solid #A393BF;
    padding-horizontal: 50px;
    width: 300px;
    border-radius: 10px;
    color: #A393BF
`;

const HospitalImage = styled(Image)`
    width: 100px; 
    height: auto;
`

const TitleText = styled(Text)`
    width: 100%
    align-text: center;
    font-weight: 700;
`
const TextBox = styled(Box)`
    margin: 5px
`

const SubheadingText = styled(Text)`
`
const ImageBox = styled(Box)` 
margin: 5px;
    flex-direction: row;
    justify-content: center;
    height: auto;
`