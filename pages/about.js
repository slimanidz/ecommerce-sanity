import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import { Field, Form, Formik } from "formik";
import { useCartContext } from "../components/CartContext";

const initialValues = {
  email: "",
  password: "",
};

const About = () => {
  const { emailPassword, setEmailPassword } = useCartContext();
  const [active, setActive] = useState(false);

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
    setEmailPassword([email, password]);
    setActive(true);
  };

  return (
    <Page>
      <div className="p-5">
        <h1 className="pb-5 text-2xl font-bold">Add Produts</h1>
        {emailPassword[0] !== "slimani@gmail.com" ||
        emailPassword[1] !== "Younes2019" ? (
          <div>
            <h1 className="p-3 ">Identifecation:</h1>
            {active && (
              <p className="text-red-700 text-center">
                Ooooops email ou password errone
              </p>
            )}

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
              <Form className="flex flex-col items-center gap-3 bg-slate-200 w-80 p-3   ">
                <div className="flex flex-col">
                  <h1>Email</h1>
                  <Field className="border px-2" type="email" name="email" />
                </div>

                <div className="flex flex-col">
                  <h1>Password</h1>
                  <Field
                    className="border px-2"
                    type="password"
                    name="password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-32 text-center bg-blue-600 active:bg-blue-400 text-white font-bold p-2 rounded"
                >
                  {" "}
                  Valider
                </button>
              </Form>
            </Formik>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {" "}
            <a
              href="https://sanity-silk-pi.vercel.app/desk/product"
              className="w-32 text-center bg-blue-600 active:bg-blue-400 text-white font-bold p-2 rounded"
            >
              Sanity
            </a>
            <button
              onClick={() => setEmailPassword([])}
              className="w-32 text-center bg-slate-500 active:bg-slate-400 text-white font-bold p-2 rounded"
            >
              return
            </button>
          </div>
        )}
      </div>
    </Page>
  );
};

export default About;
