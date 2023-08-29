import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import { Link, useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function index({ auth, categories }) {
  const { delete: destroy } = useForm()

  function confirmDelete(e, itemId) {
    e.preventDefault()
    if (confirm('Are you sure to remove this!') === true) {
      destroy(route('categories.destroy', {
        category: itemId
      }))
    }
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <h1 className="app-page-title">Categories</h1>
      <div className="col-12 col-lg-12">
        <div className="app-card shadow-sm d-flex flex-column align-items-start">
          <div className="app-card-header p-3">
            <h4 className="app-card-title">All Categories</h4>
          </div>
          <div className="app-card-body px-4 w-100">
            <div className="button_add">
                <Link className='btn btn-success my-3' href={route('categories.create')}>
                    <FontAwesomeIcon icon={faAdd} />
                    New Category
                </Link>
            </div>
            <div className="table">
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>
                        <Link href={route('categories.edit', item.id)}>
                          Edit
                        </Link>
                        <Link className='px-2' onClick={(event) => confirmDelete(event, item.id)}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>

              <Pagination class="mt-6" links={categories.links} />

            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
