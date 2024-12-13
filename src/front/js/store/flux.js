import { toast } from "sonner";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tiempo: 0,
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
      favoriteVariable: "",
      experienceRate: "",
      phone: "",
      favoriteColour: "",
      birthDay: "",
      computerName: "",
      hatedVariable: "",
      tabsSpacesChaos: "",
      bugType: "",
      apologizedToComputer: "",
      formSummary: "",
      honestExperienceRate: "",
      potentialPassword: "",
      favoriteNumber: 0,
      loveForVar: "",
      fetchPreference: "",
      modePreference: "",
      programmingWithoutFingers: "",
      favoriteDay: "",
      randomGuess: "",
      worstFootballTeam: "",
      timeToComplete: "",
    },
    actions: {
      // Use getActions to call a function within a fuction

      Tiempo: () => {
        const store = getStore();
        if (store.tiempo != 0) {
        } else {
          const intervalo = setInterval(() => {
            const currentStore = getStore();
            setStore({ ...currentStore, tiempo: currentStore.tiempo + 1 });
          }, 1000);
        }
      },

      modificarFormulario: (nombre, valor) => {
        setStore({ [nombre]: valor });
      },

      AgregarUsuario: async () => {
        datos = await request.json();

        respuesta = await fetch(
          "https://scaling-tribble-69g4p5x9xv79c7j6-3001.app.github.dev/api/addUser",
          { method: "POST", body: JSON.stringify(datos) }
        );
      },

      agregarLocalStorage: () => {
        Object.entries(getStore()).map(([key, value]) => {
          localStorage.setItem(key, value);
        });
      },

      validarFormulario: (pagina) => {
        for (const key in getStore()) {
          if (
            getStore()[key] === "" ||
            getStore()[key] === "tiempo" ||
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
                          onClick: () => {
                            pagina("/User");
                            getActions().agregarLocalStorage();
                          },
                        },
                      }),
                  },
                }),
            },
          }
        );
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
