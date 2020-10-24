import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar  from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor:"fff"
  },
  hero:{
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat ",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]:{
      height:300,
      fontSize:"3rem"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)

  },
  blogTitles:{
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  
  },
  card:{
    maxWidth:'100%',
    
    media:{
      height:240
    },
    CardActions:{
      display:"flex",
      margin: "0 10px",
      justifyContent:"space-between"
    },
    author:{
      display:"flex"
    },
    paginationContainer:{
      display:"flex",
      justifyContent:"center"
    }
  }
}));



function App() {

  const classes = useStyles();

  return (
   <div>
     <AppBar className= {classes.appBar} position="static">
        <Toolbar>
         
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>
          React Blog
          </Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles

          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1530303053753-ed17bb09f08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Future Leader
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/ >

                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                          Victor Abrokwah
                        
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Oct 2020
                        </Typography>

                    </Box>
                    <ThumbUpIcon/>
                    <ThumbDownIcon/>

                  </Box>
                  <Box >


                  </Box>
                  
                </CardActions>
              </Card>

              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Future Leader
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/ >

                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                          Victor Abrokwah
                      
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Oct 2020
                        </Typography>

                    </Box>
                    <ThumbUpIcon/>
                    <ThumbDownIcon/>

                  </Box>
                  <Box >


                  </Box>
                  
                </CardActions>
              </Card>


              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Future Leader
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/ >

                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                          Victor Abrokwah
                         
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Oct 2020
                        </Typography>

                    </Box>
                    <ThumbUpIcon/>
                    <ThumbDownIcon/>

                  </Box>
                  <Box >


                  </Box>
                  
                </CardActions>
              </Card>


              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1535043883-2548fb805573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Future Leader
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"/ >

                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                          Victor Abrokwah
                       
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          Oct 2020
                        </Typography>

                    </Box>
                    <ThumbUpIcon/>
                    <ThumbDownIcon/>

                  </Box>
                  <Box >


                  </Box>
                  
                </CardActions>
              </Card>


              </Grid>
          </Grid>
          <Box my={4} className={classes.paginationContainer}>
            </Box>


          </Container>


     </div>
  );
}

export default App;
