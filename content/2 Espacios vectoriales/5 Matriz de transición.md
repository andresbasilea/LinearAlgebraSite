
### Definición formal 
Sean $A = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ y $B = \{\bar{w}_1, \bar{w}_2, \ldots, \bar{w}_n\}$ dos bases de un espacio vectorial $V$. La matriz de transición $M_B^A$ tiene por columnas los vectores de coordenadas de los elementos de la base $A$ con respecto a la base $B$, esto es:
$$
M_B^A = \left[ (\bar{v}_1)_B \quad (\bar{v}_2)_B \quad \ldots \quad (\bar{v}_n)_B \right]
$$
Esta matriz $M_B^A$ conocida también como matriz de cambio de base, es tal que, si conocemos $(\bar{v})_A$ donde $\bar{v} \in V$ y deseamos obtener el vector de coordenadas de $\bar{v}$ en la base $B$, esto es $(\bar{v})_B$, entonces es suficiente con efectuar el producto:
$$
M_B^A (\bar{v})_A = (\bar{v})_B
$$
Además, se tiene que la matriz de transición es una matriz no singular, esto es, siempre tiene inversa y se cumple que:
$$
\left(M_B^A\right)^{-1} = M_A^B
$$

