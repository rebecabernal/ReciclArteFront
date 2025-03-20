# ♻️ ReciclArte - Frontend  

## 📖 Descripción  
**ReciclArte** es una plataforma web donde los usuarios pueden donar artículos que ya no necesitan, promoviendo la **economía circular**.  

Este repositorio contiene el **frontend** del proyecto, desarrollado con **React.js**.

---

## 🛠️ Tecnologías utilizadas  
- **React.js**  
- **JavaScript**  
- **HTML & CSS**  
---

## 🚀 Cómo ejecutar el proyecto  
### 1️⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/rebecabernal/ReciclArteFront.git
cd ReciclArteFront
```
  
### 2️⃣ **Instalar dependencias**
Ejecutar el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```

### 3️⃣ **Iniciar el servidor de desarrollo**
Para ejecutar la aplicación en modo desarrollo, usa:
```bash
npm run dev
```
Luego, abre http://localhost:5173 en tu navegador para ver la aplicación en funcionamiento.
---

⚙️ Funciones principales
✔️ Explorar artículos: los usuarios pueden ver una lista de artículos disponibles para donar.
✔️ Publicar un artículo: los usuarios pueden subir productos con nombre, descripción, imágenes y ubicación.
✔️ Gestionar artículos: editar y eliminar artículos publicados.
✔️ Reservar artículos: los interesados pueden marcar un artículo como reservado.
✔️ Autenticación: Inicio de sesión y registro de usuarios.

---
## 📂 **Estructura del proyecto**  
```plaintext
ReciclArteFront/
│── node_modules/          # Dependencias de npm  
│── public/                # Archivos estáticos  
│── src/                   # Código fuente  
│   │── application/       # Configuración de rutas  
│   │   ├── Router.jsx  
│   │── assets/            # Recursos estáticos  
│   │   ├── images/        # Imágenes  
│   │   │   ├── logo.png  
│   │── components/        # Componentes reutilizables  
│   │   ├── cardContainer/  
│   │   │   ├── CardContainer.jsx  
│   │   │   ├── cardContainer.css  
│   │   ├── footer/  
│   │   │   ├── Footer.jsx  
│   │   │   ├── footer.css  
│   │   ├── header/  
│   │   │   ├── Header.jsx  
│   │   │   ├── header.css  
│   │   ├── img_favorites/  
│   │   │   ├── img_favorites.jsx  
│   │   │   ├── img_favorites.css  
│   │   ├── login/  
│   │   │   ├── Login.jsx  
│   │   │   ├── login.css  
│   │   ├── mainButton/  
│   │   │   ├── MainButton.jsx  
│   │   │   ├── mainButton.css  
│   │   ├── navbar/  
│   │   │   ├── Navbar.jsx  
│   │   │   ├── navbar.css  
│   │   ├── register/  
│   │   │   ├── Register.jsx  
│   │   │   ├── register.css  
│   │── context/           # Contexto global  
│   │   ├── AuthContext.jsx  
│   │── pages/             # Páginas principales  
│   │   ├── favorites/  
│   │   │   ├── favorites.jsx  
│   │   │   ├── favorites.css  
│   │   ├── homepage/  
│   │   │   ├── Homepage.jsx  
│   │   │   ├── Homepage.css  
│   │   ├── Loginpage/  
│   │   │   ├── Loginpage.jsx  
│   │   │   ├── Loginpage.css  
│   │   ├── notifications/  
│   │   │   ├── Notifications.jsx  
│   │   │   ├── Notifications.css  
│   │   ├── product-register/  
│   │   │   ├── ProductRegister.jsx  
│   │   │   ├── ProductRegister.css  
│   │   ├── products/  
│   │   │   ├── ProductsPage.jsx  
│   │   │   ├── ProductsPage.css  
│   │   ├── registerpage/  
│   │   │   ├── RegisterPage.jsx  
│   │   │   ├── RegisterPage.css  
│   │── services/          # Servicios de API y autenticación  
│   │   ├── ApiService.jsx  
│   │   ├── AuthService.jsx  
│   │── App.jsx            # Componente principal  
│   │── main.jsx           # Punto de entrada de la app  
│── .gitignore  
│── eslint.config.js  
│── index.html  
│── package.json  
│── package-lock.json  
│── README.md  
│── vite.config.js         # Configuración de Vite  
```
---
### 🔗 Información adicional  
🎨 **Código fuente:** [ReciclArte Frontend](https://github.com/rebecabernal/ReciclArteFront)  
📂 **Código fuente Backtend:** [ReciclArte Backend](https://github.com/Paola077/reciclArte_backend)  

### 👥 **Equipo de Desarrollo**  

#### 🎨 Frontend (FE)  
- **Priscila Guillen** - [pguillen.oliv@gmail.com](mailto:pguillen.oliv@gmail.com)  
- **Ana Castro** - [cuyssi@hotmail.com](mailto:cuyssi@hotmail.com)  
- **Rebeca Bernal** - [rebecabernalmesa@gmail.com](mailto:rebecabernalmesa@gmail.com)  
#### 📂 Backend (BE)  
- **Paola Perdomo** - [paolaperdomo079@gmail.com](mailto:paolaperdomo079@gmail.com)  
- **Jesús Enjamio Barcena** - [jenjamiob@gmail.com](mailto:jenjamiob@gmail.com)  
- **Grigory Vladimiro** - [grigori.vladimiro@gmail.com](mailto:grigori.vladimiro@gmail.com)  
