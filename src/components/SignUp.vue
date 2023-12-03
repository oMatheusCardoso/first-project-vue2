<template>
  <div>
    <a href="https://www.jovensgenios.com"><img class="logo" src="../assets/logo.png" alt="Logo Jovens Gênios" ></a>


    <h1>Controle de Equipamentos</h1>

    <form>
      <FormInput label="Email" type="email" name="email" placeholder="jovensgenios@jovensgenios.com" required/>
      <FormInput label="Senha" type="password" name="password" placeholder="Senha" required/>
      <!-- <FormInput type="submit" value="Entrar"/> -->
      <v-btn
      v-progress-circular
      :loading="loading"
      class="flex-grow-1"
      height="48"
      variant="tonal"
      @click="loading"
      @click.native="submitForms"
      @buttonpress
      >
        Entrar
      </v-btn>
    </form>

    

  </div>
</template>

<script>

import FormInput from '@/components/FormInput.vue'

export default {
    name: 'SignUp',
    components:{
      FormInput,
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo{
  max-width: 100%;
}



</style>
