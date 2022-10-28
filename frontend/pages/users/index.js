import dashboard from '../../styles/employees/Dashboard.module.css';
import UserService from '../api/UserService';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const usersList = () => {
    const [userData, setUserData] = useState([]);
    const router = useRouter();

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
            router.push({pathname: url, query: `id=${key}`});
        }
    }

    return (
        <div className={dashboard.body}>
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
                                        <i className="bi bi-trash3-fill"  id={dashboard['trash-icon']} title="Delete User"></i>
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
