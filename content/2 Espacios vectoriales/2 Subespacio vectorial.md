
### ¿Qué es un subespacio vectorial?

Un **subespacio vectorial** es un subconjunto de un espacio vectorial más grande que, por sí mismo, cumple con todas las reglas para ser un espacio vectorial.

En otras palabras, es un "espacio" que vive dentro de otro espacio. La clave es que este subconjunto no solo contiene vectores, sino que también es "cerrado" bajo las operaciones de suma y multiplicación por un escalar.

Para que un subconjunto $W$ de un espacio vectorial $V$ sea considerado un subespacio vectorial, solo necesita cumplir tres condiciones:

1. **El vector cero está en $W$:** El subconjunto $W$ debe contener el vector cero del espacio vectorial $V$. Esto garantiza que no es un conjunto vacío.
    
2. **Cerradura bajo la suma:** Si tomas dos vectores cualesquiera de $W$ y los sumas, el vector resultante debe pertenecer también a $W$.$
    
3. **Cerradura bajo la multiplicación por un escalar:** Si tomas cualquier vector de $W$ y lo multiplicas por cualquier escalar, el vector resultante debe pertenecer también a $W$.

##### Ejemplo

Imagina el plano 2D (R2) como tu espacio vectorial. Una línea recta que pasa por el origen (0,0) es un subespacio vectorial.

- Contiene al vector cero (0,0).
    
- Si sumas dos vectores que están en esa línea, el resultado sigue estando en la misma línea.
    
- Si estiras o encoges un vector de esa línea (lo multiplicas por un escalar), sigue estando en la misma línea.

### Definición formal

Sea $W$ un subconjunto de un espacio vectorial $V$. Si $W$ es a su vez un espacio vectorial con respecto a las operaciones de adición y multiplicación definidas en $V$, se dice entonces que $W$ es un subespacio de $V$.

### Condiciones a cumplir para considerarse subespacio
Sea $V$ un espacio vectorial sobre un campop $K$. Si $W$ es un subconjunto no vacío de $V$, entonces $W$ será un subespacio de $V$, si y sólo si, se cumplen las condiciones siguientes: 
- $\forall \; \vec{u}, \vec{v} \in W,\, \color{purple} (\vec{u} + \vec{v}) \in W$
- $\forall \; \vec{u} \in W \; y \; \forall \; \alpha \in K, \; \color{purple} (\alpha \vec{u})\in W$





<script src="https://giscus.app/client.js"
        data-repo="andresbasilea/LinearAlgebraSite"
        data-repo-id="R_kgDOO-oDkA"
        data-category="Announcements"
        data-category-id="DIC_kwDOO-oDkM4CsOaa"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="noborder_light"
        data-lang="es"
        crossorigin="anonymous"
        async>
</script>