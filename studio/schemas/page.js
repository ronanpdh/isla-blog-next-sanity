export const page ={
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
            of: [{ type: "block"}],
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