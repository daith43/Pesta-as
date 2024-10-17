const container = document.querySelector('.container');
const titles = document.querySelectorAll('.title');
let texto = document.querySelector('.texto');

let texto1 = "La resiliencia es la capacidad de adaptarse y recuperarse frente a la adversidad, el trauma o las dificultades. Esta cualidad humana permite a las personas afrontar situaciones estresantes con fortaleza y flexibilidad, desarrollando estrategias para superar obstáculos y salir fortalecidos. La resiliencia no solo se manifiesta en individuos, sino también en comunidades y organizaciones, quienes, ante desastres naturales, crisis económicas o conflictos sociales, encuentran maneras innovadoras y solidarias para reconstituirse y avanzar."

let texto2 = "La serenidad es un estado de calma y tranquilidad mental que se alcanza al liberar la mente del estrés y las preocupaciones. A menudo se caracteriza por el ritmo acelerado y las constantes demandas. La serenidad permite una perspectiva clara y una mayor capacidad para tomar decisiones sabias y ponderadas. Practicar la meditación, el mindfulness y el contacto con la naturaleza son algunas de las maneras de cultivar la serenidad en la vida diaria. Mantener este equilibrio interno es clave para una salud mental óptima y una vida plena.";

let texto3 = "La metamorfosis es un proceso de transformación profunda y radical, observable en la naturaleza y aplicable también a la vida humana. Biológicamente, es el cambio por el que pasan algunos animales, como las mariposas y las ranas, desde una etapa inmadura a su forma adulta. La metamorfosis puede referirse a cualquier cambio significativo en una persona o entidad. A lo largo de la vida, las personas pueden experimentar metamorfosis en su desarrollo personal, profesional o espiritual, transformándose a través de experiencias y aprendizajes.";

titles.forEach( title =>{

    title.addEventListener('click', (e)=> {
        let pestaña = e.target;

        if(pestaña.textContent.includes("Resiliencia")){
            texto.textContent = texto1;
        } else if(pestaña.textContent.includes("Serenidad")){
            texto.textContent = texto2;
        } else{
            texto.textContent = texto3;
        }


        titles.forEach( title =>{
            title.style.backgroundColor = "#e6eaee";
        });
       
        pestaña.style.backgroundColor = "#fff";
        
    });
});

