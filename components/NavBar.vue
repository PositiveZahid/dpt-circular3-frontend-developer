<template>
    <nav class="bg-black border-gray-200">
        <div class="flex w-11/12 md:w-10/12 flex-wrap items-center justify-between mx-auto py-4">
            <h2 class="flex md:hidden items-center text-2xl font-bold text-gray-50">
                Master Price
            </h2>
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button"
                    class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                    id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900">Bonnie Green</span>
                        <span class="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign
                                out</a>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-user" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Dashboard</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Master Price</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Custom Price</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Calender</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Reports</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>