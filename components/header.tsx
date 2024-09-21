import { useAccount } from "wagmi"
import { ConnectKitButton } from 'connectkit'

export default function Header() {
  const account = useAccount()

  return (
    <>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className='w-full bg-white'>
        <div
          className={`nojs-show`}
        >
          {!account?.address && (
            <div className="flex justify-between items-center md:p-4 py-4 max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">
                Citadel. 
                <span className="text-blue-600">
                  OnChain
                </span>
                </h1>
              </div>
              <ConnectKitButton/>
            </div>
          )}
          {account?.address && (
            <div className="flex justify-between items-center md:p-4 py-4 max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">
                Citadel.
                <span className="text-blue-600">
                  OnChain
                </span>
                </h1>
              </div>
              <div className="relative">
                <div className="flex items-center space-x-2">
                  {/* <span className="cursor-pointer text-sm font-medium text-gray-700 truncate w-32 p-2 px-3 rounded-full border border-gray-100 shadow-lg">
                      {account?.address}
                  </span> */}
                  <div>
                    <ConnectKitButton/>
                  </div>
                  {/* <div className="px-4 py-2 text-blue-600 bg-blue-100 rounded-full">
                    Verified Human
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
