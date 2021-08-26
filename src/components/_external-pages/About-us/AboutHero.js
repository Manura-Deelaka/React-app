// material
import { alpha, useTheme, makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography, useMediaQuery, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

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
const useStyles = makeStyles({
  media: {
    height: '65px',
    width: '90px',
    marginLeft: '25px',
  },
  media1: {
    height: '70px',
    width: '70px',
    marginLeft: '25px',
  },
});

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();
  const classes = useStyles();
  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container id="about" sx={{ mt: 10 }}>
        <Typography sx={{ mt: { xs: 3, md: 5 }, mb: { xs: 3, md: 3 } }} variant={isMobile ? 'h5' : 'h3'} align="center" color="textPrimary" gutterBottom>
          software, and hardware. <br />
          software, and hardware
        </Typography>
        <br />
        <Typography sx={{ mt: { xs: 3 }, mb: { xs: 3, md: 10 } }} variant={isMobile ? 'h3' : 'h3'} color="textPrimary" align="center" gutterBottom>
          software, and hardware
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <CardMedia className={classes.media} image="/static/about/Vector.svg" />
              <br />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="left">
                  software, and hardware
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" component="p">
                  Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online
                  advertising technologies, a search engine, cloud computing,
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardMedia className={classes.media1} image="/static/about/Vector1.svg" />
              <br />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="left">
                  software, and hardware
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" component="p">
                  Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online
                  advertising technologies, a search engine, cloud computing,
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardMedia className={classes.media1} image="/static/about/Vector2.svg" />
              <br />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="left">
                  차량 유지보수의 모든것
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" component="p">
                  Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online
                  advertising technologies, a search engine, cloud computing,
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
