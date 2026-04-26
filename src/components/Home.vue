<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  
   <section class ="home-section">
    <div class = "descripcion-lugar" >
        🟢Plataforma activa en Lima, Perú
    </div>
    <h1 class ="descripcion">Di adiós a las <br><span class="segunda-linea"> filas interminables</span></h1>   
    
    <p class = "descripcion-p">FlowQueue digitaliza la gestión de turnos en instituciones públicas.<br class ="line-2">
        Obtén tu número desde el celular, ve tu posición en tiempo real.</p>
        <div class ="btns">
                  <a href="#solicitar" class="solicitar-btn">Obtener mi turno ahora</a>
                  <a href="#como-funciona" class="ver-como-funciona-btn">Ver como funciona</a>
        </div>
        <div class ="list-destacados">
            <ul class ="destacados">
                <li ><p class = "destacados-grande">30%<br><span class="destacados-pequeño">menos espera</span></p> </li>
                <li ><p class = "destacados-grande">+5k<br><span class="destacados-pequeño">turnos gestionados</span></p> </li>
                <li ><p class = "destacados-grande">3<br><span class="destacados-pequeño">instituciones piloto</span></p> </li>
                <li ><p class = "destacados-grande">87<br><span class="destacados-pequeño">satisfacción</span></p> </li>
            </ul>
        </div>

        <div class=" ">


        </div>
</section>
</template>
<style scoped>

.destacados-pequeño{
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.733);
    font-weight: 500;
}
.destacados-grande{
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
}
.destacados {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
    padding: 0;
    list-style: none;
}
.btns{

    gap:1rem;
    display: flex;
}
.ver-como-funciona-btn{

  background-color: transparent;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.2s;
  border: rgba(245, 245, 245, 0.445) solid 1px;
}
.ver-como-funciona-btn:hover{
    background-color: white;
    color:black;
}
.solicitar-btn{

  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.2s;
}
.solicitar-btn:hover {
  background-color: #16a34a;
}


.descripcion-p{
  color: rgba(255, 255, 255, 0.733);
  margin: 0;
   font-size: 1rem; /* tamaño base */
  max-width: 600px;
}
.segunda-linea{
    color:#5DCAA5;
    
}
.descripcion{
font-size: 2.5rem; /* tamaño base */
color: white;
}
.descripcion-lugar {

    background-color: #185FA5;
    border-radius: 10px ;
    color: rgba(255, 255, 255, 0.733);
    padding: 0.2rem 3rem;

}
.home-section {
    font-family: 'Inter', sans-serif;
    background-color: #0C447C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    text-align: center;
    gap: 1rem;
}

@media (max-width: 768px) {
  .descripcion {
    font-size: 1.8rem; /* más pequeño en móvil */
  }
  .descripcion-p {
    font-size: 0.875rem; /* más pequeño en móvil */
  }
  .btns {
    flex-direction: column; /* ← se ponen uno debajo del otro */
    align-items: center;
    width: 100%;
  }

  .solicitar-btn,
  .ver-como-funciona-btn {
    width: 100%; /* ← ocupan todo el ancho */
    text-align: center;
  }
   .destacados {
    display: grid;
    grid-template-columns: 1fr 1fr; /* ← 2 columnas en móvil */
    gap: 1.5rem;
    justify-items: center;
  }

  .destacados-grande {
    font-size: 1.2rem; /* ← un poco más pequeño en móvil */
  }
}

</style>
