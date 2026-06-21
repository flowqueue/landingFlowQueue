# FlowQueue Landing

Landing bilingüe de FlowQueue, una propuesta de gestión de colas virtuales para instituciones públicas.

## Desarrollo

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

## Captura de solicitudes

Por defecto, el formulario prepara un correo dirigido a `contacto@flowqueue.pe`. Para conectarlo a una API, crea un archivo `.env.local`:

```env
VITE_LEAD_ENDPOINT=https://tu-api.example.com/leads
```

El endpoint debe aceptar una solicitud `POST` con JSON.
