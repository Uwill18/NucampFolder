import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody,FormGroup,Label} from "reactstrap";
import { Formik, Field,Form,ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm"; //task3
//import { Formik, Field,Form,ErrorMessage} from "formik";//task3
import { useDispatch } from "react-redux";
import { postComment } from "./commentsSlice";


const CommentForm =({campsiteId})=>{

    const [modalOpen, setModalOpen] = useState(false);

    // const toggleModal = () => {
    //   setModalOpen(!modalOpen);
    // }
   const dispatch = useDispatch();
   const handleSubmit =(values)=>{
    const comment =   {
        campsiteId: parseInt(campsiteId),
        rating: values.rating,
        author: values.author,
        text: values.commentText,
        date: new Date(Date.now()).toISOString()
    };
    console.log(comment);
    dispatch(postComment(comment));
    setModalOpen(false);
   }

    return(
        <>
        <Button outline='true' onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={() => setModalOpen(false)}>
                Add Comment
            </ModalHeader>
            <ModalBody>
<Formik initialValues={{rating: 'undefined',
author:'', 
commentText:''}}
onSubmit={handleSubmit}
validate={validateCommentForm}
>
<Form>
<FormGroup>
<Label htmlFor='rating'>
Rating
</Label>
</FormGroup>
	<Field name='rating'
    as='select'
    className='form-control'>
    <option>Select...</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    </Field>
    <ErrorMessage name='rating'>
    {(msg) => <p className='text-danger'>{msg}</p>}
    </ErrorMessage>

<FormGroup>
<Label htmlFor='author'>
Your Name
</Label>
</FormGroup>
<Field name='author'
    placeholder='Your Name'
    className='form-control'/>
<ErrorMessage name='author'>
     {(msg) => <p className='text-danger'>{msg}</p>}
</ErrorMessage>

<FormGroup>
<Label htmlFor='commentText'>
Comment
</Label>
</FormGroup>
    <Field name='commentText'
    as='textarea'
    rows='12'
    className='form-control'/>
			<Button type='submit' color='primary'>
                                Submit
            </Button>

</Form>
</Formik>
</ModalBody>
        </Modal>
        </Button>
        </>

    );

}

export default CommentForm;


//https://stackoverflow.com/questions/63911051/react-modal-does-not-open-with-usestate-hook