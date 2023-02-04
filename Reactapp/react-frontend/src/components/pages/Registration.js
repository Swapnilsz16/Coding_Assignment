import { Container,Card,CardHeader, CardBody,Form,FormGroup,Label,Input,Button,Row,Col} from "reactstrap";
import { useState,useEffect,} from "react";
import Base from "../Base";
import { register } from "../../services/UserService";
import { toast } from 'react-toastify';


const Registration=()=>{

    const [data,setData]=useState({
        name:'',
        username:'',
        password:'',
        cpassword:'',
    })

    const [error,setError]=useState({
        errors:{},
        isError:false
    })




    // handle change
    const handleChange=(event,property)=>{
        //dynamic setting a value
        setData({...data,[property]:event.target.value})
    }

    //reseting form
    const resetData=()=>{
        setData({
        name:'',
        username:'',
        password:'',
        cpassword:'',
        })
    }

    //submitform
    const submitForm=(event)=>{
        event.preventDefault()
        
        console.log(data)
        //data validate


        //call server api for sending data
        register(data).then((resp) =>{
            console.log(resp)
            console.log("success log")
            toast.success("User is registered succesfully")
            setData({
                name:'',
                username:'',
                password:'',
                cpassword:'',
                })
        }).catch((error)=>{
            console.log(error)
            console.log("Error log")
        })

    };

    return(
       <Base>
        <Container>
            
            <Row className="mt-4">

                {/* {JSON.stringify(data)} */}
                <Col sm= {{size:6,offset:3 }}>
                <Card color="dark" inverse>
                <CardHeader>
                    Fill Information to Register
                </CardHeader>

                <CardBody>
                    
                    <Form onSubmit={submitForm}>
                        {/* Name field*/ }
                        <FormGroup>                           
                            <Label for="name">Enter Name</Label>
                            <Input 
                            type="text"
                            placeholder="Enter Here"
                            id="name"
                            onChange={(e)=>handleChange(e,'name')}
                            value={data.name}
                            />
                        </FormGroup>

                        {/* UserName field*/ }
                        <FormGroup>                    
                            <Label for="username">Enter UserName</Label>
                            <Input 
                            type="text"
                            placeholder="Enter Here"
                            id="username"
                            onChange={(e)=>handleChange(e,'username')}
                            value={data.username}
                            />
                        </FormGroup>

                        {/* password field*/ }
                        <FormGroup>                    
                            <Label for="password">Enter password here</Label>
                            <Input 
                            type="password"
                            placeholder="Enter Here"
                            id="password"
                            onChange={(e)=>handleChange(e,'password')}
                            value={data.password}
                            />
                        </FormGroup>

                        {/* confirm password field*/ }
                        <FormGroup>                    
                            <Label for="password">Confirm password here</Label>
                            <Input 
                            type="password"
                            placeholder="Enter Here"
                            onChange={(e)=>handleChange(e,'cpassword')}
                            value={data.cpassword}
                            />
                        </FormGroup>
                        <Container className="text-center">
                            <Button outline color="light">Register</Button>
                            <Button onClick ={resetData} outline color="light" type="reset" className="ms-2">Reset</Button>

                        </Container>
                        
                    </Form>
                </CardBody>
            </Card>
                </Col>



            </Row>

        </Container>

       </Base>
    );
};
export default Registration;