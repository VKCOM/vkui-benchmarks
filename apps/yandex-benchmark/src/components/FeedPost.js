import {Spacer} from "@yandex/ui/Spacer";
import {UserPic as UserPicDesktop, withSizeM} from "@yandex/ui/UserPic/desktop";
import {compose} from "@bem-react/core";
import {Text as TextDesktop, withTypographyBodyLongL} from "@yandex/ui/Text/desktop";
import {Button as ButtonDesktop, withSizeM as withSizeMButton, withViewPseudo} from "@yandex/ui/Button/desktop";

export const FeedPost = ({avatar, children, time, authorName}) => {
    const UserPic = compose(withSizeM)(UserPicDesktop);
    const Text = compose(withTypographyBodyLongL)(TextDesktop);
    const Button = compose(withSizeMButton, withViewPseudo)(ButtonDesktop)

    return (
        <section className="Card">
            <Spacer all={12}>
                <div className="FeedPost__header">
                    <UserPic size="m" lodpiUrl={avatar}/>
                    <Text typography='body-long-l'>
                        {authorName}<br/>
                        {time}
                    </Text>
                    <Button view="pseudo" size="m">
                        ...
                    </Button>
                </div>
                <Spacer top={12} className="FeedPost__content">
                    {children}
                </Spacer>
            </Spacer>
        </section>
    )
}