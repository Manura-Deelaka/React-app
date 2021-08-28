import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Box, CardContent, CardMedia, Button, Typography, Grid, Container, Avatar, Divider, LinearProgress } from '@material-ui/core';
import LifeStyle from './LifeStyle';

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
const CARDS = [
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

const useStyles = makeStyles((theme) => ({}));
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
function CardItem({ progress }) {
  const { img, title } = progress;
  return (
    <Box sx={{ mb: 2, display: { md: 'flex', xs: '' }, alignItems: 'center', maxWidth: 200 }}>
      <img src={img} alt={img} />
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
      <Container id="aboutMiddle" sx={{ mt: 5 }}>
        <Grid container>
          <Grid item xs={12} md={9} sm={6}>
            <Box sx={{ pb: 5 }}>
              <Typography variant="body2" fontWeight="bold">
                MOST POPULAR
              </Typography>
              <LinearProgress color="primary" />
            </Box>
            <Box display="flex">
              <CardActionArea sx={{ width: '50%' }}>
                <CardMedia sx={{ height: { md: 360, xs: 200 } }} image="/static/home/plant.jpg" />
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
              <Box sx={{ pl: 5 }}>
                {CARDS.map((progress, i) => (
                  <CardItem key={i} progress={progress} />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <Box sx={{ pt: 8 }}>
              <SideImageStyle image="disadvantages.jpg" />
            </Box>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body2" fontWeight="bold">
                MOST POPULAR
              </Typography>
              <LinearProgress color="error" />
            </Box>
            <Box sx={{ pt: 3 }}>
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
