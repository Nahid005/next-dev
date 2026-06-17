import Header from "@/components/web/Header";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <>
            <Header />
            <main className="flex-1">
                {children}
            </main>
        </>
    )
}