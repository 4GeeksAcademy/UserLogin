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
          const respuesta = await fetch(
            process.env.BACKEND_URL + "api/addUser",
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

      Login: async (pagina) => {
        const resp = await fetch(process.env.BACKEND_URL + `api/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: getStore().firstName,
            mail: getStore().mail,
          }),
        });

        if (!resp.ok) throw Error("There was a problem in the login request");

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
        const data = await resp.json();

        if (localStorage.length === 0) {
          Object.entries(data.user).map(([key, value]) => {
            localStorage.setItem(key, value);
          });
          localStorage.setItem("token", data.token);
        }
        return pagina("/User");
      },
      encriptarPassword: async (password) => {
        const salt = await bcrypt.genSalt(10); // Generar una sal
        const hashedPassword = await bcrypt.hash(password, salt); // Encriptar la contraseña
        return hashedPassword;
      },

      validarFormulario: (pagina) => {
        // for (const key in getStore()) {
        //   if (
        //     getStore()[key] === "" ||
        //     getStore()[key] === "time" ||
        //     getStore()[key] === 0 ||
        //     getStore()[key] === null ||
        //     getStore()[key] === undefined ||
        //     getStore()[key] === "---"
        //   ) {
        //     toast.error(`El campo ${key} no ha sido rellenado correctamente`);
        //     return key;
        //   }
        // }
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
