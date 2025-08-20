---

---

![[Pasted image 20250812221234.png]]
### Estructura de Campo (también llamado Cuerpo)

Sea $A$ un conjunto de por lo menos dos elementos y sean $*$ y $\square$ dos operaciones binarias definidas en $A$. El sistema $(A, *, \square)$ tiene estructura de campo si se cumple que:

1. **Cerradura:** <br>
    $\forall \,a, b \in A \newline$
    $(a * b) \in A \newline$
<br>
2. **Asociatividad:<br>**
    $\forall \, a, b, c \in A \newline$
    $a * (b * c) = (a * b) * c \newline$
<br>
3. **Conmutatividad:<br>**
    $\forall \, a, b \in A \newline$
    $a * b = b * a \newline$
<br>
4. **Existencia del elemento idéntico:<br>**
    $\forall \, a \in A \quad ; \quad \exists \, e \in A \quad | \quad a * e = e * a = a \newline$
<br>
5. **Existencia de elementos inversos:<br>**
    $\forall \, a \in A \quad ; \quad \exists \, i \in A \quad | \quad a * i = i * a = e \newline$
<br>
6. **Cerradura:<br>**
    $\forall \, a, b \in A \newline$
    $(a \, \square \, b) \in A \newline$
<br>
7. **Asociatividad:<br>**
    $\forall \, a, b, c \in A \newline$
    $a \, \square \, (b \, \square \, c) = (a \, \square \, b) \, \square \, c \newline$
<br>
8. **Conmutatividad:<br>**
    $\forall \, a, b \in A \newline$
    $a \, \square \, b = b \, \square \, a \newline$
<br>
9. **Existencia del elemento idéntico:<br>**
    $\forall \, a \in A \quad ; \quad \exists \, E \in A \quad | \quad a \, \square \, E = E \, \square \, a = a \newline$
<br>
10. **Existencia de elementos inversos:<br>**
    $\forall \, a \in A \text{ con } a \neq e \quad ; \quad \exists \, I \in A \quad | \quad a \, \square \, I = I \, \square \, a = E \newline$
<br>
11. **Distributividad:<br>**
    $\forall \, a, b, c \in A \newline$
    $a \, \square \, (b * c) = (a \, \square \, b) * (a \, \square \, c) \newline$


### O, lo que es lo mismo: 
Sea $A$ un conjunto de por lo menos dos elementos y sean $*$ y $\square$ dos operaciones binarias definidas en $A$. El sistema $(A, *, \square)$ tiene estructura de campo si se cumple que:

- $(A, *)$ es un grupo abeliano, donde el elemento idéntico lo representamos con $e$ y recibe el nombre de "cero" del campo.
-  $(A, \square)$ cumple con los cinco axiomas de grupo abeliano, donde deben existir inversos para todos los elementos del conjunto excepto para el "cero" de campo.
- Al elemento idéntico de la segunda operación se le conoce como la "unidad" del campo.
- La operación $\square$ es distributiva sobre $*$.
- La primera operación se conoce como **adición** y la segunda como **multiplicación**.


### Algunos ejemplos de campos
- El conjunto de los números reales $\mathbb{R}$, con las operaciones usuales de adición y multiplicación definidas en $\mathbb{R}$.
	- ($\mathbb{R}$, +, \*)
- El conjunto de los números complejos $\mathbb{C}$ , con las operaciones usuales de adición y de multiplicación definidas en $\mathbb{C}$
	-  ($\mathbb{C}$, +, \*)
- El conjunto de los números racionales $\mathbb{Q}$, con las operaciones usuales de adición y de multiplicación definidas en $\mathbb{Q}$
	-  ($\mathbb{Q}$, +, \*)



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