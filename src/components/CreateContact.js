import React ,{Component} from 'react'

class CreateContact extends Component{
    constructor(props) {
        super(props)

       const initialState = {
        contact :  {}
        }
        this.state = initialState
    }


    handleChange = event => {
        const { name, value } = event.target
       
        this.setState(  {contact  : {...this.state.contact,  [name]: value } });
        
        /*this.setState({
          [name]: value,
        })
        */
       // console.log(this.state)
      }

      submitForm = (e) => {
        
         // console.log(this.state)
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }

      render() {
        const { firstName,lastName,phone,id } = this.state;
      
        return (
        
         <form >
                    <div className="form-group"> 
                        <label>FirstName: </label>
                        <input  type="text"
                                name = "firstName"
                                className="form-control"
                                value={firstName}
                                onChange={this.handleChange}
                                />
                    </div>

                    <div className="form-group"> 
                        <label>LastName: </label>
                        <input  type="text"
                                className="form-control"
                                value={lastName}
                                name = "lastName"
                                onChange={this.handleChange}
                                />
                    </div>

                    <div className="form-group"> 
                        <label>Phone: </label>
                        <input  type="text"
                                className="form-control"
                                name = "phone"
                                value={phone}
                                onChange={this.handleChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Id: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                name = "id"
                                value={id}
                                onChange={this.handleChange}
                                />
                    </div>
                   

                    <div className="form-group">
                    <input type="button" value="Submit" className="btn btn-primary" onClick={this.submitForm} />
                       
                    </div>
                </form>


        );


      }
    } 
      export default CreateContact;   