import Link from 'next/link'; 
import Container from './container';

export default function Nav() {

    return(
        <Container>
            <div className='container mx-auto inline-flex'>
                <ul className="w-full inline-flex items-center justify-around m-4 font-semibold">
                    <li className="p-2 hover:text-orange">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="p-2 hover:text-orange">
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li className="p-2 hover:text-orange">
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}