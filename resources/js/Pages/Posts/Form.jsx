import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';




const Form = ({ data, setData, errors, processing, onSubmit }) => {
  const editorConfiguration = {
    // plugins: [Bold, Italic],
    // toolbar: ['bold', 'italic']
    toolbar: {
    //   items: ['bold'
    // //   'italic', 'heading', '|', 'numberedList',
    // //     'bulletedList', '|', 'imageUpload', 'mediaEmbed', 'blockQuote', 'link'
    //   ],
    },

  };

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
        <CKEditor
          editor={ClassicEditor}
          data={data.content}
        //   config={editorConfiguration}
        //   onReady={editor => {
        //   }}
          onChange={(event, editor) => {
            const data = editor.getData();

            setData('content', data)
          }}
        //   onBlur={(event, editor) => {
        //   }}
        //   onFocus={(event, editor) => {
        //   }}
        />
      </div>
      <button type="submit" disabled={processing} className="btn app-btn-primary mb-4" >Save</button>
    </form>
  )
}

export default Form;
