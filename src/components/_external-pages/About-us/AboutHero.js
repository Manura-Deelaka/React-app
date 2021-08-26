// material
import { alpha, useTheme, makeStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  useMediaQuery,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    paddingBottom: theme.spacing(1)
  }
}));
const useStyles = makeStyles({
  media: {
    height: '65px',
    width: '90px',
    marginLeft: '25px'
  },
  media1: {
    height: '70px',
    width: '70px',
    marginLeft: '25px'
  }
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
        <Typography
          sx={{ mt: { xs: 3, md: 5 }, mb: { xs: 3, md: 3 } }}
          variant={isMobile ? 'h5' : 'h3'}
          align="center"
          color="textPrimary"
          gutterBottom
        >
          라이크오토는 고객의 소중한 추억을 위해 최선을 다하고자 합니다. <br />
          기술력의 노하우, 최고의 서비스, 고객에 대한 진정한 열정을 가지고 항상 노력하겠습니다.
        </Typography>
        <br />
        <Typography
          sx={{ mt: { xs: 3 }, mb: { xs: 3, md: 10 } }}
          variant={isMobile ? 'h3' : 'h3'}
          color="textPrimary"
          align="center"
          gutterBottom
        >
          라이크오토는 아래와 같은 세가지 강점을 가지고 있습니다.
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <CardMedia className={classes.media} image="/static/about/Vector.svg" />
              <br />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="left">
                  유럽형 차량 판매
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" component="p">
                  라이크오토는 바인스버크 등 유럽의 메이저 캠핑카 업체로 부터 독점적인 판매권을 받아 한국에 최고 수준의
                  유럽형 차량을 편리하게 판매하고 있습니다.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardMedia className={classes.media1} image="/static/about/Vector1.svg" />
              <br />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align="left">
                  라이크오토만의 특별한
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" component="p">
                  차량의 판매부터 정비 서비스에 이르기 까지 캐러반과 모터홈에 대한 모든 시스템을 갖추고 있는
                  라이크오토는 항상 고객을 위하여 최선을 다하고 있습니다.
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
                  라이크오토를 통해 판매된 모든 차량은 라이크오토나 서비스 네트워크를 통해 보증기간동안 정비와 서비스가
                  가능하며 언제든지 연락후 방문 해 주시기 바랍니다.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
