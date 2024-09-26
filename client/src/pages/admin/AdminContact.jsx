import React from 'react';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const initialValues = portfolioData?.contacts || {};

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      // Sending _id from portfolioData.intros._id instead of portfolioData.intros.id
      const response = await axios.post(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/update-contact`, { 
        ...values, 
        _id: portfolioData.contacts._id // Change to _id
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
        initialValues={initialValues}
      >
        <Form.Item name="name" label="Name">
          <Input placeholder='Name' />
        </Form.Item>

        <Form.Item name="age" label="Age">
          <Input placeholder='Age' />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input placeholder='Email Id' />
        </Form.Item>

        <Form.Item name="mobile" label="Phone Number">
          <Input placeholder='Conatct Number' />
        </Form.Item>

        <Form.Item name="address" label="Address">
          <TextArea placeholder='Address' />
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

export default AdminContact;
