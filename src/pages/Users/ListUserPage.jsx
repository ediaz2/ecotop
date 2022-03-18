import { MBox } from 'components/molecules/MBox';
import { MContainer } from 'components/molecules/MContainer';
import { MTable } from 'components/molecules/MTable';
import { PageLayout } from 'layouts/PageLayout';
import { useEcotopFind } from 'hooks/useEcotopFind';

const ListUserPage = () => {
  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
  ];

  const [users, isLoading] = useEcotopFind('users');

  return (
    <PageLayout>
      <MContainer>
        <div className="flex items-center justify-between">
          <h3 className="text-primary font-semibold text-lg">
            Lista de usuarios
          </h3>
        </div>
      </MContainer>
      <MContainer>
        <MBox className="bg-white">
          <MTable isLoading={isLoading} columns={columns} data={users} />
        </MBox>
      </MContainer>
    </PageLayout>
  );
};

export default ListUserPage;
