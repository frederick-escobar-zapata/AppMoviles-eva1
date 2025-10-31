# 📱 Aplicación de Login - React Native con TypeScript

Esta es una aplicación de login desarrollada con **React Native**, **Expo** y **TypeScript** que implementa autenticación básica y navegación por tabs.

## 🚀 Características

- ✅ **Pantalla de Login** con validación de credenciales
- ✅ **Navegación con Expo Router** 
- ✅ **TypeScript** para tipado estático
- ✅ **Manejo de estado** con React Context
- ✅ **Tabs de navegación** (Home y Perfil)
- ✅ **Funciona en web y móvil**

## 🔐 Credenciales de Acceso

- **Email:** Cualquier email esto no esta válidado
- **Contraseña:** `1234` solo con esta contraseña

## 📁 Estructura del Proyecto

```
app/
├── _layout.tsx          # Layout principal
├── index.tsx            # Pantalla de Login
└── (tabs)/              # Grupo de tabs
    ├── _layout.tsx      # Layout de tabs
    ├── home.tsx         # Pantalla principal
    └── profile.tsx      # Pantalla de perfil
contexts/
└── UserContext.tsx      # Context para manejo de estado
```

## 🛠️ Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npx expo start
   ```

3. **Abrir la aplicación:**
   - Escanea el código QR con Expo Go (móvil)
   - Presiona `w` para abrir en navegador web
   - Presiona `a` para abrir en emulador Android
   - Presiona `i` para abrir en simulador iOS

## 📱 Funcionalidades

### Login
- Validación de email (NO requerido)
- Validación de contraseña (debe ser "1234")
- Mensajes de error visuales
- Navegación automática después del login exitoso
- Manejo de estados entre vistas

### Navegación
- **Tab Home:** Pantalla de bienvenida,  con usuario logueado
- **Tab Perfil:** Muestra el email del usuario logueado

### Estado Global
- Utiliza React Context para compartir datos del usuario
- Manejo de estado con `useState` y `useContext`

## 🎥 Demo de la Aplicación

**[📺 Ver demostración en navegador](https://youtu.be/l9SIKcMTq68)**
**[📺 Ver demostración en telefono](https://youtube.com/shorts/-A1yolJuOPI)**

*Demostración de la aplicación de login funcionando en el navegador*

## 📦 Repositorio

**[🔗 Repositorio GitHub](https://github.com/frederick-escobar-zapata/AppMoviles-eva1)**

*Código fuente completo del proyecto*

## 🧰 Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **Expo** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **Expo Router** - Navegación file-based
- **React Context** - Manejo de estado global

## 👨‍💻 Desarrollado por

**Frederick Escobar**
- Evaluación 1 - Desarrollo de Aplicaciones Móviles
- 3er Trimestre 2025

---

*Proyecto académico desarrollado con fines educativos*
