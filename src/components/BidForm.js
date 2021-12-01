import React from 'react';


function BidForm() {

  return (


    <div class="px-5 sm:w-3/4 text-left rounded-xl">
      <p class="py-5  text-xl font-medium">Place Bids</p>
      <form onsubmit="return false;" class="space-y-6">

        <div class="space-y-1">
          <label class="font-medium" for="tk-form-elements-lg-name"
            >Price per NFT (ETH)</label
          >
          <input
            class="block w-full px-5 py-3 leading-6 text-gray-800 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            type="text"
            id="tk-form-elements-lg-name"
            placeholder="0"
          />
        </div>

        <div class="space-y-1">
          <label class="font-medium" for="tk-form-elements-lg-email"
            >Quantity</label
          >
          <input
            class="block w-full px-5 py-3 leading-6 text-gray-800 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            type="email"
            id="tk-form-elements-lg-email"
            placeholder="# of NFTs"
          />
        </div>

 
        <button 
        type="button" 
        class="inline-flex items-center justify-center w-full px-4 py-3 space-x-2 font-semibold leading-6 text-white bg-blue-700 border border-blue-700 rounded focus:outline-none hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
          Place Bid
        </button>


      </form>
    </div>

  )
}

export default BidForm;