import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";

export const ConfirmEmail = (
    {
        onCancel = () => {
        },
        onEnter = () => {
        },
        cancelable = false,
    }
) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        pos: {
            marginBottom: 12,
        },
        cardActions: {
            marginLeft: 'auto'
        }
    });
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Continue setup of your account
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    You should confirm your email address to keep your account secure
                </Typography>
                <TextField id="outlined-basic" label="Enter your code" variant="outlined"/>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="large" color="secondary" onClick={() => {
                    onEnter();
                }}>Send</Button>
                {cancelable && <Button size="large" onClick={() => {
                    onCancel();
                }}>Later</Button>}
            </CardActions>
        </Card>
    )
}