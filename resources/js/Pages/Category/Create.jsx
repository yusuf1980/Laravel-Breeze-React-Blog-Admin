import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@inertiajs/react';
import Form from './Form';

const Create = ({ auth }) => {
  const { data, setData, errors, processing, recentlySuccessful, post } = useForm({
    name: ''
  })
  const submit = (e) => {
    e.preventDefault()

    post(route('categories.store'));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <h1 className="app-page-title">Create Category</h1>
      <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
        <div className="app-card-header p-3 border-bottom-0">
          <div className="row align-items-center gx-3">
            <div className="col-auto">
              <div className="app-icon-holder">
                <FontAwesomeIcon icon={faAdd} />
              </div>
            </div>
            <div className="col-auto">
              <h4 className="app-card-title">Create New Category</h4>
            </div>
          </div>
        </div>
        <div className="app-card-body px-4 w-100">
          <Form
          data={data}
          setData={setData}
          errors={errors}
          processing={processing}
          onSubmit={submit}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Create;
