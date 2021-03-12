import {Spacer} from "@yandex/ui/Spacer";
import {
    Text as TextS,
    withTypographyCaptionXL,
    withTypographyHeadlineXS,
    withTypographySubheaderM
} from "@yandex/ui/Text";
import {compose} from "@bem-react/core";

export const FeaturedCard = ({subtitle, header, caption, image}) => {
    const Text = compose(withTypographySubheaderM, withTypographyHeadlineXS, withTypographyCaptionXL)(TextS)
    return (
        <div className="Card">
            <Spacer className="FeaturedCard__content" all={12}>
                <Text typography="subheader-m">
                    {subtitle}
                </Text>
                <Text typography="headline-xs" weight="bold">
                    {header}
                </Text>
                <Text style={{opacity: 0.6}} typography="caption-xl">
                    {caption}
                </Text>
            </Spacer>
        </div>
    )
}