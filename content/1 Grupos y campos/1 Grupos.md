---

---

### Operación binaria
Una operación binaria definida en un conjunto no vacío $A$, es una regla o criterio que asigna a cada par ordenado de elementos de $A$, un único elemento llamado resultado, que puede o no pertenecer al mismo conjunto $A$. 


### ¿Qué se considera un grupo y por qué se comenzaron a estudiar?

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

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
- **9)** Si $a, b \in A$, entonces cada una de las ecuaciones: 
	- $a \ast x = b$
	- $y \ast a = b$ 
- tiene solución única, donde $x, y \in A$.

### Grupo abeliano
Un sistema $(A,*)$ tiene estructura de grupo abeliano si se cumplen los siguientes axiomas: 
1. Cerradura
2. Asociatividad
3. Elemento idéntico
4. Elemento inverso
5. Conmutatividad

>[!interesante] Niels Henrik Abel
>![[Pasted image 20250630183858.png | right]]
>
>Un grupo abeliano, como lo estudiamos en clase, es isomorfo al grupo (2,2) representado por el siguiente grafo.
![[Pasted image 20250630183553.png]]
>



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
        data-theme="light"
        data-lang="es"
        crossorigin="anonymous"
        async>
</script>