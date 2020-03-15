import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    width: 200,
    backgroundSize: 100
  },
});

export default function BookCard(props) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Card style={{float: "left",flexDirection: "column",display: "flex",marginRight: "20px",marginBottom: "20px"}} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.productPhoto}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.price}₺
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="small" style={{color: "#191919"}} onClick={props.onClick}>
              Show Details
        </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}