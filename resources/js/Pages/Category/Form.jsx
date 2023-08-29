const Form = ({ data, setData, errors, processing, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} className='settings-form'>
      <div className="item py-3">
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          id='name'
          required
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          autoComplete="name"
          autoFocus
        />
        <div className="invalid-feedback">
          {errors.name}
        </div>
      </div>


      <button type="submit" disabled={processing} className="btn app-btn-primary mb-4" >Save</button>
    </form>
  )
}

export default Form;
