<template>
    <d-form ref="formRef" layout="vertical" :data="formData" :rules="rules" :pop-position="['right']">
      <d-form-item
        field="username"
        :rules="[{ required: true, message: '用户名不能为空', trigger: 'blur' }]"
        :show-feedback="false"
        label="用户名"
      >
        <d-input v-model="formData.username" />
      </d-form-item>
      <d-form-item field="userInfo" label="用户信息">
        <d-textarea v-model="formData.userInfo"></d-textarea>
      </d-form-item>
      <d-form-item field="age" label="年龄">
        <d-input v-model="formData.age" />
      </d-form-item>
      <d-form-item field="select" label="Select">
        <d-select v-model="formData.select" :options="selectOptions" allow-clear />
      </d-form-item>
      <d-form-item field="autoComplete" label="AutoComplete">
        <d-auto-complete :source="source" v-model="formData.autoComplete"></d-auto-complete>
      </d-form-item>
      <d-form-item field="radio" label="Radio">
        <d-radio-group direction="row" v-model="formData.radio">
          <d-radio value="0">Manual execution</d-radio>
          <d-radio value="1">Daily execution</d-radio>
          <d-radio value="2">Weekly execution</d-radio>
        </d-radio-group>
      </d-form-item>
      <d-form-item field="executionDay" label="Execution day">
        <d-checkbox-group v-model="formData.executionDay" label="Execution day" direction="row">
          <d-checkbox label="Mon" value="Mon" />
          <d-checkbox label="Tue" value="Tue" />
          <d-checkbox label="Wed" value="Wed" />
          <d-checkbox label="Thur" value="Thur" />
          <d-checkbox label="Fri" value="Fri" />
          <d-checkbox label="Sat" value="Sat" />
          <d-checkbox label="Sun" value="Sun" />
        </d-checkbox-group>
      </d-form-item>
      <d-form-item field="datePickerPro" label="Date Picker Pro">
        <d-date-picker-pro v-model="formData.datePickerPro"></d-date-picker-pro>
      </d-form-item>
      <d-form-item field="rangeDatePickerPro" label="Range Date Picker Pro">
        <d-range-date-picker-pro v-model="formData.rangeDatePickerPro"></d-range-date-picker-pro>
      </d-form-item>
      <d-form-operation class="form-operation-wrap">
        <d-button variant="solid" @click="onClick">提交</d-button>
        <d-button @click="onClear">清除校验结果</d-button>
        <d-button @click="onReset">重置</d-button>
      </d-form-operation>
    </d-form>
  </template>
  
  <script>
  import { defineComponent, reactive, ref, watch } from 'vue';
  
  export default defineComponent({
    setup() {
      const formRef = ref(null);
      const formData = reactive({
        username: '',
        userInfo: '',
        age: '',
        select: 'Options2',
        autoComplete: '',
        executionDay: ['Tue'],
        radio: '',
        datePickerPro: '',
        rangeDatePickerPro: ['', ''],
      });
      const selectOptions = reactive(['Options1', 'Options2', 'Options3']);
      const source = ref(['C#', 'C', 'C++']);
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (value < 18) {
            return callback(new Error('年龄不能小于18'));
          } else {
            callback();
          }
        }, 1000);
      };
  
      const checkRangeDatePickerPro = (rule, value, callback) => {
        if (!value || (!value[0] && !value[1])) {
          return callback(new Error('请选择日期范围'));
        } else if (!value[0]) {
          return callback(new Error('请选择开始日期'));
        } else if (!value[1]) {
          return callback(new Error('请选择结束日期'));
        } else {
          return callback();
        }
      };
  
      const rules = {
        username: [{ min: 3, max: 6, message: '用户名需不小于3个字符，不大于6个字符', trigger: 'change' }],
        userInfo: [{ required: true, message: '用户信息不能为空', trigger: 'blur' }],
        age: [{ validator: checkAge }],
        select: [{ required: true, message: '请选择', trigger: 'change' }],
        autoComplete: [{ required: true, message: '请选择', trigger: 'change' }],
        executionDay: [{ type: 'array', required: true, message: '请至少选择一个执行时间', trigger: 'change' }],
        radio: [{ required: true, message: '请选择', trigger: 'change' }],
        datePickerPro: [{ type: 'object', required: true, message: '请选择日期', trigger: 'change' }],
        rangeDatePickerPro: [
          { validator: checkRangeDatePickerPro },
          { type: 'array', required: true, message: '请选择日期范围', trigger: 'change' },
        ],
      };
  
      const onClick = () => {
        formRef.value.validate((isValid, invalidFields) => {
          console.log(isValid);
          console.log(invalidFields);
        });
      };
  
      const onClear = () => {
        formRef.value.clearValidate();
      };
  
      const onReset = () => {
        formRef.value.resetFields();
      };
  
      return { formRef, formData, selectOptions, source, rules, onClick, onClear, onReset };
    },
  });
  </script>
  
  <style>
  .form-operation-wrap > * {
    margin-right: 8px;
  }
  </style>
  