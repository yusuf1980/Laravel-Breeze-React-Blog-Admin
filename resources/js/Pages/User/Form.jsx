const Form = ({ data, setData, errors, processing, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} className='settings-form'>
            <div className="row">
                <div className="col-sm-6">
                    <div className="item py-3">
                        <label htmlFor="name">Name</label>
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
                </div>
                <div className="col-sm-6">
                    <div className="item py-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            id='email'
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="item py-3">
                        <label htmlFor="name">Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            id='password'
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="item py-3">
                        <label htmlFor="password_confirmation">Password Confirmation</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password_confirmation ? "is-invalid" : ""}`}
                            id='password_confirmation'
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" disabled={processing} className="btn app-btn-primary mb-4" >Save</button>
        </form>
    )
}

export default Form;
