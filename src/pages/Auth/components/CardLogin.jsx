import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';

import { MInput } from 'components/molecules/forms/MInput';
import { Abutton } from 'components/atoms/AButton';

export const CardLogin = ({ auth, setToggleAuth }) => {
  const schema = object({
    usuario: string().required('Usuario es requerido'),
    contrasenia: string().required('Contraseña es requerida'),
  }).required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    auth('auth/signin', data);
    reset();
  });

  return (
    <div className="p-4">
      <form onSubmit={onSubmit}>
        <MInput
          label="Usuario"
          name="usuario"
          register={register}
          error={errors.usuario?.message}
        />
        <MInput
          label="Contraseña"
          name="contrasenia"
          type="password"
          autoComplete="on"
          register={register}
          error={errors.contrasenia?.message}
        />
        <Abutton type="submit">Ingresar</Abutton>
      </form>
      <div className="mt-8">
        <p className="text-sm text-center">
          ¿Aún no tienes una cuenta?{' '}
          <span
            className="text-primary font-medium cursor-pointer"
            onClick={() => setToggleAuth(false)}>
            Registrarse
          </span>
        </p>
        <p className="text-primary text-xs text-center">
          Politica de Privacidad
        </p>
      </div>
    </div>
  );
};
