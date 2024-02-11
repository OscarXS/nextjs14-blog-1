import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"


const Navbar = () => {
  return (
    <nav className='w-full mx-auto max-w-2xl px-4 py-5 relative flex items-center justify-between'>
        <Link href='/' className='font-bold text-3xl'>
            Oscar NextJS <span className='text-blue-500'>Blog</span>
        </Link>
        <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    </nav>
  )
}

export default Navbar