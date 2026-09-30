import {
    About,
    Footer,
    Header,
    Skills,
    Testimonial,
    Work,
} from '../../container'
import { Navbar } from '../../components'
import { getSiteContent } from '../../sanity/fetch'

// Content edited in /studio shows up on the site within a minute
export const revalidate = 60

export default async function Home() {
    const content = await getSiteContent()

    return (
        <div className="app">
            <Navbar />
            <Header />
            <About abouts={content.abouts} />
            <Work works={content.works} />
            <Skills skills={content.skills} experience={content.experiences} />
            <Testimonial
                testimonials={content.testimonials}
                brands={content.brands}
            />
            <Footer />
        </div>
    )
}
