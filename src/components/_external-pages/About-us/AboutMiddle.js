import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Box, CardContent, CardMedia, Button, Typography, Grid, Container, Avatar } from '@material-ui/core';

const SKILLS = [
  {
    img: '/static/home/avatar1.jpg',
    title: 'රක්ෂිත බන්ධනගාරගත කර සිටින ශිෂ්‍ය ක්‍රියාකාරීන්ට කොවිඩ්',
  },
  {
    img: '/static/home/avatar2.jpg',
    title: 'නිරෝධායන ඇඳිරිනීතිය සැප්තැම්බර් 6 වනදා දක්වා දීර්ඝ කර ඇත.',
  },
  {
    img: '/static/home/migraine.jpg',
    title: 'දින 5කට කොවිඩ් මරණ 1,000ක්',
  },
  {
    img: '/static/home/apple.jpg',
    title: 'කොවිඩ් මරණ 214ක්',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
}));
function ProgressItem({ progress }) {
  const { img, title } = progress;
  return (
    <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
      <Avatar alt="Remy Sharp" src={img} sx={{ width: '65px', height: '65px' }} />
      <Typography variant="body2" sx={{ color: 'text.secondary', ml: 2 }}>
        {title}
      </Typography>
    </Box>
  );
}

export default function AboutMiddle() {
  const classes = useStyles();

  const SideImageStyle = ({ image }) => (
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(/static/home/${image})`,
        height: { md: '350px', xs: '320px' },
      }}
    ></Box>
  );

  return (
    <>
      <Container id="aboutMiddle" sx={{ mt: 10 }}>
        <Grid container>
          <Grid item xs={12} md={9} sm={6}>
            <Box className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image="/static/home/plant.jpg" />
                <CardContent sx={{ pl: 0 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Comfort Zone vs Growth Zone
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p" textAlign="left">
                    2021
                    <br />
                    කලා තොරතුරු දැන ගැනීමට බීබීසී සිංහල වෙබ් අඩවියට පිවිසෙන්න. BBC Sandeshaya, BBC Sinhala.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" textAlign="left">
                    News1st රාත්‍රී 10.00 ප්‍රධාන ප්‍රවෘත්ති ප්‍රකාශය
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <SideImageStyle image="disadvantages.jpg" />
            <Box sx={{ pt: 8 }}>
              {SKILLS.map((progress, i) => (
                <ProgressItem key={i} progress={progress} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
