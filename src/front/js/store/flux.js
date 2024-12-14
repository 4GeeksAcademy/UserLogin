import { toast } from "sonner";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      time: 0,
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
      Tiempo: () => {
        const store = getStore();
        if (store.time != 0) {
        } else {
          const intervalo = setInterval(() => {
            const currentStore = getStore();
            setStore({ ...currentStore, time: currentStore.time + 1 });
          }, 1000);
        }
      },

      modificarFormulario: (nombre, valor) => {
        setStore({ [nombre]: valor });
      },

      AgregarUsuario: async () => {
        try {
          console.log(getStore());
          const respuesta = await fetch(
            "https://scaling-tribble-69g4p5x9xv79c7j6-3001.app.github.dev/api/addUser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(getStore()),
            }
          );

          if (!respuesta.ok) {
            throw new Error(`Error: :( )`);
          }

          const resultado = await respuesta.json();
          console.log("Usuario agregado con éxito:", resultado);
        } catch (error) {
          console.error("Error al agregar usuario:", error);
        }
      },

      agregarLocalStorage: () => {
        Object.entries(getStore()).map(([key, value]) => {
          localStorage.setItem(key, value);
        });
      },

      Login: async (mail, firstName) => {
        const resp = await fetch(process.env.BACKEND_URL + `api/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            mail: mail,
          }),
        });
        // {
        //   first_name: firstName,
        //   mail: mail,
        // }
        // if (!resp.ok) throw Error("There was a problem in the login request");

        // if (resp.status === 401) {
        //   throw "Invalid credentials";
        // } else if (resp.status === 400) {
        //   throw "Invalid email or password format";
        // }
        const data = await resp.json();

        localStorage.setItem("jwt-token", data.token);

        return console.log("hola");
      },

      validarFormulario: (pagina) => {
        for (const key in getStore()) {
          if (
            getStore()[key] === "" ||
            getStore()[key] === "time" ||
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
                            getActions().AgregarUsuario();
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
