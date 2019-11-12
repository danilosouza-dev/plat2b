/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
// import { homedir } from 'os';
import { useStyles } from './styles';
import Pdf from '../../components/Pdf';
import api from '../../services/api';

export default function Home() {
  // state = {
  //   posts: [],
  // };

  // async componentDidMount() {
  //   const response = await api.get('http://localhost:3333/posts');
  //   this.setState({ posts: response.data });
  // }
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function resp() {
      const response = await api.get('http://localhost:3333/posts');
      setPosts(response.data);
      console.log(response.data);
    }
    resp();
  }, []);

  // render() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h5" className={classes.h1}>
        Olá, <span>Danilo</span>
      </Typography>

<<<<<<< HEAD
      <Typography component="h2" variant="h5" className={classes.h2}>
        Vídeos recentes
      </Typography>

      <Typography component="h2" variant="h5" className={classes.h2}>
        Últimas publicações
      </Typography>
      {/* <Grid container spacing={6}> */}
      <Grid container className={classes.root} spacing={4}>
        {posts.map(p => (
          <Pdf
            backgroundImage={p.backgroundImage}
            photoProf={p.author.photoProf}
            title={p.title}
            nameProf={p.author.nameProf}
            desc={p.desc}
            date={p.date}
            category={p.category}
            categoryColor={p.categoryColor}
            key={p.id}
          />
        ))}
      </Grid>
    </Container>
  );
=======
        <Typography component="h2" variant="h5">
          Últimas publicações
        </Typography>
        <Grid container spacing={6}>
          {this.state.posts.map(p => (
          <Pdf {...p} />
          ))}
        </Grid>
      </Container>
    );
  }
>>>>>>> 6fe214554cbe7369d83c17bd83723b9ff09c071a
}
