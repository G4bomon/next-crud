import Link from "next/link"
import { ModeToggle } from "./theme-button"
import { buttonVariants } from "./ui/button"

function Navbar() {
  return (
    <nav className="flex justify-end pt-4 ">
        <div className="flex gap-2">
            <Link href="/new" className={buttonVariants({variant: "secondary"})}>
                Crear nueva tarea
            </Link>
            <ModeToggle/>
        </div>
        
    </nav>
  )
}

export default Navbar