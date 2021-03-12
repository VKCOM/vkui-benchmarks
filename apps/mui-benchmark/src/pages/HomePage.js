import {Card, CardContent, Container, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import {FeedPost} from "../components/FeedPost";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {useState} from "react";

export const HomePage = (props) => {
    const useStyles = makeStyles({
        title: {
            fontSize: 14,
        },
        header: {
            margin: '12px 0',
        },
    });
    const classes = useStyles();
    const [confirmEmail, setConfirm] = useState(false);
    const {id, imitateLongAction} = props;

    return (
        <Container id={id}>
            {!confirmEmail && <ConfirmEmail
                cancelable
                onEnter={() => {
                    imitateLongAction(() => {
                        setConfirm(true)
                    });
                }}
                onCancel={() => {
                    setConfirm(true)
                }}
            />}
            <Typography className={classes.header} variant="h6">
                Featured
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                VK
                            </Typography>
                            <Typography variant="h5" component="h2">
                                We connect
                                people, services and companies
                            </Typography>
                            <Typography variant="body2" component="p">
                                VK is the largest social network in Russia and the CIS. Our mission is to connect
                                people, services and companies by creating simple and convenient communication tools.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Sferum
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Educational platform
                            </Typography>
                            <Typography variant="body2" component="p">
                                Your school in digital world. Learn and communicate while staying home!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Typography className={classes.header} variant="h6">
                Posts
            </Typography>

            <Grid container spacing={2} className={classes.posts}>
                {[1, 2, 3, 4, 5, 6].map(key => (
                    <FeedPost
                        key={key}
                        authorName='Григорий Горбовской'
                        avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                        time={"Вчера в 18:30"}
                    >
                        Пришло самое время раскрывать карты…<br/>
                        Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>


                        <Link>#vkteam</Link>
                    </FeedPost>
                ))}
            </Grid>
        </Container>
    )
}