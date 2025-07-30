---

---

### Operación binaria
Una operación binaria definida en un conjunto no vacío $A$, es una regla o criterio que asigna a cada par ordenado de elementos de $A$, un único elemento llamado resultado, que puede o no pertenecer al mismo conjunto $A$. 

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


#### Evariste Galois
>Ya hablamos un poco sobre Galois y su vida en [[Introducción al álgebra lineal]].
>![[Pasted image 20250719194424.png]]


#### Niels Henrik Abel
>Otro de los grandes matemáticos que impulsaron la teoría de grupos. 
>
>![[Pasted image 20250630183858.png]]


<br>
<br>

## Ejercicios

>[!interesante] **Ejercicio 1**
>Determina si el sistema $(F, *)$ tiene estructura de grupo, donde: 
>
>El conjunto dado es $F = \{a+\sqrt{2} \mid a \in \mathbb{R}\}$ y la operación binaria $*$ está definida por $(a+\sqrt{2}) * (b+\sqrt{2}) = (a+b)+\sqrt{2}$.

##### Solución
Determinemos si la operación binaria $*$ cumple con los cuatro axiomas de grupo.


1. **Cerradura**
	
	$$
	\forall a+\sqrt{2}, b+\sqrt{2} \in F
	$$
	$$
	(a+\sqrt{2}) * (b+\sqrt{2}) = (a+b)+\sqrt{2} \in F
	$$
	dado que $(a+b) \in \mathbb{R}$.
	$\newline \therefore$ cumple


<br>

2. **Asociatividad**
	$$
	\forall a+\sqrt{2}, \, b+\sqrt{2}, \, c+\sqrt{2} \,\in F 
	$$
	$$ 
	[(a+\sqrt{2}) * (b+\sqrt{2})] * (c+\sqrt{2}) = (a+\sqrt{2}) * [(b+\sqrt{2}) * (c+\sqrt{2})] 
	$$
	aplicando $*$ dentro de los corchetes, tenemos:
	$$ 
	(a+b+\sqrt{2}) * (c+\sqrt{2}) = (a+\sqrt{2}) * (b+c+\sqrt{2}) 
	$$
	$$ 
	(a+b+c)+\sqrt{2} = (a+b+c)+\sqrt{2} 
	$$
	$\therefore$ cumple


<br>

3. **Existencia del elemento idéntico**
	$$
	\forall \;a+\sqrt{2} \in F; \; \exists \; e+\sqrt{2} \in F \mid (a+\sqrt{2})*(e+\sqrt{2}) = (e+\sqrt{2})*(a+\sqrt{2}) = a+\sqrt{2}
	$$
	
	Dado que no se sabe si la operación $*$ es conmutativa, entonces se tienen que obtener los elementos idénticos derecho e izquierdo y si ambos existen y son iguales, entonces se podrá concluir que el elemento idéntico existe.
	
	Idéntico derecho:
	$$ 
	(a+\sqrt{2}) * (e+\sqrt{2}) = a+\sqrt{2} 
	$$
	$$
	(a+e)+\sqrt{2} = a+\sqrt{2}
	$$
	La igualdad se cumple si $e=0$, por lo que el idéntico derecho es:
	$$ 
	e+\sqrt{2} = 0+\sqrt{2} \in F \quad \therefore \text{existe} 
	$$
	
	Idéntico izquierdo:
	$$ 
	(e+\sqrt{2}) * (a+\sqrt{2}) = a+\sqrt{2} 
	$$
	$$ 
	(e+a)+\sqrt{2} = a+\sqrt{2} \implies e=0 
	$$
	de donde, el idéntico izquierdo es:
	$$
	 e+\sqrt{2} = 0+\sqrt{2} \in F \quad \therefore \text{existe} 
	 $$
	
	Dado que ambos elementos idénticos existen y son iguales, entonces podemos concluir que el elemento idéntico existe en el conjunto $F$ y es igual a $0+\sqrt{2}$.


<br>


4. **Existencia de elementos inversos**

	De igual forma al caso del elemento idéntico, para el caso de los elementos inversos, se tienen también inversos izquierdos y derechos, si ambos existen y son iguales, entonces podemos concluir que los elementos inversos existen en el conjunto $F$.
	
	Inversos izquierdos:
	$$ 
	(i+\sqrt{2}) * (a+\sqrt{2}) = e+\sqrt{2}
	 $$
	$$
	 (i+a)+\sqrt{2} = 0+\sqrt{2} 
	 $$
	Para que la igualdad se cumpla $i=-a$, con lo cual el inverso izquierdo es de la forma:
	$$ 
	i+\sqrt{2} = -a+\sqrt{2} \in F \quad \therefore \text{existe} 
	$$
	
	Inversos derechos:
	$$ 
	(a+\sqrt{2}) * (i+\sqrt{2}) = e+\sqrt{2} 
	$$
	$$ 
	(a+i)+\sqrt{2} = 0+\sqrt{2} 
	$$
	De donde $i=-a$ para que la igualdad se cumpla, por lo que el inverso derecho es de la forma:
	$$ 
	i+\sqrt{2} = -a+\sqrt{2} \in F \quad \therefore \text{existe} 
	$$
	
	Como ambos elementos inversos existen y son iguales, entonces podemos concluir que los elementos inversos existen en el conjunto $F$ y son de la forma $-a+\sqrt{2}$.


**Dado que se cumplieron los cuatro axiomas, entonces podemos afirmar que el sistema $(F, *)$ tiene estructura de grupo.**




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