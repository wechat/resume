<script setup lang="ts">
defineProps<{
  data: ObjectType
}>()
</script>

<template>
  <section v-if="data">
    <h2>{{ data.name }}</h2>
    <template v-if="data?.list[0]?.list">
      <div class="list" v-for="(item, index) in data.list" :key="index">
        <div class="item">
          <h3>{{ item.name }}</h3>
          <div class="time" v-html="item.time"></div>
        </div>
        <ul>
          <li v-for="(_item, _index) in item.list" :key="_index" v-html="_item"></li>
        </ul>
      </div>
    </template>
    <ul v-else>
      <li v-for="(item, index) in data?.list" :key="index">{{ item }}</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 10px;
    padding-bottom: 6px;
    font-size: 17px;
    border-bottom: 2px solid #000;
  }
  h3 {
    font-size: 15px;
    line-height: 1;
  }
  ul {
    li {
      position: relative;
      margin: 8px 0 0 18px;
      font-size: 14px;
      line-height: 1.3;
      word-break: break-all;
    }
  }
  .list {
    padding-top: 10px;
    &:nth-child(2) {
      padding-top: 0;
    }
    .item {
      display: flex;
      align-content: center;
      justify-content: space-between;
      padding: 8px 0 4px;
      line-height: 1;
      .time {
        padding-top: 3px;
      }
    }
  }
}
</style>
