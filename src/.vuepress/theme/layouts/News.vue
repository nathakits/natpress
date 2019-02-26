<template>
  <div class="theme-container">
    <div class="posts" v-for="(item, index) in $pagination.posts" :key="index">
      <h2 class="item-title">
        <router-link :to="item.path">
          <p style="font-size:14px;">{{ item.frontmatter.author }} {{ item.frontmatter.date }}</p>
          <h3>{{ item.title }}</h3>
          <h3>{{ item.frontmatter.subtitle }}</h3>
          <!-- <img :src="$withBase('/pupil_invisible_01.jpg')" alt="item.title"> -->
        </router-link>
      </h2>
    </div>
    <Content class="custom"/>
  </div>
</template>
