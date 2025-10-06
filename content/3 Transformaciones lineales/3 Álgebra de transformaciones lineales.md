
## Álgebra de transformaciones lineales
### Adición y multiplicación por un escalar

Sean $V$ y $W$ dos espacios vectoriales definidos sobre un campo $K$, y sean $T: V \rightarrow W$ y $H: V \rightarrow W$ dos transformaciones lineales. 
1. La suma $T+H$ de $T$ y $H$ es una transformación lineal de $V$ en $W$ definida por: 

$$ 
(T+H)(\vec{v}) = T(\vec{v}) + H(\vec{v}) \quad ; \quad \forall \, \vec{v} \in V 
$$
2. El producto de un escalar $\alpha \in K$ por la transformación $T$ es una transformación lineal de $V$ en $W$ que se denota con $\alpha T$ y se define como: 
$$
(\alpha T)(\vec{v}) = \alpha T(\vec{v}) \quad ; \quad \forall \, \vec{v} \in V
$$
### Composición

3. Sean $T: U \rightarrow V$ y $H: V \rightarrow W$ dos transformaciones lineales. La operación $H \circ T$ es una transformación lineal de $U$ en $W$ definida por: 

$$
(H \circ T)(\vec{u}) = H[T(\vec{u})] \quad ; \quad \forall \, \vec{u} \in U 
$$

La operación composición puede representarse gráficamente de la siguiente forma:
	![[Screenshot 2025-07-01 at 11.07.38 a.m..png]]


## Propiedades de la adición y multiplicación por un escalar

Sean $V$ y $W$ dos espacios vectoriales sobre un campo $K$ y sean las transformaciones lineales: 
 - $T: V \rightarrow W$
 - $R: V \rightarrow W$
 - $S: V \rightarrow W$

Se tiene que:
$$
T+R = R+T
$$

$$
(T+R)+S = T+(R+S)
$$

$$
\alpha(\beta T) = (\alpha\beta)T \quad ; \quad \forall \, \alpha, \beta \in K
$$

 $$
 (\alpha + \beta)T = \alpha T + \beta T \quad ; \quad \forall \, \alpha, \beta \in K
 $$

 $$
 \alpha(T + R) = \alpha T + \alpha R \quad ; \quad \forall \, \alpha \in K
 $$

## Propiedades de la composición de transformaciones lineales

Sean $U, V, W$ y $X$ espacios vectoriales sobre un campo $K$ y sean las transformaciones lineales: 

- $T: U \rightarrow V$ 
- $R: U \rightarrow V$
- $H: W \rightarrow X$
- $S: V \rightarrow W$
- $F: V \rightarrow W$

Se tiene que: 

$$
H \circ (S \circ T) = (H \circ S) \circ T
$$


$$
\alpha (S \circ T) = (\alpha S) \circ T = S \circ (\alpha T) \quad ; \quad \forall \, \alpha \in K
$$

$$
S \circ (T+R) = (S \circ T) + (S \circ R)
$$

$$
(S+F) \circ T = (S \circ T) + (F \circ T)
$$


#### Ejercicio 1

Obtener la regla de correspondencia de las transformaciones:
- $T + S$ 
- $4T$ 
- $3T - 2S$

 Si $T: \mathbb{R}^2 \to \mathbb{R}^3$ y $S: \mathbb{R}^2 \to \mathbb{R}^3$ están dadas por 
 $$
 T(x, y) = (x + y, 2x, y)
 $$
 
 $$
 S(x, y) = (-3x + y, 4x, 2y)
 $$
 
#### Ejercicio 2

Obtener la matriz asociada a las transformaciones $T$ y $S$ del ejemplo anterior referidas a las bases:
$$
A = \{(1, 0), (1, -1)\}
$$
$$
B = \{(1, 1, 0), (0, 1, -2), (1, 0, -3)\}
$$
de $\mathbb{R}^2$ y $\mathbb{R}^3$ respectivamente. Además, obtener $M_B^A(T + S)$ y determinar la relación entre las matrices obtenidas.






### Teorema

Sean $V$ y $W$ dos espacios vectoriales definidos sobre un campo $K$, y sean $A$ y $B$ bases de $V$ y $W$, respectivamente. Si $T$ y $H$ son dos transformaciones lineales cualesquiera de $V$ en $W$, entonces: 

$$
M_B^A (T+H) = M_B^A (T) + M_B^A (H)
$$

$$
M_B^A (\alpha T) = \alpha M_B^A (T) \quad ; \quad \forall \, \alpha \in K
$$ 
 
 Sean $U, V$ y $W$ tres espacios vectoriales definidos sobre un campo $K$, y sean $A, B$ y $C$ bases de $U, V$ y $W$, respectivamente.
 Si $T: U \rightarrow V$ y $H: V \rightarrow W$ son dos transformaciones lineales, entonces: 
 
 $$
 M_C^A (H \circ T) = M_C^B (H) M_B^A (T)
 $$


#### Ejercicio 3

Sean las transformaciones $T: \mathbb{R}^2 \to \mathbb{R}^4$ y $S: \mathbb{R}^4 \to \mathbb{R}^2$ dadas por:

$$
T(x, y) = (2x + y, -y, x, -3x - y) 
$$

 $$
 S(x, y, z, t) = (2x - y + t, 4y + z - t)
 $$

 Determinar, si es posible, la regla de correspondencia de $T \circ S$ y $S \circ T$.


## Transformaciones lineales inyectivas, suprayectivas y biyectivas
#### Transformación inyectiva
Una transformación lineal es inyectiva, si y sólo si, el núcleo de dicha transformación es de dimensión cero. 

#### Transformación suprayectiva
Una transformación lineal es suprayectiva, si y sólo si, la dimensión del recorrido es igual a la dimensión del codominio, o bien, si la dimensión del núcleo es igual a cero, entonces la transformación será suprayectiva, si la dimensión del dominio es igual a la dimensión del codominio. 

#### Transformación biyectiva
Una transformación lineal es biyectiva, si y sólo si, es inyectiva y suprayectiva, es decir, si la dimensión del núcleo es igual a cero y la dimensión del recorrido es igual a la dimensión del codominio. 



## Inversa de una transformación lineal

Sea $T: V \rightarrow W$ una transformación lineal. La inversa de $T$ es una transformación lineal $T^{-1}: W \rightarrow V$, para la cual se cumple que:
- $T^{-1} \circ T = I_V$ 
- $T \circ T^{-1} = I_W$ 
Donde $I_V$ e $I_W$ son transformaciones identidad en $V$ y $W$, respectivamente. 

 Gráficamente:

![[Screenshot 2025-07-01 at 11.46.01 a.m..png]]


>[!custom] ¿Todas las matrices tienen inversa? 
>No.
>Sean $V$ y $W$ dos espacios vectoriales de dimensión finita, $T: V \rightarrow W$ una transformación lineal y $A, B$ bases de $V$ y $W$, respectivamente: 
> - $T^{-1}$ existe, si y solo si, $M_B^A (T)$ **es no singular.** 
> - Si $T^{-1}$ existe, entonces $\left[ M_B^A (T) \right]^{-1} = M_A^B (T^{-1})$. 

#### Propiedades de la matriz inversa

Sean $U, V$ y $W$ espacios vectoriales sobre un campo $K$ y sean $T:U \rightarrow V$ y $R:V \rightarrow W$ dos transformaciones lineales biyectivas. Se tiene que:
- $T^{-1}$ es única
- $(T^{-1})^{-1} = T$ 
- $(R \circ T)^{-1} = T^{-1} \circ R^{-1}$ 
- $(\alpha T)^{-1} = \frac{1}{\alpha} T^{-1} \quad ; \quad \forall \, \alpha \in K \text{ con } \alpha \neq 0$ 



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