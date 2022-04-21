import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';

import { MContainer } from 'components/molecules/MContainer';
import { MBox } from 'components/molecules/MBox';
import { MInput } from 'components/molecules/forms/MInput';
import { Abutton } from 'components/atoms/AButton';
import { number } from 'yup';
import { createService } from 'store/servicioReducer';

const CreateServicio = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const schema = object({
    detalle: string().required('Detalle es requerido'),
    observacion: string().required('Observación es requerido'),
    monto: number().required('Monto es requerido'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    const payload = {
      ...data,
      idCorePersona: currentUser._id,
      idEstadoServicio: '6260d2ec5af517fd619899d8',
      estado: 'A',
      fechaCreacion: '2022-03-28T02:43:31.551Z',
      fechaModificacion: '2022-03-28T02:43:31.551Z',
      idUsuarioCreacion: 1,
      descripcion: '',
      idUsuarioModificacion: 1,
    };
    dispatch(createService(payload));

    reset();
  });

  return (
    <>
      <MContainer>
        <h2 className="text-2xl font-semibold">Desea Solicitar Servicio</h2>
      </MContainer>
      <MContainer>
        <MBox className="p-4 rounded-lg bg-white">
          <form onSubmit={onSubmit}>
            <MInput
              label="Detalle"
              name="detalle"
              register={register}
              error={errors.detalle?.message}
            />
            <MInput
              label="Observación"
              name="observacion"
              register={register}
              error={errors.observacion?.message}
            />
            <MInput
              label="Monto"
              name="monto"
              type="number"
              register={register}
              error={errors.monto?.message}
            />
            <Abutton type="submit">Crear solicitud</Abutton>
          </form>
        </MBox>
      </MContainer>
    </>
  );
};

export default CreateServicio;
