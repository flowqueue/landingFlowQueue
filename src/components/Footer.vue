<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-brand">
      Flow<span>Queue</span> — Perú
    </div>

    <nav class="footer-links">
      <a href="#">Privacidad</a>
      <a href="#">Términos</a>
      <a href="#">Contacto</a>
      <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
    </nav>

    <div class="footer-copy">
      © {{ currentYear }} FlowQueue. Todos los derechos reservados.
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #042C53;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
}

.footer-brand {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
}

.footer-brand span {
  color: #5DCAA5;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  font-size: 12px;
  color: #85B7EB;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #5DCAA5;
}

.footer-copy {
  font-size: 11px;
  color: #5F5E5A;
}

@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 4rem;
    text-align: left;
  }

  .footer-links {
    order: 2;
  }

  .footer-copy {
    order: 3;
  }
}
</style>