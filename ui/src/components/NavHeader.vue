<template>
  <header class="border-b border-gray-200 pr-3">
    <div class="flex flex-wrap items-center">
      <div class="flex-shrink flex-grow-0">
        <router-link to="/">
          <div class="p-4 cursor-pointer flex">
            <LogosJamstackIcon class="w-8 h-8 mr-2 mt-0.5" alt="Jamstacks logo" />
            <span class="text-3xl font-bold">Jamstacks</span>
            <div><div class="ml-2 text-xl bg-purple-600 text-white py-0.5 px-1.5 rounded">.NET</div></div>
          </div>
        </router-link>
      </div>
      <div class="flex flex-grow flex-shrink flex-nowrap justify-end items-center">
        <nav class="relative flex flex-grow">
          <ul class="flex flex-wrap items-center justify-end w-full m-0">
            
            <li class="ml-2">
              <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" @click="toggleDark()">
                <span :class="`${!isDark ? 'translate-x-5' : 'translate-x-0'} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200`">
                  <span :class="`${!isDark ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`" aria-hidden="true">
                    <CarbonMoon class="h-4 w-4 text-gray-400" />
                  </span>
                  <span :class="`${!isDark ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`" aria-hidden="true">
                    <CarbonSun class="h-4 w-4 text-indigo-600" />
                  </span>
                </span>
              </button>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from "@/composables"
</script>
