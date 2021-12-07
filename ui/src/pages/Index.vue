<template>
  <div class="min-h-screen">
    <main>
      <div class="container mx-auto px-5">

        <section class="w-full flex flex-col justify-center text-center">

          <div id="empty" class="mt-4 mb-2">

            <h3 class="mt-8 text-6xl md:text-8xl font-bold tracking-tighter leading-tight">Jamstack C# Projects</h3>
            <p class="my-6 text-xl text-gray-500">Customize &amp; Download a new .NET 6.0 Jamstack Project</p>

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