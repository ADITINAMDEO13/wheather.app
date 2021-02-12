
import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';


const City = ({ cityName , setCityName, fetchCityWeather }) => {
    
    const [error , setError] = React.useState("");

    
    const handleInputChange =(event)=>{
            setCityName(event.target.value);
    }

    const handleClick = () =>{
        if(!cityName){
            setError("City Feild is empty"); 
        }
        else{
            setError("");
            fetchCityWeather();
        }
    } 

    // console.log("City Name is : ",cityName);

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={cityName} type="text" placeholder="Enter City Name" onChange={handleInputChange}/>
                    <p className="text-danger">{error}</p>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default City;