"use client";
import {useState} from "react";
import {useGetRecoveryMutation} from "../globalstore/services/useRecoverPw";

const RecoverPW = () => {
  const [input, setInput] = useState({
    email: "",
  });
  const [getRecovery, {isLoading}] = useGetRecoveryMutation();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await getRecovery(input.email);
    } catch (error) {
      alert(error);
    }
    setInput({
      email: "",
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <section className="min-h-screen w-full flex flex-col  items-center justify-center">
      <form onSubmit={handleSubmit} className="h-full w-full flex flex-col gap-8 items-center justify-center">
        <p>Forgot your password? Wright your email</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="email">Here:</label>
          <input type="email" name="email" onChange={handleChange} value={input.email} className="border shadow-lg" />
          <button className="btn btn-primary"> send </button>
        </div>
      </form>
    </section>
  );
};
export default RecoverPW;
