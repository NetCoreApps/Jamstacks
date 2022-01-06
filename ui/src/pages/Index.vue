<template>
  <div class="min-h-screen">
    <main>
      <div class="container mx-auto px-5">

        <section class="w-full flex flex-col justify-center text-center">

          <div id="empty" class="mt-4 mb-2">

            <h3 class="mt-8 text-6xl md:text-8xl font-bold tracking-tighter leading-tight">C# Jamstack Projects</h3>

            <p class="my-6 text-xl text-gray-500">
              Premier
              <a class="text-blue-600" title="Static Site Generation" href="https://www.freecodecamp.org/news/static-site-generation-with-nextjs/">SSG</a>
              &amp;
              <a class="text-blue-600" title="Single-page application" href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a>
              Web App templates delivering the ultimate Dev &amp; end-user UX
            </p>

            <p class="my-6 text-xl text-gray-500">Download a new Jamstack UI .NET 6
              <a class="text-blue-600" href="https://servicestack.net">ServiceStack</a> API project
            </p>

            <div class="flex justify-center mb-16">
              <div class="w-70">
                <input v-model="project" type="text" class="text-2xl" placeholder="Project Name" autocorrect="off" spellcheck="false" 
                       @keypress="isAlphaNumeric">
              </div>
            </div>

            <div id="ssg" class="mt-4 mb-2">
              <h3 class="text-gray-400 text-xl mb-2">SSG Templates</h3>
              <div class="flex flex-wrap justify-center">
                <div>
                  <a class="archive-url netcoretemplates_web" :href="zipUrl('NetCoreTemplates/nextjs')">
                    <div class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600" style="min-width:150px">
                      <div class="text-center font-extrabold flex items-center justify-center mb-2">
                        <div class="text-4xl text-blue-400 my-3">
                          <LogosNextjsIcon class="w-14 h-14 border-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <div class="text-xl font-medium text-gray-700">Next.js</div>
                      <div class="flex justify-center h-8"></div>
                      <span class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</span>
                      <div class="count mt-1 text-gray-400 text-sm"></div>
                    </div>
                  </a>
                  <a class="text-sm text-center mr-4" href="https://nextjs.jamstacks.net">nextjs.jamstacks.net</a>
                </div>
                <div>
                  <a class="archive-url netcoretemplates_grpc" :href="zipUrl('NetCoreTemplates/vue-ssg')">
                    <div class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600" style="min-width:150px">
                      <div class="text-center font-extrabold flex items-center justify-center mb-2">
                        <div class="text-4xl text-blue-400 my-3">
                          <LogosVue class="w-14 h-14" />
                        </div>
                      </div>
                      <div class="text-xl font-medium text-gray-700">Vue SSG</div>
                      <div class="flex justify-center h-8"></div>
                      <span class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</span>
                      <div class="count mt-1 text-gray-400 text-sm"></div>
                    </div>
                  </a>
                  <a class="text-sm text-center mr-4" href="https://vue-ssg.jamstacks.net">vue-ssg.jamstacks.net</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="w-full flex flex-col justify-center text-center">
          <div id="spa" class="mt-4 mb-2">
            <h3 class="text-gray-400 text-xl mb-2">SPA Templates</h3>
            <div class="flex flex-wrap justify-center">
              <div>
                <a class="archive-url netcoretemplates_aws-lambda" :href="zipUrl('NetCoreTemplates/vue-vite')">
                  <div class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600" style="min-width:150px">
                    <div class="text-center font-extrabold flex items-center justify-center mb-2">
                      <div class="text-4xl text-blue-400 my-3">
                        <LogosVue class="w-14 h-14" />
                      </div>
                    </div>
                    <div class="text-xl font-medium text-gray-700">Vue Vite</div>
                    <div class="flex justify-center h-8"></div>
                    <span class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</span>
                    <div class="count mt-1 text-gray-400 text-sm"></div>
                  </div>
                </a>
                <a class="text-sm text-center mr-4" href="https://vue-vite.jamstacks.net">vue-vite.jamstacks.net</a>
              </div>
              <div>
                <a class="archive-url netcoretemplates_empty" :href="zipUrl('NetCoreTemplates/blazor-wasm')">
                  <div class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600 dark:border-2 dark:border-pink-600 dark:hover:border-blue-600" style="min-width:150px">
                    <div class="text-center font-extrabold flex items-center justify-center mb-2">
                      <div class="text-4xl text-blue-400 my-3">
                        <SimpleIconsBlazor class="w-14 h-14 text-purple-500" />
                      </div>
                    </div>
                    <div class="text-xl font-medium text-gray-700">Blazor WASM</div>
                    <div class="flex justify-center h-8"></div>
                    <span class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</span>
                    <div class="count mt-1 text-gray-400 text-sm"></div>
                  </div>
                </a>
                <a class="text-sm text-center mr-4" href="https://blazor-wasm.jamstacks.net">blazor-wasm.jamstacks.net</a>
              </div>
            </div>
          </div>
        </section>

        <Posts class="mt-20" />

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Posts from "@/pages/posts/Index.vue"
const project = ref('')
const projectZip = computed(() => (project.value || 'MyApp') + '.zip')

const zipUrl = (template:string) =>
    `https://account.servicestack.net/archive/${template}?Name=${project.value || 'MyApp'}`

const isAlphaNumeric = (e:KeyboardEvent) => {
  const c = e.charCode;
  if (c >= 65 && c <= 90 || c >= 97 && c <= 122 || c >= 48 && c <= 57 || c === 95) //A-Za-z0-9_
    return;
  e.preventDefault()
}
</script>