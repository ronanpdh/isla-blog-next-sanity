export const page = {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'H5', value: 'h5' },
                        { title: 'H6', value: 'h6' },
                        { title: 'Quote', value: 'blockquote' }
                    ]
                }

            ],
        },
        {
            name: "intro",
            titile: "Intro",
            type: "string"
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }
    ]
}