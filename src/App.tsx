import Nav from './_components/nav';
import Hero from './_components/hero';
import Bento from './_components/bento';
import Showcase from './_components/showcase';

export default function App() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Bento />
                <Showcase />
            </main>
        </>
    );
}
