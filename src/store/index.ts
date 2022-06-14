import { defineStore } from 'pinia'

export const baseStore = defineStore('baseStore', {
  state: () => {
    return {
      name: 'lxj',
      sex: 'men',
      info: {
        name: 'lxj',
        sex: 'men',
        age: 20
      }
    }
  },
  // 控制修改当前
  actions: {
    editName() {
      this.name = '1523'
    }
  },
  getters: {
    // 使用参数时
    getName(state) {
      return state.name
    },
    // 不使用参数时需要指定返回值类型,可自定义返回值
    getSex(): string {
      return this.sex
      return '123'
    }
  }
})
