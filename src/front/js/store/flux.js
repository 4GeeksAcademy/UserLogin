import { toast } from "sonner";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      firstName: "",
      secondName: "",
      imaginaryNickname: "",
      favoriteSuperHero: "",
      favoriteVillain: "",
      password: "",
      eyeColor: "",
      hairColor: "",
      mail: "",
      age: 0,
      favoriteVariable: "Var",
      experienceRate: "1",
      phone: "",
      favoriteColour: "",
      birthDay: "",
      computerName: "",
      hatedVariable: "Let",
      tabsSpacesChaos: "Tabs",
      bugType: "",
      apologizedToComputer: "No",
      formSummary: "",
      honestExperienceRate: "1",
      potentialPassword: "",
      favoriteNumber: 0,
      loveForVar: "1",
      fetchPreference: "Await",
      modePreference: "Dark mode",
      programmingWithoutFingers: "",
      favoriteDay: "",
      randomGuess: "",
      worstFootballTeam: "Sevilla",
      timeToComplete: "1min",
    },
    actions: {
      // Use getActions to call a function within a fuction

      modificarFormulario: (nombre, valor) => {
        setStore({ [nombre]: valor });
      },

      AgregarUsuario: async () => {
        datos = await request.json();

        respuesta = await fetch(
          "https://improved-bassoon-g4q7prv4v5xq2p76x-3001.app.github.dev/api/addUser",
          { method: "POST", body: JSON.stringify(datos) }
        );
      },

      validarFormulario: () => {
        for (const key in getStore()) {
          if (
            getStore()[key] === "" ||
            getStore()[key] === 0 ||
            getStore()[key] === null ||
            getStore()[key] === undefined ||
            getStore()[key] === "---"
          ) {
            toast.error(`El campo ${key} no ha sido rellenado correctamente`);
            return key;
          }
        }
        return toast(
          "Congratulations, you have completed everything. Are you sure you want to continue?",
          {
            action: {
              label: "Yes",
              onClick: () =>
                toast("...... Are u sure?", {
                  action: {
                    label: "Yes let me alone please",
                    onClick: () =>
                      toast("sure? :(", {
                        action: {
                          label: "YES",
                          onClick: () => console.log("Yes let me alone please"), //USAR ESTO PARA REDIRIGIR EL USUARIO Y SUBIR TODO A LA BASE DE DATOS
                        },
                      }),
                  },
                }),
            },
          }
        );

        // Si todos los campos están validados
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
