import React, {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: 'textarea',
          resize: false,
          width: 800,
          toolbar_sticky: true,
          menubar: true,
          branding: false,
          icons: 'material',
          autosave_restore_when_empty: true,
          autoresize_bottom_margin: 400,
          statusbar: false,
          autoresize_overflow_padding: 50,

          plugins: [
            'advlist',
            'autolink',
            'autosave',
            'lists',
            'link',
            'image',
            'charmap',
            'powerpaste',
            'casechange',
            'lists advlist',
            'emoticons',
            'autoresize',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'code',
            'codesample',
            'directionality',
            'media',
            'table',
            'preview',
            'help',
            'wordcount',
            'insertdatetime',
            'nonbreaking',
            'pagebreak',
            'quickbars',
            'save',
            'template',
            'visualchars',
            'help',
          ],
          content_css: 'tinymce-editor',
          toolbar:
            'undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize |' +
            'bold italic underline forecolor backcolor | link image addcomment showcomments  |' +
            'alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent |' +
            'removeformat | help',
          content_style: `
                /* We remove the default selected outline because it doesn't follow the
                 * border radius and reintroduce it as a box-shadow.
                 */
                .mce-content-body conditional-block[contenteditable=false][data-mce-selected] {
                    outline: none;
                    cursor: default;
                    box-shadow: 0 0 0 3px #b4d7ff;
                }
                .mce-content-body *[contentEditable=false] *[contentEditable=true]:focus {
                    outline: none;
                }
                .mce-content-body *[contentEditable=false] *[contentEditable=true]:hover {
                    outline: none;
                }
                body {
                    max-width: 900px;
                    width: 100%;
                    margin: 0px 0px 0px 0px;
                }
                a {
                    color: #2980b9;
                }
                conditional-block {
                    margin: 1rem -6px;
                }
            `,
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
