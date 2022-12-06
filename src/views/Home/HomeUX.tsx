import Page from "@components/Page";
import Card from "@components/Card";
import { Field, FieldSelect } from "@components/InputField";
import ErrorField from "@components/ErrorField";

import { Button, PrimaryButton,} from "@components/Buttons";
import { useState, useEffect } from "react";
import { useSetBMIMutation} from "@store/Services/UsersBMI";

import { useFetcher } from "react-router-dom";
import ActionField from "@components/ActionField";
const HomeUX = (data?:any,error?:any) => {
  /// Variables
  const [newBMI, {  }] = useSetBMIMutation();
  const [estatura, setEstatura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [edad, setEdad] = useState<number>(0);
  const [IMC, setIMC] = useState<number>(0.0);
  const [visibleInfo,setVisibleInfo] = useState(false)
  const [visibleIMC,setVisibleIMC] = useState(false)
  /// Funciones
  const handleCalcular = () => {
 //peso (kg)/ [estatura (m)
 let pesoKg = peso/2.20462
 let estaturaM = estatura/100
 let result =  pesoKg/Math.pow(estaturaM,2)
 isNaN(result)? setIMC(0):setIMC(Math. round(result*10)/10);

 setVisibleIMC(true)

 };
 useEffect(()=>{
    if (IMC !=0.0){
        newBMI({
            "edad":edad.toString(),
            "estatura":estatura.toString(),
            "peso":peso.toString(),
            "IMC":IMC.toString()
            }).unwrap()
    }

 },[IMC])
 console.log(data)
  return (
    <Page pageTitle="Home">
      <Card title="Peso Ideal">
        {data.data &&         
        <label> Bienvenido de vuelta {data.data['name']}. Tu ultima revision fue el {new Date(data.data['lastChecked']).toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})} y  tenias {data.data['lastAge']} años, pesabas: {data.data['lastWeight']}lbs. , medías: {data.data['lastHeight']/100}m, y tu IMC era de: {data.data['lastBMI']} </label>}
        {data.error &&  <ErrorField>Ocurrio un error al cargar tus datos, intenta de nuevo mas tarde</ErrorField>}
        <Field
          type={"text"}
          labelText="Estatura (cm)"
          name=""
          value={estatura}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let toNumber =  Number.parseInt(e.target.value)
              isNaN(toNumber)? setEstatura(0):setEstatura(Number.parseInt(e.target.value));
          }}
        />
        <Field type={"text"} value={peso} labelText="Peso (lb)" name="" 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let toNumber =  Number.parseInt(e.target.value)
            isNaN(toNumber)? setPeso(0):setPeso(Number.parseInt(e.target.value));
        }}
        />
        <Field type={"text"} value={edad} labelText="Edad" name="" 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let toNumber =  Number.parseInt(e.target.value)
            isNaN(toNumber)? setEdad(0):setEdad(Number.parseInt(e.target.value));
        }} />

        <ActionField align="center">
        <PrimaryButton style={{backgroundColor: "#006400", marginRight:"1rem"}} className="" onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
          handleCalcular()


        }}>Calcular IMC</PrimaryButton>
        <Button style={{backgroundColor: "#4682b4", color: "#FFF"}} className="" onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
        {
          setVisibleInfo(!visibleInfo)
        }} >Desplegar Info</Button>
        </ActionField>
        
      
      {visibleIMC && <Field labelText="Resultado" name="Resultado" readOnly={true} value={IMC} />}
      

      </Card>
      {visibleInfo &&   
      <Card title="Tabla de pesos ideales"  >
      <table
        id="TableKey"
        border={0}
        width="100%"
      >
        <tbody>
          <tr>
            <td >
              <strong>Composición corporal</strong>
            </td>
            <td >
              <strong>Índice de masa corporal (IMC)</strong>
            </td>
          </tr>
          <tr>
            <td >Peso inferior al normal</td>
            <td >Menos de 18.5</td>
          </tr>
          <tr>
            <td >Normal</td>
            <td >18.5 – 24.9</td>
          </tr>
          <tr>
            <td >Peso superior al normal</td>
            <td >25.0 – 29.9</td>
          </tr>
          <tr>
            <td >Obesidad</td>
            <td >Más de 30.0</td>
          </tr>
        </tbody>
      </table>
      </Card>
      }
    
    </Page>
  );
};
export default HomeUX;
