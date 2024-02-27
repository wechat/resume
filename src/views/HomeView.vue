<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import Message from '@arco-design/web-vue/es/message'
import { useResumeStore } from '@/stores/resume'
import ResumeHead from '@/components/ResumeHead.vue'
import ResumeItem from '@/components/ResumeItem.vue'
const store = useResumeStore()
const { resumeData } = storeToRefs(store)
const code = ref('')
const visible = ref(true)
const resumeList = ref(['info', 'skill', 'opensource', 'work', 'xedu', 'intro'])

async function getInfo(code?: string) {
  await store.getResumeData(code || '')
  document.title = resumeData.value?.title
}
function handleBeforeOk() {
  if (code.value) {
    getInfo(code.value)
    visible.value = false
  } else {
    Message.warning({
      content: '暗号不能为空'
    })
  }
}
function handleCancel() {
  getInfo()
}
</script>

<template>
  <main v-if="resumeData">
    <template v-for="item in resumeList" :key="item">
      <ResumeHead v-if="item === 'info'" :data="resumeData[item]" />
      <ResumeItem v-else :data="resumeData[item]" />
    </template>
  </main>
  <a-modal
    v-model:visible="visible"
    title="请输入暗号"
    :width="400"
    :mask-closable="false"
    cancel-text="直接进入"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk"
  >
    <a-input v-model="code" />
  </a-modal>
</template>

<style lang="scss" scoped>
main {
  padding: 30px;
}
</style>
<style>
.arco-modal {
  width: 300px !important;
}
</style>
