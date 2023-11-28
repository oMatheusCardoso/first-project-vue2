<template>
  <div class="custom-input">
    <label>{{label}}: </label>
    <input :type="type" :name="name" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props:{
      label: String,
      type: String,
      name: String,
      placeholder: String,
      
    }
    
  }
</script>

<style>

.custom-input{
  max-width: 400px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 4px;
}

input, textarea {
  border-style: solid !important;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2C3E50;
  font-size: 13px;
  border: 1px black;
  border-radius: 8px !important;
  
}

label{
  font-size: 0.875rem;

}
</style>