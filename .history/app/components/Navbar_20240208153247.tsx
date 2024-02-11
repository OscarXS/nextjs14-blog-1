import Link from 'next/link'
import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <nav className='w-full mx-auto max-w-2xl px-4 py-5 relative flex items-center justify-between'>
        <Link href='/' className='font-bold text-3xl'>
            Oscar NextJS <span className='text-blue-500'>Blog</span>
        </Link>
        <Button>Button</Button>
    </nav>
  )
}

export default Navbar