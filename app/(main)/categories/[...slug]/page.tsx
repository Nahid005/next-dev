export default async function CategoryWiseProduct({params, searchParams}: {params: string[], searchParams: string}) {
    const slugs = await params;
    const searchQuiry = await searchParams;

    return <p>Category wise products</p>
}