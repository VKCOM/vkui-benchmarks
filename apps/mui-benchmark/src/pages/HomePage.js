import {Card, CardContent, CardMedia, Container, Grid, Link, makeStyles, Typography} from "@material-ui/core";
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
                        <CardMedia
                            style={{height: 256}}
                            image="https://sun9-40.userapi.com/impg/s2gwpRPjiR3CPhwror6S563MdKwRk8yPocFJmA/YWVaQgf9JkQ.jpg?size=512x512&quality=96&proxy=1&sign=c475fddfe12375444acb518a7dcd224e&type=album"
                        />
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
                        <CardMedia
                            style={{height: 256}}
                            image="https://sferum.ru/static/sidebar_promo_card_image_2x.7dfbf52765761f171964194989fe09cc.png"
                        />
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
                <FeedPost
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>


                    <Link>#vkteam</Link>
                </FeedPost>
                <FeedPost
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>


                    <Link>#vkteam</Link>
                </FeedPost>
                <FeedPost
                    authorName='Григорий Горбовской'
                    avatar='https://sun9-65.userapi.com/s/v1/ig2/DAsgKuoS0bP6ITOY2cwJpQED099LmU2abQ_FhqXey3jFlPqwc-DNp3cFUY12iQld0qsbNLrSOOrOb-p7UZOE6ntE.jpg?size=400x0&quality=96&crop=0,0,1622,1622&ava=1'
                    time={"Вчера в 18:30"}
                >
                    Пришло самое время раскрывать карты…<br/>
                    Я теперь официально работаю в <Link>Команде ВКонтакте!</Link><br/><br/>


                    <Link>#vkteam</Link>
                </FeedPost>
            </Grid>
        </Container>
    )
}