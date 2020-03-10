import React,{useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GithubIcon from '../assets/github.svg';
import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        BrainMentorsPvtLtd
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
 
 // var [isLoggedIn,updateLogIn]=useState(false);

  useEffect(()=>{
    console.log('useEffect-- checking for logged in');
    axios.post('http://streamingbackend-env.vwqygijpux.us-east-2.elasticbeanstalk.com/user/isUserLoggedIn',{},{withCredentials:true}).then(
        res=>{console.log(res.data);
          if(res.data=='true'){
            console.log('push history to dashboard');
          }
        }
       ).catch(
         err=>console.log(err)
       );
    })

const classes = useStyles();
function LoginRequest(){
console.log('axios call');
}
  

return (
    <Container component="header" maxWidth="md">
<br/>
       <Typography component="h1" variant="h2" align="center">
        Welcome to Brain Mentors ' <br/>
        e-Learning Corner
        </Typography>
<br/>
<br/>
        <Typography component="h1" variant="h4" align="center">
        Your one stop destination to enhance your professional IT skills at your own pace. 
        </Typography>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        {/* <Typography component="h1" variant="h5">
         Please Sign in to Continue
        </Typography> */}
        <br/>
       <a href='http://streamingbackend-env.vwqygijpux.us-east-2.elasticbeanstalk.com/auth/google'> 
        <div >
        <Button props={props} onClick={()=>{LoginRequest()}}>
            <img width="35px" style={{marginTop:'7px', marginRight:'8px'}} alt="Google sign-in" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
              <Typography component="h2" variant="h5" style={{fontSize:'1.0rem'}}>
              Continue with Google      
              </Typography>
        </Button>
        </div>
        </a>
        <a href='http://streamingbackend-env.vwqygijpux.us-east-2.elasticbeanstalk.com/auth/google'>
        <div >
        <Button  onClick={()=>{LoginRequest()}}>
            <img width="35px" style={{marginTop:'7px', marginRight:'8px'}} alt="Google sign-in" 
                src={GithubIcon} />
             <Typography component="h5" variant="h5" style={{fontSize:'1.0rem'}} >
              Continue with GitHub      
              </Typography>
        </Button>
        </div>
        </a>
      </div>
  <br/>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </Container>
  );
}