import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TopNav from '../Navigation/TopNav';
import "./BlogStylesheet.scss";



const CreateBlog = () => {

    // we can use here "blogs" state to store the blogs
    const [blogs, setBlogs] = useState('');

    // "text" state we can use to hold the current writing text
    const [text, settext] = useState('');

    console.log("Value: ",);
    console.log("text: ", text);

    return (
        <>
            <TopNav />
            <section className='create_blog'>
                {/* <TopNav /> */}

                {/* by using editor you can write and edit text */}
                {/* Whenever someone types something in the editor, update the blogs box with the new content, but */}{/* also remember the original content."  Think of it like keeping a copy of your first draft while you write. */}
                <Editor
                    apiKey='nv9cposjjuaanf00upxw3mb2i20k6k9zf04x83j9i16bjsyo'

                    onEditorChange={(newValue, editor) => {
                        setBlogs({ blogs, content: newValue });
                        settext(editor.getContent({ format: 'text' }));
                    }}

                    onInit={(evt, editor) => {
                        settext(editor.getContent({ format: 'text' }));
                    }}

                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount'
                    }}
                />

            </section>
        </>
    )
}



export default CreateBlog;