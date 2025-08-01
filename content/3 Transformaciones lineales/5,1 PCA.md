---
---
### Principal Component Analysis

El Análisis de Componentes Principales (PCA) es una técnica de **reducción de dimensionalidad** que transforma un conjunto de variables posiblemente correlacionadas en un conjunto más pequeño de variables no correlacionadas, llamadas Componentes Principales (CP). Estas CP capturan la mayor parte de la **varianza** presente en los datos originales.

![[Pasted image 20250801115302.png]]

#### Paso 1: Estandarización de los Datos
Es crucial estandarizar los datos antes de aplicar PCA para asegurar que las variables con una escala mayor no dominen la varianza total y, por ende, las componentes principales. Esto se hace transformando cada variable para que tenga una media de cero y una desviación estándar de uno.

Sea $X$ la matriz de datos original de tamaño $n \times p$, donde $n$ es el número de observaciones y $p$ es el número de variables.
Cada elemento $x_{ij}$ (el valor de la $j$-ésima variable para la $i$-ésima observación) se estandariza como:
$$ 
x'_{ij} = \frac{x_{ij} - \mu_j}{\sigma_j} 
$$
Donde $\mu_j$ es la media de la $j$-ésima variable y $\sigma_j$ es la desviación estándar de la $j$-ésima variable.
La matriz de datos estandarizados resultante se denota como $X'$.

#### Paso 2: Cálculo de la Matriz de Covarianza
La matriz de covarianza $(\Sigma)$ mide la relación entre cada par de variables. Si los datos ya están estandarizados (con media cero), la matriz de covarianza muestral se calcula como:
$$
\Sigma = \frac{1}{n-1} (X')^T X' 
$$
Donde $(X')^T$ es la transpuesta de la matriz de datos estandarizados. $\Sigma$ será una matriz simétrica de $p \times p$.

#### Paso 3: Cálculo de los Valores y Vectores Propios
Los [[5 Valores y vectores propios]] de la matriz de covarianza son el corazón de PCA. Los vectores propios representan las direcciones (o ejes) de máxima varianza, y los valores propios asociados representan la magnitud de esa varianza a lo largo de esas direcciones.

Para cada vector propio $\mathbf{v}$ y su valor propio $\lambda$, se cumple la siguiente ecuación:
$$ 
\Sigma \mathbf{v} = \lambda \mathbf{v} 
$$
Se calculan los $p$ valores propios $(\lambda_1, \lambda_2, \dots, \lambda_p)$ y sus correspondientes vectores propios ortonormales $(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_p)$ de la matriz de covarianza $\Sigma$.


![[Pasted image 20250801115046.png]]



>[!info] Medita sobre esto
>
>Supongamos que deseas reducir la dimensionalidad de tu conjunto de datos, digamos, a una sola dimensión. En general, esto significa elegir un **vector unitario** 𝑢 y reemplazar cada punto de datos 𝑥ᵢ por su **proyección a lo largo de este vector**, es decir, 𝑢ᵀ𝑥ᵢ. Por supuesto, debes elegir 𝑢 de manera que retengas la **mayor cantidad posible de variación** de los puntos de datos: si tus datos estuvieran distribuidos a lo largo de una línea y eligieras un vector 𝑢 ortogonal a esa línea, **todos los puntos se proyectarían en el mismo valor**, y perderías casi toda la información del conjunto de datos.
>
>Por lo tanto, deseas **maximizar la varianza** de los nuevos valores de datos 𝑢ᵀ𝑥ᵢ. No es difícil demostrar que, si la **matriz de covarianza** de los puntos de datos originales 𝑥ᵢ es Σ, la varianza de los nuevos puntos de datos es simplemente 𝑢ᵀΣ𝑢. Como Σ es simétrica, **el vector unitario 𝑢 que maximiza 𝑢ᵀΣ𝑢 no es otro que el autovector con el mayor autovalor.**
>
>Si deseas conservar más de una dimensión del conjunto de datos, en principio lo que puedes hacer es: primero encuentras el **componente principal más grande**, llámalo 𝑢₁, luego lo **restas de todos los puntos de datos** para obtener un conjunto de datos “aplanado” que no tenga varianza a lo largo de 𝑢₁. Encuentras el componente principal de este nuevo conjunto, llámalo 𝑢₂. Si te detuvieras aquí, 𝑢₁ y 𝑢₂ formarían una **base de un subespacio bidimensional** que retiene la mayor parte de la varianza del conjunto original; o puedes repetir el proceso y obtener tantas dimensiones como desees.
>
>Resulta que **todos los vectores 𝑢₁, 𝑢₂, … que obtienes de este proceso son simplemente los autovectores de Σ en orden descendente de autovalor.** Por eso se les llama los **componentes principales del conjunto de datos.**



#### Paso 4: Ordenamiento y Selección de las Componentes Principales

- **Ordenamiento**: Los valores propios se ordenan en orden descendente: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p$. Los vectores propios correspondientes se reordenan de la misma manera. El vector propio asociado al valor propio más grande es la primera componente principal, y así sucesivamente.
- **Selección**: Se seleccionan los $k$ primeros vectores propios (que son las $k$ componentes principales) que corresponden a los $k$ valores propios más grandes. La elección de $k$ se basa en cuánta varianza acumulada se desea explicar (por ejemplo, el 80% o 90% de la varianza total).
- La matriz de proyección $W$ (también llamada matriz de características o matriz de eigenvectores) se forma apilando estos $k$ vectores propios como columnas:
    $$ 
    W = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_k \end{bmatrix} 
    $$
Donde $W$ es una matriz de $p \times k$.


#### Paso 5: Proyección de los Datos

Finalmente, se proyectan los datos estandarizados originales en el nuevo espacio de características de menor dimensión definido por las componentes principales seleccionadas.
La matriz de datos transformados $Y$ se calcula como:
$$ 
Y = X' W 
$$
Donde $Y$ es una matriz de $n \times k$. Las columnas de $Y$ son las nuevas componentes principales para cada observación. Estas nuevas variables $Y$ no están correlacionadas y representan la información más relevante del conjunto de datos original en una dimensión reducida.

<br>
<br>

### Ejemplo de PCA

>[!info] Algunas definciones
>**Word2Vec**: Word2Vec es un modelo que convierte palabras en vectores de números (embeddings) de forma que **las palabras con significados similares tienen vectores similares**. Se entrena para predecir una palabra a partir de su contexto o viceversa. Así, captura relaciones semánticas como _"rey - hombre + mujer ≈ reina"_.
>
>**Embeddings**: Los **embeddings** son una forma de representar elementos (como palabras, usuarios, productos, etc.) como vectores en un espacio continuo de baja dimensión, donde **las relaciones geométricas entre los vectores reflejan relaciones semánticas o de comportamiento** entre los elementos originales. Por ejemplo, en procesamiento de lenguaje natural, palabras con significados similares estarán representadas por vectores cercanos entre sí.



<iframe 
  src="https://projector.tensorflow.org/" 
  width="120%" 
  height="700px" 
  style="border:none; border-radius: 8px;">
</iframe>

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

