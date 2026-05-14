# Lab 10 — Componentes Multimedia con Web Components

Proyecto que implementa componentes UCR usando **Shadow DOM**, **CSS Scoping**, **Slots**, **CSS Variables** y **CSS Parts**.

---

## Ejecutar el proyecto

```bash
pnpm run dev
```

Abre `http://localhost:1234` en el navegador.

---

## Componentes

### `<banner-ucr>`

Banner con el mensaje "¡La Sede Te Acompaña!".

### `<panel-ucr>`

Panel de navegación con filas y pie de página.

---

## Formas de personalizar los componentes

### 1. Slots (Ranuras HTML)

Los slots permiten **inyectar contenido personalizado** desde el HTML exterior.

#### Banner — Slots disponibles

| Slot          | Contenido por defecto         | Descripción                     |
|---------------|-------------------------------|---------------------------------|
| `sede`        | `La Sede`                     | Texto del bloque principal      |
| `accion`      | `Te`                          | Texto del bloque de acción      |
| `verbo`       | `Acompaña`                    | Verbo grande                    |
| `mensaje`     | `El respeto no se negocia`    | Mensaje inferior                |
| `submensaje`  | `¡Pará ya de acosar!`        | Subtítulo del mensaje           |

**Ejemplo — Cambiar los textos del banner:**

```html
<banner-ucr>
  <span slot="sede">Mi Universidad</span>
  <span slot="accion">Nos</span>
  <span slot="verbo">Inspira</span>
  <span slot="mensaje">La educación transforma vidas</span>
  <span slot="submensaje">¡Únete al cambio!</span>
</banner-ucr>
```

#### Panel — Slots disponibles

| Slot          | Contenido por defecto | Descripción                          |
|---------------|----------------------|--------------------------------------|
| *(default)*   | —                    | Filas del panel (slot por defecto)   |
| `pie`         | `UCR`                | Texto del pie de página              |

**Ejemplo — Cambiar las filas y el pie:**

```html
<panel-ucr>
  <div class="panel-fila">
    <span class="fila-texto">Biblioteca</span>
    <span class="flecha">➔</span>
  </div>
  <div class="panel-fila">
    <span class="fila-texto">Comedor</span>
    <span class="flecha">➔</span>
  </div>
  <span slot="pie">SEDE GUANACASTE</span>
</panel-ucr>
```

---

### 2. CSS Variables (Propiedades personalizadas)

Se pueden redefinir en `styles.css` o directamente en el atributo `style` del elemento.

#### Banner — Variables CSS

| Variable             | Valor por defecto              | Descripción              |
|----------------------|--------------------------------|--------------------------|
| `--banner-bg`        | `#d4a84b`                      | Color de fondo           |
| `--banner-primary`   | `#7b2d8b`                      | Color primario (morado)  |
| `--banner-secondary` | `#00bcd4`                      | Color secundario (cyan)  |
| `--banner-width`     | `420px`                        | Ancho del banner         |
| `--banner-radius`    | `6px`                          | Radio de borde           |
| `--banner-font`      | `'Nunito', sans-serif`         | Tipografía               |

**Ejemplo — Tema oscuro para el banner:**

```css
banner-ucr {
  --banner-bg: #2c3e50;
  --banner-primary: #e74c3c;
  --banner-secondary: #3498db;
  --banner-width: 500px;
}
```

O directamente en el HTML:

```html
<banner-ucr style="--banner-bg: #1a1a2e; --banner-primary: #e94560;"></banner-ucr>
```

#### Panel — Variables CSS

| Variable              | Valor por defecto                | Descripción                   |
|-----------------------|----------------------------------|-------------------------------|
| `--panel-bg-start`    | `#1a3a6b`                        | Inicio del gradiente          |
| `--panel-bg-mid`      | `#0d2654`                        | Medio del gradiente           |
| `--panel-bg-end`      | `#0a1e45`                        | Final del gradiente           |
| `--panel-width`       | `320px`                          | Ancho del panel               |
| `--panel-text-color`  | `#e0e8f5`                        | Color del texto               |
| `--panel-border-color`| `rgba(180, 195, 220, 0.3)`      | Color del borde de filas      |
| `--panel-arrow-color` | `#b0bfd8`                        | Color de las flechas          |
| `--panel-footer-bg`   | `rgba(10, 30, 70, 0.6)`         | Fondo del footer              |
| `--panel-footer-color`| `#b0bfd8`                        | Color del texto del footer    |
| `--panel-radius`      | `8px`                            | Radio de borde                |

**Ejemplo — Panel más ancho con colores distintos:**

```css
panel-ucr {
  --panel-bg-start: #1a1a2e;
  --panel-bg-mid: #16213e;
  --panel-bg-end: #0f3460;
  --panel-width: 400px;
  --panel-footer-color: #e94560;
}
```

---

### 3. CSS Parts (Partes expuestas)

Permiten estilizar elementos internos del Shadow DOM desde CSS externo usando `::part()`.

#### Banner — Parts disponibles

| Part                  | Elemento                           |
|-----------------------|------------------------------------|
| `banner`              | Contenedor principal del banner    |
| `titulo`              | Fila del título (¡La Sede)         |
| `signo-apertura`      | Signo ¡                            |
| `bloque-sede`         | Bloque "La Sede"                   |
| `bloque-accion`       | Bloque "Te"                        |
| `texto-verbo`         | Texto "Acompaña"                   |
| `exclamacion-cuerpo`  | Barra del signo !                  |
| `exclamacion-punto`   | Punto del signo !                  |
| `mensaje`             | Área del mensaje inferior          |

**Ejemplo — Agregar sombra y bordes redondeados al banner:**

```css
banner-ucr::part(banner) {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}

banner-ucr::part(bloque-sede) {
  transform: rotate(0deg);
  border-radius: 8px;
}
```

#### Panel — Parts disponibles

| Part     | Elemento                        |
|----------|---------------------------------|
| `panel`  | Contenedor principal del panel  |
| `filas`  | Contenedor de las filas         |
| `pie`    | Pie de página                   |

**Ejemplo — Cambiar fondo del footer:**

```css
panel-ucr::part(pie) {
  background: linear-gradient(90deg, #e94560, #0f3460);
}

panel-ucr::part(panel) {
  border: 2px solid gold;
}
```

---

## Estructura del proyecto

```
lab10_multimedioss/
├── index.html          ← Página principal con slots
├── styles.css          ← Estilos de página + light DOM
├── src/
│   ├── main.js         ← Importa los componentes
│   └── components/
│       ├── banner-ucr.js  ← Shadow DOM + slots + parts
│       └── panel-ucr.js   ← Shadow DOM + slots + parts
└── package.json
```

## Conceptos aplicados

| Concepto       | Uso en el proyecto                                                |
|----------------|-------------------------------------------------------------------|
| **Shadow DOM**  | Cada componente encapsula su HTML y CSS internamente             |
| **CSS Scoping** | Los estilos internos no afectan al DOM externo y viceversa       |
| **Slots**       | Permiten inyectar contenido externo en los componentes           |
| **CSS Variables**| Permiten cambiar colores, tamaños y fuentes sin tocar el JS     |
| **CSS Parts**   | Exponen elementos internos para estilizar con `::part()` externo |
