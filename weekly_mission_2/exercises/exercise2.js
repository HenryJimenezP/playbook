const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   class nameExplorer{  
   }

// Imprimir el nombre (propiedad name) de cada explorer en la lista, con FOR EACH
    console.log("\n--Imprimiendo nombre de la lista--")
    explorers.forEach((element) => console.log("Nombre Explorer: " + element.name) )

// Imprimir el stack de cada explorer, con FOR EACH
    console.log("\n--Imprimiendo stack de la lista--")
    explorers.forEach((element) => console.log("Stack del " + element.name + ": " + element.stack))

// Crear una nueva lista con las listas de stacks de cada explorer, con MAP
    console.log("\n--Imprimiendo stack de la lista--")
    const newlist = explorers.map((nlist) => {return nlist.stack})
    console.log(newlist)

// Obtener la lista de explorers que tengan en su stack "js", con FILTER (para validar un elemento en un lista se usa el método includes)
   const filterStack = explorers.filter((fStack) => fStack.stack.includes('js'))
    console.log("\n--Imprimiendo stack del explorer que solo tenga 'js' de la lista--")
   console.log(filterStack)

// Buscar el primer explorer que sea de la CDMX, con FIND
   const cityExplorer = explorers.find((cityExplorer) => cityExplorer.city.includes ('CDMX'))
   console.log("\n--Imprimiendo explorer solo de la CDMX de la lista--")
   console.log(cityExplorer)

// Obtener la suma de todos los exercises_completed, com REDUCE
   const exersicesTotal = explorers.reduce((total, element) => total + element.exercises_completed, 0)
   console.log("\n--Imprimiendo el total de ejercicios de la lista--")
   console.log(exersicesTotal)

// Obtener la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, con SOME
   const exerciseFinish = explorers.some((finish) => finish.missions.frontend.exercisesFinished === true)
   console.log("\n--Imprimiendo ejercicios finalizados de la mision frontend de la lista--")
   console.log("¿Uno de los explorer ha finalizado el ejercicio de la misión frontend? '" + exerciseFinish + "'")

//Obter la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. con EVERY
   const onbFinish = explorers.every((onFinish) => typeof onFinish.missions.onboarding.isFinished === 'true')
   console.log("\n--Imprimiendo isFinished de la mision onboarding de la lista--")
   console.log("¿Todos los explorer han finalizado la propiedad 'isFinished' del onboarding? '" + onbFinish + "'")
