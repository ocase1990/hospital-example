import React, { useState } from 'react';
import List from "./components/List"
import { Box } from "grommet";
import styled from "styled-components";
import HospitalInputs from './components/HospitalInputs';



function App() {
    const mockHospitals = [{
        name: 'Dell Seton Medical Center at The University of Texas',
        location: 'Austin, TX',
        capacity: '200',
        url: 'https://3j222p3fkti71ecxus3xccb8-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/DSMCUT_artist-rendering_750px_web.jpg'
    }, {
        name: 'Brooke Army Medical Center',
        location: 'San Antonio, TX',
        capacity: '200',
        url: 'https://scontent.faus1-1.fna.fbcdn.net/v/t39.30808-6/241479192_10159580535208631_1534500672454076147_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFYK8761GSkKdpKUcQOnMUX4J-yKeFaEiLgn7Ip4VoSItgzH06384wP9wMa6hjaGos&_nc_ohc=PuqnnMLwQlsAX-Ya2fP&_nc_ht=scontent.faus1-1.fna&oh=00_AT94N933KObZEtX197bQRXFFEf7ZuVqrNO22q8fafJeraQ&oe=621CD5AE',
    }]


    const [hospitals, setHospitals] = useState(mockHospitals)

    const addHospital = (hospital) => {
        setHospitals([...hospitals, hospital])

    }
    const removeHospital = (index) => {
        let tempHospitals = hospitals;
        tempHospitals.splice(index, 1)
        setHospitals([...tempHospitals])
    }
    const updateHospital = (hospital, index) => {
        let tempHospitals = hospitals;
        tempHospitals[index] = hospital
        setHospitals([...tempHospitals])
    }

    return (
        <MainBox>
            <h1 style={{ color: '#0c0910', borderBottom: '1px solid #A393BF' }}>Hospital List</h1>
            <ContentContainer>
                <ListContainer>
                    <h3>List of Hospitals</h3>
                    <List
                        hospitals={hospitals}
                        removeHospital={removeHospital}
                        updateHospital={updateHospital}
                    />
                </ListContainer>
                <AddHospitalContainer>
                    <h3> Add a Hospital </h3>
                    <HospitalInputs onSubmit={addHospital} />

                </AddHospitalContainer>
            </ContentContainer>


        </MainBox>
    );
}

export default App;

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 80px;
`;

const ContentContainer = styled(Box)`
    flex-direction: row;
 `

const ListContainer = styled(Box)`
    margin: 30px;
    
`

const AddHospitalContainer = styled(Box)`
    margin: 30px;
    width: 200px; 
    height: auto;
`
