import dashboard from '../../styles/employees/Dashboard.module.css';
import UserService from '../api/UserService';
import DeleteDialog from './delete-dialog';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '../../helpers/ToasterService';

const usersList = () => {
    const [userData, setUserData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(null);
    const router = useRouter();
    const { showSuccess, showError } = useToast();

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await UserService.list();
            if (response.meta.status) {
                setUserData(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const moveToAddEditPage = key => {
        const url = key === 'add' ? `/users/${key}` : `/users/edit/`;
        if (key === 'add') {
            router.push(url);
        } else {
            router.push({ pathname: url, query: `id=${key}` });
        }
    }

    const openDeleteDialog = index => {
        setSelectedIndex(index);
        setShowDeleteDialog(true);
    }

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
        setSelectedIndex(null);
    }

    const confirmDeleteUser = () => {
        deleteUser();
    }

    const deleteUser = async () => {
        try {
            const response = await UserService.delete(userData[selectedIndex]['_id']);
            if (response.meta.status) {
                showSuccess(response.meta.message);
            } else {
                showError(response.meta.message);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setShowDeleteDialog(false);
            setSelectedIndex(null);
            getUserData();
        }
    }

    return (
        <div className={dashboard.body}>

            {
                showDeleteDialog && (
                    <DeleteDialog
                        userName={userData[selectedIndex]['name']}
                        closeDeleteDialog={() => closeDeleteDialog()}
                        confirmDeleteUser={() => confirmDeleteUser()}
                    />
                )
            }

            <div className={dashboard.container}>
                <button id={dashboard['add-btn']} className="btn btn-primary" onClick={() => moveToAddEditPage('add')}>Add User</button>

                <table id={dashboard['table']}>
                    <thead id={dashboard['thead']}>
                        <tr className={dashboard['tr']}>
                            <th className={dashboard['th']}>Name</th>
                            <th className={dashboard['th']}>Email</th>
                            <th className={dashboard['th']}>Action</th>
                        </tr>
                    </thead>

                    <tbody id={dashboard['tbody']}>
                        {
                            userData.map((user, index) => (
                                <tr className={dashboard['tr']} key={index}>
                                    <td className={dashboard['td']}>{user.name}</td>
                                    <td className={dashboard['td']}>{user.email}</td>
                                    <td className={`${dashboard['td']} ${dashboard['action-cell']}`}>
                                        <i
                                            className="bi bi-pencil"
                                            id={dashboard['edit-icon']}
                                            title="Edit User"
                                            onClick={() => moveToAddEditPage(user._id)}
                                        ></i>

                                        <i
                                            className="bi bi-trash3-fill"
                                            id={dashboard['trash-icon']}
                                            title="Delete User"
                                            onClick={() => openDeleteDialog(index)}
                                        ></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default usersList;
