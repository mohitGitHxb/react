import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newInputPassword = useRef('');
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event)=>{
    event.preventDefault();
    let newPassVal = newInputPassword.current.value;
    //% ADD validation if necessary...
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBiwKIKLDe4SxzvzVY02JHJEbBu1OmPHyM"
    fetch(url,{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        idToken:authCtx.token,
        password:newPassVal,
        returnSecureToken:false,
      })
    }).then(response => {
      if(!response.ok){
        alert(response.status);
      }
      else{
        alert(`password changed sucessfully ${response.json().then(dat => dat).catch(err => `error`)}`)
        newInputPassword.current.value = ``;
        navigate(`/`);
      }
    })

  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={7}  ref={newInputPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
