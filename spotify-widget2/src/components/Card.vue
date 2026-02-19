<script setup lang="ts">
import {reactive, onMounted} from 'vue'
import {getAlbum, getArtist, getImage, getNowPlaying, getSongName} from "@/utils/utils.ts";


//reactivity...
const musicData = reactive({
  artist: getArtist(),
  song: getSongName(),
  albumCover: getImage(),
  isPlaying: getNowPlaying(),
  album: getAlbum()
})

//
onMounted(async () => {
  musicData.artist = getArtist(),
      musicData.song = getSongName(),
      musicData.albumCover = getImage(),
      musicData.isPlaying = getNowPlaying(),
      musicData.album = getAlbum()
})


</script>

<template>
  <!--
  NOTE:

  THE CSS WAS DONE BY AI

  Did some fine tuning how I wanted it though (e.g. red/green status when active/inactive...)
  -->

  <div class="flex gap-4 bg-[#161616] p-2.5 rounded-xl max-w-[500px] shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
    <img
        :src="musicData.albumCover"
        class="w-[100px] h-[100px] rounded-lg object-cover flex-shrink-0"
    >

    <div class="flex flex-col justify-center gap-0 flex-1 min-w-0">
      <!-- Now Playing Indicator -->
      <div class="flex items-center gap-2 mb-2">
        <span class="w-2.5 h-2.5 bg-[#1db954] rounded-full animate-pulse" v-if="musicData.isPlaying"></span>
        <span class="w-2.5 h-2.5 bg-[#FF0000] rounded-full animate-pulse" v-else="musicData.isPlaying"></span>

        <span class="text-[#1db954] text-sm font-semibold uppercase tracking-wider" v-if="musicData.isPlaying">
        Now Playing
      </span>
        <span v-else class="text-[#FF0000] text-sm font-semibold uppercase tracking-wider">Recently Played</span>
      </div>

      <!-- Song Name -->
      <p class="text-white text-xl font-bold truncate">
        {{ musicData.song }}
      </p>

      <!-- Artist -->
      <p class="text-[#b3b3b3] text-base font-medium truncate">
        {{ musicData.artist }}
      </p>

      <!-- Album -->
      <p class="text-[#808080] text-sm truncate">
        {{ musicData.album }}
      </p>
    </div>
  </div>


</template>

<style scoped></style>