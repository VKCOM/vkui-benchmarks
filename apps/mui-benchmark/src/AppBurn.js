import {Header} from "./components/Header";
import {
    Avatar, Checkbox,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Toolbar
} from "@material-ui/core";
import {useMemo, useState} from "react";
import {MenuBook} from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";

export const AppBurn = () => {
    const [listContent, setListContent] = useState([]);

    useMemo(() => {
        let genList = listContent;
        for (let i = 0; i < 1000; i++) {
            genList.push(<ListItem key={'list' + i}>
                <ListItemAvatar>
                    <Avatar>
                        <MenuBook/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Random text" secondary="Grab a cup of coffee"/>
                <ListItemSecondaryAction>
                    <Checkbox/>
                </ListItemSecondaryAction>
            </ListItem>)
        }
        setListContent(genList);
    }, [listContent])

    return (
        <div>
            <CssBaseline/>
            <header>
                <Header drawerHidden={true}>
                    1000 ListItems
                </Header>
                <Toolbar/>
            </header>
            <section>
                <Container style={{padding: 12}}>
                    <Paper>
                        <List>
                            {listContent}
                        </List>
                    </Paper>
                </Container>
            </section>
        </div>
    )
}