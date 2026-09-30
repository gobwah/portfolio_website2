import circle from '../assets/circle.svg'
import email from '../assets/email.png'
import graphql from '../assets/graphql.png'
import java from '../assets/java.png'
import logo from '../assets/logo.png'
import mobile from '../assets/mobile.png'
import profile from '../assets/profile.webp'
import react from '../assets/react.png'

// Next.js static imports are objects; the components only need the URL
export const images = Object.fromEntries(
    Object.entries({
        circle,
        email,
        graphql,
        java,
        logo,
        mobile,
        profile,
        react,
    }).map(([name, image]) => [name, image.src])
)
