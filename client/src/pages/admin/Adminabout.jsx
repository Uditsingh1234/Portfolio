import React from 'react';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

function Adminabout() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const initialValues = portfolioData?.abouts || {};

  const onFinish = async (values) => {
    try {
      // Split the skills string into an array only if it's not empty
      const tempSkills = values.skills ? values.skills.split(" , ") : [];
      values.skills = tempSkills;

      dispatch(ShowLoading());
      const response = await axios.post("http://localhost:5000/api/portfolio/update-about", { 
        ...values, 
        _id: portfolioData.abouts._id 
      });
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout='vertical'
        initialValues={{
          ...portfolioData.abouts,
          skills: portfolioData.abouts.skills ? portfolioData.abouts.skills.join(" , ") : "",
        }}
      >
        <Form.Item name="lotiUrl" label="Lottie URL">
          <Input placeholder='Lottie URL' />
        </Form.Item>

        <Form.Item name="description1" label="First Description">
          <TextArea placeholder='First Description' />
        </Form.Item>

        <Form.Item name="description2" label="Second Description">
          <TextArea placeholder='Second Description' />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <TextArea placeholder='Skills (comma separated)' />
        </Form.Item>

        <div className="flex justify-end w-full">
          <button className='px-10 py-2 bg-primary text-white rounded-lg' type='submit'>
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Adminabout;
