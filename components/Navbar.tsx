import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className=" flex justify-center items-centre">
        <Image 
        src="/logo.svg"
        alt="Car hub Logo"
        width={118}
        height={18}
        className="object-contain"
        />
        </Link>

        <CustomButton
        title ="Sign In"
        btnType = "button"
        containerStyles="tex-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default Navbar