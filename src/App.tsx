import Nav from './_components/nav';
import Hero from './_components/hero';
import Bento from './_components/bento';
import Showcase from './_components/showcase';
import About from './_components/about';
import Experience from './_components/experience';
import Footer from './_components/footer';
import { useCleanUrl } from './lib/useCleanUrl';

export default function App() {
    useCleanUrl();

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Bento />
                <Showcase />
                <About />
                <Experience />
            </main>
            <Footer />
        </>
    );
}
