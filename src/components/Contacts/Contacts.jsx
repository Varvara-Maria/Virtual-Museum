import React from 'react';
import './Contacts.scss';
import axios from 'axios';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
        this.setState({email: event.target.value})
    }

  onMsgChange(event) {
        this.setState({message: event.target.value})
    }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST", 
      url:"https://virtual-museum.onrender.com/send", 
      data:  this.state
    }).then((response)=>{
      if (response.status === 200){
          this.resetForm();
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }


  render() {
  return (
    <div className='contacts'>  
      <div className="contacts-info">
        <div className="social">
          <i class="fa-solid fa-phone"></i>
          <p>+380994327519</p>
        </div>
        <div className="social">
          <i class="fa-solid fa-envelope"></i>
          <p>muzey@gmail.com</p>
        </div>
        <a href="https://goo.gl/maps/vRm5CtBEgGwaUW1BA" className="social">
          <i class="fa-solid fa-location-dot"></i>
          <p>78600, вул.Незалежності, 55, м.Косів, Івано-Франківської області</p>
        </a>
        <a href="https://goo.gl/maps/DBYz1HHQC9U3Ky8SA" className="social">
          <i class="fa-solid fa-location-dot"></i>
          <p>59200, вул. Д.Загула,13, м.Вижниця, Чернівецької області</p>
        </a>
        
        <div className="social-media">
          <a href=""><i class="fa-brands fa-facebook"></i></a> 
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>


      <form className='contact-form' id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST">
        <h1>Залиш відгук тут</h1>

        <div className="form-info">
          <div class="input-info">
              <p>Повне ім'я</p>
              <input  
                class="input" 
                type="name" id="name" 
                name="name" 
                placeholder="Повне ім'я" 
                required value={this.state.name} 
                onChange={this.onNameChange.bind(this)}
              />
          </div>

          <div class="input-info">
            <p>Електронна пошта</p>
            <input 
              class="input" 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Електронна пошта" 
              required value={this.state.email} 
              onChange={this.onEmailChange.bind(this)} 
              />
          </div>

          

          <div class="input-info">
            <p>Повідомлення</p>
            <textarea 
              
              class="input " 
              placeholder='Повідомлення' 
              type="text" 
              id="text" 
              name="text" 
              value={this.state.message} 
              onChange={this.onMsgChange.bind(this)}
              cols="60" 
              rows="5"
            >
              

            </textarea>
          </div>

        </div>
        
        <button type="submit" className='button'>Відправити</button>
      </form>
    </div>
  )
}
}

export default Contacts