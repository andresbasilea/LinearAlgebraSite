
El determinante de una matriz cuadrada es un valor escalar que nos proporciona información crucial sobre la transformación lineal que esa matriz representa. Su significado varía ligeramente en la interpretación geométrica según la dimensión del espacio.

Cuando calculamos el determinante de una matriz n×n, lo que estamos evaluando es cómo la transformación lineal asociada escala el "volumen" (o "hipervolumen" en dimensiones mayores) en un espacio de n dimensiones.

### En dos dimensiones (matriz 2×2)

Para una matriz de 2×2, el valor absoluto del determinante nos dice cómo la transformación lineal escala el área.

- Si la matriz se aplica a una figura de área unitaria (como un cuadrado de lado 1), el valor absoluto del determinante es el área de la figura transformada.
    
- El signo del determinante indica la orientación:
    
    - Si el determinante es **positivo**, la orientación del espacio se mantiene (no hay un "volteo" o reflexión).
        
    - Si el determinante es **negativo**, la orientación del espacio se invierte (hay una reflexión).
        
- Si el determinante es **cero**, la transformación colapsa el área a cero. Esto significa que la transformación aplana el espacio 2D en una línea o un punto, y la matriz no es invertible (es singular).
    

#### Visualización del efecto de aplicar el determinante en dos dimensiones
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px; overflow: hidden;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/determinante_js.html">
    </iframe>
</div>



### En tres o más dimensiones (matriz n×n)

El concepto se generaliza a dimensiones superiores:

- Para una matriz de 3×3, el valor absoluto del determinante representa el factor de escala del **volumen**. Si aplicas la transformación a un cubo de volumen unitario, el valor absoluto del determinante será el volumen del paralelepípedo transformado.
    
- El signo sigue indicando la orientación:
    
    - Un determinante **positivo** significa que la orientación del espacio (por ejemplo, la "regla de la mano derecha" en 3D) se preserva.
        
    - Un determinante **negativo** indica una inversión de la orientación (una reflexión).
        
- Si el determinante es **cero**, la transformación colapsa el volumen (o hipervolumen en dimensiones mayores) a cero. Esto significa que la matriz proyecta el espacio de n dimensiones a un subespacio de menor dimensión, y por lo tanto, la matriz no es invertible.
    


>[!Interesante] ¿Puedes ver por qué decimos que los vectores de una matriz son linealmente independientes si su determinante es **distinto** a cero? 
>>- **Determinante diferente de cero (det(A) !=0):** Si el determinante de la matriz formada por los vectores es un valor distinto de cero, significa que la transformación lineal asociada a esa matriz no "colapsa" el espacio. Geométricamente, los vectores no se encuentran en un subespacio de menor dimensión. Por ejemplo, en 2D, no son colineales; en 3D, no son coplanares. Esto implica que son linealmente independientes y pueden formar una base para el espacio de la misma dimensión que la matriz.
>>- **Determinante igual a cero (det(A)=0):** Si el determinante es cero, la transformación lineal sí "colapsa" el espacio. Esto significa que los vectores son linealmente dependientes, lo que implica que al menos uno de ellos puede ser expresado como una combinación lineal de los otros. Geométricamente, los vectores están "alineados" en un subespacio de menor dimensión (por ejemplo, en 2D, son colineales; en 3D, son coplanares).   
>>
>>Es importante recordar que esta prueba del determinante solo es aplicable cuando el número de vectores es igual a la dimensión del espacio en el que se encuentran, es decir, cuando se puede formar una matriz cuadrada con ellos. **¿Por qué?**


## Calcular el determinante

El determinante de una matriz es un valor escalar que se calcula a partir de los elementos de una matriz cuadrada. La forma de calcularlo depende del tamaño de la matriz:

1. **Determinante de una matriz $2 \times 2$**

Para una matriz 

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}
$$
, el determinante se calcula como el producto de los elementos de la diagonal principal menos el producto de los elementos de la diagonal secundaria:

$$ 
\text{det}(A) = ad - bc 
$$

2. **Determinante de una matriz $3 \times 3$**
	
	Para una matriz 

$$
A = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}
$$ 

Un método común para obtener el determinante es la Regla de Sarrus: 

**Regla de Sarrus: (Solo para matrices $3 \times 3$)**

Se repiten las dos primeras columnas a la derecha de la matriz (o las dos primeras filas abajo). Luego se suman los productos de las diagonales principales y se restan los productos de las diagonales secundarias.

$$ 
\text{det}(A) = (aei + bfg + cdh) - (ceg + afh + bdi) 
$$

Visualmente, se puede pensar en ello así:
$$
\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} \quad \begin{matrix} a & b \\ d & e \\ g & h \end{matrix}
$$
*Los productos positivos van de arriba izquierda a abajo derecha; los productos negativos van de arriba derecha a abajo izquierda en las columnas repetidas.*


##### Otras maneras de obtener el determinante

**Expansión por cofactores (o Laplace): (Aplicable a cualquier dimensión $n \times n$)**
Se elige una fila o una columna. El determinante se calcula como la suma de los productos de cada elemento de la fila (o columna) elegida por su cofactor correspondiente.

El **menor** $M_{ij}$ de un elemento $a_{ij}$ es el determinante de la submatriz que se obtiene al eliminar la fila $i$ y la columna $j$.

El **cofactor** $C_{ij}$ de un elemento $a_{ij}$ es $C_{ij} = (-1)^{i+j} M_{ij}$.

Si se expande a lo largo de la primera fila, el determinante de una matriz $3 \times 3$ es:

$$ 
\text{det}(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13} 
$$
$$ 
\text{det}(A) = a_{11} \begin{vmatrix} e & f \\ h & i \end{vmatrix} - a_{12} \begin{vmatrix} d & f \\ g & i \end{vmatrix} + a_{13} \begin{vmatrix} d & e \\ g & h \end{vmatrix} 
$$
$$ 
\text{det}(A) = a(ei-fh) - b(di-fg) + c(dh-eg) 
$$


**Reducción por filas (eliminación Gaussiana):**
Se aplican operaciones elementales de fila a la matriz para transformarla en una matriz triangular (superior o inferior). El determinante de una matriz triangular es simplemente el producto de los elementos de su diagonal principal. Hay que tener en cuenta cómo estas operaciones afectan el determinante:

- Si se **intercambian** dos filas, el determinante **cambia de signo.**
- Si se **multiplica** una fila por un escalar $k$, el determinante se **multiplica por $k$**
- Si se **suma** un múltiplo de una fila a otra fila, el determinante **no cambia**.

Una vez que la matriz ha sido reducida a una forma triangular, el determinante es el producto de sus elementos de la diagonal, ajustado por los factores y signos introducidos por las operaciones de fila.




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