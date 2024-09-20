import Layout from "../components/layout"
import { useSession } from "next-auth/react"
export default function IndexPage() {
  const { data: session, status } = useSession()
  return (
    <Layout>
      <main className="max-w-6xl mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Explore
          </h2>
          <p className="mb-4">
            Check whether someone is human or not.
          </p>
          <div className="relative">
            <input className="w-full border border-gray-300 rounded-full py-3 px-5 outline-none" placeholder="Enter an account id" type="text"/>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 px-4">
              <img width={20} src="/assets/search.svg" alt="Search" />
            </button>
          </div>
      </section>
      {
        session && (
          <div className="flex md:flex-row flex-col md:space-x-6 mb-10 gap-5 md:gap-0">
            <div className="bg-white shadow-md rounded-lg p-6 flex-1 flex items-center border border-gray-300">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-8 border-gray-300 flex items-center justify-center text-gray-500 text-4xl font-bold">
                            10
                        </div>
                        <div className="absolute -bottom-5 font-semibold left-1/2 transform -translate-x-1/2 text-gray-500 text-sm pb-10">
                            0 Points
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <img width={20} src="/assets/user.svg" alt="My Humanity Score" />
                            <span className="text-gray-700 font-semibold">My Humanity Score</span>
                            {/* <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">Verified Human</div> */}
                        </div>
                        <div className="text-gray-500 mt-1">You are not a verified human yet.</div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex-1 border border-gray-300">
                <div className="flex items-center space-x-2 mb-4">
                    <img width={20} src="/assets/history.svg" alt="Recent Checks" />
                    <span className="text-gray-700 font-semibold">Recent Checks</span>
                    <span className="text-gray-500">0 Total Completed</span>
                </div>
                {/* <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-700 font-semibold">I-Am-Human</span>
                            <a href="#" className="text-blue-500 text-sm">registry.i-am-huma...</a>
                            <span className="text-gray-500 text-sm">is_human.bool()</span>
                        </div>
                        <span className="text-gray-700 font-semibold">19 Pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-700 font-semibold">Complete NEAR S...</span>
                            <a href="#" className="text-blue-500 text-sm">v1.socialcheck.nea...</a>
                            <span className="text-gray-500 text-sm">has_complete_profile_check()</span>
                        </div>
                        <span className="text-gray-700 font-semibold">6 Pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-700 font-semibold">Five Contract C...</span>
                            <a href="#" className="text-blue-500 text-sm">checks.integration...</a>
                            <span className="text-gray-500 text-sm">connected_to_5_contracts()</span>
                        </div>
                        <span className="text-gray-700 font-semibold">5 Pts</span>
                    </div>
                </div> */}
            </div>
        </div> 
        )
      }
      <section>
          <h2 className="text-3xl font-bold mb-2">
            Checks
          </h2>
          <p className="mb-4">
            Add additional checks for 3rd party providers to become a verified human.
          </p>
          <div className="relative mb-4">
            <input className="w-full border border-gray-300 rounded-full py-2 px-5 outline-none" placeholder="Search" type="text"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-4 justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">
                      Holonym ZK ID (Unique Government ID)
                    </h3>
                    <p className="text-sm text-gray-500">
                      verifier.holonym_id.near
                    </p>
                  </div>
                </div>
                <span className="ml-auto text-end font-semibold w-10">
                  19 Points
                </span>
              </div>
              <p className="text-sm mb-4">
                A private proof of owning a unique government ID. For instructions on how to ...
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                  has_gov_id_sbt
                </span>
              </div>
              <div className="flex items-center space-x-2 justify-between border-t py-2 border-gray-300 w-full">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span className="text-sm">
                    holonym_id.near
                  </span>
                </div>
                <button className="ml-auto border border-gray-300 text-gray-700 px-4 py-2 rounded">
                  Get Check
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-2">
            Completed
          </h2>
          <p className="mb-4">
            Stamps you have completed that are already contributing to your score.
          </p>
          <div className="relative mb-4">
            <input className="w-full border border-gray-300 rounded-full py-2 px-5 outline-none" placeholder="Search" type="text"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-4 justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">
                      Holonym ZK ID (Unique Government ID)
                    </h3>
                    <p className="text-sm text-gray-500">
                      verifier.holonym_id.near
                    </p>
                  </div>
                </div>
                <span className="ml-auto text-end font-semibold w-10">
                  19 Points
                </span>
              </div>
              <p className="text-sm mb-4">
                A private proof of owning a unique government ID. For instructions on how to ...
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                  has_gov_id_sbt
                </span>
              </div>
              <div className="flex items-center space-x-2 justify-between border-t py-2 border-gray-300 w-full">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span className="text-sm">
                    holonym_id.near
                  </span>
                </div>
                <span className="ml-auto text-blue-500 font-semibold px-4 py-2 rounded">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
