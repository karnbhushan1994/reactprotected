import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function PageAdd() {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-8 mx-auto grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Page to Website</h4>
                  <p className="card-description">
                    Mention your website contents
                  </p>
                  <form className="forms-sample">

                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Add Title</label>
                      <input type="text" className="form-control" placeholder="Page Title" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Content</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p></p>"
                        onReady={editor => {
                          // You can store the "editor" and use when it is needed.
                          // console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                          console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log('Focus.', editor);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="image-upload" className="form-label">Image upload</label>
                      <input className="form-control" type="file" id="image-upload" />
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
