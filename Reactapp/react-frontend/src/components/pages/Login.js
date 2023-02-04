import { Container,Card,CardHeader, CardBody,Form,FormGroup,Label,Input,Button,Row,Col} from "reactstrap";
import { useState,useEffect,data,setData,loginDetail,regiser,} from "react";
import Base from "../Base";
import { toast } from 'react-toastify';


const Login=()=>{

    const [loginDetails, setLoginDetail]=useState({
        username:'',
        password:'',
    })


    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })
        
    }



    const handleFormSub=(event)=>{
        event.preventDefault();
        console.log(loginDetails);
    }




    const resetData=()=>{
        setData({
        username:'',
        password:'',
       
        })
    }

    
    

    return(
        <Base>
        
        <Container>
            <Row className="mt-4">
                <Col sm={
                    {
                    size:6,
                    offset:3
                }
            }>

                <Card color="dark" inverse>
                    <CardHeader>
                        <h3>Login Here !!</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={handleFormSub}>
                            {/* Username*/ }
                            <FormGroup>
                                <Label for="UserName">
                                    Enter UserName
                                </Label>
                                <Input
                                type="text"
                                id="username"
                                placeholder="Enter here"
                                value={loginDetails.username}
                                onChange={(e)=>handleChange(e,'username')}/>
                            </FormGroup>

                               {/* Password*/ }
                               <FormGroup>
                                <Label for="Password">
                                    Enter Password
                                </Label>
                                <Input
                                type="password"
                                id="password"
                                placeholder="Enter here"
                                value={loginDetails.password}
                                onChange={(e)=>handleChange(e,'password')}/>
                            </FormGroup>

                            
                            <Container className="text-center">
                            <Button outline  color="light">Login</Button>
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
export default Login;