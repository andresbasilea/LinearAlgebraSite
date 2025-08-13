---

---

### Operación binaria
Una operación binaria definida en un conjunto no vacío $A$, es una regla o criterio que asigna a cada par ordenado de elementos de $A$, un único elemento llamado resultado, que puede o no pertenecer al mismo conjunto $A$. 

![[Pasted image 20250803191150.png]]

Las operaciones binarias son la piedra angular de la mayoría de las estructuras que se estudian en álgebra, en particular en semigrupos, monoides, **grupos**, anillos, **campos** y **espacios vectoriales**.

Por ejemplo, algunas operaciones binarias en conjuntos de números que ya conocen: 

![[Screenshot 2025-08-03 at 7.15.12 p.m..png]]

Y algunos ejemplos de símbolos utilizados para representar una operación binaria: 

![[Pasted image 20250803192147.png]]

>[!info] Los símbolos utilizados para las operaciones binarias
>Los símbolos utilizados para las operaciones binarias generalmente siguen una convención. Por ejemplo, el símbolo *+* suele representar la suma en el conjunto de los números reales. Esta convención es ampliamente aceptada por matemáticos, ingenieros y otros profesionales. Sin embargo, se podría definir una operación binaria diferente, como $a+b=a^2.$
>En este curso, veremos que la operación binaria puede definirse de manera particular para cada grupo o aplicación que se estudie.


#### Ejercicio de Operación Binaria 

Sea el sistema $(A, *)$, donde $A = \{(a, b) \mid a, b \in \mathbb{R}\}$ y la operación binaria definida como
$$
(a, b) * (c, d) = (ac, bd)
$$
obtener el elemento idéntico.

**Solución:**

Para encontrar el elemento idéntico, denotado por $(e_1, e_2)$, se debe cumplir que para cualquier $(a, b) \in A$:
$$
(a, b) * (e_1, e_2) = (a, b)
$$

Sustituyendo la definición de la operación, obtenemos:
$$
(a \cdot e_1, b \cdot e_2) = (a, b)
$$

Para que la igualdad de pares ordenados se cumpla, sus componentes deben ser iguales. Esto nos lleva al siguiente sistema de ecuaciones:
$$a \cdot e_1 = a \; y \; b \cdot e_2 = b$$

De la primera ecuación, si $a \ne 0$, podemos dividir entre $a$ para obtener $e_1 = 1$. Dado que el elemento idéntico debe funcionar para todos los valores de $a \in \mathbb{R}$, y la ecuación $0 \cdot e_1 = 0$ es cierta para cualquier $e_1$, el valor que satisface a todos los casos es $e_1 = 1$.

De la segunda ecuación, si $b \ne 0$, podemos dividir entre $b$ para obtener $e_2 = 1$. De manera similar, el valor que satisface la ecuación para todos los valores de $b \in \mathbb{R}$ es $e_2 = 1$.

Por lo tanto, el elemento idéntico del sistema es $(1, 1)$.

>[!interesante] Nota sobre el ejercicio: 
>Al estar obteniendo el elemento idéntico para una operación binaria que desconocemos si es conmutativa, deberíamos de primero obtener el elemento idéntico derecho (como en el ejercicio) y después hacer el mismo procedimiento para el elemento idéntico izquierdo. En caso de ser iguales, decimos que (1,1) es el elemento idéntico del sistema. 




### Estructura de grupo

  Sea $A$ un conjunto no vacío y sea $*$ una operación binaria definida en $A$. Se dice que el sistema $(A, \ast)$ tiene estructura de grupo si se cumplen los siguientes axiomas: 

  - **1) Cerradura:** $\forall a, b \in A ;$ $(a \ast b) \in A$ 
  - **2) Asociatividad:** $\forall a, b, c \in A ;$ $a \ast (b \ast c) = (a \ast b) \ast c$ 
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