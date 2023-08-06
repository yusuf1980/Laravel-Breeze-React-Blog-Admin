import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ auth, mustVerifyEmail, status }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <div className="row gy-4">
        <UpdateProfileInformationForm
          mustVerifyEmail={mustVerifyEmail}
          status={status}
        />
        <UpdatePasswordForm />
        <DeleteUserForm />
      </div>
    </AuthenticatedLayout>
  );
}
