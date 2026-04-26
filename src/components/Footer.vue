<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        Flow<span>Queue</span> <span class="country">— Perú</span>
      </div>

      <nav class="footer-links">
        <a href="#">Privacidad</a>
        <a href="#">Términos</a>
        <a href="#">Contacto</a>
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
      </nav>

      <div class="footer-copy">
        © {{ currentYear }} <strong>FlowQueue</strong>. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  background: #042C53;
  padding: 3rem 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-brand {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.footer-brand span {
  color: #22c55e;
}

.footer-brand .country {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: 5px;
}


.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  font-size: 0.9rem;
  color: #9fc2e4;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff;
  transform: translateY(-1px);
}


.footer-copy {
  font-size: 0.85rem;
  color: #cbd5e1;
  opacity: 0.8;
}

.footer-copy strong {
  color: #ffffff;
  font-weight: 600;
}

/* RESPONSIVE */
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-brand {
    order: 1;
  }

  .footer-links {
    order: 2;
  }

  .footer-copy {
    order: 3;
  }
}

@media (max-width: 767px) {
  .footer-links {
    gap: 1.2rem;
  }
}
</style>