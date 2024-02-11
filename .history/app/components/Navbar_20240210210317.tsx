import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './ModeToggle'


const Navbar = () => {
  return (
    <nav className='w-full mx-auto max-w-2xl px-4 py-5 relative flex items-center justify-between'>
        <Link href='/' className='font-bold text-3xl'>
            Oscar NextJS <span className='text-primary'>Blog</span>
        </Link>
        <Button variant="default">Default</Button>
        <ModeToggle />
    </nav>
  )
}

export default Navbar