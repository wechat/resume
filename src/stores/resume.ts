import { ref } from 'vue'
import { defineStore } from 'pinia'
import { requestResumeData } from '../api'

export const useResumeStore = defineStore('resume', () => {
  const resumeData = ref()

  async function getResumeData(code: string) {
    const result = await requestResumeData(code)
    resumeData.value = result
  }

  return { resumeData, getResumeData }
})
