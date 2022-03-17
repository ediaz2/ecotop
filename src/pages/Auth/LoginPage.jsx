import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEcotopApi } from 'hooks/useEcotopApi';

import { AuthLayout } from 'layouts/AuthLayout';
import { OSliderLogin } from 'components/organisms/OSliderLogin';
import { CardLogin } from 'pages/Auth/components/CardLogin';
import { CardRegister } from 'pages/Auth/components/CardRegister';
import { useCurrentUser } from 'hooks/useCurrentUser';

const LoginPage = () => {
  const navigate = useNavigate();

  const [data, { auth }] = useEcotopApi();

  const [toggleAuth, setToggleAuth] = useState(true);
  const { setCurrentUser } = useCurrentUser();

  useEffect(() => {
    setCurrentUser(data);
    if (data) {
      localStorage.setItem('token', data.token);
      navigate('/users');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, navigate]);

  return (
    <AuthLayout>
      <div className="w-[60rem] bg-base p-2 rounded-2xl">
        <div className="grid grid-cols-[3fr_2fr]">
          <OSliderLogin />
          {toggleAuth ? (
            <CardLogin setToggleAuth={setToggleAuth} auth={auth} />
          ) : (
            <CardRegister setToggleAuth={setToggleAuth} auth={auth} />
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
