

### Operadores hermitianos, antihermitianos, simétricos y antisimétricos

### Definición
Sea $V$ un espacio vectorial definido en $\mathbb{C}$, en el cual se define un producto interno y sea $T: V \to V$ un operador lineal.

Si se cumple que:
$$
(T(\vec{v}_1) | \vec{v}_2) = (\vec{v}_1 | T(\vec{v}_2)) \quad ; \quad \forall \vec{v}_1, \vec{v}_2 \in V
$$
entonces se dice que $T$ es un operador **hermitiano**.

Al operador $T$ se le llama **antihermitiano** si se cumple que:

$$
(T(\vec{v}_1) | \vec{v}_2) = -(\vec{v}_1 | T(\vec{v}_2)) \quad ; \quad \forall \vec{v}_1, \vec{v}_2 \in V
$$

Si $T$ es un operador **hermitiano** definido sobre el campo de los números reales, se le llama también operador **simétrico**.

Si $T$ es un operador **antihermitiano** definido sobre el campo de los números reales, se le llama también operador **antisimétrico**.

Un operador $T$ puede ser hermitiano con respecto a un producto interno y no serlo con respecto a otro; sin embargo, es suficiente con que sea hermitiano para algún producto interno para que se le llame de esta forma y cumpla con todas las propiedades de todo operador hermitiano.


### Definición

Sea $V$ un espacio vectorial definido sobre $\mathbb{C}$ con producto interno y sea $T: V \to V$ un operador lineal. Se tiene que:


1.  $T$ es un operador hermitiano, si se cumple que $T^* = T$.
2.  $T$ es un operador antihermitiano, si se cumple que $T^* = -T$.


Si el espacio $V$ está definido sobre $\mathbb{R}$, entonces a los operadores hermitianos también se les llama operadores simétricos y a los operadores antihermitianos también se les llama operadores antisimétricos.

### Propiedades de los operadores hermitianos, simétricos, antihermitianos y antisimétricos

1.  Si $T$ es un operador hermitiano, entonces:
	1. $T$ es diagonalizable.
	2. Sus valores característicos son números reales.
	3. Los vectores característicos son ortogonales, siempre y cuando los valores característicos sean diferentes.

$\newline$

2.  Si $T: V \to V$ es un operador hermitiano y $B$ es una base ortonormal de $V$ para algún producto interno definido en $V$, entonces $M_B^B(T)$ es una matriz hermitiana. $\newline$

$\newline$

3. Si $M_B^B(T)$ es una matriz asociada a un operador hermitiano referida a una base $B$ ortonormal, entonces:
	1. La matriz diagonalizadora $P$ es una matriz unitaria, si el campo de definición del espacio vectorial es complejo.
	2. La matriz diagonalizadora $P$ es una matriz ortogonal, si el campo de definición del espacio vectorial es real.

$\newline$

4. Si $T$ es un operador antihermitiano, entonces sus valores característicos son imaginarios puros.

$\newline$

5. Si $T: V \to V$ es un operador antihermitiano y $B$ es una base ortonormal de $V$, entonces $M_B^B(T)$ es una matriz antihermitiana.
