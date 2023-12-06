import ViewId from '../../components/JobsComponents/ViewId'
// import SeoController from '@/app/lib/SeoController'

export const metadata = {
    title: 'Jobs in Tech',
    description:
        'Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.',
    alternates: {
        canonical: 'https://www.analogueshifts.com/Jobs/',
    },
}

export default function Page({ params }) {
    return (
        <section className="min-h-screen border-b">
            {/* <SeoController seoData={seoData} /> */}
            <ViewId id={params.jobViewId} />
        </section>
    )
}
