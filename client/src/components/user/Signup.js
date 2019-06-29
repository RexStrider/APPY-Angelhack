import React,{ Component} from 'react';
import { Container,Row, Col} from 'react-bootstrap'
class Singup extends Component{
     state = {
      Name: '',
      City: '',
      Email: '',
      Password:'',
      Hometown:''

     }

     handleInputChange = event =>{
       const{id ,value} = event.target;
       this.setState({ [id]: value});


     };

     clickHandler =() =>{
      console.log("click handdled");
     }

    render(){
      console.log(this.state);
      return (
        <Container className="Singup">
        <Row>
          <Col>
          <label> Name</label>
         <input 
              id="Name"
              value={this.state.Name}
              onChange= {this.handleInputChange} />
              </Col>
        </Row>
         
         <Row>
         <Col>
         <label> City</label>
         <input 
              id="City"
              value={this.state.City}
              onChange= {this.handleInputChange}/>
         </Col>
         </Row>
        
         <Row>
           <Col>
           <label>Email</label>
         <input 
              id="Email"
              value={this.state.Email}
              onChange= {this.handleInputChange}/>
           </Col>

         </Row>

         <Row>
          <Col>
          <label>Password</label>
         <input 
              id="Password"
              value={this.state.Password}
              onChange= {this.handleInputChange} />
              </Col>
        </Row>
         
         <Row>
           <Col>
           <label>Hometown</label>
         <input 
              id="Hometown"
              value={this.state.Hometown}
              onChange= {this.handleInputChange}/>
           </Col>
         </Row>
        
        <Row>
          <Col>
          <button
           onClick = {this.clickHandler}>
           Submit
          </button>
          </Col>
        </Row>
         
  
  
        
        </Container>
      );
    }
  }
  
  
  
  export default Singup;
  