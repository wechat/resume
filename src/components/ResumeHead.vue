<script setup lang="ts">
defineProps<{
  data: ObjectType
}>()
</script>

<template>
  <header>
    <h1>{{ data.name }}</h1>
    <p>
      <span>{{ data.phone }}</span>
      <span>{{ data.email }}</span>
      <span>{{ data.city }}</span>
    </p>
    <p class="default">
      <span>{{ data.work_time }}</span>
      <span>{{ data.position_applied }}</span>
    </p>
    <div class="other">
      <p>
        <span>{{ data.work_time }}</span>
      </p>
      <p>
        <span>{{ data.position_applied }}</span>
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin-bottom: 26px;
  text-align: center;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  p {
    display: flex;
    align-content: center;
    justify-content: center;
    padding-top: 10px;
    span {
      display: block;
      padding: 0 10px;
      line-height: 1;
      border-right: 1px solid #000;
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    }
  }
  .other {
    display: none;
  }
}
@media (max-width: 600px) {
  header {
    .default {
      display: none;
    }
    .other {
      display: block;
    }
  }
}
</style>
