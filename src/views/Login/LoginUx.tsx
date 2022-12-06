
import Page from "@components/Page";
import { Field } from "@components/InputField";
import { PrimaryButton } from "@components/Buttons";
import ActionField from "@components/ActionField";
import ErrorField from "@components/ErrorField";

export interface ILoginUXProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: any;
  handleClick: () => void;
}
const LoginUX = (
  {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleClick
  } : ILoginUXProps
) => {
  return (
    <Page pageTitle="Login" useAbsoluteCenter>
      <section style={{  minWidth:"480px", marginTop:"1rem"}}>

        <div  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}> <img  width={200} src="https://i.pinimg.com/564x/e5/c9/d9/e5c9d94799f7335b3b09e5cfebf16b16.jpg" alt="" /></div>
        <Field
          name="email"
          labelText="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field
          name="password"
          labelText="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <ErrorField>{error?.data?.error}</ErrorField>}
        <ActionField align="center">

          <PrimaryButton  style={{backgroundColor: "#006400"}} onClick={handleClick}>Iniciar Sesión</PrimaryButton>
        </ActionField>
      </section>
    </Page>
  );
}

export default LoginUX;
