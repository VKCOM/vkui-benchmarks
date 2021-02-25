import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "./components/Header";
import {
    Button,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import {ArrowBack} from "@material-ui/icons";

export const AppModals = () => {
    const [dialogOpened, setDialogOpened] = useState(0);

    return (
        <div>
            <CssBaseline/>
            <header>
                <Header drawerHidden={true}>
                    Modals
                </Header>
                <Toolbar/>
            </header>
            <section>
                <Container style={{display: 'flex'}}>
                    <Button onClick={() => {
                        setDialogOpened(0)
                    }} size='large' style={{margin: '16px auto'}}>
                        Open modals
                    </Button>
                </Container>
            </section>
            <Dialog fullWidth open={dialogOpened === 0} onClose={() => {
                setDialogOpened(null)
            }}>
                <DialogTitle>Filters</DialogTitle>
                <DialogContent>
                    <div style={{margin: '0 -16px'}}>
                        <ListItem button onClick={_ => {
                            setDialogOpened(1)
                        }}>
                            <ListItemText primary="Select country"/>
                        </ListItem>
                        <ListItem button onClick={_ => {
                            setDialogOpened(2)
                        }}>
                            <ListItemText primary="User info"/>
                        </ListItem>
                        <ListItem>
                            <FormControl variant="outlined" disabled fullWidth>
                                <InputLabel>City</InputLabel>
                                <Select
                                    value='kirov'
                                    label="City"
                                >
                                    <MenuItem value='saint-petersburg'>Saint-Petersburg</MenuItem>
                                    <MenuItem value='kirov'>Kirov</MenuItem>
                                    <MenuItem value='moscow'>Moscow></MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem>
                            <FormControl component="fieldset">
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1">
                                    <FormControlLabel value="any" control={<Radio/>} label="Any"/>
                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                </RadioGroup>
                            </FormControl>
                        </ListItem>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog fullWidth open={dialogOpened === 1} onClose={_ => {
                setDialogOpened(0)
            }}>
                <DialogTitle style={{display: 'flex', alignItems: 'center', padding: 8}} disableTypography>
                    <IconButton onClick={() => {
                        setDialogOpened(0)
                    }} style={{marginRight: 8}}>
                        <ArrowBack/>
                    </IconButton>
                    <Typography variant="h6">Select country</Typography>
                </DialogTitle>
                <DialogContent>
                    <List style={{margin: '0 -16px'}}>
                        <ListItem button onClick={() => {
                            setDialogOpened(2);
                        }}>
                            <ListItemText primary="User info"/>
                        </ListItem>
                    </List>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Country</FormLabel>
                        <RadioGroup aria-label="gender" name="country">
                            {['Russia', 'Ukraine', 'Belarus', 'Kazakhstan', 'Azerbaijan', 'Armenia', 'Georgia', 'Izrael', 'United States'].map(
                                (item, key) => (
                                    <FormControlLabel label={item} value={item} key={key} control={<Radio/>}/>))}
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
            </Dialog>
            <Dialog fullWidth open={dialogOpened === 2} onClose={_ => {
                setDialogOpened(0)
            }}>
                <DialogTitle style={{display: 'flex', alignItems: 'center', padding: 8}} disableTypography>
                    <IconButton onClick={() => {
                        setDialogOpened(0)
                    }} style={{marginRight: 8}}>
                        <ArrowBack/>
                    </IconButton>
                    <Typography variant="h6">User info</Typography>
                </DialogTitle>
                <DialogContent>
                    <List style={{margin: '0 -16px'}}>
                        <ListItem>
                            <ListItemText primary="Birth date" secondary="30th January 1993"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Hometown" secondary="Erevan"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Place of work" secondary="VK Team"/>
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    )
}