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

- **Email:** Cualquier email válido
- **Contraseña:** `1234`

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
- Validación de email (requerido)
- Validación de contraseña (debe ser "1234")
- Mensajes de error visuales
- Navegación automática después del login exitoso

### Navegación
- **Tab Home:** Pantalla de bienvenida
- **Tab Perfil:** Muestra el email del usuario logueado

### Estado Global
- Utiliza React Context para compartir datos del usuario
- Manejo de estado con `useState` y `useContext`

## 🎥 Demo de la Aplicación

**[Enlace al video demostrativo](https://youtu.be/TU_ENLACE_AQUI)**

*Próximamente: Video mostrando el funcionamiento completo de la aplicación*

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
