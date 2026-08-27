import { SocialLink } from "../lib/SocialLink.ts"
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs"

/**
 * Social links to be displayed in the contact section.
 * Follow the template below to add more social links.
 * @type {SocialLink[]}
 */

export const socialLinks: SocialLink[] = [
  {
    icon: <BsGithub />,
    link: "https://github.com/Gurpreet-3315",
    description: "@myGithub",
  },
  {
    icon: <BsLinkedin />,
    link: "https://linkedin.com/in/gurpreet-singh3315",
    description: "@myLinkedIn",
  },
  {
    icon: <BsEnvelopeFill />,
    link: "mailto:gurpreet29112005@gmail.com",
    description: "@myEmail",
  },
]
