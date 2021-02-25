import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Grid} from "@material-ui/core";

export const FeedPost = (props) => {
    const {avatar, authorName, time, children} = props;

    const useStyles = makeStyles((theme) => ({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));

    const classes = useStyles();

    return (
        <Grid item>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar} src={avatar}/>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={authorName}
                    subheader={time}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
