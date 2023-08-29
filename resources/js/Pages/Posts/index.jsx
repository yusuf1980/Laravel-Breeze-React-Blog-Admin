import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import { Link, useForm } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'

export default function index({ auth, posts }) {
  const { delete: destroy } = useForm()

  function confirmDelete(e, postId) {
    e.preventDefault()
    if (confirm('Are you sure to remove this!') === true) {
      destroy(route('posts.destroy', {
        post: postId
      }))
    }
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <h1 className="app-page-title">Posts</h1>
      <div className="col-12 col-lg-12">
        <div className="app-card shadow-sm d-flex flex-column align-items-start">
          <div className="app-card-header p-3">
            <h4 className="app-card-title">All Posts</h4>
          </div>
          <div className="app-card-body px-4 w-100">
            <div className="table">
              <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.data.map((post) => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.category.name}</td>
                      <td>{post.status}</td>
                      <td>{post.published_date}</td>
                      <td>
                        <Link href={route('posts.edit', post.id)}>
                          Edit
                        </Link>
                        <Link className='px-2' onClick={(event) => confirmDelete(event, post.id)}>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>

              <Pagination class="mt-6" links={posts.links} />

            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
