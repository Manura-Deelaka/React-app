// material
import { alpha, useTheme, makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, useMediaQuery, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './ItemData';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingBottom: theme.spacing(1),
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
// ----------------------------------------------------------------------

export default function AboutWhat() {
  const classes = useStyles();

  return (
    <>
      <Container id="about" sx={{ mt: 10 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.root}>
                <ImageList rowHeight={180} className={classes.imageList}>
                  {itemData.map((item, index) => (
                    <ImageListItem key={item.img}>
                      <img src={item.img} alt={index} />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        actionIcon={
                          <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
