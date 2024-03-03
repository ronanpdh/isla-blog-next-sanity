import { pageBySlugQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity.server";

import ContactPage from "../components/contact-page";


export default function Contact({ allPages, preview = false }) {
    const page = allPages;
    const slug = page?.slug; 

    return <ContactPage data={page}/>
}

export async function getStaticProps({ preview = false }) {
    const allPages = await sanityClient.fetch(pageBySlugQuery, {
        slug: "contact"
    });

    return {
        props: { allPages, preview },
        revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    };
}


