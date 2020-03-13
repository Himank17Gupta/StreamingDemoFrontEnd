import React from 'react';
import  { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Axios from 'axios';
import bmpl from '../assets/bmpl.png';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor:"pointer"
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Album(props) {
  var [cards,getCards]=useState([]);
  var [user,getUser]=useState(' ');
  var result=[];
  var isLoggedIn=false;     // state

 const classes = useStyles();
    useEffect(()=>{
    console.log('useEffect');
    getVideoList();
    })

   console.log(cards,result);
  
   function getVideoList() {
  
    console.log('fetching video list');
     
    Axios.post('http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/isUserLoggedIn',{},{withCredentials:true}).then(
        (res)=>{console.log(res.data);

          if(res.data==true){
             
            console.log('axios get username and get available videos');
              Axios.get('http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/userDetails',{withCredentials:true}).then(
             (res)=>{console.log(res.data);
              if(user!==res.data){
              getUser(res.data);
             }
             else{
             console.log(user);
             }
             }).catch(
             err=>console.log(err)
             )


             Axios.get('http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/getAvailableVideos',
             {withCredentials:true}).then((res)=>{
                 console.log(res.data);
                 result=res.data;
                 if(JSON.stringify(cards)!==JSON.stringify(result)){
                 console.log('inside getcards');
                getCards(result);
                 }
                 else{
                 console.log(cards,result);
                 }
                }).catch(
                err=>console.log(err) 
               )
          }
          else{
            console.log('push history to login page');
            props.history.push({pathname:'/'});
          }
        }
      ).catch(
       err=>console.log(err)
      )
      
      }

      function submit(){
        confirmAlert({
          title: 'Confirm to Sign Out',
          message: 'This will log you out from all the sessions',
          buttons: [
            {
              label: 'Yes',
              onClick: () => { 
              
                window.location.href='http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/auth/logout'
             
              // Axios.get('http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/auth/logout');
               //.then
              // ((res)=>{console.log(res.data)
              //   props.history.push({pathname:'/'});
              // }).catch(err=>console.log(err));
              }
            },
            {
              label: 'No',
              onClick: () => console.log('signout discarded')
            }
          ]
        });
      }


    return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" align="left" noWrap>
           Welcome {user}
          </Typography>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;
         
          <Typography variant="h6" color="inherit" style={{cursor:'pointer',textAlign:'right'}} align="right" 
            onClick={submit}
             noWrap>
               
           Sign Out
                
          </Typography>
          
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Video Gallery
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card} onClick={()=>{props.history.push({pathname:'/playVideo',state:{title:card,username:user}})}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={bmpl}
                    //"https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card}
                    </Typography>
                    <Typography>
                      Description title : dummy video for testing purposes 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Brain Mentors Pvt Limited
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        23, 1st & 2nd Floor, Block-C, Pocket-9, Rohini Sector-7 Delhi-110085
<br/>   Oppposite to Metro Pillar No-400
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}