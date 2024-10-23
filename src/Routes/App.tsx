import { useState, useEffect } from "react";
import loadingGif from "../assets/giphy.gif";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const placeholders = ["Nome", "Senha"];

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (index === 0) {
        setName(e.target.value);
      } else if (index === 1) {
        setPassword(e.target.value);
      }
    };

  const handleSubmit = () => {
    console.log("Name:", name, "Password:", password);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const sendData = async () => {
        setShowGif(true);
        await new Promise((resolve) => setTimeout(resolve, 6000));
        setShowGif(false);
        setIsSubmitted(false);
      };
      sendData();
    }
  }, [isSubmitted, name, password]);

  const isFormValid = name !== "" && password !== "";

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple text-white">
      <div className="w-1/4 h-auto grid gap-4 rounded-lg bg-gray shadow-xl shadow-gray-500/50 p-2">
        {showGif ? (
          <>
            <h1 className="text-center font-bold text-xl">
              Formulário enviado com sucesso!
            </h1>

            <img
              src={loadingGif}
              alt="Loading..."
              className="w-full h-full object-contain "
            />
          </>
        ) : (
          <>
            <h1 className="text-center font-bold text-xl">Formulário</h1>

            <div>
              {placeholders.map((item, index) => (
                <Input
                  key={index}
                  placeholder={item}
                  value={index === 0 ? name : password}
                  onChange={handleChange(index)}
                />
              ))}
            </div>
            <div className="flex justify-center items-center">
              <button
                disabled={!isFormValid}
                className="primary-btn"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
          </>
        )}
      </div>

      <p
        onClick={() => navigate("/starWars")}
        className="font-starwars text-darkSide p-4 cursor-pointer"
      >
        Uma galáxia muito, muito distante...
      </p>
    </div>
  );
}

export default App;
