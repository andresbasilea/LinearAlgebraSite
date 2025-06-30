
### Estructura de grupo

  Sea $A$ un conjunto no vacío y sea $*$ una operación binaria definida en $A$. Se dice que el sistema $(A, \ast)$ tiene estructura de grupo si se cumplen los siguientes axiomas: 

  - **1) Cerradura:** $\forall a, b \in A$ $(a \ast b) \in A$ 
  - **2) Asociatividad:** $\forall a, b, c \in A$ $a \ast (b \ast c) = (a \ast b) \ast c$ 
  - **3) Existencia del elemento idéntico:** $\forall a \in A; \exists e \in A \mid a \ast e = e \ast a = a$ 
  - **4) Existencia de elementos inversos:** $\forall a \in A; \exists i \in A \mid a \ast i = i \ast a = e$ 
  
  Si alguno de los axiomas no se cumple, entonces el sistema $(A, \ast)$ no tendrá estructura de grupo.

### Propiedades de los grupos 
Sea $(A, \ast)$ un grupo 
- **1) Cancelación:** $\forall a, b, c \in A$ si $a \ast b = a \ast c \implies b = c$ si $b \ast a = c \ast a \implies b = c$ 
- **2)** Si $e$ es idéntico izquierdo para $\ast$, entonces $e$ es el idéntico del grupo. 
- **3)** El elemento idéntico de un grupo es único. 
- **4)** Si $a^{-1}$ es el inverso izquierdo de $a \in A$, entonces $a^{-1}$ es el inverso de $a$. 
- **5)** El elemento inverso de cada elemento de $A$ es único. 
- **6)** Si $a^{-1}$ es el inverso de $a \in A$, entonces $(a^{-1})^{-1} = a$. 
- **7)** Si $a, b \in A$, entonces $(a \ast b)^{-1} = b^{-1} \ast a^{-1}$ 
- **8)** Si $a_1, a_2, \dots, a_n \in A$, entonces: $(a_1 \ast a_2 \ast \dots \ast a_n)^{-1} = a_n^{-1} \ast \dots \ast a_2^{-1} \ast a_1^{-1}$ 
- **9)** Si $a, b \in A$, entonces cada una de las ecuaciones: $a \ast x = b$ $y \ast a = b$ tiene solución única, donde $x, y \in A$.


### Ejemplo de animación de grupo
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="threed_example.html">
    </iframe>
</div>



### Estructura de grupo

  Sea $A$ un conjunto no vacío y sea $*$ una operación binaria definida en $A$. Se dice que el sistema $(A, \ast)$ tiene estructura de grupo si se cumplen los siguientes axiomas: 

  - **1) Cerradura:** $\forall a, b \in A$ $(a \ast b) \in A$ 
  - **2) Asociatividad:** $\forall a, b, c \in A$ $a \ast (b \ast c) = (a \ast b) \ast c$ 
  - **3) Existencia del elemento idéntico:** $\forall a \in A; \exists e \in A \mid a \ast e = e \ast a = a$ 
  - **4) Existencia de elementos inversos:** $\forall a \in A; \exists i \in A \mid a \ast i = i \ast a = e$ 
  
  Si alguno de los axiomas no se cumple, entonces el sistema $(A, \ast)$ no tendrá estructura de grupo.




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