import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProfileCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Ad
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Admin Name"
        subheader="admin1234"
      />
      <CardMedia
        component="img"
        height="194"
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Flight pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Welcome to King Flyer. The admin is responsive for editing and creating flights. Click the arrow for more info!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          With King Flyer, you can now track the live status of domestic and international flights. Just enter a few details such as PNR number, flight number, travel date and others and get the flight status on the go from anywhere. 
          </Typography>
          <Typography paragraph>
          You can now bid adieu to the hassles that can impede your amazing flight experience with India's leading airline, KingFlyer! With its top-notch connectivity, on-time performance, hassle-free travel, and courteous service, KingFlyer has built its reputation as one of India's most reliable airlines. From hassle-free flight booking to smooth journeys, KingFlyer makes flying effortless in all possible ways. 
          </Typography>
          <Typography paragraph>
          Once you book your flight tickets with KingFlyer, you can check the flight status on the go from anywhere and at any time.
          </Typography>
          <Typography>
          So, book directly on the King Flyer website and enjoy the ease of web check-in, staying up to date with the flight status and avail of other exciting benefits and discounts. Happy flying!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}