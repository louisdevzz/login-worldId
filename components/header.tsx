import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"
import { useState } from "react"


export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className='w-full bg-white'>
        <div
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <div className="flex justify-between items-center md:p-4 py-4 max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">
                WorldCoin.
                <span className="text-blue-600">
                  ID
                </span>
                </h1>
              </div>
              <Link 
                href={`/api/auth/signin`}
                onClick={(e) => {
                    e.preventDefault()
                    signIn("worldcoin")
                }}
                className={styles.button}
                >
                <span className={styles.button_top}>Login</span>
              </Link>
            </div>
          )}
          {session?.user && (
            <div className="flex justify-between items-center md:p-4 py-4 max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">
                nada.
                <span className="text-blue-600">
                  BOT
                </span>
                </h1>
              </div>
              <div className="relative">
                <div className="flex items-center space-x-2">
                  {
                    session?.user?.image && (
                      <img alt="Profile picture of a person wearing a red jacket and sunglasses" className="w-10 h-10 rounded-full border border-gray-300" height="40" src={session.user.image} width="40"/>
                    )
                  }
                  <span onClick={toggleMenu} className="cursor-pointer text-sm font-medium text-gray-700 truncate w-32 p-2 px-3 rounded-full border border-gray-100 shadow-lg">
                      {session?.user?.email ?? session?.user?.name}
                  </span>
                  {/* <div className="px-4 py-2 text-blue-600 bg-blue-100 rounded-full">
                    Verified Human
                  </div> */}
                </div>
                <div className={`fixed z-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
                  <div className="flex items-center p-2 space-x-2">
                    {
                      session?.user?.image && (
                        <img alt="Profile picture of a person wearing a red jacket and sunglasses" className="w-10 h-10 rounded-full border border-gray-300" height="40" src={session.user.image} width="40"/>
                      )
                    }
                    <span className="text-sm font-medium text-gray-700 truncate p-2">
                      {session?.user?.email ?? session?.user?.name}
                    </span>
                  </div>
                  <div className="p-2">
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                      Visit Near Profile
                    </Link>
                    <Link 
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100" 
                      href={`/api/auth/signout`}
                      onClick={(e) => {
                        e.preventDefault()
                        signOut()
                      }}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
