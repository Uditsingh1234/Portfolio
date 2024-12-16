import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, message, Modal } from 'antd';
import { HideLoading, ShowLoading, ReloadData } from '../../redux/rootSlice';
import axios from 'axios';
<<<<<<< HEAD
// import { set } from 'mongoose';
=======
>>>>>>> 281f5c30d1661b30fb4a359282c01ae8033f2f85

function Experiences() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { experiences } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.put(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/update-experience`, {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/add-experience`, values);
            }

            dispatch(HideLoading());

            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());

            // Use DELETE method and pass _id in the data object
            const response = await axios.delete(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/delete-experience`, {
                data: { _id: item._id } // The _id is passed here
            });

            dispatch(HideLoading());

            if (response.data.success) {
                message.success(response.data.message);
                dispatch(ReloadData(true));
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
            <div className='flex justify-end'>
                <button className="bg-primary px-5 py-2 text-white" onClick={() => {
                    setSelectedItemForEdit(null);
                    setShowAddEditModal(true);
                }}>Add Experience</button>
            </div>

            <div className="grid grid-cols-4 gap-5 sm:grid-cols-1">
                {experiences.map((experience, index) => (
                    <div key={index} className='shadow border-2 p-5 border-gray-400 flex flex-col gap-3'>
                        <h1 className='text-primary text-xl font-bold'>{experience.period}</h1>
                        <hr />
                        <h1>Company: {experience.company}</h1>
                        <h1>Role: {experience.title}</h1>
                        <h1>{experience.description}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button className='bg-red-500 text-white px-5 py-2' onClick={() => {
                                onDelete(experience);

                            }}>Delete</button>
                            <button className='bg-primary text-white px-5 py-2' onClick={() => {
                                setSelectedItemForEdit(experience);
                                setShowAddEditModal(true);
                                setType("edit");
                            }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>

            {
                (type === "add" || selectedItemForEdit) && (
                    <Modal
                        visible={showAddEditModal}
                        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                        footer={null}
                        onCancel={() => {
                            setShowAddEditModal(false)
                            setSelectedItemForEdit(null);
                        }}
                    >
                        <Form
                            layout='vertical'
                            onFinish={onFinish}
                            initialValues={selectedItemForEdit || {}} // Ensuring initial values are set properly
                        >
                            <Form.Item name="period" label="Period">
                                <input type="text" placeholder="Period" />
                            </Form.Item>
                            <Form.Item name="company" label="Company">
                                <input type="text" placeholder="Company" />
                            </Form.Item>
                            <Form.Item name="title" label="Title">
                                <input type="text" placeholder="Title" />
                            </Form.Item>
                            <Form.Item name="description" label="Description">
                                <textarea placeholder="Description" />
                            </Form.Item>
                            <div className="flex justify-end">
                                <button className='border-primary text-primary px-5 py-2' onClick={() => {
                                    setShowAddEditModal(false);
                                    setSelectedItemForEdit(null);
                                }}>Cancel</button>
                                <button className='bg-primary text-white px-5 py-2'>
                                    {selectedItemForEdit ? "Update" : "Add"}
                                </button>
                            </div>
                        </Form>
                    </Modal>
                )
            }
        </div>
    );
}

export default Experiences;
