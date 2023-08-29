import ReactQuill, { Quill } from 'react-quill';

const Form = ({ data, setData, errors, processing, onSubmit, categories }) => {
    return (
        <form onSubmit={onSubmit} className='settings-form'>
            <div className="item py-3">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    id='title'
                    required
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    autoComplete="title"
                />
                <div className="invalid-feedback">
                    {errors.title}
                </div>
            </div>
            <div className="item py-3">
                <label htmlFor="status">Status</label>
                <select
                    id='status'
                    className="form-select"
                    aria-label="Default select example"
                    name='status'
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                >
                    <option value="published">Publish</option>
                    <option value="draft">Draft</option>
                </select>
            </div>
            <div className="item py-3">
                <label htmlFor="category_id">Category</label>
                <select
                    id='category_id'
                    className="form-select"
                    name='category_id'
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                >
                    {categories.map((item, key) => (
                        <option
                            value={item.id}
                            key={key}
                            selected={item.name==data.category_id}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="item py-3">
                <ReactQuill
                    theme="snow"
                    value={data.content}
                    onChange={(e) => setData('content', e)}
                    modules={{
                        syntax: true,              // Include syntax module
                        toolbar: [
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            ['bold', 'italic'],
                            ['link', 'image'],
                            ['blockquote', 'code-block'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                            [{ 'font': [] }],
                            [{ 'align': [] }],
                        ]  // Include button in toolbar
                    }}
                    placeholder='Type your text here'
                //   languages={['javascript', 'php']}
                />
                {/* <div className='ql-snow'>
                    <div className="ql-editor " dangerouslySetInnerHTML={{
                        __html: data.content
                    }}>

                    </div>
                </div> */}
            </div>
            <button type="submit" disabled={processing} className="btn app-btn-primary mb-4" >Save</button>
        </form>
    )
}

export default Form;
