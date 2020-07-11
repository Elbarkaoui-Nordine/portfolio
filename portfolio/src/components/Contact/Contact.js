import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    
    const [ inputName , setInputName] = useState('');
    const [ inputEmail , setInputEmail ] = useState('');
    const [ inputSubject , setInputSubject ] = useState('');
    const [ inputMessage , setInputMessage ] = useState('');

    function sendEmail(e) {
        e.preventDefault();
    
        if(inputName == '' || inputEmail == '' || inputSubject == '' || inputMessage == ''){
            toast.error("Veuillez remplir tout les champs !");
        }
        else{            
            emailjs.sendForm('gmail_service', 'template_lCYRD1tH', e.target, 'user_Fk9SGF9HGX6JW9uJqoOjp')
            .then((result) => {
                console.log(result.text);
                toast.success("Email correctement envoyer !");
        
            }, (error) => {
                console.log(error.text);
                toast.error("Veuillez remplir tout les champs");
            });
        }
    }


    return (
        <div id="contacts-section" className='bg-white' >
  <ToastContainer position="top-center" pauseOnHover/>
            <div className='row justify-content-center'>
                <div className='col-12 project-bg'>
                    <div className='col-12 text-center text-white mt-5 mb-5'><h3 className=' p-0'>Contacts</h3></div>
                </div>
                <div className='row justify-content-center mt-5 mb-5'>
                    <p className='col-12 text-center'>
                    Si mon profil vous interesse et voulez qu'on travaille ensemble sur d'ambitieux projets ou tout simplement une demande ou question ,<br/> n'hesitez pas a me contacter en utilsant le formulaire si dessous.
                    </p>
    
                    <Form className='col-lg-5 col-md-7 col-sm-12 col-xs-12 row justify-content-center' onSubmit={sendEmail}>
                        <Form.Group controlId="formBasicEmail" className='col-6'>
                            <Form.Control type="text" placeholder="Nom" name="user_name"  onChange={ (e) => setInputName(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" className='col-6'>
                            <Form.Control type="email" placeholder="Email"  name="user_email"  onChange={ (e) => setInputEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPasswor"className='col-12'>
                            <Form.Control type="text" placeholder="Sujet" name="subject"  onChange={ (e) => setInputSubject(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.ControlTextarea1" className='col-12'>
                            <Form.Control placeholder='Message' as="textarea" rows="5" name="message"  onChange={ (e) => setInputMessage(e.target.value)}/>
                        </Form.Group>


                        <div className='col-12'>
                            <Button variant="primary" type="submit" className="send" value="Send">
                                Envoie
                            </Button>
                        </div>
                    </Form>
                    <div className='border-primary col-lg-4 col-md-4 col-sx-12 col-sm-12' >
                            <ul>
                                <li>El Barkaoui Nordine</li>
                                <li>29 rue Carle hebert , Courbevoie</li>
                                <li>06 50 26 48 64</li>
                                <li>nordine.el-barkaoui@gmail.com</li>
                                <li><a href="https://www.linkedin.com/in/nordine-el-barkaoui-90ab291a6/"><i class="fab fa-linkedin"></i> </a>
                                <a href="https://github.com/Elbarkaoui-Nordine"><i class="fab fa-github-square"></i></a>
                                </li>
                                
                            </ul>
                    </div>
                </div>
                
            </div>
        </div>
    
    )
}

export default Contact;