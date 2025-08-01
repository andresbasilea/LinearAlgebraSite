
\section*{Procedimiento para obtener las Componentes Principales (PCA)}

El Análisis de Componentes Principales (PCA) es una técnica de reducción de dimensionalidad que transforma un conjunto de variables posiblemente correlacionadas en un conjunto más pequeño de variables no correlacionadas, llamadas Componentes Principales (CP). Estas CP capturan la mayor parte de la varianza presente en los datos originales.

\subsection*{Paso 1: Estandarización de los Datos}
Es crucial estandarizar los datos antes de aplicar PCA para asegurar que las variables con una escala mayor no dominen la varianza total y, por ende, las componentes principales. Esto se hace transformando cada variable para que tenga una media de cero y una desviación estándar de uno.

Sea $X$ la matriz de datos original de tamaño $n \times p$, donde $n$ es el número de observaciones y $p$ es el número de variables.
Cada elemento $x_{ij}$ (el valor de la $j$-ésima variable para la $i$-ésima observación) se estandariza como:
$$ x'_{ij} = \frac{x_{ij} - \mu_j}{\sigma_j} $$
Donde $\mu_j$ es la media de la $j$-ésima variable y $\sigma_j$ es la desviación estándar de la $j$-ésima variable.
La matriz de datos estandarizados resultante se denota como $X'$.

\subsection*{Paso 2: Cálculo de la Matriz de Covarianza}
La matriz de covarianza $(\Sigma)$ mide la relación entre cada par de variables. Si los datos ya están estandarizados (con media cero), la matriz de covarianza muestral se calcula como:
$$ \Sigma = \frac{1}{n-1} (X')^T X' $$
Donde $(X')^T$ es la transpuesta de la matriz de datos estandarizados. $\Sigma$ será una matriz simétrica de $p \times p$.

\subsection*{Paso 3: Cálculo de los Valores y Vectores Propios}
Los valores y vectores propios de la matriz de covarianza son el corazón de PCA. Los vectores propios representan las direcciones (o ejes) de máxima varianza, y los valores propios asociados representan la magnitud de esa varianza a lo largo de esas direcciones.

Para cada vector propio $\mathbf{v}$ y su valor propio $\lambda$, se cumple la siguiente ecuación:
$$ \Sigma \mathbf{v} = \lambda \mathbf{v} $$
Se calculan los $p$ valores propios $(\lambda_1, \lambda_2, \dots, \lambda_p)$ y sus correspondientes vectores propios ortonormales $(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_p)$ de la matriz de covarianza $\Sigma$.

\subsection*{Paso 4: Ordenamiento y Selección de las Componentes Principales}
\begin{itemize}
    \item \textbf{Ordenamiento:} Los valores propios se ordenan en orden descendente: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p$. Los vectores propios correspondientes se reordenan de la misma manera. El vector propio asociado al valor propio más grande es la primera componente principal, y así sucesivamente.
    \item \textbf{Selección:} Se seleccionan los $k$ primeros vectores propios (que son las $k$ componentes principales) que corresponden a los $k$ valores propios más grandes. La elección de $k$ se basa en cuánta varianza acumulada se desea explicar (por ejemplo, el 80\% o 90\% de la varianza total).
    La matriz de proyección $W$ (también llamada matriz de características o matriz de eigenvectores) se forma apilando estos $k$ vectores propios como columnas:
    $$ W = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \dots & \mathbf{v}_k \end{bmatrix} $$
    Donde $W$ es una matriz de $p \times k$.
\end{itemize}

\subsection*{Paso 5: Proyección de los Datos}
Finalmente, se proyectan los datos estandarizados originales en el nuevo espacio de características de menor dimensión definido por las componentes principales seleccionadas.
La matriz de datos transformados $Y$ se calcula como:
$$ Y = X' W $$
Donde $Y$ es una matriz de $n \times k$. Las columnas de $Y$ son las nuevas componentes principales para cada observación. Estas nuevas variables $Y$ son incorrelacionadas y representan la información más relevante del conjunto de datos original en una dimensión reducida.



>[!Interesante] Perooooooooo, ¿cómo se ve esto?
><!DOCTYPE html>





<div class="container mx-auto p-6 bg-white rounded-2xl shadow-xl max-w-4xl">
    <header class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800 text-center">TensorFlow Projector</h1>
        <p class="mt-2 text-gray-600 text-center">
            This is an embedded view of the TensorFlow Projector tool.
        </p>
    </header>

    <!-- The iframe to embed the external webpage -->
    <iframe
        src="https://projector.tensorflow.org/"
        title="TensorFlow Projector Interactive Tool"
        allowfullscreen>
    </iframe>

    <footer class="mt-6 text-center text-sm text-gray-500">
        <p>Content is loaded from the original source:
            <a href="https://projector.tensorflow.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                projector.tensorflow.org
            </a>
        </p>
    </footer>
</div>


https://projector.tensorflow.org/

https://medium.com/@juanabascal78/exploratory-image-analysis-part-2-embeddings-on-tensorboard-a13a5d4f98b0