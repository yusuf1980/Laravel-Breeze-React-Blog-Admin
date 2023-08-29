import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useForm, usePage } from '@inertiajs/react';
import Form from './Form';

const Edit = ({ auth, post, categories } ) => {
  const { data, setData, errors, processing, recentlySuccessful, put } = useForm({
    title: post.title,
    status: post.status,
    content: post.content,
    category_id: post.category_id
  })
  const submit = (e) => {
    e.preventDefault()

    put(route('posts.update', post.id));
  }
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <h1 className="app-page-title">Edit Post</h1>
      <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
        <div className="app-card-header p-3 border-bottom-0">
          <div className="row align-items-center gx-3">
            <div className="col-auto">
              <div className="app-icon-holder">
                <FontAwesomeIcon icon={faAdd} />
              </div>
            </div>
            <div className="col-auto">
              <h4 className="app-card-title">Update Post</h4>
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
          categories={categories}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit;
