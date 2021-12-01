import React from 'react';


function DashboardProjectDetails() {

  return (



    <div class="container  mx-auto xl:max-w-7xl  pt-6 pb-2">

 <div class="flex  w-full p-5 space-y-4 bg-gray-700 rounded-xl shadow-sm  text-left overflow-hidden">

    {/* NFT image, title and description Start */}
      <div class="inline items-start sm:flex-row align-middle">

        <img
          src="https://source.unsplash.com/Jb9GwgUYQSI/600x400"
          alt="NFT Project Image"
          class="flex-none inline-block w-full mb-3 sm:w-3/12"
        />


        <div class="flex-grow text-lg">
          <p class="mb-1">
            <a
              href="javascript:void(0)"
              class="font-semibold text-gray-200 hover:text-indigo-400"
              >NFT Project Title</a
    >
            <span class="text-gray-500 sm:hidden">· 03h:13m:34s</span>
          </p>




        </div>

      </div>
    {/* NFT image, title and description End */}




    {/* ALL CARDS START */}
    
      <div class="flex flex-row hidden gap-4">
    {/* Countdown Start */}

        <div class="flex flex-col overflow-hidden bg-gray-800 rounded shadow-sm">

          <div class="flex-grow w-full p-5">
            <dl>
              <dt class="text-2xl font-semibold">
                <span>10h </span> 

                <span>35m </span>

                <span>23s</span>
              </dt>
              <dd
                class="text-sm font-medium tracking-wider text-gray-500 uppercase"
              >
                Countdown to Mint
              </dd>
            </dl>
          </div>

        </div>

    {/* Countdown End */}


    {/* Combined highest bid and number of bids */}

      <div class="grid grid-cols-2 ">
    {/* Highest Bid Card Start */}

        <div class="flex flex-col overflow-hidden bg-gray-700 rounded shadow-sm">

          <div class="flex-grow w-full p-5">
            <dl>
              <dt class="text-2xl font-semibold">
                0.3323
              </dt>
              <dd
                class="text-sm font-medium tracking-wider text-gray-500 uppercase"
              >
                Highest Bid
              </dd>
            </dl>
          </div>

        </div>

    {/* Highest Bid Card End */}

    {/* Total Bids Card Start */}
        <div class="flex flex-col overflow-hidden bg-gray-700 rounded shadow-sm">

          <div class="flex-grow w-full p-5">
            <dl>
              <dt class="text-2xl font-semibold">
                143
              </dt>
              <dd
                class="text-sm font-medium tracking-wider text-gray-500 uppercase"
              >
                Total Bids
              </dd>
            </dl>
          </div>
        </div>
    {/* Total Bids Card End */}
      </div>

    {/* Combined highest bid and number of bids END */}

  </div>

    {/* ALL CARDS END */}


  </div>
  </div>








  )
}

export default DashboardProjectDetails;