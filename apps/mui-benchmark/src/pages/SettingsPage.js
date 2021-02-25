import {Button, Card, CardActions, CardContent, Container, Typography} from "@material-ui/core";
import {ConfirmEmail} from "../components/ConfirmEmail";
import {useState} from "react";

export const SettingsPage = (props) => {
    const {id, imitateLongAction, openDialog} = props;
    const [confirmEmail, setConfirm] = useState(false);

    return (
        <Container id={id}>
            {!confirmEmail && <ConfirmEmail cancelable={false} onEnter={() => {
                imitateLongAction(() => {
                    setConfirm(true);
                });
            }}/>}
            <div style={{minHeight: 12}}/>
            <Card style={{display: 'flex'}}>
                <CardContent>
                    <Typography variant='h5'>
                        Modify your personal data
                    </Typography>
                    <Typography color="textSecondary" variant='h7'>
                        First name, Last name, Bio and etc...
                    </Typography>
                </CardContent>
                <CardActions style={{marginLeft: 'auto'}}>
                    <Button onClick={() => {
                        openDialog();
                    }} color="primary" size="large">
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}