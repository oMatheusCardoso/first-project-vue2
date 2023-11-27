<template>
  <div>
    <img src="../assets/logo.png" alt="Logo Jovens Gênios">
    <!-- <a href="https://www.jovensgenios.com"><img src="../assets/logo.png" alt="Logo Jovens Gênios" ></a> -->


    <h1>Controle de Equipamentos</h1>

    <form>
      <label>Email: </label>
      <input type="email" name="email" placeholder="jovens.genios@jovensgenios.com">

      <label>Senha: </label>
      <input type="password" name="password" placeholder="Senha">
    </form>

  </div>
</template>

<script>
export default {
  name: 'singUp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input{ 
    padding: 4px;
    margin-bottom: 10px;
    width: -webkit-fill-available;
    border-radius: 10px;
    border: 2px rounded black;
}


</style>
