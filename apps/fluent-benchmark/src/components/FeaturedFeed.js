import {DocumentCard, DocumentCardTitle, Stack} from "@fluentui/react";

export const FeaturedFeed = ({items}) => {
    return <Stack className="Side" gap={12}>
        {items.map((item, key) => <DocumentCard key={key}>
            <DocumentCardTitle className="FeaturedFeed__title" title={item.title}/>
            <DocumentCardTitle className="FeaturedFeed__subtitle" showAsSecondaryTitle title={item.subtitle}/>
            <DocumentCardTitle className="FeaturedFeed__text" showAsSecondaryTitle title={item.text}/>

        </DocumentCard>)
        }
    </Stack>
}