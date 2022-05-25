<template>
  <el-form
    ref="baseFormRef"
    :model="modelValue"
    :label-width="labelWidth"
    :rules="rules"
    class="lxj-class"
  >
    <el-row>
      <template v-for="item in formItemList" :key="item.type">
        <el-col
          v-bind="item.useLayout == false ? undefined : layout"
          :span="item.span"
        >
          <el-form-item
            :label="item.label"
            :label-width="item.labelWidth"
            :prop="item.value"
            :rules="item.rules"
          >
            <template v-if="item.type == 'input' || item.type == 'password'">
              <el-input
                :model-value="modelValue[item.value]"
                clearable
                :disabled="item.disabled"
                :type="item.type"
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                @update:model-value="change($event, item.value)"
              />
            </template>
            <template v-else-if="item.type == 'select'">
              <el-select
                :model-value="modelValue[item.value]"
                clearable
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                v-bind="item.selectOpstions"
                @update:model-value="change($event, item.value)"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
            <template v-else-if="item.type == 'textarea'">
              <el-input
                type="textarea"
                :model-value="modelValue[item.value]"
                clearable
                :placeholder="item.placeholder"
                :disabled="item.disabled"
                v-bind="item.otherOptions"
                @update:model-value="change($event, item.value)"
              />
            </template>
            <template v-else-if="item.type == 'date'">
              <el-date-picker
                :model-value="modelValue[item.value]"
                clearable
                :disabled="item.disabled"
                type="datetime"
                :placeholder="item.placeholder"
                v-bind="item.dateOptions"
                @update:model-value="change($event, item.value)"
              />
            </template>
            <template v-else-if="item.type == 'daterange'">
              <el-date-picker
                :model-value="modelValue[item.value]"
                clearable
                :disabled="item.disabled"
                type="daterange"
                v-bind="item.dateOptions"
                @update:model-value="change($event, item.value)"
              />
            </template>
            <template v-else-if="item.type == 'radio'">
              <el-radio-group
                :model-value="modelValue[item.value]"
                :disabled="item.disabled"
                @update:model-value="change($event, item.value)"
              >
                <el-radio
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.value"
                  :border="option.border"
                >
                  {{ option.label }}
                </el-radio>
              </el-radio-group>
            </template>
            <template v-else-if="item.type == 'checkbox'">
              <el-checkbox-group
                :model-value="modelValue[item.value]"
                @update:model-value="change($event, item.value)"
              >
                <el-checkbox
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :border="option.border"
                />
              </el-checkbox-group>
            </template>
            <template v-else-if="item.type == 'slot'">
              <slot :name="item.slotName" :scope="item"></slot>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
    <slot name="footer"></slot>
  </el-form>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import { IformItem } from '@/components/base-form/base-form'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
    default: () => ({}),
    required: true
  },
  rules: {
    type: Object as PropType<FormRules>,
    default: () => ({})
  },
  labelWidth: {
    type: String,
    default: () => '120px'
  },
  formItemList: {
    type: Array as PropType<IformItem[]>,
    default: () => [],
    required: true
  },
  layout: {
    type: Object as PropType<any>,
    default: () => ({
      xl: 8,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const baseFormRef = ref<FormInstance>()

// 验证
const validate = () => {
  return new Promise((res) => {
    baseFormRef.value?.validate((valid) => {
      if (valid) return res(true)
      ElMessage.warning('请完成填写表单项')
    })
  })
}

// 重置
const reset = (form: any, exclude?: string[]) => {
  for (const key in form) {
    // checkBox需要加判断
    if (!exclude) return (form[key] = '')
    if (exclude.indexOf(key) == -1) {
      form[key] = ''
    }
  }
}

// 监听变化事件，更新父组件值
const change = ($event: any, value: any) => {
  emit('update:modelValue', { ...props.modelValue, [value]: $event })
  console.log($event, value)
}

defineExpose({ validate, reset })
</script>

<style scoped>
.base-button-group {
  text-align: center;
}
</style>
