<template>
    <div class="fixed w-full h-15 bg-white border-b border-gray-2">
        <div class="flex flex-row w-975 mx-auto px-[20px] h-full">
            <div class="flex-grow flex items-center">
                <h1>social network</h1>
            </div>
            <div class="flex items-center w-[268px]">
                <v-search-box/>
            </div>
            <div class="shrink-0 w-[335px] flex items-center">
                <div class="flex flex-row-reverse w-full text-xl">

                    <div class="pl-6 flex items-center">
                        <img src="/assets/image/user.jpg" class="w-6 h-6">
                    </div>

                    <div class="pl-6">
                        <router-link to="/">
                            <i class="fal fa-heart"></i>
                            <i v-if="false" class="fas fa-heart"></i>
                        </router-link>
                    </div>

                    <div class="pl-6">
                        <router-link to="/">
                            <i class="fal fa-compass"></i>
                            <i v-if="false" class="fas fa-compass"></i>
                        </router-link>
                    </div>

                    <div class="pl-6">
                        <router-link to="/">
                            <i class="fal fa-plus-square"></i>
                            <i v-if="false" class="fas fa-plus-square"></i>
                        </router-link>
                    </div>

                    <div class="pl-6">
                        <router-link to="/">
                            <i class="fal fa-location-arrow"></i>
                            <i v-if="false" class="fas fa-location-arrow"></i>
                        </router-link>
                    </div>

                    <div class="pl-6">
                        <router-link to="/">
                            <i class="fas fa-home-alt"></i>
                            <i v-if="false" class="far fa-home-alt"></i>
                        </router-link>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
