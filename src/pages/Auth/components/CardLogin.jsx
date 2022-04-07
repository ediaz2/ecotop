import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';

import { authLogin } from 'store/authReducer';

import { ALogo } from 'components/atoms/ALogo';
import { MInput } from 'components/molecules/forms/MInput';
import { Abutton } from 'components/atoms/AButton';

export const CardLogin = ({ setToggleAuth }) => {
  const dispatch = useDispatch();

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
    dispatch(authLogin(data));
    reset();
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <ALogo className="w-28 h-auto fill-secondary-200" />
      </div>
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
