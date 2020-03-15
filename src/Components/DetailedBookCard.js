import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 200,
    width: 500,
    backgroundSize: 100
  },
});

export default function DetailedBookCard(props) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Card style={{float: "left",flexDirection: "column",display: "flex",marginRight: "20px"}} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.photo}
            //title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {props.desc}
              </Typography>
               <Typography gutterBottom variant="h5" component="h2">
                {props.author}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.publisher}
              </Typography> 
              <Typography variant="body2" color="textSecondary" component="p">
                {props.price}₺
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}