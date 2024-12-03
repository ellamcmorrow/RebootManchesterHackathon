<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bank UI</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">
  <!-- Header -->
  <header class="bg-white p-4 shadow-md flex items-center justify-between">
    <div class="text-xl font-bold">Good morning Advait</div>
    <div class="flex items-center space-x-4">
      <div class="relative">
        <div class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">5</div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 4.947a3 3 0 003.22 0L22 8M16 21v-2a4 4 0 00-8 0v2M4 5a4 4 0 018-0m0 0a4 4 0 018 0m0 0a4 4 0 018 0"></path>
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"></path>
      </svg>
    </div>
  </header>

  <!-- Tabs -->
  <div class="bg-white flex justify-around py-2 shadow-md">
    <button class="px-4 py-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-200">Summary</button>
    <button class="px-4 py-2 text-white font-semibold rounded-lg bg-black">Everyday</button>
    <button class="px-4 py-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-200">Save & Invest</button>
  </div>

  <!-- Current Accounts -->
  <div class="p-4">
    <h2 class="text-lg font-semibold text-gray-800">Current accounts</h2>
    <div class="bg-white shadow-md rounded-lg p-4 mt-4">
      <div class="flex justify-between">
        <div>
          <h3 class="font-bold text-gray-900">Club Lloyds</h3>
          <p class="text-gray-600 text-sm">77-19-14 / 48968960</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <p class="text-3xl font-bold mt-4">£3,462.32</p>
      <div class="flex justify-between mt-4">
        <button class="w-1/2 text-center py-2 bg-gray-100 font-semibold rounded-lg mr-2">Pay & transfer</button>
        <button class="w-1/2 text-center py-2 bg-gray-100 font-semibold rounded-lg ml-2">Regular payments</button>
      </div>
    </div>

    <!-- Info Section -->
    <div class="bg-white shadow-md rounded-lg p-4 mt-6">
      <div class="flex items-center space-x-4">
        <div class="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 21l-8-5.333M4 21V7l8-5 8 5v4"></path>
          </svg>
        </div>
        <div>
          <h4 class="text-gray-900 font-bold">Your money - past, present and future</h4>
          <p class="text-gray-600 text-sm">Plan ahead for upcoming bills and spot spending trends to keep your balance on track.</p>
        </div>
      </div>
      <button class="mt-4 text-blue-600 font-semibold flex items-center">
        View your upcoming payments
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Footer Navigation -->
  <footer class="bg-white shadow-md fixed bottom-0 w-full flex justify-between px-4 py-2">
    <button class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20h4v-6h6v6h4"></path>
      </svg>
      <span class="text-gray-700 text-sm">Home</span>
    </button>
    <button class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20h4v-6h6v6h4"></path>
      </svg>
      <span class="text-gray-700 text-sm">Apply</span>
    </button>
    <button class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20h4v-6h6v6h4"></path>
      </svg>
      <span class="text-gray-700 text-sm">Payments</span>
    </button>
    <button class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20h4v-6h6v6h4"></path>
      </svg>
      <span class="text-gray-700 text-sm">Search</span>
    </button>
    <button class="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20h4v-6h6v6h4"></path>
      </svg>
      <span class="text-gray-700 text-sm">Cards</span>
    </button>
  </footer>
</body>
</html>
