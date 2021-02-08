import React from 'react'
import {Container, Row, Col, Nav, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import img from '../../assets/perfil.jpg'
import { FaGitSquare , FaFacebook, FaInstagram} from "react-icons/fa";
import { MdTimeline, MdContactMail, MdInfoOutline} from "react-icons/md";
import { GiSkills} from "react-icons/gi";
import {HiCode } from "react-icons/hi";
import Scrollpage from '../scrollpage';


function index() {
    return (
        <div>
            <Container className="cont">
                <Row className="row">
                   <Col className="col3" xs={3}>
                       <Nav id="navMother" defaultActiveKey="/home" className="flex-column">
                            <Image src={img} roundedCircle className="Image"/>
                            <span className="profileName">Matheus Guimarães</span>
                            <span className="btnSpan">
                                <FaGitSquare size="30px" className="btns"/>
                                <FaFacebook size="30px" className="btns"/>
                                <FaInstagram size="30px" className="btns"/>
                            </span>
                            <div className="linkDiv">
                                <span className="linkSpan">
                                    <MdTimeline className="icons"/>
                                    <Nav.Link className="links">Timeline</Nav.Link>
                                </span>
                                <span className="linkSpan">
                                    <GiSkills className="icons"/>
                                    <Nav.Link className="links">Skills</Nav.Link>
                                </span>
                                <span className="linkSpan">
                                    <HiCode className="icons"/>
                                    <Nav.Link className="links">Codes</Nav.Link>
                                </span>
                                <span className="linkSpan">
                                    <MdInfoOutline className="icons"/>
                                    <Nav.Link className="links">This Website</Nav.Link>
                                </span>
                                <span className="linkSpan">
                                    <MdContactMail className="icons"/>
                                    <Nav.Link className="links">Contact Me</Nav.Link>
                                </span>
                                                                                               
                            </div>
                        </Nav>
                   </Col>
                    <Col className="col9">
                        <Scrollpage/>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default index
