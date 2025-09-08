
### Definición formal 
Sean $U$ y $V$ dos espacios vectoriales de dimensión finita, definidos sobre un campo $K$. Se dice que la función $f: U \to V$ es un isomorfismo de $U$ a $V$, si **$f$ es biyectiva** y además cumple con las condiciones siguientes:
-  $f(\bar{u}_1 + \bar{u}_2) = f(\bar{u}_1) + f(\bar{u}_2) \quad ; \quad \forall \, \bar{u}_1 \text{ y } \bar{u}_2 \in U$   (superposición)
-  $f(\alpha \bar{u}) = \alpha f(\bar{u}) \quad ; \quad \forall \, \bar{u} \in U \text{ y } \forall \, \alpha \in K$    (homogeneidad)

Los espacios vectoriales isomorfos solo difieren en la naturaleza de sus elementos, sus propiedades algebraicas son idénticas.

### Teoremas

- Si $V$ es un espacio vectorial real de dimensión $n$, entonces $V$ es isomorfo a $\mathbb{R}^n$.
- Todo espacio vectorial es isomorfo a sí mismo
- Si un espacio vectorial $V$ es isomorfo a otro espacio $W$, entonces $W$ es isomorfo a $V$. 
- Si un espacio vectorial $U$ es isomorfo a un espacio $V$ y $V$ es a su vez isomorfo a un espacio $W$, entonces $U$ es isomorfo a $W$. 
- Dos espacios vectoriales de igual dimensión son isomorfos. 



#### Ejercicio 1

Verificar si $f:Q \rightarrow R^2$  es un isomorfismo, donde 
$$
f(ax^2 +bx + (2a +6b)) = (a,b)
$$
y se encuentra definido sobre el campo de los reales. 


1) $\forall a_1 x^2+b_1 x+(2a_1+6b_1) \ , \ a_2 x^2+b_2 x+(2a_2+6b_2) \in Q$

$$
f(\vec{u}_1+\vec{u}_2) = f(\vec{u}_1) + f(\vec{u}_2)
$$
$$
f\left[ \left( a_1 x^2+b_1 x+(2a_1+6b_1) \right) + \left( a_2 x^2+b_2 x+(2a_2+6b_2) \right) \right] = f\left[ a_1 x^2+b_1 x+(2a_1+6b_1) \right] + f\left[ a_2 x^2+b_2 x+(2a_2+6b_2) \right]
$$

Sumando del lado izquierdo de la igualdad y aplicando f del lado derecho, tenemos:
$$
f\left[ (a_1+a_2)x^2 + (b_1+b_2)x + 2(a_1+a_2) + 6(b_1+b_2) \right] = (a_1,b_1) + (a_2,b_2)
$$
Aplicando f del lado izquierdo y sumando del lado derecho, tenemos:
$$
(a_1+a_2, b_1+b_2) = (a_1+a_2, b_1+b_2)
$$


2) $\forall ax^2+bx+(2a+6b) \in Q \quad y \quad \forall \alpha \in \mathbb{R}$
$$
f(\alpha\vec{u}) = \alpha f(\vec{u})
$$
$$
f\left[ \alpha\left(ax^2+bx+(2a+6b)\right) \right] = \alpha f\left[ ax^2+bx+(2a+6b) \right]
$$
de donde:
$$
f\left[ \alpha ax^2+\alpha bx+(2\alpha a+6\alpha b) \right] = \alpha(a,b)
$$
$$
(\alpha a, \alpha b) = (\alpha a, \alpha b)
$$
$$
\therefore \text{ cumple}
$$
Dado que $f$ es **biyectiva**, entonces $f$ establece un isomorfismo entre los espacios $Q$ y $\mathbb{R}^2$.

#### Ejercicio 2

Verificar si $h: M_{2\times2} \rightarrow \mathbb{R}^2$ tal que: 

$h\begin{pmatrix} a & b \\ a+b & 2a \end{pmatrix} = (a,b) \; \forall a,b \in \mathbb{R}$

es un isomorfismo sobre $\mathbb{R}$.

##### Solución: 

¿Es biyectiva? Sí. Se observa fácilmente que a cualquier matriz 2x2 de la forma indicada, le corresponderá un único vector $R^2$ y viceversa. 

###### Verificando superposición

$$ 
h(\bar{u}_1 + \bar{u}_2) = h(\bar{u}_1) + h(\bar{u}_2); \quad \forall \bar{u}_1, \bar{u}_2 \in Q
$$
$$
\bar{u}_1 = \begin{pmatrix} a_1 & b_1 \\ a_1+b_1 & 2a_1 \end{pmatrix} 
$$

$$
\bar{u}_2 = \begin{pmatrix} a_2 & b_2 \\ a_2+b_2 & 2a_2 \end{pmatrix} 
$$

**Lado Izq.**

$$
h(\bar{u}_1 + \bar{u}_2) = h\left(\begin{pmatrix} a_1 & b_1 \\ a_1+b_1 & 2a_1 \end{pmatrix} + \begin{pmatrix} a_2 & b_2 \\ a_2+b_2 & 2a_2 \end{pmatrix}\right)
$$
$$
= h\begin{pmatrix} a_1+a_2 & b_1+b_2 \\ a_1+a_2+b_1+b_2 & 2(a_1+a_2) \end{pmatrix}
$$
$$
= (a_1+a_2, b_1+b_2)
$$


**Lado Der.**

$$
h(\bar{u}_1) + h(\bar{u}_2)
$$

$$
= h\begin{pmatrix} a_1 & b_1 \\ a_1+b_1 & 2a_1 \end{pmatrix} + h\begin{pmatrix} a_2 & b_2 \\ a_2+b_2 & 2a_2 \end{pmatrix}
$$

$$
= (a_1, b_1) + (a_2, b_2)
$$

$$
= (a_1+a_2, b_1+b_2) \quad \checkmark
$$
Por lo tanto cumple superposición. 

###### Verificando homogeneidad


 $$
 h(\alpha\bar{u}) = \alpha h(\bar{u}); \; \forall \; \bar{u} \in M_{2\times2}, \forall \alpha \in \mathbb{R}
 $$
 

$$ 
h(\alpha\bar{u}) = h\left(\alpha\begin{pmatrix} a & b \\ a+b & 2a \end{pmatrix}\right) = h\begin{pmatrix} \alpha a & \alpha b \\ \alpha(a+b) & 2\alpha a \end{pmatrix}
$$

$$ 
= (\alpha a, \alpha b) \checkmark 
$$

$$
\alpha h(\bar{u}) = \alpha h\begin{pmatrix} a & b \\ a+b & 2a \end{pmatrix}
$$
$$ 
= \alpha(a,b) = (\alpha a, \alpha b) \checkmark 
$$

Por lo tanto cumple homogeneidad. 

**Dado que se cumple que es una función biyectiva, cumple superposición y homogeneidad, podemos concluir que  $h: M_{2\times2} \rightarrow \mathbb{R}^2$  es un isomorfismo.** 

#### Ejercicio 3

Verificar si $f: M_{2\times2} \rightarrow \mathbb{R}^2$ tal que:
$$f\begin{pmatrix} a & b \\ a+b & c \end{pmatrix} = (a, b), \quad \forall a,b \in \mathbb{R}$$
es un isomorfismo.




>[!interesante]Algunos ejemplos de isomorfismos comunes: 
> - El espacio de polinomios de grado menor o igual a $n$, $P_n(\mathbb{R})$, es isomorfo a $\mathbb{R}^{n+1}$. Por ejemplo, el isomorfismo entre $P_2(\mathbb{R})$ y $\mathbb{R}^3$ mapea el polinomio $ax^2+bx+c$ al vector de coeficientes $(a,b,c)$.
>
> - El espacio de matrices de $m \times n$, $M_{m\times n}(\mathbb{R})$, es isomorfo a $\mathbb{R}^{mn}$. Por ejemplo, el isomorfismo entre $M_{2\times2}(\mathbb{R})$ y $\mathbb{R}^4$ mapea la matriz $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ al vector $(a,b,c,d)$.
>
> - Otro ejemplo de isomorfismo no tan común podría ser, para el siguiente conjunto $A = \{xe^x, e^x, xe^x+e^x, -3e^x\}$ representar a los vectores con un isomorfismo a $R^2$ de la siguiente forma: $A=\{(1,0),(0,1), (1,1), (0,-3)\}$










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