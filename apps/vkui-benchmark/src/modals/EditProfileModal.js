import {
    Button,
    DatePicker,
    FormItem,
    FormLayout,
    FormLayoutGroup,
    Input,
    ModalPage,
    ModalPageHeader,
    Textarea
} from "@vkontakte/vkui";
import {UserContext} from "../index";

export const EditProfileModal = ({id, imitateLongAction}) => {
    return <ModalPage id={id} header={<ModalPageHeader>Edit profile</ModalPageHeader>}>
        <UserContext.Consumer>
            {value => <FormLayout>
                <FormLayoutGroup mode="horizontal">
                    <FormItem top="First name">
                        <Input placeholder={value.first_name}/>
                    </FormItem>
                    <FormItem top="Last name">
                        <Input placeholder={value.last_name}/>
                    </FormItem>
                </FormLayoutGroup>
                <FormItem top="Date of birth">
                    <DatePicker
                        min={{day: 1, month: 1, year: 1970}}
                        max={{day: 1, month: 1, year: 2006}}
                        dayPlaceholder={value.bdate.split('.')[0]}
                        monthPlaceholder={value.bdate.split('.')[1]}
                        yearPlaceholder={value.bdate.split('.')[2]}
                    />
                </FormItem>
                <FormItem top="Bio">
                    <Textarea placeholder={"Your bio there..."}/>
                </FormItem>
                <FormLayoutGroup mode='horizontal'>
                    <FormItem>
                        <Button onClick={() => {
                            imitateLongAction()
                        }} size='l' stretched>
                            Save
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Button size='l' mode='secondary' stretched>
                            Undo
                        </Button>
                    </FormItem>
                </FormLayoutGroup>
            </FormLayout>}
        </UserContext.Consumer>
    </ModalPage>
}