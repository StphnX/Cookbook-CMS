import { createClient } from "contentful";

const Contentful = () => {
    const client = createClient({
        space: "fvwgdnm4oux1",
        accessToken: "0F1deS2w-aiyaJ1sP8kSQU3A0hdskYT2rTMMbqWNK5o",
        host: "preview.contentful.com"
    });

    const getCookbook = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "cookbook",
                select: "fields"
            });
            console.log(entries)
            const saniEntries = entries.items.map((item) => {
                const name = item.fields.description;
                const ingredients = item.fields.ingredients;
                const description = item.fields.description;
                const img = item.fields.img[0].fields.file.url;

                return { name, description, ingredients, img };
            });

            return saniEntries;
        } catch (error) {
            console.log(error);
        }
    };

    return { getCookbook };
};

export default Contentful;