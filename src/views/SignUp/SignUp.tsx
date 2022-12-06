
import Page from "@components/Page";
import { Field, Input } from "@components/InputField";
import { PrimaryButton, ButtonRegister } from "@components/Buttons";
import ActionField from "@components/ActionField";
import ErrorField from "@components/ErrorField";
export interface ILoginUXProps {
  name: string,
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: any;
  handleClick: () => void;
}
const LoginUX = (
  {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleClick
  } : ILoginUXProps
) => {
  return (
    <Page pageTitle="Crear Cuenta" useAbsoluteCenter>
      <section style={{minWidth:"480px", marginTop:"1rem"}}>
        <form action="">
          <div className="form">
            <h1 className="h1">Registrarse</h1>
            <Input
              name="name"
              labelText="Nombre"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              labelText="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              labelText="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <Field
              name="textEmail"
              labelText="Email"
              type="email"
              value={email}
              id="textEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
      
            <Field
              name="textPass"
              labelText="Password"
              type="password"
              value={password}
              id="textPass"
              onChange={(e) => setPassword(e.target.value)}
            /> */}
          
            {error && <ErrorField>{error?.data?.error}</ErrorField>}
            <ActionField align="center">
              <PrimaryButton onClick={handleClick}>Registrarse</PrimaryButton>
            </ActionField>
          </div>
        </form>
      </section>
    </Page>
  );
}

export default LoginUX;
